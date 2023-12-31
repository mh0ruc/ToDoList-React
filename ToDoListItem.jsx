import React from 'react';

function ToDoListItem({ item, GorevSil, GoreviDuzenle, yapilanGorev }) {
  return (
    <li key={item.uuid} className={`list-group-item d-flex justify-content-between ${item.yapildi ? "bg-success bg-gradients" : ""}`}>
      <button onClick={() => yapilanGorev(item.uuid)} className={`btn ${item.yapildi ? "btn-success" : "btn-outline-success"}`}>
        <i className="bi bi-check-circle"></i>
      </button>
      <div className='Gorevitem'>{item.gorev}</div>
      <div className='btn-group' role='group'>
        <button onClick={() => GoreviDuzenle(item.uuid)} className={`btn ${item.yapildi ? "btn-primary" : "btn-outline-primary"}`}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button onClick={() => GorevSil(item.uuid)} className={`btn ${item.yapildi ? "btn-danger" : "btn-outline-danger"}`}>
          <i className="bi bi-backspace"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoListItem;
