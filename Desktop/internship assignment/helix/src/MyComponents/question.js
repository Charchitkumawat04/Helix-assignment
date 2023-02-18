import React, { useState } from 'react';
import axios from 'axios';

export default function AuthenticatedComponent() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('https://d-backend.charchitkumawa1.repl.co', { title, text })
        .then(response => {
          console.log(response.data);
          setTitle('');
          setText('');
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    return (
      <div>
        <h1>Add a Question</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label for="formGroupExampleInput" id="formGroupExampleInput" placeholder="Example input">Title</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" value={title} onChange={event => setTitle(event.target.value)} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Text</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" value={text} onChange={event => setText(event.target.value)}></input>
          </div>
          <button className="button" type="submit"><p id="nav_title">Submit</p></button>
        </form>
      </div>
    );
}