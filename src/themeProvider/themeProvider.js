import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Roboto Slab'
        ].join(','),
        
        itemlebel: {
            fontSize: 30,
            color : 'red'
          },

        itemDes: {
            fontSize: 20,
          },
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