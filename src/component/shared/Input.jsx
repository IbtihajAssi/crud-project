import React from 'react'

function Input(id,title,type,name,changeData) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className="form-control" id={id} onChange={changeData}/>
  </div>
  )
}

export default Input