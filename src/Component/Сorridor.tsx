import React, { useState } from "react";

export function Сorridor() {

  
  return (  <div className="App">
  
       <СorridorRoom /> 
    
    </div>
  );
}


export type KyxPropsType={
  
}
function СorridorRoom (props:any) 

{
  const [onClick, setonClick] = useState('');
  

  
  const[value,setValue]=useState<any>('')
  
  
  const OnclickHandler = () => {   //удаление текста x
    
    // console.log('hello')0
    // setonClick("");
    setValue('')
  // };
    // setonClick('')
  };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
   setValue(event.target.value);        // привязка инпута к кнопки удаления 
  };


function sum(value:any) {
      
      let kyx = 50;
      let res = kyx * value;
      return res;
  }

  let suma = sum(value);

  return (
    <div className="kyx">
      <h2>Коридор 🔔</h2>
      <div>
     
        <input
          // type={"text"}
          type="number"
          placeholder="КВ ✅  "
          onChange={handleChange}
          value={value}>
        </input>
        <button className="del" onClick={OnclickHandler}>
          X
        </button>
      </div>
      <div className="blok">
        <h1>{suma}<span> Lumen</span></h1>
      </div>
    </div>
  );
} 
