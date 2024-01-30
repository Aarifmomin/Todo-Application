import React, { useEffect, useState } from 'react';
import './style.css';
import ListTodo from './ListTodo';

const getLocalData = () => {
  const listItem = JSON.parse(localStorage.getItem('todoList'));

  if(listItem) {
    return listItem;
  } else {
    return [];
  }
}
const Todo = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState(getLocalData());
  const [edited, setEdited] = useState('');
  const [togglebtn, setTogglebtn] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  }
  function addItem() {
    if(!name) {
      alert('Please fill value');
    } else if(edited && togglebtn) {
      console.log(edited);
      setItems(
        items.map((elem) => {
          if(elem.id === edited) {
            return { ...elem, name:name}
          }
          return elem;
        })
      )
      setName('');
      setTogglebtn(false);
    } else {
      const addnewData = {
        id: new Date().getTime().toString(),
        name:name
      }
      setItems([...items, addnewData]);
      setName('');
    }
  }
  function deleteItem(index) {
    const updatedValue = items.filter((value) => {
      return value.id !== index;
    })
    setItems(updatedValue);
  }

  function editItem(index) {
    const editable = items.filter((value) => {
      return value.id === index;
    })
    setName(editable[0].name);
    setEdited(index);
    setTogglebtn(true);
  }

  useEffect(()=> {
    localStorage.setItem('todoList',JSON.stringify(items));
  },[items]); 

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <div className='addItems'>
            <input onChange={handleChange} value={name} type='text' name="inputblock" className='form-control' placeholder='Add Items' />
            <i className='fa fa-plus add-btn' onClick={addItem}></i>
          </div>

          <ListTodo items={items} deleteItem = {deleteItem} editItem = {editItem} />

          {/* <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All">  
              <span>Check List</span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Todo