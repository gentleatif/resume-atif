import React from 'react';
import Button from './Button';
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sub, setSub] = useState('');
  const [alert, setAlert] = useState('hide');
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleMesChange(e) {
    setMessage(e.target.value);
  }
  function handleSubChange(e) {
    setSub(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  // submit this form on click and clear the input
  function submitForm(e) {
    fetch(
      'https://resume-backend-lnp8.onrender.com/customer',
      // 'http://localhost:8000/customer',
      {
        method: 'POST',
        body: new URLSearchParams({
          name: name,
          email: email,
          message: message,
          subject: sub,
        }),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('form submitted');
    setName('');
    setEmail('');
    setSub('');
    setMessage('');
    console.log(e);
    setAlert('show');
    setTimeout(function () {
      setAlert('hide');
    }, 3000);
  }
  return (
    <div id='CONTACT' className='row form-main-div'>
      <div className='my-5'>
        <h4 className='text-white text-center'>Get in Touch</h4>
      </div>
      {/*main column md - 7 */}
      <div className='col-md-7 '>
        {/* row under md-7 */}
        {/* single item */}

        <div class='row mx-5 mb-2'>
          {/* 1st col under sub row */}

          <div className='col-md-4 mt-2'>
            <label>
              <h5 className='text-white form-name'>
                Name <span className='text-danger asterisk'>*</span>
              </h5>
            </label>
          </div>
          {/* 2nd col under sub row */}
          <div class='col-md-8'>
            <input
              onChange={handleNameChange}
              value={name}
              className='form-input form-control shadow-none form-control-lg text-white input-roundeds'
              type='name'
              required='true'
              id='inputName'
            />
          </div>
        </div>
        {/* single item end */}

        {/* single item */}

        <div class='row mx-5 my-4'>
          {/* 1st col under sub row */}

          <div className='col-md-4 mt-2'>
            <label>
              <h5 className='text-white form-name'>
                Email <span className='text-danger asterisk'>*</span>
              </h5>
            </label>
          </div>
          {/* 2nd col under sub row */}
          <div class='col-md-8'>
            <input
              value={email}
              onChange={handleEmailChange}
              className='form-input form-control shadow-none form-control-lg text-white input-roundeds'
              type='name'
              required='true'
              id='inputName'
            />
          </div>
        </div>
        {/* single item end */}
        {/* single item */}

        <div class='row mx-5 mb-2'>
          {/* 1st col under sub row */}

          <div className='col-md-4 mt-2'>
            <label>
              <h5 className='text-white form-name'>Subject</h5>
            </label>
          </div>
          {/* 2nd col under sub row */}
          <div class='col-md-8'>
            <input
              value={sub}
              onChange={handleSubChange}
              className='form-input form-control shadow-none form-control-lg text-white input-roundeds'
              type='name'
              required='true'
              id='inputName'
            />
          </div>
        </div>
        {/* single item end */}
        {/* single item */}

        <div class='row mx-5 my-4'>
          {/* 1st col under sub row */}

          <div className='col-md-4 mt-2'>
            <label>
              <h5 className='text-white form-name'>
                Message <span className='text-danger asterisk'>*</span>
              </h5>
            </label>
          </div>
          {/* 2nd col under sub row */}
          <div class='col-md-8'>
            <textarea
              value={message}
              onChange={handleMesChange}
              className='textarea form-input form-control shadow-none form-control-lg text-white input-roundeds'
              type='name'
              required='true'
              id='inputName'
              rows='3'
            ></textarea>
          </div>
        </div>
        {/* single item end */}
        <div className='d-flex justify-content-between'>
          <div className='ms-5 my-5 ps-2'>
            <Button
              submitfunc={submitForm}
              name='Submit'
              size='130'
              bgcolor='black'
            />
          </div>
          <div className={`alert alert-success ${alert}`}>
            <strong>Success! </strong> <span>Message is successfully sent</span>
          </div>
        </div>
      </div>

      {/*main column md - 5 */}
      <div className='col-md-5 emailandphone mb-4'>
        {/* space for address */}
        <div>
          <h5 className='text-white'>Email and Phone</h5>
        </div>
        <div>
          <p className='p-0 m-0'>Atif Hussain</p>
          <p className='p-0 m-0'>gentleatif@gmail.com</p>
          <p className='p-0 m-0'>+91 7463923166</p>
        </div>
      </div>
    </div>
  );
}
export default Form;
