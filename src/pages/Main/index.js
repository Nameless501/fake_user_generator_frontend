import { useCallback, useEffect, useRef } from 'react';
import { Stack, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import OptionsForm from './components/OptionsForm';
import DataTable from './components/DataTable';
import {
    getRandomData,
    resetPageCounter,
} from '../../store/randomData/randomDataSlice';
import { initialFormValueConfig } from '../../utils/configs';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function Main() {
    const tableEndRef = useRef();

    const { data, status } = useSelector((state) => state.randomData);

    const { inputsValue, errorMessages, formIsValid, handleChange, getRandomSeed } = useFormStateAndValidation(
        initialFormValueConfig
    );

    const dispatch = useDispatch();

    const dispatchFormData = useCallback(
        (payload) => dispatch(getRandomData(payload)),
        [dispatch]
    );

    function handleSubmit(evt) {
        evt.preventDefault();
        dispatch(resetPageCounter());
        dispatchFormData(inputsValue);
    }

    useEffect(() => {
        dispatchFormData(initialFormValueConfig);
    }, [dispatchFormData]);

    useIntersectionObserver(tableEndRef, ([{ isIntersecting }]) => {
        if (isIntersecting && status !== 'pending') {
            dispatchFormData(inputsValue);
        }
    });

    return (
        <Stack as="main" gap={4}>
            <Container>
                <Stack gap={3}>
                    <OptionsForm
                        value={inputsValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        getRandomSeed={getRandomSeed}
                        disabled={status === 'pending' || !formIsValid}
                        errors={errorMessages}
                    />
                    <DataTable data={data} />
                    <Container className="p-1 d-flex justify-content-center">
                        <Spinner>
                            <span ref={tableEndRef} />
                        </Spinner>
                    </Container>
                </Stack>
            </Container>
        </Stack>
    );
}

export default Main;
