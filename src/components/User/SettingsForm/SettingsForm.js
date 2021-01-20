import React from 'react'
import {Button} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom'
import {useApolloClient} from '@apollo/client'
import PasswordForm from '../PasswordForm'
import useAuth from '../../../hooks/useAuth'
import EmailForm from "../EmailForm";
import DescriptionForm  from "../DescriptionForm";
import SiteWebForm from '../SiteWebForm'
import './SettingsForm.scss'

export default function SettingsForm(props) {

    const {setShowModal, setTitleModal, setChildrenModal, getUser, refetch}= props;
    const history=useHistory();
    const client= useApolloClient();
    const {logout}=useAuth();

    const onChangePassword= ()=>{
        setTitleModal('Cambiar Contraseña')
        setChildrenModal(<PasswordForm logout={onLogout} />)
    }

    const onChangeEmail=()=>{
        setTitleModal('Cambiar email');
        setChildrenModal(<EmailForm 
            setShowModal={setShowModal} 
        currentEmail={getUser.email}
        refetch={refetch} />)
    }

    const onChangeDescription=()=>{
        setTitleModal('Actualizar tu biografia');
        setChildrenModal(<DescriptionForm 
            setShowModal={setShowModal} 
            currentDescription={getUser.description}
            refetch={refetch}
            />)
    }

    const onChangeSiteWeb=()=>{
        setTitleModal('Actualiza tu pagina web');
        setChildrenModal(<SiteWebForm 
            setShowModal={setShowModal} 
            currentSiteWeb={getUser.siteWeb}
            refetch={refetch}
            />)
    }

    const onLogout=()=>{
        client.clearStore();
        logout();
        history.push('/')
    }

    return (
        <div className='settings-form'>
            <Button onClick={onChangePassword}>Cambiar contraseñas</Button>
            <Button onClick={onChangeEmail}>Cambiar email</Button>
            <Button onClick={onChangeDescription}>Descripción</Button>
            <Button onClick={onChangeSiteWeb}>Sitio web</Button>
            <Button onClick={onLogout}>Cerrar sesión</Button>
            <Button onClick={()=>setShowModal(false)}>Cancelar</Button>
        </div>
    )
}
