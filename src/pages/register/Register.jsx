// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import './register.scss';
// import fileUpload from '../../services/fileUpload';
// import Swal from 'sweetalert2';
// import { createAnUser } from '../../services/userServices';

// const Register = () => {
//     const { dataForm, handleChangeInputs } = useForm();
//     const navigate = useNavigate();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         const urlImage = await fileUpload(dataForm.avatar[0]);
//         if (urlImage) {
//             const newUser = {
//                 ...dataForm,
//                 avatar: urlImage
//             }
//             const response = await createAnUser(newUser);
//             if (response) {
//                 Swal.fire('Excelente!', 'Has creado exitosamente una cuenta', 'success').then(() => {
//                     navigate('/login');
//                 })
//             } else {
//                 const message = response === false ? 'Ya existe un usuario con este email' : 'Ha ocurrido un error en la creación de tu cuenta'
//                 Swal.fire('Oops!', message, 'error');
//             }

//         } else {
//             Swal.fire('Oops', 'Ha ocurrido un error en el cargue de la imagen', 'error');
//         }

//     }

//     return (
//         <main className='register'>
//             <h1>Crear una cuenta</h1>
//             <form onSubmit={handleRegister}>
//                 <label>Ingrese su nombre:</label>
//                 <input type="text" name='name' placeholder='Nombre Apellido' onChange={handleChangeInputs} />
//                 <label>Ingrese su correo electrónico:</label>
//                 <input type="text" name='email' placeholder='example@email.com' onChange={handleChangeInputs} />
//                 <label>Ingrese su contraseña:</label>
//                 <input type='password' name='password' placeholder='Contraseña' onChange={handleChangeInputs} />
//                 <label>Confirme su contraseña:</label>
//                 <input type='password' name='repeatPassword' placeholder='Contraseña' onChange={handleChangeInputs} />
//                 <label>Carge su imagen:</label>
//                 <input type='file' name='avatar' onChange={handleChangeInputs} />
//                 <button type='submit'>Crear cuenta</button>
//             </form>
//             <span>¿Ya tienes una cuenta? <Link to={'/login'}>Inicia sesión</Link></span>
//         </main>
//     )
// }

// export default Register

import React, { useState, useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Importa Yup para las validaciones
import '../login/Login.scss'
import useForm from '../../hooks/useForm'
import { AppContext } from '../../router/Router';
import { getUserByEmailAndPassword } from '../../services/userServices';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createAnUser } from '../../services/userServices';

function Login() {

  const {dataForm, handleChangeInputs} = useForm();
  const {userLogged: {userLoggedDispatch}} = useContext(AppContext)
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      id: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be at least 3 characters').required('Required field'),
      email: Yup.string().min(4, 'Must be at least 4 characters').email('You should use an email format').required('Required field'),
      password: Yup.string().required('Required field'),
    }),
    onSubmit: (values) => {
      handleLogin();
    },
    onChange: (e) => {
      console.log(e);
      handleChangeInputs(e);
    },
    enableReinitialize: true
  });

  const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            ...dataForm
        }
        const response = await createAnUser(newUser);
        if (response) {
            Swal.fire('Excelente!', 'Has creado exitosamente una cuenta', 'success').then(() => {
                navigate('/login');
            })
        } else {
            const message = response === false ? 'Ya existe un usuario con este email' : 'Ha ocurrido un error en la creación de tu cuenta'
            Swal.fire('Oops!', message, 'error');
        }

    }

  const onChangeFunctions = (e) => {
    formik.handleChange(e);
    handleChangeInputs(e);
  }

  return (
    <>
      <main>
        <section>
          <figure className='fig-travel'>
            <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698638269/Historia_de_instagram_de_viajes_vuelos_agencia_minimalista_1_f3rcub.png"/>
          </figure>
        </section>
        <form onSubmit={handleRegister}>
          <div className="container-form">
              <figure><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698629336/pngtree-travel-flight-logo-world-globe-vector-image_331555_b7ygpk.jpg"/></figure>
              <h4 className='login-title'>Sign Up</h4>
              <div>
                  <h6>Full name</h6>
                  <div className={`form-control ${formik.values.name == '' ? '' : formik.errors.name ? 'is-invalid' : 'is-valid'}`}>
                      <input type='hidden' value={formik.values.id}/>
                      <input
                          type='text'
                          name="name"
                          onChange={(e) => onChangeFunctions(e)}
                          value={formik.values.name}
                          placeholder='Input name'
                      />
                  </div>
                  {formik.errors.name ? <span className='error-span'>{formik.errors.name}</span> : ''}
              </div>
              <div>
                  <h6>Email</h6>
                  <div className={`form-control ${formik.values.email == '' ? '' : formik.errors.email ? 'is-invalid' : 'is-valid'}`}>
                      <input type='hidden' value={formik.values.id}/>
                      <input
                          type='text'
                          name="email"
                          onChange={(e) => onChangeFunctions(e)}
                          value={formik.values.email}
                          placeholder='Input email'
                      />
                  </div>
                  {formik.errors.email ? <span className='error-span'>{formik.errors.email}</span> : ''}
              </div>
              <div>
                  <h6>Password</h6>
                  <div className={`form-control ${formik.values.password == '' ? '' : formik.errors.password ? 'is-invalid' : 'is-valid'}`}>
                      <input
                          type='password'
                          name="password"
                          onChange={(e) => onChangeFunctions(e)}
                          value={formik.values.password}
                          placeholder='Input password'
                      />
                  </div>
                  {formik.errors.password ? <span className='error-span'>{formik.errors.password}</span> : ''}
              </div>
            <button type='submit'>Submit</button>
          </div>
          {/* <button type="submit">{isEditing ? "Editar" : "Crear"}</button> */}
        </form>
      </main>
    </>
  )
}

export default Login;