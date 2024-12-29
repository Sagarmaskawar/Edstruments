import React, { useRef } from "react";
import "../ShareComponents/_typography.scss";
import uploafilegif from "../Images/UploadFile.gif";
import styles from "./UploadFile.module.scss";
import uploadIcon from '../Images/UploadIcon.png'

const UploadFile = () => {
  const inputref = useRef();
  const handleFileChange = () => {};

  const onUpload = () => {
    inputref.current.click();
  };
  return (
    <div className={styles.uploadFile_Container}>
      <h1 className="H1_Medium_20px_primary">Upload Your Invoice</h1>
      <span className="regular_16px_primary">
        To auto-populate fields and save time
      </span>
      <img className={styles.uploadfile_img} src={uploafilegif} alt="gif" />
      <input
        ref={inputref}
        style={{ display: "none" }}
        type="file"
        onClick={(e) => (e.target.value = null)}
        onChange={handleFileChange}
        accept=".pdf"
      />
      <button className={styles.uploadbutton}onClick={onUpload}>Upload File <img src={uploadIcon} alt="icon"/></button>
      <p className="bodyspan_16px_regular">
        {" "}
        <span className="bodyspan_14px_blue" onClick={onUpload}>Click to upload</span> or Drag and
        drop
      </p>
    </div>
  );
};

export default UploadFile;
