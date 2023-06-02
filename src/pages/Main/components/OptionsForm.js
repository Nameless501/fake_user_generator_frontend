import { Form, Stack } from 'react-bootstrap';
import RegionInput from './RegionInput';
import SeedInput from './SeedInput';
import MistakesInput from './MistakesInput';
import FormButton from './FormButton';

function OptionsForm({
    value,
    handleChange,
    handleFileDownload,
    getRandomSeed,
    isDownloading,
    inputsErrors,
    downloadError,
}) {
    return (
        <Form className="px-4 py-4 bg-light" noValidate>
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
                <FormButton
                    handleFileDownload={handleFileDownload}
                    isDownloading={isDownloading}
                    downloadError={downloadError}
                />
            </Stack>
        </Form>
    );
}

export default OptionsForm;
