import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Roboto Slab' , 'Bree Serif' ,  'Dosis' , 'Teko' , 'Varela Round',
           'Playfair Display' , 'Roboto Condensed' , 'Roboto Mono'
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
        
        cardHeading : {
            color: '#4682b4'
        }
    },
    liner_background : 'linear-gradient(90deg, rgb(249, 241, 234) 0%, rgb(252, 248, 244) 33%, rgb(255, 255, 255) 100%)' 
})

theme = responsiveFontSizes(theme);

export default theme;