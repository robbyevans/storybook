import React from 'react'
import './Form.scss'
import Button from '../Button/Button'

export const Form = (props) => {


  return (
    <div className='formControl'>
      <input
      type='text'
      placeholder='Enter email..'
      value={props.email}/>
      <input
      type='text'
      placeholder='Enter password'
      value={props.password}/>

      <Button variant='success'>Login</Button>

      <span>Dont have an account <a>SignUp</a></span>

    </div>
  )
}
