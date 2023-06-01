import {Form, Stack, Button, ButtonGroup} from 'react-bootstrap';
import RegionInput from './RegionInput';
import SeedInput from './SeedInput';
import MistakesInput from './MistakesInput';
import { AiOutlineCloudDownload } from 'react-icons/ai';

function OptionsForm({ value, handleChange, handleSubmit, getRandomSeed, disabled, errors }) {
    return (
        <Form className="px-4 py-4 bg-light" noValidate onSubmit={handleSubmit}>
            <Stack gap={4}>
                <RegionInput handleChange={handleChange} />
                <SeedInput value={value.seed} handleChange={handleChange} getRandomSeed={getRandomSeed} error={errors.seed} />
                <MistakesInput
                    value={value.mistakes}
                    handleChange={handleChange}
                    error={errors.mistakes}
                />
                <ButtonGroup className="col-8 col-md-4 offset-2">
                    <Button variant={"success"} type="submit" disabled={disabled}>
                        Get data
                    </Button>
                    <Button variant={"secondary"} className="px-md-0">
                        <AiOutlineCloudDownload />
                    </Button>
                </ButtonGroup>
            </Stack>
        </Form>
    );
}

export default OptionsForm;
