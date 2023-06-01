import { useState } from 'react';

import { faker } from "@faker-js/faker";

import {formValidationConfig, inputsErrorsConfig, inputsValidationConfig} from '../utils/configs';

function useFormStateAndValidation(defaultValue) {
    const [inputsValue, setInputsValues] = useState(defaultValue);

    const [errorMessages, setErrorMessages] = useState({});

    const [formIsValid, setFormIsValid] = useState(true);

    function handleErrorMessage(name, message) {
        setErrorMessages((current) => ({
            ...current,
            [name]: message,
        }));
    }

    function checkInputValidity(name, value) {
        inputsValidationConfig[name].validateSync(value);
        handleErrorMessage(name, '');
    }

    function checkFormValidity(name, value) {
        setFormIsValid(formValidationConfig.isValidSync({...inputsValue, [name]: value}));
    }

    function setInputValue(name, value) {
        setInputsValues(cur => ({
            ...cur,
            [name]: value,
        }));
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        try {
            setInputValue(name, value);
            checkFormValidity(name, value);
            checkInputValidity(name, value);
        } catch(err) {
            handleErrorMessage(name, inputsErrorsConfig[name]);
        }
    }

    function getRandomSeed() {
        setInputValue('seed', faker.number.int());
    }

    return {
        inputsValue,
        errorMessages,
        formIsValid,
        handleChange,
        getRandomSeed,
    };
}

export default useFormStateAndValidation;
