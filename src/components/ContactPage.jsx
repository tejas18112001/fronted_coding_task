import React from 'react'
import { useState } from 'react';
import './style.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from './Button';

const ContactPage = () => {
  const [num, setNum] = useState('');
  const [fnameData, setFnameData] = useState('');
  const [lnameData, setLnameData] = useState('');

  function saveFunction() {
    alert('Button Clicked');
  }

  return (

    <div className='container'>

      <div className="homepage">

        <h2>
          ContactPage
        </h2>

        <div className='contact-form'>



          {/* first name ; */}
          <input
            type="text"
            className="add-task"
            id="add"
            placeholder="First Name"
            value={fnameData}

            onChange={(e) => setFnameData(e.target.value)}
          />



          {/* last Name */}
          <input
            type="text"
            className="add-task"
            id="add"
            placeholder="Last Name"
            value={lnameData}
            onChange={(e) => setLnameData(e.target.value)}
            autoFocus

          />


          {/* Phone number */}
          <PhoneInput
            className="add-task"

            country={'us'}
            value={num}
            onChange={(num) => setNum(num)}

          />
        </div>

        <div>
          <Button text="Save Contact" onClick={saveFunction}></Button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
