import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import './style.scss';
import * as Yup from 'yup'; // Importa Yup para las validaciones
import Form from 'react-bootstrap/Form';

function Passenger() {
  const [usersList, setUsersList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  /* useEffect(() => {
    // Llamar función de obtener usuarios
    getUsers();
  }, []);

  // Esto se podría hacer con un useCallback
  const getUsers = async () => {
    // Realiza la llamada a la API para obtener usuarios
    try {
      const response = await api.get("/users");
      setUsersList(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios', error);
    }
  } */

  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      title: '',
      birthday: '',
      nationality:'',
      passportNumber: '',
      countryOfIssue: '',
      passportExpireDate: '',
      name2:'',
      surname2:'',
      email:'',
      phoneNumber:'',
      title2:'',
      id: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Debes ingresar al menos 3 caracteres').required('Campo obligatorio'),
      surname: Yup.string().min(4, 'Debes ingresar al menos 3 caracteres').required('Campo obligatorio'),
      title: Yup.string().required,
      birthday: Yup.date().required('Campo obligatorio'),
      nationality: Yup.string().required,
      passportNumber: Yup.string().min(3, 'Debes ingresar al menos 3 caracteres').required('Campo obligatorio'),
      countryOfIssue:Yup.string().required,
      passportExpireDate: Yup.date().required('Campo obligatorio'),
      name2: Yup.string().min(3, 'Debes ingresar al menos 3 caracteres').required('Campo obligatorio'),
      surname2: Yup.string().min(4, 'Debes ingresar al menos 3 caracteres').required('Campo obligatorio'),
      email: Yup.string().email('Ingresa una dirección de correo electrónico válida').required('Campo obligatorio'),
      phoneNumber: Yup.number().required(),
      title2:Yup.string().required
    }),
    onSubmit: (values) => {
      isEditing ? editUser(values) : existsUser(values);
    },
    enableReinitialize: true
  });

  const editUser = async (values) => {
    const obj = {
      id: values.id,
      name: values.name,
      email: values.email
    };

    // Realiza la llamada a la API para editar el usuario
    try {
      const response = await api.put('/users/${obj.id}', obj);
      alert("Usuario actualizado correctamente");
      getUsers();
      formik.resetForm();
      setIsEditing(false);
    } catch (error) {
      console.error('Error al editar usuario', error);
    }
  }

  const createUser = async (values) => {
    const objUser = {
      name: values.name,
      email: values.email
    };

    // Realiza la llamada a la API para crear un nuevo usuario
    try {
      const response = await api.post("/users", objUser);
      formik.resetForm();
      if (response) {
        alert("Usuario creado exitosamente");
        getUsers();
      }
    } catch (error) {
      console.error('Error al crear usuario', error);
    }
  }

  const existsUser = async (values) => {
    try {
      const response = await api.get('/users?email=' + values.email);
      if (response.data.length === 0) {
        createUser(values);
      } else {
        alert("Usuario ya existe");
      }
    } catch (e) {
      createUser(values);
    }
    // Consultar JSON Server para ver si existe ese email
  }

  const handleEdit = (user) => {
    setIsEditing(true);
    formik.setFieldValue("id", user.id);
    formik.setFieldValue("name", user.name);
    formik.setFieldValue("email", user.email);
  }

  const handleDelete = async (id) => {
    // Realiza la llamada a la API para eliminar un usuario
    try {
      await api.delete("/users/" + id);
      alert("Usuario eliminado");
      getUsers();
    } catch (error) {
      console.error('Error al eliminar usuario', error);
    }
  }


  function InputSelect() {
    return (
      <Form.Select className='title-select' aria-label="Default select example">
        <option value="">Select</option>
        <option value="Programador">Programador</option>
        <option value="Diseñador">Diseñador</option>
        <option value="Periodista">Periodista</option>
        <option value="Biotecnólogo">Biotecnólogo</option>
      </Form.Select>
    );
  }
  
  function InputSelectNacionality() {
    return (
      <Form.Select aria-label="Default select example">
        <option value="">Select</option>
        <option value="Colombiano">Colombiano</option>
        <option value="Francés">Francés</option>
        <option value="Inglés">Inglés</option>
        <option value="Argentino">Argentino</option>
      </Form.Select>
    );
  }
  
  function SelectCountryOfIssue() {
    return (
      <Form.Select className='title-select' aria-label="Default select example">
        <option value="">Select</option>
        <option value="Colombia">Colombia</option>
        <option value="Italia">Italia</option>
        <option value="Chile">Chile</option>
        <option value="Portugal">Portugal</option>
      </Form.Select>
    );
  }
  
  function SelectTitle2() {
    return (
      <Form.Select className='title-select' aria-label="Default select example">
        <option value="">Select</option>
        <option value="Programador">Programador</option>
        <option value="Diseñador">Diseñador</option>
        <option value="Periodista">Periodista</option>
        <option value="Biotecnólogo">Biotecnólogo</option>
      </Form.Select>
    );
  }
  


  return (
    <>
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h3><img src='https://res.cloudinary.com/dpc1vrbek/image/upload/v1698208468/Frame_3_nplbxq.png'/> Passenger Details</h3>
        <h5><span>Name as on ID card/passport without title and punctuation</span></h5>
        <div className="complete-name">
            <div>
                {/* <label htmlFor="name">Name</label> */}
                <h5>Name</h5>
                <div className={`form-control ${formik.values.name == '' ? '' : formik.errors.name ? 'is-invalid' : 'is-valid'}`}>
                    <input type='hidden' value={formik.values.id}/>
                    <input
                        type='text'
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.name}</span> : ''}
            </div>
            <div>
                {/* <label htmlFor="text">Surname</label> */}
                <h5>Surname</h5>
                <div className={`form-control ${formik.values.surname == '' ? '' : formik.errors.surname ? 'is-invalid' : 'is-valid'}`}>
                    <input
                        type='text'
                        name="surname"
                        onChange={formik.handleChange}
                        value={formik.values.surname}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.surname}</span> : ''}
            </div>
        </div>
        <div className='data-containers'>
        <div>
                <h5>Title</h5>
                <div className={`form-control ${formik.values.title == '' ? '' : formik.errors.title ? 'is-invalid' : 'is-valid'}`}>
                   {<InputSelect/>}
                </div>
                {formik.errors.name ? <span>{formik.errors.title}</span> : ''}
            </div>
            <div>
                <h5>Birthday</h5>
                <div className={`form-control birthday-input ${formik.values.birthday == '' ? '' : formik.errors.birthday ? 'is-invalid' : 'is-valid'}`}>
                    <input
                        type='date'
                        name="birthday"
                        onChange={formik.handleChange}
                        value={formik.values.birthday}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.birthday}</span> : ''}
            </div>
            <div>
                <h5>Nationality</h5>
                <div className={`form-control ${formik.values.nationality == '' ? '' : formik.errors.nationality ? 'is-invalid' : 'is-valid'}`}>
                {<InputSelectNacionality/>}
                </div>
                {formik.errors.name ? <span>{formik.errors.nationality}</span> : ''}
            </div>
        </div>
        <h3><img src='https://res.cloudinary.com/dpc1vrbek/image/upload/v1698629760/Frame_6_yjpir6.png'/>  Identity</h3>
        <div className='container-text'>
          <h6>Passport valid for at least 6 months from departure date is required for international travel or transit abroad.
          <br />
          <br />
          Make sure that the passenger's name is exactly as written in the government issued ID/Passport/Driving License. <br />
          Avoid any mistake, because some airlines don't allow name corrections after booking.</h6>
        </div>
        <div>
        <div className='passport-container'>
                {/* <label htmlFor="name">Name</label> */}
                <h5>Passport number</h5>
                <div className={`form-control ${formik.values.passportNumber == '' ? '' : formik.errors.passportNumber ? 'is-invalid' : 'is-valid'}`}>
                    <input type='hidden' value={formik.values.id}/>
                    <input
                        type='text'
                        name="passportNumber"
                        onChange={formik.handleChange}
                        value={formik.values.passportNumber}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.passportNumber}</span> : ''}
            </div>
            <div className='identity-container'>
            <div>
                <h5>Country of Issue</h5>
                <div className={`form-control ${formik.values.countryOfIssue == '' ? '' : formik.errors.countryOfIssue ? 'is-invalid' : 'is-valid'}`}>
                   {<SelectCountryOfIssue/>}
                </div>
                {formik.errors.name ? <span>{formik.errors.countryOfIssue}</span> : ''}
            </div>
            <div>
                <h5>Passport Expiry Date</h5>
                <div className={`form-control passportExpireDate-input ${formik.values.passportExpireDate == '' ? '' : formik.errors.passportExpireDate ? 'is-invalid' : 'is-valid'}`}>
                    <input
                        type='date'
                        name="passportExpireDate"
                        onChange={formik.handleChange}
                        value={formik.values.passportExpireDate}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.passportExpireDate}</span> : ''}
            </div>
            </div>
        </div>
        <h3><img src='https://res.cloudinary.com/dpc1vrbek/image/upload/v1698647021/Frame_7_t6irb2.png'/>  Contact Details</h3>
        <div className="complete-name">
            <div>
                {/* <label htmlFor="name">Name</label> */}
                <h5>Name</h5>
                <div className={`form-control ${formik.values.name2 == '' ? '' : formik.errors.name2 ? 'is-invalid' : 'is-valid'}`}>
                    <input type='hidden' value={formik.values.id}/>
                    <input
                        type='text'
                        name="name2"
                        onChange={formik.handleChange}
                        value={formik.values.name2}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.name2}</span> : ''}
            </div>
            <div>
                {/* <label htmlFor="text">Surname</label> */}
                <h5>Surname</h5>
                <div className={`form-control ${formik.values.surname2 == '' ? '' : formik.errors.surname2 ? 'is-invalid' : 'is-valid'}`}>
                    <input
                        type='text'
                        name="surname2"
                        onChange={formik.handleChange}
                        value={formik.values.surname2}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.surname2}</span> : ''}
            </div>
        </div>
        <div className='data-containers'>
        <div>
                <h5>Title</h5>
                <div className={`form-control ${formik.values.title2 == '' ? '' : formik.errors.title2 ? 'is-invalid' : 'is-valid'}`}>
                   {<SelectTitle2/>}
                </div>
                {formik.errors.name ? <span>{formik.errors.title2}</span> : ''}
            </div>
            <div>
                {/* <label htmlFor="name">Name</label> */}
                <h5>Email</h5>
                <div className={`form-control birthday-input ${formik.values.email == '' ? '' : formik.errors.email ? 'is-invalid' : 'is-valid'}`}>
                    <input type='hidden' value={formik.values.id}/>
                    <input
                        type='email'
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.email}</span> : ''}
            </div>
            <div>
                {/* <label htmlFor="name">Name</label> */}
                <h5>Phone number</h5>
                <div className={`form-control birthday-input ${formik.values.phoneNumber == '' ? '' : formik.errors.phoneNumber ? 'is-invalid' : 'is-valid'}`}>
                    <input type='hidden' value={formik.values.id}/>
                    <input
                        type='text'
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        placeholder='Input text'
                    />
                </div>
                {formik.errors.name ? <span>{formik.errors.name2}</span> : ''}
            </div>

        </div>
        
        <button type="submit">{isEditing ? "Editar" : "Crear"}</button>
      </form>
      <div>
        {usersList?.map((item) => (
          <div key={`users-${item.id}`}>
            {item.id} - {item.name} - {item.email} 
            <button onClick={() => handleEdit(item)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Passenger;