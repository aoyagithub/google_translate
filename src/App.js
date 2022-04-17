import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div className="wrap">
      <h1 className="h1">Google Translate</h1>
      <Languages language={language} onLanguageChange={setLanguage} />
      <div className="body">
        <Field label="Enter English" onChange={setText} value={text} />
        <Translate text={text} language={language} />
      </div>
    </div>
  );
}
