import React from "react";

export default ({ label, value, onChange }) => {
  return (
    <div className="field body-item">
      <label className="label">{label}</label>
      <textarea className="input box-area" 
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}>
      </textarea>
    </div>
  );
};
