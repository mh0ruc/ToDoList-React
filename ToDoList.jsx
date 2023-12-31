import React, { useEffect, useState } from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoList({ Gorevler, GorevSil, GoreviDuzenle, yapilanGorev }) {
  const [complated, setComplated] = useState(false);
  const [filteredGorev, setFilteredGorev] = useState(Gorevler);

  const handleComplatedFilter = () => {
    setComplated(prev => !prev);
  }

  useEffect(() => {
    setFilteredGorev(Gorevler);
  }, [Gorevler]);

  useEffect(() => {
    setFilteredGorev(complated ? Gorevler.filter(item => item.yapildi) : Gorevler);
  }, [complated, Gorevler]);

  return (
    <div className='p-4 bg-light mb-5 mt-7 border rounded' style={{ width: "95%" }}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h3 className='m-0' id='tasklisthead'>
          Tasks
        </h3>
        <button onClick={handleComplatedFilter} className='btn btn-primary'>{!complated?"Tasks Performed":"All Tasks"}</button>
      </div>
      <ul className='list-group my-3'>
        {filteredGorev.map((item, index) => (
          <ToDoListItem key={index} item={item} GorevSil={GorevSil} GoreviDuzenle={GoreviDuzenle} yapilanGorev={yapilanGorev} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
