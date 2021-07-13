import React, { useState } from 'react';
import './App.scss';

type TaskEntry = {
  title: string,
  completed: boolean,
  id: number
}

const App: React.FC = () => {
  const [list, setList] = useState<TaskEntry[]>([]);
  const [value, setValue] = useState('');
  const [filterState, setFilterState] = useState('all');


  console.log(list)

  const handleAdd = (event: React.FormEvent<HTMLButtonElement>) => {

    event.preventDefault();

    if(value) {
      setList([
        {title: value, id: Date.now(), completed: false},
        ...list
        ])
    }

    setValue('');
  }

   
  const handleChangeCheckbox = (id: number) => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

/*
  const allList = () => {
    if (stateList === 'All') {
      setList(list.filter(item => item));
    } else if (stateList === 'All'){

    }
  }*/
/*
  const btnAll = () => {
    
    setList(list.filter(item => item));
  };

  const btnActive = () => {
    setList(list.filter(item => !item.completed));
  };

  const btnCompleted = () => {
    //setList(list.filter(item => item.completed));
    
  };*/

  const updateList = (filterType: string) : TaskEntry[] => {

    if (filterType === 'active') {
      return list.filter(item => !item.completed);
    } else if (filterType === 'completed') {
      return list.filter(item => item.completed);
    }
    return list;
  }

  return (
    <div className="app">
      <h1 className="title">#todo</h1>
      <div className="containerBtnTabs">
        <button className="btnTab" onClick={() => setFilterState('all')}>All</button>
        <button className="btnTab" onClick={() => setFilterState('active')}>Active</button>
        <button className="btnTab" onClick={() => setFilterState('completed')}>Completed</button>
      </div>
      <div className="containerInput">
        <input 
        className="input"
        type="text"
        placeholder="add details"
        onChange={(event) => { setValue(event.target.value) }}
        value={value}
        />
        <button onClick={handleAdd} className="btn"><span>Add</span></button>
      </div>
      <div className="list">
        {
          list && updateList(filterState).map((item, index) => {
            return (
              <div className="itemList" key={index}>
                <input
              type= "checkbox"
              checked={item.completed} 
              className= "inputItemList"
              onChange={() => handleChangeCheckbox(item.id)}
            /><span>{item.title}</span></div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;