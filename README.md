
# SignCast Front-End Project 📊

Welcome to the **SignCast** repository! This project aims to create a **PDF drawing tool** that helps installation teams design the installation of LED screens. The tool provides a user-friendly interface for configuring and downloading the installation diagram in PDF format.

## 📋 Project Overview

SignCast is a React-based application designed to simplify the installation process of LED screens by offering a digital tool that allows users to:

- Select equipment from a pre-defined database (CSV).
- Toggle between configurations (e.g., screen orientation, installation type).
- Generate and download installation diagrams in PDF format.

## 🚀 Getting Started

To get started with the development and run the project locally, follow these steps:

## 🛠️ Prerequisites

1. **Node.js & npm**: Ensure you have Node.js and npm installed.
    - Install from [Node.js official website](https://nodejs.org/).

2. **Vite**: This project uses **Vite** as the build tool for fast and efficient development. 
	- Vite is already included as a development dependency and doesn't require global installation.

3. **Dependencies**: This project uses various libraries and frameworks:
    - **React** for building the UI.
    - **Tailwind CSS** for styling.
    - **Fabric.js** for drawing and generating PDF diagrams.
    - **Papaparse** for handling Excel (.xlsx) data.
    - **zustand** for state management.

### 📝 Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/fifolio/signcast.git
    ```

2. Navigate into the project folder:
    ```bash
    cd signcast
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## 📸 Screenshot of the Control Panel 
Below is a screenshot of the Control Panel interface, where users can manage settings, view data processing status, and access the uploaded Excel file for processing. 
#### Control Panel Screenshot: ![Control Panel Screenshot](http://via.placeholder.com/600x300)

## 🖥️ Application Structure

The application is divided into the following main folders:

-   **components/**: Contains reusable UI components.
    -   **common/**: General components like the Navbar.
    -   **controllers/**: Handles major functional components like Configuration, Description, etc.
    -   **details/**: Displays the project information and equipment selection.
    -   **fabric/**: Includes the Fabric.tsx component for handling the diagram creation logic.
    -   **ui/**: Contains additional UI elements for the design.
    -   **upload/**: Handles file uploads, including Excel (.xlsx) file reading.
-   **helpers/**: Utility functions like file handling.
-   **stores/**: Zustand-based state management for user selections and configurations.
-   **public/**: Static assets like images or files.
-   **src/**: The main source directory for the React application.
-   **types/**: TypeScript types for defining application state and props.
## 🔑 Features

-   **Equipment Selection**: Users can select from dropdowns (e.g., LED Screen, Mount Type, Media Player).
-   **Dynamic Drawing**: Updates in real-time based on the selections, including screen orientation and installation type.
-   **PDF Export**: The application generates a downloadable PDF with the installation diagram.
-   **Configuration Options**: Users can adjust parameters like niche depth, screen size, and the distance from the floor to the screen center.

## 📂 Folder Overview

-   **src/components/fabric/Fabric.tsx**: The main component responsible for drawing the diagram using Fabric.js.
-   **src/components/details/Notes.tsx**: Displays user notes and project information.
-   **src/components/controllers/Configuration.tsx**: Manages user configuration inputs for the screen and installation type.

## ⚙️ Key Functionality

### 1. Equipment Selection 🖥️

Users can choose different equipment such as LED screens, media players, and mount types from a pre-loaded Excel (.xlsx) file. This data is used to populate dropdown menus in the UI.

-   **CSV Parsing**: Uses the `Papaparse` library to read Excel (.xlsx) data.
-   **Dropdowns**: Built using Radix UI components like `@radix-ui/react-select`.

### 2. Drawing Display ✏️

The **Fabric.tsx** component is the core of the drawing functionality. It leverages **Fabric.js** to render the LED screen diagram dynamically. Users can:

-   Toggle screen orientation (horizontal or vertical).
-   Adjust niche depth.
-   View the power outlet location and other measurements.

### 3. PDF Export 📥

Once the diagram is drawn and the user is satisfied with the configuration, they can download the drawing as a PDF.

-   Uses `@react-pdf/renderer` to generate and download the PDF.

## 📝 Configuration Options

The application allows the following configurations:

-   **Orientation**: Toggle between horizontal and vertical screens.
-   **Installation Type**: Choose between recessed (Niche) or flat wall installation.
-   **Distance from Floor**: Input the distance from the floor to the center of the screen.
-   **Niche Depth**: Automatically calculated or adjusted by the user.

## 🔄 Data Flow

1.  **Excel (.xlsx) Data Loading**: The equipment data is loaded from a Excel (.xlsx) file and parsed using **Papaparse**.
2.  **User Selection**: User interactions (e.g., dropdown selections) update the **zustand** store, which triggers a re-render of the UI and the Fabric.js canvas.
3.  **Drawing Update**: The **Fabric.tsx** component listens for state changes and updates the drawing in real-time.
4.  **PDF Generation**: Once the drawing is complete, users can generate a PDF using the configured settings.

## 📊 Excel File Format

For proper and successful loading of the Excel (.xlsx) file, make sure it includes the following header sections in each relevant sheet:

1. **Screen MFR sheet**:  
    - **Screen MFR**
    - **Make**
    - **Screen Size**
    - **Height**
    - **Width**
    - **Depth**

2. **Media Player MFR sheet**:  
    - **MFG. PART**
    - **Make**
    - **Height**
    - **Width**
    - **Depth**

3. **Mounts sheet**:  
    - **MFG. PART**
    - **Brand**
    - **Maximum Load (lbs)**

4. **Receptacle Box sheet**:  
    - **MFG. PART**

## 🖼️ Example Output PDF Document
The following is an example of the output PDF document generated by the system. This PDF contains all the necessary data processed from the Excel file and is formatted for easy review. 
#### Example PDF: ![Example PDF](http://via.placeholder.com/600x300) 

## 🧑‍🤝‍🧑 Collaboration

We use **Git** for version control and encourage everyone to contribute:

1.  **Fork the repository** to your own GitHub account.
2.  **Clone** the forked repository.
3.  Create a **branch** for your feature/bugfix.
4.  Make your changes and **commit** them.
5.  **Push** your changes and open a **Pull Request**.

## 💬 Questions and Issues

If you have any questions or face issues, feel free to open an issue or ask for help in the repository discussions.

## 📝 License

This project is licensed under the MIT License.

## 💡 Inspiration

This tool was designed with **installation teams** in mind. It's focused on delivering a real-world solution that helps teams quickly configure and install LED screens.