"use client";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./style.css";

export default function MyEditor({
  value,
  onChange,
  placeholder,
  errorText = "",
  label,
}) {
  const handleChange = (content) => {
    onChange?.(content);
  };

  return (
    <div className={`my-editor w-100 ${errorText ? "error" : ""}`}>
      <label className="required">{label}</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],

            ["bold", "italic", "underline", "strike"],

            [{ color: [] }, { background: [] }],

            [{ align: [] }],

            [{ list: "ordered" }, { list: "bullet" }],

            [{ indent: "-1" }, { indent: "+1" }],

            ["blockquote", "code-block"],

            ["link"],

            ["clean"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "color",
          "background",
          "align",
          "list",
          "indent",
          "blockquote",
          "code-block",
          "link",
        ]}
      />
      {errorText && <p className="field-error">{errorText}</p>}
    </div>
  );
}
