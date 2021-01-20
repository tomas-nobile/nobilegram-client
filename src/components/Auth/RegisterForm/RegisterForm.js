import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import *as Yup from 'yup';
import {toast} from 'react-toastify'
import {useMutation} from '@apollo/client';
import {REGISTER} from '../../../gql/user'
import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setShowLogin } = props;
  const [register]= useMutation(REGISTER);

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object({
        name:Yup.string()
        .required('El nombre es obligatorio'),
        username: Yup.string()
        .matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacio")
        .required('El usuario es obligatorio'),
        email: Yup.string()
        .email('El email no es valido')
        .required('El email es obligatorio'),
        password: Yup.string()
        .required('La contraseña es obligatoria')
        .oneOf([Yup.ref('repeatPassword')],'Las contraseñas no son iguales'),
        repeatPassword: Yup.string()
        .required('La contraseña es obligatoria')
        .oneOf([Yup.ref("password")],'Las contraseñas no son iguales')
    }),
    onSubmit: async(formData) => {
      try {
        const newUser= formData;
        delete newUser.repeatPassword

        const result = await register({
          variables:{
            input:newUser,
          }
        })
        toast.success('Usuario registrado correctamente')
      } catch (error) {
        toast.error(error.message)
      }
    },
  });

  return (
    <>
      <h2 className="register-form-title">
        Registrate para ver fotos y videos de tus amigos
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellido"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        ></Form.Input>
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={formik.handleChange}
          error={formik.errors.username && true}

        ></Form.Input>
        <Form.Input
          type="text"
          placeholder="Correo electronico"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        ></Form.Input>
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        ></Form.Input>
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword && true}
        ></Form.Input>
        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

function initialValue() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
