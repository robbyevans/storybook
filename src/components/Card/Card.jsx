import React from 'react'
import Button from '../Button/Button'
import { Form } from '../Form/Form'
import './Card.scss'

export const Card = ({title}) => {
  return (
    <div className="wrapper">
      <div className='card'>
        <span>hello</span>
        <h1 className='hello'>Welcome to Vinhood<br/>Home of fine wine</h1>
        <Form/>
      </div>
    </div>
  )
}

