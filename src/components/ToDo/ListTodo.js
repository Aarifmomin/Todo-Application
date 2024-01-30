import React, { useState } from 'react'

const ListTodo = ({items, deleteItem, editItem}) => {
  const css = {minWidth:'auto', width:'20px', height:'20px', margin:'0 10px 0 0', display:'inline-block', verticalAlign:'middle'}

  return (
    <div className='showItems'>
    {
      items.map((curElem, i) => {
        return(
          <div className="eachItem" key={i}>
            <h3><input style={css} type='checkbox' name={curElem.name} />{curElem.name}</h3>
            <div className='todo-btn'>
              <i className='far fa-edit add-btn' onClick={()=> editItem(curElem.id)}></i>
              <i className='far fa-trash-alt add-btn' onClick={()=> deleteItem(curElem.id)}></i>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default ListTodo