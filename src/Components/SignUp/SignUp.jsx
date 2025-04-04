import React from 'react'
import style from './SignUp.module.css';
import { useFormik } from 'formik';
export default function SignUp() {

    const submitRegister = () =>{
        console.log('formik submitRegister');
    }

    let formik = useFormik({
        initialValues: {
            userName:'',
            email:'',
            password:'',
            phoneNumber:''
        },
        onSubmit:submitRegister
    });

    return <>
        
    </>
}
