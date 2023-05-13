import React, { useState } from "react";

export function Test1() {

  return (  <div className="App">
  
       <Testroom1 /> 
    
    </div>
  );
}


export type KyxPropsType={
  
}
function Testroom1(props:KyxPropsType) 

{
  // const [onClick, setonClick] = useState("");  можно удалять
  
const[value,setValue]=useState('')
  
const OnclickHandler = () => {   //удаление текста x
    
 setValue('')
  };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
   setValue(event.target.value);        // привязка инпута к кнопки удаления 
  };


// function sum(value: number) { //основная функция
 
//       let kyx = 150;
//       let res = kyx * value;
//       return res;
//   }

  
  function sum(value: number) {
      // if()
      // return  value typeof !==string?value*150:'xyi';
    //   let res = kyx * value;
    // if(value===String){
    //   return 1;
    // }else{
    //   return res;
    // }
    if (isNaN(value)) {
    return setValue('');
  }else {
      return value*150;
  }
      
  }
 let suma = sum(value);

  return (
    <div className="kyx">
      <h2>Test1🍽️🏺🍷🛏️</h2>
      <div>
     
        <input
          // type={"text"}
          // type="number"
        
           placeholder="КВ ✅  "
          onChange={handleChange}
          value={value}
        
         >
        </input>
        <button className="del" onClick={OnclickHandler}>
          X
        </button>
      </div>
      <div className="blok">
        <h1>{suma}<span> LUX</span></h1>
      </div>
    </div>
  );
} 
