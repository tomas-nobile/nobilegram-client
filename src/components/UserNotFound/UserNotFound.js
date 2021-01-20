import React from 'react'
import {Link} from 'react-router-dom'
import './UserNotFound.scss'


export default function UserNotFound() {
    return (
        <div className="user-not-found">
            <p>Usuario no encontrado</p>
            <p>Es posible que el enlace que ha seguido sea incorrecto o que se haya eliminado</p>
            <Link href="/">Volver a la Home</Link>
        </div>
    )
}
