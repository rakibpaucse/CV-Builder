import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    // typography: {
    //     fontFamily: [
    //       'comicSans', 'wheelFairy'
    //     ].join(','),
    // },
    palette: {
        primary: {
            main: '#1349c6'
        },
        secondary: {
            main: '#f5f5f5'
        },
       
    }
})

theme = responsiveFontSizes(theme);

export default theme;