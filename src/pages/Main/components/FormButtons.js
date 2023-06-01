import {
    Alert,
    Button,
    ButtonGroup,
    OverlayTrigger,
    Stack,
    Tooltip,
} from 'react-bootstrap';
import { AiOutlineCloudDownload } from 'react-icons/ai';

export const FormButtons = ({
    isPending,
    formIsValid,
    handleFileDownload,
    isDownloading,
    downloadError,
}) => {
    return (
        <Stack gap={2}>
            <ButtonGroup className="col-8 col-md-4 offset-2">
                <Button
                    variant={'success'}
                    type="submit"
                    disabled={isPending || !formIsValid}
                >
                    Get data
                </Button>
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Download CSV</Tooltip>}
                >
                    <Button
                        variant={'secondary'}
                        className="px-md-0"
                        onClick={handleFileDownload}
                        disabled={isDownloading}
                    >
                        <AiOutlineCloudDownload />
                    </Button>
                </OverlayTrigger>
            </ButtonGroup>
            {!!downloadError && (
                <Alert
                    variant="danger"
                    className="col-8 col-md-4 offset-2 my-0"
                >
                    downloadError
                </Alert>
            )}
        </Stack>
    );
};

export default FormButtons;
