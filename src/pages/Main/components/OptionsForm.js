import { Alert, Form, Stack } from 'react-bootstrap';
import RegionInput from './RegionInput';
import SeedInput from './SeedInput';
import MistakesInput from './MistakesInput';
import FormButtons from './FormButtons';

function OptionsForm({
    value,
    handleChange,
    handleSubmit,
    handleFileDownload,
    getRandomSeed,
    isPending,
    isDownloading,
    formIsValid,
    inputsErrors,
    downloadError,
}) {
    return (
        <Form className="px-4 py-4 bg-light" noValidate onSubmit={handleSubmit}>
            <Stack gap={4}>
                <RegionInput handleChange={handleChange} />
                <SeedInput
                    value={value.seed}
                    handleChange={handleChange}
                    getRandomSeed={getRandomSeed}
                    error={inputsErrors.seed}
                />
                <MistakesInput
                    value={value.mistakes}
                    handleChange={handleChange}
                    error={inputsErrors.mistakes}
                />
                <FormButtons
                    handleFileDownload={handleFileDownload}
                    isPending={isPending}
                    isDownloading={isDownloading}
                    formIsValid={formIsValid}
                    downloadError={downloadError}
                />
            </Stack>
        </Form>
    );
}

export default OptionsForm;
