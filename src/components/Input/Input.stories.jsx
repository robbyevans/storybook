import React from 'react'
import Input from './Input'



export default{
  title:'Form/control/Input',
  component:Input,

  //decorator used to style a component by wrapping all variations /stories of our components with devorator component
  // decorators:[story =><Center>{Input}</Center>]

}

export const Small = () => <Input size='small' placeholder='Small size'/>
export const Medium = () => <Input size='medium' placeholder='Medium size'/>
export const Large = () => <Input size='large' placeholder='Large size'/>


//we can rename a story by saying 

Small.storyName='small Input'