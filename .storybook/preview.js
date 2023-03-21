import React from "react"
import { addDecorator } from "@storybook/react"
import Center from "../src/components/Center/Center"
import {ThemeProvider, theme, CSSReset} from '@chakra-ui/react'
import '@storybook/addon-console'



//we use this to wrapp all our components in storybook with a decorator . example to center every component
// addDecorator(story=><Center>{story()}</Center>)

//we can also use chakra library for the same
addDecorator(story=><ThemeProvider theme={theme}>
  <CSSReset/>
  {story()}
  </ThemeProvider>)




export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}