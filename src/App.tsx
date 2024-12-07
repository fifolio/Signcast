// PAGES
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import UploadPage from "./pages/UploadPage";

// STORES
import { useIsUploaded } from "./stores/useIsUploaded";
import { useIsUploadingLoading } from "./stores/useIsUploadingLoading";

export default function App() {
    // Check if user uploaded a new file
    const { isUploaded } = useIsUploaded();

    // Check the loading state while uploading
    const { isUploadingLoading } = useIsUploadingLoading();

    const [currentPage, setCurrentPage] = useState<string>('');

    function page() {
        if (currentPage == 'LoadingPage') {
            return <LoadingPage />;
        } else if (currentPage == 'HomePage') {
            return <HomePage />;
        } else if (currentPage == 'UploadPage') {
            return <UploadPage />;
        }
    }

    // Determine the page to render
    useEffect(() => {
        if (isUploaded && isUploadingLoading) {
            setCurrentPage('LoadingPage');
        } else if (isUploaded && !isUploadingLoading) {
            setCurrentPage('HomePage');
        } else if (!isUploaded && !isUploadingLoading) {
            setCurrentPage('UploadPage');
        }

    }, [isUploadingLoading, isUploaded])

    return page();
}
