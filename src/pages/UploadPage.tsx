// 🌐 Importing necessary components from the project
// `Navbar`: A navigation bar component that likely contains links or branding for the application.
// `Upload`: A component responsible for handling file uploads or similar functionality.
import { Navbar, Upload } from "@/components";

// 📄 This component represents the upload page of the application.
// It includes a `Navbar` for consistent site navigation and an `Upload` component for file upload functionality.
// The layout uses responsive classes for proper alignment and spacing on different screen sizes.
export default function UploadPage() {
  return (
    <>
      {/* 🔗 Rendering the `Navbar` component for site-wide navigation */}
      <Navbar />
      {/* 📦 Main content container for the upload functionality */}
      {/* `sm:container`: Ensures the content is contained within a center-aligned box on larger screens. */}
      {/* `mx-auto`: Centers the content horizontally. */}
      {/* `sm:px-0`: Removes horizontal padding on larger screens, while `px-2` adds small padding on smaller screens. */}
      <div className="sm:container mx-auto sm:px-0 px-2">
        {/* 🚀 Rendering the `Upload` component to handle the core upload functionality */}
        <Upload />
      </div>
    </>
  );
}
