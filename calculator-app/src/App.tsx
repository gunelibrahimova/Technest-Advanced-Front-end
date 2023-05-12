import React from 'react';
import './index.css';

interface Buttontypes {
  text: string
  value: string
  isnum: boolean
}

const buttonList: Array<Buttontypes> = [
  {
    text: "%",
    value: "%",
    isnum: false
  },
  {
    text: "Mutlak Değer",
    value: "abs",
    isnum: false

  },
  {
    text: "C",
    value: "C",
    isnum: false

  },
  {
    text: "Sil",
    value: "Sil",
    isnum: false

  },
  {
    text: "Kök",
    value: "sqrt",
    isnum: false

  },
  {
    text: "Üs",
    value: "pow",
    isnum: false

  },
  {
    text: "PI",
    value: "pi",
    isnum: false

  },
  {
    text: "/",
    value: "/",
    isnum: false

  },
  {
    text: "7",
    value: "7",
    isnum: true
  },
  {
    text: "8",
    value: "8",
    isnum: true

  },
  {
    text: "9",
    value: "9",
    isnum: true

  },
  {
    text: "X",
    value: "x",
    isnum: false

  },
  {
    text: "4",
    value: "4",
    isnum: true

  },
  {
    text: "5",
    value: "5",
    isnum: true

  },
  {
    text: "6",
    value: "6",
    isnum: true

  },
  {
    isnum: false,
    text: "-",
    value: "-"
  },
  {
    text: "1",
    value: "1",
    isnum: true

  },
  {
    text: "2",
    value: "2",
    isnum: true

  },
  {
    text: "3",
    value: "3",
    isnum: true

  },
  {
    text: "+",
    value: "+",
    isnum: false

  },
  {
    text: "",
    value: "",
    isnum: false

  },
  {
    text: "0",
    value: "0",
    isnum: true
  },
  {
    text: ".",
    value: ".",
    isnum: true

  },
  {
    isnum: false,
    text: "=",
    value: "="
  }
]

function App() {
  return (
    <div>
      <div className="calcWrapper">
        <div className="calcInputArea">
          <input />
        </div>
      </div>
      <div className="calcButtons">
        {buttonList.map((item: Buttontypes, index: number) => {
          return (
            <button className="calcButton" key={index}>{item.text}</button> // CSS sınıf adını uygulayın
          );
        })}
      </div>
    </div>
  );
}

export default App;
