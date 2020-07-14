import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Roboto Slab'
        ].join(','),
    },
    palette: {
        primary: {
            // main: '#d6983a'
            main: '#42c99a'
            // main: '#3db6ba'
        },
        secondary: {
            main: '#f5f5f5'
        },
       
    }
})

theme = responsiveFontSizes(theme);

export default theme;