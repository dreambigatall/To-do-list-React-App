function Stat({datas}){
    
    const storageSize=datas.length;
    const newData=datas.filter((data)=>data.isPacked).length
    let percentyl=Math.round((newData/storageSize)*100);  
      if(storageSize === 0){
        percentyl=0;
      }
    
    return(
        <footer className="footer stats">
            <em>
            {storageSize===newData && storageSize?"you finished your todos for today 🤜 ":`you have ${storageSize} number of todos and  you already finishe ${newData} , ${percentyl} %  your Todo's  `}
            </em>
        </footer>
    )
}

export default Stat;