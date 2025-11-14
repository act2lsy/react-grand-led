import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState("Hello~");
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const color = localStorage.getItem("color");
    const text = localStorage.getItem("text");
    setText(text);
    setColor(color);
  }, []);

  const Button = ({ className, selected, text }) => {
    return (
      <button
        style={{ borderColor: color === className ? "#FF0000" : "gray" }}
        className={`btn ${className}`}
        onClick={() => changeColor(className)}
      >
        {text}
      </button>
    );
  };

  const changeColor = (className) => {
    setColor(className);
    localStorage.setItem("color", className);
  };

  const Toggle = () => {
    // if (document.fullscreenElement) {
    //   document.exitFullscreen();
    // } else {
    //   document.documentElement.requestFullscreen();
    // }
    setToggle(!toggle);
  };
  const handleChange = (event) => {
    setText(event.target.value);
    localStorage.setItem("text", event.target.value);
  };

  return (
    <div className="container blue" style={{ posiont: "relative" }}>
      <div className="btndiv" style={{ position: "absolute", zIndex: 10 }}>
        <button className="setbtn" onClick={Toggle}>
          S
        </button>
      </div>
      {toggle ? (
        <div style={{ position: "absolute", left: 30, zIndex: 1 }}>
          <div className="btndiv">
            <Button className="green" text="G"></Button>
            <Button className="yellow" text="Y"></Button>
            <Button className="pink" text="P"></Button>
            <Button className="blue" text="B"></Button>
            <Button className="white" text="W"></Button>
          </div>
          <div>
            <input
              type="text"
              id="text"
              style={{ width: "260px", height: "45px", fontSize: "35px" }}
              value={text}
              onChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <div className="textdiv" style={{ position: "absolute", zIndex: 1 }}>
          <div className={`text ${color}`}>{text}</div>
        </div>
      )}
    </div>
  );
}

export default App;
