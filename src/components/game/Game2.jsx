import React, { useState } from 'react';

const Game2 = () => {
  const [nama, setNama] = useState("");
  const [priority, setPriority] = useState("");
  const [catatan, setCatatan] = useState("");
  const [list, setList] = useState([]);


  const handleInputNama = (event) => {
    console.log(event.target.value);
    setNama(event.target.value);
  }
  const handleInputPriority = (event) => {
    console.log(event.target.value);
    setPriority(event.target.value);
  }
  const handleInputCatatan = (event) => {
    console.log(event.target.value);
    setCatatan(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = { nama, priority, catatan };
    setList([...list, newItem]);
    setNama('');
    setPriority('');
    setCatatan('');
    resetValue();
  };

  const resetValue = () => {
    let nama = document.getElementById("nama");
    let priority = document.getElementById("priority");
    let catatan = document.getElementById("catatan");
    nama.value = "";
    priority.value = "";
    catatan.value = "";
  }

  return (
    <>
      <h1 className='pt-3 pb-5'>Simple To Do List</h1>
      <div className='px-5 text-start'>
        <form onSubmit={submitHandler}>
          <div className='row py-2'>
            <div className='col-md-6'>
              <label htmlFor="nama" className='form-label'>Apa Yang Ingin Dikerjakan?</label>
              <input onChange={handleInputNama} type="text" name="nama" id="nama" className='form-control' placeholder='Nama To-Do List' required />
            </div>
            <div className='col-md-6'>
              <label htmlFor="priority" className='form-label'>Prioritas</label>
              <select name="priority" id="priority" className='form-select' required onChange={handleInputPriority}>
                <option value="">Pilih Priority</option>
                <option value="Penting">Penting</option>
                <option value="Biasa">Biasa</option>
                <option value="Tidak Penting">Tidak Penting</option>
              </select>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-md-6'>
              <label htmlFor="catatan" className='form-label'>Catatan To-Do List</label>
              <textarea name="catatan" id="catatan" className='form-control' placeholder='Isi Catatan To-Do List' style={{ resize: 'none' }} required onChange={handleInputCatatan}></textarea>
            </div>
          </div>
          <div className='pt-3 d-flex justify-content-start'>
            <button className='btn btn-primary' type='submit'>Tambah To-Do List</button>
          </div>
        </form>
        <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>
          {list.map((item, index) => (
            <div key={index} className='col'>
              <div className='text-center rounded' style={{ backgroundColor: "white" }}>
                <div className='text-white rounded-top' style={{
                  height: '30%',
                  backgroundColor: item.priority === 'Penting' ? 'red' : item.priority === 'Biasa' ? '#238755' : 'black',
                }}>
                  <p className='p-2'>{item.priority}</p>
                </div>
                <h1 className='text-black fs-4'>
                  {item.nama}
                </h1>
                <p className='text-black fs-6 pb-3'>
                  {item.catatan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  );
}

export default Game2;
