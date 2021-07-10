import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispach = useDispatch();
    const {msgError} = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ){
            dispach( startRegisterWithEmailAndPassword(email, password, name) )
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0){
            dispach(setError('Name is required'));
            return false;
        } else if( !validator.isEmail( email ) ){
            dispach(setError("Email is required"));
            return false;
        } else if (password !== password2 || password.length < 5){
            dispach(setError("Password should be higher than 5 characters"));
            return false;
        }
        dispach(removeError("Its Okay"));
        return true
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>

        {
            msgError && 
            (
                <div className="auth__alert-error">
                    { msgError }
                </div>
            )
        }

        <form 
            onSubmit={ handleRegister }
            className="animate__animated animate__fadeIn animate__faster"
        >

            <input
                    autoComplete="off"
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
            />

            <input
                autoComplete="off"
                className="auth__input"
                type="text"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ handleInputChange }
            />

            <input
                className="auth__input"
                type="password"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ handleInputChange }
            />

            <input
                className="auth__input"
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={ password2 }
                onChange={ handleInputChange }
            />

            <button
                className="btn btn-primary btn-block mb-5"
                type="submit"
            >
                Register
            </button>

            <Link className="link" to="/auth/login">
                Already registered?
            </Link>
        </form>
        </>
    )
}
