import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { solution } from "./common/utils";

function abc() {
  return 'abcdef'
}

function tick() {
  const element = (
    <div className='tick'>
      <h1>Hello, world!</h1>
      {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      <h2>{solution('20:00:00')} </h2>
      <h2>{abc()}</h2>
    </div>
  );

  ReactDOM.render(
    element, document.getElementById('root')
  )

}

setInterval(tick, 1000)


// ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
