import React, { useState } from "react";

export function Cabinet() {

  
  return (  <div className="App">
  
       <CabinetRoom /> 
    
    </div>
  );
}


export type KyxPropsType={
  
}
function CabinetRoom(props:any) 

{
  const [onClick, setonClick] = useState('');
  

  
  const[value,setValue]=useState<any>('')
  
  
  const OnclickHandler = () => {   //удаление текста x
    
    // console.log('hello')
    // setonClick("");
    
    setValue('')
  };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
   setValue(event.target.value);        // привязка инпута к кнопки удаления 
  };


function sum(value: number) {
      
      let kyx = 300;
      let res = kyx * value;
      return res;
  }

  let suma=sum(value);

  return (
    <div className="kyx">
      <h2>Кабинет,библиотека ⚖️📚</h2>
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
