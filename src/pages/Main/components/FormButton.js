import {
    Alert,
    Button,
    ButtonGroup,
    OverlayTrigger,
    Stack,
    Tooltip,
} from 'react-bootstrap';
import { AiOutlineCloudDownload } from 'react-icons/ai';

export const FormButton = ({
    handleFileDownload,
    isDownloading,
    downloadError,
}) => {
    return (
        <Stack gap={2}>
            <ButtonGroup className="px-0 col-md-4">
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

export default FormButton;
