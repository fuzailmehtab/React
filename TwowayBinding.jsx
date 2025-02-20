//TWO WAY BINDING
import React from "react";
import { useState } from "react";
const App = () => {
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="bg-blue-500 px-4 py-3 m-5 rounded"
          placeholder="enter something"
        />
        <button className="w-20 h-9 bg-emerald-700 font-semibold rounded ">
          submit
        </button>
      </form>
    </>
  );
};
export default App;
