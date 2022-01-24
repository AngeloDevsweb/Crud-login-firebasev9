import React, { useState } from 'react'
import Uno from '../images/1.jpg'
import Dos from '../images/2.jpg'
import Tres from '../images/3.jpg'
import '../App.css';


import firebaseApp from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(firebaseApp)

const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const handlerSubmit = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }

    return (
      <div className="row container p-4">
        <div className="col-md-8">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Uno} alt="" className='tamaño-imagen' />
              </div>
              <div className="carousel-item">
                <img src={Dos} alt="" className='tamaño-imagen'/>
              </div>

              <div className="carousel-item">
                <img src={Tres} alt="" className='tamaño-imagen' />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* esta es el div del formulario */}
        <div className="col-md-4">
          <div className=" mt-5 ms-5">
            <h1>{registrando ? "Registrate" : "Inicia sesión"}</h1>
            <form className="card card-body" onSubmit={handlerSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="ingresar email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="ingresa la contraseña"
                  id="password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {registrando ? "Registrate" : "Inicia sesión"}
              </button>
            </form>

            <div className="form-group">
              <button
                className="btn btn-secondary mt-4 form-control"
                onClick={() => setRegistrando(!registrando)}
              >
                {registrando
                  ? "Ya tienes cuenta? Inicia sesion"
                  : "no tienes cuenta? Registrate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login
