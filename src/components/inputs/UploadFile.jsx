"use client";
import { memo, useCallback, useMemo } from "react";
import "./upload-file.css";
import Button from "../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faUpload,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const UploadFile = ({
  onChange = () => {},
  title = "",
  name = "",
  errorText,
  value,
  className,
  notRequired,
  accept = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar",
  labelIcon,
}) => {
  const handleChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (!file) return;

      onChange({
        name,
        file,
      });
    },
    [onChange, name],
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();

      const file = e.dataTransfer.files[0];
      if (!file) return;

      onChange({
        name,
        file,
      });
    },
    [onChange, name],
  );

  const handleRemove = useCallback(() => {
    onChange("");
  }, [onChange]);

  const icon = useMemo(() => {
    const type = value?.file?.type || "";

    if (type.includes("pdf")) return faFilePdf;

    if (
      type.includes("word") ||
      type.includes("document") ||
      value?.file?.name?.endsWith(".doc") ||
      value?.file?.name?.endsWith(".docx")
    )
      return faFileWord;

    if (
      type.includes("excel") ||
      type.includes("spreadsheet") ||
      value?.file?.name?.endsWith(".xls") ||
      value?.file?.name?.endsWith(".xlsx")
    )
      return faFileExcel;

    return faFile;
  }, [value]);

  const labelClassName = useMemo(
    () => `${!notRequired ? "required" : ""} upload-title`,
    [notRequired],
  );

  return (
    <div className={`${className || ""} upload-file`}>
      <label className={labelClassName} htmlFor={name}>
        {labelIcon && <FontAwesomeIcon icon={labelIcon} />}
        {title}
      </label>

      <div
        className={`upload-file-box ${errorText ? "error" : ""}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {value?.file ? (
          <>
            <div className="file-info">
              <FontAwesomeIcon icon={icon} className="file-icon" />

              <div>
                <h4>{value.file.name}</h4>

                <span>{(value.file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            </div>

            <Button
              btnType="delete"
              type="button"
              className="remove-btn"
              onClick={handleRemove}
            >
              <FontAwesomeIcon icon={faClose} />
            </Button>
          </>
        ) : (
          <label htmlFor={name} className="upload-placeholder-file">
            <FontAwesomeIcon icon={faUpload} size="2x" />

            <h3>upload {title}</h3>

            <span>PDF, Word, Excel, PowerPoint, ZIP...</span>
          </label>
        )}

        <input
          id={name}
          hidden
          type="file"
          name={name}
          accept={accept}
          onChange={handleChange}
        />
      </div>

      {errorText && <span className="field-error">{errorText}</span>}
    </div>
  );
};

export default memo(UploadFile);
