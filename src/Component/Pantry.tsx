import React, { useState } from "react";

export function Pantry() {

  
  return (  <div className="App">
  
       <Pantryroom /> 
    
    </div>
  );
}


export type KyxPropsType={
  
}
function Pantryroom (props:KyxPropsType) 

{
  const [onClick, setonClick] = useState('');
  

  
  const[value,setValue]=useState('')
  
  
  const OnclickHandler = () => {   //удаление текста x
    
    // console.log('hello')
    // setonClick("");
   setValue('')
  };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
   setValue(event.target.value);        // привязка инпута к кнопки удаления 
  };


function sum(value: number) {
      
      let kyx = 50;
      let res = kyx * value;
      return res;
  }

  let suma=sum(value);

  return (
    <div className="kyx">
      <h2>Кладовка 🪜🚪</h2>
      <div>
     
        <span className={'kv'}>  
 </span>  <input
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
