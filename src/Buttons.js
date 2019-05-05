import React from 'react'

function Buttons(props) {
 
    return (

      <div className="buttons">

                {props.data.map((item) =>
                    (
                        <div key={item.value} className="items" id={item.value} onClick = {() => props.onButtonClick(item.value, item.operator)}>{item.value}</div>

                    ))}

      </div>

  )
}

export default Buttons
