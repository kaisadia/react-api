import React from 'react'
import { useState } from 'react'
import './App.css'


export default function Form() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
  

  
  
    const handleSubmit = (e) => {
      fetch("http://localhost:7000/people", 
      {method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        email: email}
      ) })
      
      .then(function(response) {
      console.log(response);
      return response.json()
      })
  };
  

    return (
    <div>
    <form className='form' onSubmit={handleSubmit}>
    First name <input className='form_firstname' value={firstname} label="First Name" variant="outlined" onChange={e => setFirstname(e.target.value)} />
    Last name <input className='form_lastname'value={lastname} label="Last Name" variant="outlined" onChange={e => setLastname(e.target.value)}/>
    E-mail <input className='form_email' value={email} label="E-mail" variant="outlined" onChange={e => setEmail(e.target.value)} />
      <button className='button' type="submit">Add</button>
      </form>
    </div>
  )
}
