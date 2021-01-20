import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from '../../components/Auth/LoginForm'
import nobilegram from "../../assets/png/nobilegramlogobyw.png";
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className="auth">
      <Image src={nobilegram} />
      <div className="container-form">
        {showLogin ? <LoginForm/> : <RegisterForm />}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tienes cuenta?
              <span onClick={() => setShowLogin(!showLogin)}> Registrate</span>
            </>
          ) : (
            <>
              ¿Tienes cuenta?
              <span onClick={() => setShowLogin(!showLogin)}>
                {" "}
                Inicia sesión
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
}
