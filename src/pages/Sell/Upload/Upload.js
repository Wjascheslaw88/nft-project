import React, { useEffect } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import { message, Upload as AntUpload, Button } from "antd";
import css from "./Upload.module.css";
import { useDispatch } from "react-redux";

const { Dragger } = AntUpload;
// const dispatch = useDispatch()

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Upload = () => {
  return (
    <div className={css.uploadWrapper}>
      <Dragger {...props} className={css.dragger}>
        <div className={css.dragContent}>
          <p className={css.uploadIcon}>
            <CloudUploadOutlined />
          </p>
          <p className={css.uploadText}></p>
          <p className={css.uploadHint}>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
        </div>
      </Dragger>
      <div className={css.buttonContainer}>
        <Button className={css.buttonUpload}>Upload</Button>
      </div>
    </div>
  );
};

export default Upload;
