import React from 'react';

function PlayerDetail(props) {
  let rol
  if(props.rol === 'w'){
    rol = 'Whites'
  }else if(props.rol === 'b'){
    rol = 'Blacks'
  }else{
    rol = '--'
  }

  return (
    <div> 
      <p>Name: {props.name}</p>
      {(props.me ?         
        <select onChange={props.onChooseRol}>
          <option value="default">--</option>
          <option value="w">Whites</option>
          <option value="b">Blacks</option>
        </select> :
        <p>Rol: {rol}</p>
      )}      
    </div>
  )
}

export default PlayerDetail;