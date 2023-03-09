import React, { useState } from "react";
import "../style/MintNFTpage.css";

function MintNFTPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    // Send the file to your backend API using the Fetch API or another library
    console.log("Uploading file:", selectedFile);
  };

  return (
    <div className="container">
      <h1>Create New Item</h1>
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose File
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileInputChange}
      />
      <button onClick={handleUploadButtonClick}>Upload</button>
    </div>
  );
}

export default MintNFTPage;
