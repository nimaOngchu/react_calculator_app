import React from 'react'

function Buttons(props) {
    var e = (id) => {
        console.log(id);
 }
    return (

      <div className="buttons">
          {/* <div className="items operators">ON</div>
          <div className="items operators">BACK</div>
          <div className="items operators">%</div>
          <div className="items operators">/</div>
          <div className="items">7</div>
          <div className="items">8</div>
          <div className="items">9</div>
          <div className="items operators">X</div>
          <div className="items">4</div>
          <div className="items">5</div>
          <div className="items">6</div>
          <div className="items operators">-</div>
          <div className="items">1</div>
          <div className="items">2</div>
          <div className="items">3</div>
          <div className="items operators">+</div>
          <div className="items">0</div>
          <div className="items">.</div>
          <div className="items operators">=</div> */}
                {props.data.map((item) =>
                    (
                        <div key={item.value} className="items" id={item.value} onClick = {() => props.onButtonClick(item.value, item.operator)}>{item.value}</div>
                   
                    ))}

      </div>

  )
}

export default Buttons
