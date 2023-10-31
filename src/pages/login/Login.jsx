import React, { useState, useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import './Login.scss'
import * as Yup from 'yup'; // Importa Yup para las validaciones
import useForm from '../../hooks/useForm'
import { AppContext } from '../../router/Router';
import { getUserByEmailAndPassword } from '../../services/userServices';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {

  const {dataForm, handleChangeInputs} = useForm();
  const {userLogged: {userLoggedDispatch}} = useContext(AppContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      id: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().min(4, 'Must be at least 4 characters').email('You should use an email format').required('Required field'),
      password: Yup.string().required('Required field')
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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (dataForm.email.trim() && dataForm.password.trim()) {
      const user = await getUserByEmailAndPassword(dataForm.email, dataForm.password);
      console.log(user);
      if (user) {
        Swal.fire(
          'Excelente!',
          'Has iniciado sesión exitosamente!',
          'success'
        )
        const action = {
          type: 'LOGIN',
          payload: {
            isAuthenticated: true,
            user: user
          }
        }
        userLoggedDispatch(action);
      }
      else {
        Swal.fire(
          'Oops!',
          'Por favor verifique sus credenciales!',
          'error'
        )
      }
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
        <form onSubmit={handleLogin}>
          <div className="container-form">
              <figure><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698629336/pngtree-travel-flight-logo-world-globe-vector-image_331555_b7ygpk.jpg"/></figure>
              <h2 className='login-title'>Sign In</h2>
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
              {/* <button type="submit">{isEditing ? "Editar" : "Crear"}</button> */}
              <span>Don't you have an account? <Link to={'/register'}>Register</Link></span>
          </div>
        </form>
      </main>
    </>
  )
}

export default Login;