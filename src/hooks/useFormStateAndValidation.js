import { useState } from 'react';
import { inputsErrorsConfig, inputsValidationConfig } from '../utils/configs';
import {getRandomInt} from "../utils/utils";

function useFormStateAndValidation(defaultValue) {
    const [inputsValue, setInputsValues] = useState(defaultValue);

    const [inputsErrors, setInputsErrors] = useState({});

    function handleErrorMessage(name, message) {
        setInputsErrors((current) => ({
            ...current,
            [name]: message,
        }));
    }

    function checkInputValidity(name, value) {
        inputsValidationConfig[name].validateSync(value);
        handleErrorMessage(name, '');
    }

    function setInputValue(name, value) {
        setInputsValues((cur) => ({
            ...cur,
            [name]: value,
        }));
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        try {
            checkInputValidity(name, value);
            setInputValue(name, value);
        } catch (err) {
            handleErrorMessage(name, inputsErrorsConfig[name]);
        }
    }

    function getRandomSeed() {
        setInputValue('seed', getRandomInt());
    }

    return {
        inputsValue,
        inputsErrors,
        handleChange,
        getRandomSeed,
    };
}

export default useFormStateAndValidation;
