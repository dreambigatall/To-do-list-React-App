import { useState } from "react";

function Form({submitedData}){
      const [dataValue, setDataValue] =useState("");
      //const isPacked=true;
      //const id=Date.now();
    return(
        <form onSubmit={(e)=>{
           e.preventDefault();
            const dataCollector={
              dataValue , isPacked:false , id:Date.now()
            }
          //console.log(dataValue)
         submitedData(dataCollector);
         setDataValue('')
        }} className="add-form">
            <input type={Text}
            value={dataValue}
            onChange={(e)=>{
                setDataValue(e.target.value);
                
            }}
            />
            <button className="add-form button">Add</button>
        </form>
    )
}

export default Form;