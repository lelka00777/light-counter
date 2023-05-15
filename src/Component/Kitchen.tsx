import React, { useState } from "react";

export function Kitchen() {
  return (
    <div className="App">
      <Kyx />
    </div>
  );
}

function Kyx(props: any) {

  const [onClick, setonClick] = useState("");
  const [value, setValue] = useState<any>("");

  const OnclickHandler = () => {
    //удаление текста x

    setValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // привязка инпута к кнопки удаления
  };

  // function sum(value: number) { //основная функция

  //       let kyx = 150;
  //       let res = kyx * value;
  //       return res;
  //   }

  function sum(value: any) {
  
    return !isNaN(value) ? value * 150 : setValue("");
  }
  let suma:any = sum(value);

  return (
    <div className="kyx">
      <h2>Кухня, столовая, спальня, гостиная 🍽️🏺🍷🛏️</h2>
      <div>
        <input
          // type={"text"}
          type="number"
          placeholder="КВ ✅  "
          onChange={handleChange}
          value={value}
        ></input>
        <button className="del" onClick={OnclickHandler}>
          X
        </button>
      </div>
      <div className="blok">
        <h1>
          {suma}
          <span> Lumen</span>
        </h1>
      </div>
    </div>
  );
}
