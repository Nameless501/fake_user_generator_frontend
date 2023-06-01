import { useRef, useState } from 'react';
import axios from 'axios';
import {
    DOWNLOAD_ERROR_MESSAGE,
    DOWNLOAD_TABLE_API_LINK,
    DOWNLOADED_FILE_NAME,
} from '../utils/constants';

function useFileDownload() {
    const linkRef = useRef();

    const urlRef = useRef();

    const [downloadError, setDownloadError] = useState('');

    const [isDownloading, setIsDownloading] = useState(false);

    function createLink(data) {
        urlRef.current = URL.createObjectURL(new Blob([data]));
        linkRef.current = document.createElement('a');
        linkRef.current.href = urlRef.current;
        linkRef.current.setAttribute('download', DOWNLOADED_FILE_NAME);
    }

    function activateLink() {
        document.body.appendChild(linkRef.current);
        linkRef.current.click();
    }

    function clearLink() {
        document.body.removeChild(linkRef.current);
        URL.revokeObjectURL(urlRef.current);
        linkRef.current = null;
        urlRef.current = null;
    }

    function getFile(res) {
        createLink(res.data);
        activateLink();
    }

    function initializeDownloading(res) {
        setIsDownloading(true);
        setDownloadError('');
        return res;
    }

    function handleFileDownload() {
        axios
            .get(DOWNLOAD_TABLE_API_LINK)
            .then(initializeDownloading)
            .then(getFile)
            .catch(() => setDownloadError(DOWNLOAD_ERROR_MESSAGE))
            .finally(() => {
                clearLink();
                setIsDownloading(false);
            });
    }

    return { handleFileDownload, isDownloading, downloadError };
}

export default useFileDownload;
