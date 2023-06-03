import { useCallback, useEffect, useRef } from 'react';
import { Stack, Container, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import {
    getRandomData,
    resetPageCounter,
} from '../../store/randomData/randomDataSlice';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useFileDownload from '../../hooks/useFileDownload';
import OptionsForm from './components/OptionsForm';
import DataTable from './components/DataTable';
import { initialFormValueConfig } from '../../utils/configs';
import { faker } from '@faker-js/faker';

function Main() {
    const tableEndRef = useRef();

    const thunkControllerRef = useRef(null);

    const { data, status, error } = useSelector((state) => state.randomData);

    const { inputsValue, inputsErrors, handleChange, getRandomSeed } =
        useFormStateAndValidation(initialFormValueConfig);

    const dispatch = useDispatch();

    const { handleFileDownload, isDownloading, downloadError } =
        useFileDownload();

    const dispatchFormData = useCallback(
        (payload) => dispatch(getRandomData(payload)),
        [dispatch]
    );

    useEffect(() => {
        if (thunkControllerRef.current) {
            thunkControllerRef.current?.abort();
        }
        dispatch(resetPageCounter());
        thunkControllerRef.current = dispatchFormData(inputsValue);
    }, [inputsValue, dispatch, dispatchFormData]);

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
                        getRandomSeed={getRandomSeed}
                        handleFileDownload={handleFileDownload}
                        isDownloading={isDownloading}
                        inputsErrors={inputsErrors}
                        downloadError={downloadError}
                    />
                    <DataTable data={data} />
                    {status === 'rejected' && error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <Container className="p-1 d-flex justify-content-center">
                            <Spinner>
                                <span
                                    ref={tableEndRef}
                                    className={
                                        status === 'pending' ? 'd-none' : ''
                                    }
                                />
                            </Spinner>
                        </Container>
                    )}
                </Stack>
            </Container>
        </Stack>
    );
}

export default Main;
