import React, { useState } from "react";
import { useCallback } from "react";
const App = () => {
  let [password, setPassword] = useState("");
  let [passwordLength, setPasswordLength] = useState(8);
  const handleLengthIncrease = (e) => {
    e.preventDefault();
    setPasswordLength(passwordLength + 1);
  };
  const handleLengthDecrease = (e) => {
    e.preventDefault();
    if (passwordLength === 8) return;
    setPasswordLength(passwordLength - 1);
  };
  const handlePasswordGenerate = React.useCallback(() => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      pass = pass + chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  }, [passwordLength]);

  React.useEffect(() => {
    handlePasswordGenerate();
  }, [passwordLength]);
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-y-2">
        <input
          type="text"
          className="h-10 w-96 border border-slate-700 rounded px-5 text-center"
          value={password}
          readOnly
        />
        <div className="flex items-center justify-center gap-x-1">
          <button
            onClick={handleLengthIncrease}
            className="h-10 px-5 text-xl font-bold bg-slate-500 rounded-lg m-4"
          >
            +
          </button>
          <input
            type="text"
            className="border rounded border-slate-800 text-center"
            value={passwordLength}
            readOnly
          />
          <button
            className="h-10 px-5 text-xl font-bold bg-slate-500 rounded-lg m-4"
            onClick={handleLengthDecrease}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
