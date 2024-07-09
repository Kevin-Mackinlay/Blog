import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Write = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/upload', formData);
     return res.data
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
   const imgUrl = upload();
   try{
    
   
   }catch(err){
      console.log(err)
   }
  };

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility </b> Public
          </span>
          <input style={{ display: 'none' }} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="trips" id="trips" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="trips">Trips</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="foods" id="foods" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="foods">Food</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="sports" id="sports" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="sports">Sports</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="Design" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="trips" id="trips" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="art">Art</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
