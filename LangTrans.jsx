import React, { useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
function App() {
  const [textInput, setTextInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextTranslation = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key":
            "63851a8130mshe97e9775faafdabp1cbbd2jsn6656f4c13db7",
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: `${textInput}`,
          source: "en",
          target: `${selectValue}`,
          format: "text",
        },
      };
      const response = await axios.request(options);
      setLoading(false);
      console.log(
        response?.data?.data?.translations?.[Number(0)]?.translatedText
      );
      setResult(
        response?.data?.data?.translations?.[Number(0)]?.translatedText
      );
    } catch (error) {
      setLoading(false);
      console.log(error?.data);
    }
  };

  console.log(textInput);
  console.log(selectValue);
  return (
    <div className="h-screen w-screen bg-slate-400">
      <div className="flex items-center justify-center flex-col gap-y-9 text-ellipsis ">
        <h1 className="text-3xl text-zinc-700 font-bold">Text Translator</h1>

        <div className="flex items-center justify-center flex-col gap-y-2">
          <textarea
            name="input-text"
            className="bg-white h-[100px] w-[500px] text-lg rounded-lg px-5 py-3"
            onChange={(e) => setTextInput(e.target.value)}
          ></textarea>
          <textarea
            name="input-text"
            className="bg-white h-[100px] w-[500px] text-lg rounded-lg px-5 py-3"
            value={result}
            readOnly
          ></textarea>
        </div>
        <div>
          <label htmlFor="options">Converted into : </label>
          <select
            name="value"
            className="bg-white px-2 py-1 cursor-pointer rounded-lg gap-2"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">select</option>
            <option value="hi">hindi</option>
            <option value="bn">bengali</option>
            <option value="ur">urdu</option>
            <option value="ta">tamil</option>

            <option value="fr">french</option>
            <option value="ru">russian</option>
          </select>
        </div>
        <button
          className="bg-slate-800 text-slate-100 mx-auto w-96 py-2 rounded-lg flex items-center justify-center"
          onClick={handleTextTranslation}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "translate"}
        </button>
      </div>
    </div>
  );
}

export default App;
