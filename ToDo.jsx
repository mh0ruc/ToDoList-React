import React, { useEffect, useState } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

function ToDo() {
  const emptyForm = { gorev: "", yapildi: false, isEdited: false };
  const [Formdata, setFormData] = useState(emptyForm);
  const [Gorevler, setGorevler] = useState([]);

  const handleforsubmit = (event) => {
    event.preventDefault();

    if (Formdata.isEdited) {
      const GorevIndex = Gorevler.findIndex((item) => item.uuid === Formdata.uuid);
      const yeniGorevler = [...Gorevler];
      yeniGorevler[GorevIndex] = { ...Formdata };
      setGorevler(yeniGorevler);
    } else if (Formdata.gorev.length > 3) {
      Formdata.uuid = uuidv4();
      setGorevler((prev) => [Formdata, ...prev]);
    }

    setFormData(emptyForm);
    event.target.reset();
  };

  const GorevSil = (uuid) => {
    setGorevler((prev) => prev.filter((item) => item.uuid !== uuid));
  };

  const handleInputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      gorev: event.target.value
    }));
  };

  const GoreviDuzenle = (uuid) => {
    const Gorev = Gorevler.find((item) => item.uuid === uuid);
    setFormData({ ...Gorev, isEdited: true });
  };

  const yapilanGorev = (uuid) => {
    const GorevIndex = Gorevler.findIndex((item) => item.uuid === uuid);
    const Gorev = Gorevler[GorevIndex];
    Gorev.yapildi = !Gorev.yapildi;
    const yeniGorevler = [...Gorevler];
    yeniGorevler[GorevIndex] = Gorev;
    setGorevler(yeniGorevler);
  };

  return (
    <div className='container jumbotron' style={{ border: "1px solid black", borderRadius: "10px" }}>
      <form className='form-group' onSubmit={handleforsubmit}>
        <div className='row'>
          <input
            onChange={handleInputChange}
            value={Formdata.gorev}
            type="text"
            className='form-control'
            style={{ width: "80%", marginLeft: "4px" }}
            name="gorev"
            placeholder="Write Your Task"
          />
          <button type="submit" className='form-item btn btn-secondary' style={{ width: "15%" }}>
            Add
          </button>
        </div>
      </form>
      <ToDoList yapilanGorev={yapilanGorev} GoreviDuzenle={GoreviDuzenle} Gorevler={Gorevler} GorevSil={GorevSil} />
    </div>
  );
}

export default ToDo;
