import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from '@storybook/addon-actions'


export default{
  title:'Chakra/Button',
  component: Button
}

export const Success = ()=> (
    <Button onClick={action('Click handler')} variantColor='green'>
      Success
    </Button>
)

export const Danger = ()=> (
    <Button {...actions('onClick','onMouseOver')} variantColor='red'>
      Danger
      </Button>
)

export const Log = () =>(
  <Button variantColor='blue' onClick={()=>console.log('Button clicked')}>
    Log
  </Button>
)


