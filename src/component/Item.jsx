import { useState } from "react";

function Item(props) {
    const { items } = props;
  
    return (
      <div>
        {items.map((item,index) => (
          <li key={item.id} className="list">
            <input
              type="checkbox"
              checked={item.isPacked}
              onChange={() => props.toggleItem(item.id)}
            />
            <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
              {index+1} {item.dataValue}
              
            </span>
            <button onClick={() => props.handleDeleteItem(item.id)}>x</button>
          </li>
        ))}
      </div>
    );
  }
  
  export default Item;