import React from "react";
import Button from "./Button";
import { action, actions } from '@storybook/addon-actions'


export default{
  title: 'Form/control/Button',
  component: Button,
  args:{
    // children:'Button',
    onclick:{ action:'clicked'}
  },
//decorators wrap every story with the decoration element.In this case it is <Center/>
  // decorators:[story => <Center>{story()}</Center>]
}


//you can define your button variants/stories like this or using args like below

export const Primary = ()=> ( <Button variant='primary'>Primary</Button>)
export const Secondary = ()=> (<Button variant='secondary'>Secondary</Button>)
export const Success = ()=>( <Button variant='success'onClick={()=>console.log('Button clicked')}>Success</Button>)
export const Danger = ()=> ( <Button variant='danger'>Danger</Button>)

//using the args 

const Template = args => <Button{...args}/>

export const PrimaryA = Template.bind({})

PrimaryA.args={
  variant: 'primary',


  children: 'primary button'
}

export const SecondaryA = Template.bind({})

SecondaryA.args={
  variant: 'secondary',
  children: 'secondary button'
}

export const TartiaryA = Template.bind({})

TartiaryA.args={
  variant: 'success',
  children: 'Tartiary button'
}

//with args we can add properties of other elements in other elements example

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args={
  ...PrimaryA.args,
  children:'Long primary button '
}

//it is also posible to set args at the component level which will be applied to all the component stories
//however if you set args at the  story level it  will overwrite args at the component level


//decorators help us wrap a story .in this example <center/> is  a decorator