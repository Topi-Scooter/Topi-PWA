import { DefaultTheme, createGlobalStyle } from "styled-components"

declare module 'styled-components' {
  export interface DefaultTheme {
		borderRadius: string;
	
		colors: {
			main: string;
			secondary: string;
		};
  }
}

export const lightTheme: DefaultTheme = {
  borderRadius: "0px",
  colors: {
		main: '#fff',
		secondary: '#000'
  }
} 

export const darkTheme: DefaultTheme = {
  borderRadius: "0px",
  colors: {
		main: '#000',
		secondary: '#fff'
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
		background-color: ${({theme})=>theme.colors.main};
  }
`