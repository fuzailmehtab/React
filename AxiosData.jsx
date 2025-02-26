import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    setData(response.data);
  };

  return (
    <>
      <div className="p-10">
        <button
          onClick={getData}
          className="bg-teal-500 text-white font-semibold px-5 rounded py-3 active:scale-75"
        >
          get data
        </button>
        <div className="p-5 bg-gray-950 text-white ">
          {data.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-gray-100 text-black flex item-center justify-between w-full p-7 rounded-sm mb-3"
              >
                <img className="h-36" src={elem.download_url} alt="" />
                <h1>
                  {elem.author}
                  <br></br>
                  {elem.url}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;

////
// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//     console.log(response.data);
//     setData(response.data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <div className="p-10">
//         <div className="p-5 bg-gray-950 text-white ">
//           {data.map(function (elem, idx) {
//             return (
//               <div
//                 key={idx}
//                 className="bg-gray-100 text-black flex item-center justify-between w-full p-7 rounded-sm mb-3"
//               >
//                 <img className="h-36" src={elem.download_url} alt="" />
//                 <h1>
//                   {elem.author}
//                   <br></br>
//                   {elem.url}
//                 </h1>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// //
