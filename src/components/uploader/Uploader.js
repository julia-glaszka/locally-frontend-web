import React, { useRef } from "react";


const Uploader = () => {
    const fileInput = useRef(null);

    function onSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", fileInput.current.files[0]);
      upload(formData);

    }

    return <div className="App">
    <form onSubmit={onSubmit}>
      <input
        type="file"
        ref={fileInput}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
}

const upload = (file) => {
    fetch('http://localhost:8080/reactive/new', { 
      method: 'POST',
      headers: {
      },
      body: file 
    }).then(
      response => response.json() 
    ).then(
      success => console.log(success) 
    ).catch(
      error => console.log(error) 
    );
  };
  

export default Uploader;