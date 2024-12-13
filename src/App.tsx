// 📄 Import necessary dependencies and components
import { useEffect, useState } from "react"; // React hooks for managing state and side effects
import HomePage from "./pages/HomePage"; // Home page component
import LoadingPage from "./pages/LoadingPage"; // Loading page component
import UploadPage from "./pages/UploadPage"; // Upload page component

// 🏪 Import custom state management stores
import { useIsUploaded } from "./stores/useIsUploaded"; // Store for tracking upload status
import { useIsUploadingLoading } from "./stores/useIsUploadingLoading"; // Store for tracking upload loading state

// 🛠️ Import UI components
import { Toaster } from "@/components/ui/toaster"; // Component for displaying toast notifications

/**
 * 📄 Main App Component
 * This component determines which page to render based on the upload status and loading state.
 * It serves as the root of the application, handling the logic for rendering the appropriate page 
 * and incorporating the UI toaster for user notifications.
 */
export default function App() {
    // 🔍 State derived from stores to track upload status
    const { isUploaded } = useIsUploaded(); // Check if a file has been uploaded
    const { isUploadingLoading } = useIsUploadingLoading(); // Check if a file is currently being uploaded

    // 🌐 State for tracking the currently active page
    const [currentPage, setCurrentPage] = useState<string>(''); // Holds the name of the page to render

    /**
     * 🖼️ Page Rendering Logic
     * Determines which page component to render based on the value of `currentPage`.
     * @returns A React component representing the current page.
     */
    function page() {
        if (currentPage === 'LoadingPage') {
            return <LoadingPage />; // Render the loading page
        } else if (currentPage === 'HomePage') {
            return <HomePage />; // Render the home page
        } else if (currentPage === 'UploadPage') {
            return <UploadPage />; // Render the upload page
        }
    }

    /**
     * ⚙️ Side Effect: Update the Current Page
     * Determines the current page to render based on the states `isUploaded` and `isUploadingLoading`.
     * The logic ensures seamless navigation between pages during the upload process.
     */
    useEffect(() => {
        if (!isUploaded && isUploadingLoading) {
            setCurrentPage('LoadingPage'); // Show loading page if a file is being uploaded
        } else if (isUploaded && !isUploadingLoading) {
            setCurrentPage('HomePage'); // Show home page after upload is complete
        } else if (!isUploaded && !isUploadingLoading) {
            setCurrentPage('UploadPage'); // Show upload page when idle and no file is uploaded
        } else if (isUploaded && isUploadingLoading) {
            setCurrentPage('LoadingPage'); // Fallback to loading page for other cases
        }
    }, [isUploadingLoading, isUploaded]); // Re-run effect when these dependencies change

    // 🖥️ Render the determined page along with the toaster component for user feedback
    return (
        <>
            {page()} {/* Dynamically render the page */}
            <Toaster /> {/* Display toast notifications */}
        </>
    );
}
