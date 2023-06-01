import {number, object, string} from 'yup';
import {MISTAKES_INPUT_ERROR_MESSAGE, SEED_INPUT_ERROR_MESSAGE} from "./constants";

export const usersTableConfig = {
    cols: ['№', 'Id', 'Name', 'Email', 'Address', 'Phone number'],
};

export const initialFormValueConfig = {
    locale: 'en_US',
    seed: '',
    mistakes: 0,
};

export const localesConfig = [
    {
        title: 'USA',
        value: 'en_US',
    },
    {
        title: 'Russia',
        value: 'ru',
    },
    {
        title: 'Poland',
        value: 'pl',
    },
    {
        title: 'Germany',
        value: 'de',
    },
    {
        title: 'Japan',
        value: 'ja',
    },
];

export const inputsValidationConfig = {
    locale: string().required(),
    seed: number().nullable(true).transform((_, val) => val ? Number(val) : null),
    mistakes: number().min(0).max(1000).typeError('Required field'),
};

export const inputsErrorsConfig = {
    seed: SEED_INPUT_ERROR_MESSAGE,
    mistakes: MISTAKES_INPUT_ERROR_MESSAGE,
}

export const formValidationConfig = object({
    locale: inputsValidationConfig.locale,
    seed: inputsValidationConfig.seed,
    mistakes: inputsValidationConfig.mistakes,
});
