import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
  const [value, setValue] = useState('')


  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
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
            <b>Visisbility </b> Public
          </span>
          <input style={{ display: 'none' }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="trips" id="trips" />
            <label htmlFor="trips">Trips</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="foods" id="foods" />
          <label htmlFor="foods">Food</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="sports" id="sports" />
          <label htmlFor="sports">Sports</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="design" id="Dsegin" />
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="trips" id="trips" />
          <label htmlFor="art">Art</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write