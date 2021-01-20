import React from 'react'
import {Form, Button} from "semantic-ui-react";
import { toast } from "react-toastify";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../../gql/user";
import './SiteWebForm.scss'


export default function DescriptionForm(props) {
    const {setShowModal,currentSiteWeb,refetch}=props;
    
    const [updateUser]= useMutation(UPDATE_USER);

    const formik= useFormik({
        initialValues:{
            siteWeb:currentSiteWeb || ''  
        },
        validationSchema:Yup.object({
            siteWeb: Yup.string().required()
        }),
        onSubmit: async(formData)=>{
            try {
                await updateUser({
                    variables:{
                        input: formData,
                    },
                });
                refetch();
                setShowModal(false);
            } catch (error) {
                toast.error('Error al actualizar tu sitio web')
            }
        }
    })

    return (
        <Form className="siteWeb-form" onSubmit={formik.handleSubmit}>
            <Form.Input 
            name="siteWeb"
            value={formik.values.siteWeb}
            onChange={formik.handleChange}
            className={formik.errors.siteWeb && "error"}
            />

            <Button type="submit" className="btn-submit">
                Actualizar
            </Button>
        </Form>
    )
}
