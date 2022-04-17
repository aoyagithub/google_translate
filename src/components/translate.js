import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode) => {
  try {
    const { data } = await axios.get(
      `https://script.google.com/macros/s/AKfycbyhDbCo1ZjaGJ1XT1xQOwoHtW7FE6QDK-LoSDe19K__SW7adBA/exec?text=${input}&source=en&target=${languageCode}`
    );
    return data.text;
  } catch (err) {
    return "";
  }
};

export default ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    doTranslation(text, language).then(setTranslated);
  }, [text, language]);

  return (
    <div className="translate body-item">
      <label className="label">Output</label>
      <div className="box-area">{translated}</div>
    </div>
  );
};
