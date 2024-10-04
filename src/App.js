import React from "react";

 function Square(params) {
   return <button className="square">{params}</button>
}

// first or general approach.

// const App = () => {
//   return (
//     <>
//       <div className="board-row">
//         <button className="square">1</button>
//         <button className="square">2</button>
//         <button className="square">3</button>
//       </div>
//       <div className="board-row">
//         <button className="square">4</button>
//         <button className="square">5</button>
//         <button className="square">6</button>
//       </div>
//       <div className="board-row">
//         <button className="square">7</button>
//         <button className="square">8</button>
//         <button className="square">9</button>
//       </div>
//     </>
//   );
// };

// export default App;

// component re-usable feature of react.
const App = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
      <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
      <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default App;