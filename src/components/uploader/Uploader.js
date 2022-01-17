import React, {useRef} from "react";

import {Form} from 'uikit-react';
//@Deprecated
const Uploader = () => {
  const fileInput = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileInput.current.files[0]);
    upload(formData);

  }

  return <div>
    <Form onSubmit={onSubmit}>
   
      <div class="js-upload" uk-form-custom>
        <input type="file" ref={fileInput}/>
        <button class="uk-button uk-button-default"  tabindex="-1">Select</button>
        
      </div>
    </Form>
  </div>
}

const upload = (file) => {
  fetch('http://localhost:3333/reactive/new', {
    method: 'POST',
    headers: {},
      body: file
    })
    .then(response => response.json())
    .then(success => console.log(success))
    .catch(error => console.log(error));
};

export default Uploader;