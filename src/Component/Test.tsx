import React, { useState } from "react";

export function Test() {

  
  return (  <div className="App">
  
       <Testroom /> 
    
    </div>
  );
}


export type KyxPropsType={
  
}
function Testroom (props:KyxPropsType) 

{
  const [onClick, setonClick] = useState('');
  

  
  const[value,setValue]=useState(null)
  
  
  const OnclickHandler = () => {   
    
    setValue('')
  };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
   setValue(event.target.value);        
  };


function sum(value: number) {
 
  return!isNaN(value)?value*150:setValue(null)  
                                   //если null позволяет 
                                              //вводить символы но при этом ошибку не выда

     
  }

  let suma=sum(value);

  return (
    <div className="kyx">
      <h2>TestNull 🪜🚪</h2>
      <div>
     
        <span className={'kv'}>  
 </span>  <input
          className={value==null?'error':'wight'}
            // type="number"
           placeholder="КВ ✅  "
          onChange={handleChange}
          value={value}>
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
