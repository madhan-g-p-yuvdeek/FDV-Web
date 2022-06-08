import { createTheme } from '@material-ui/core/styles';

 

export const theme = createTheme({

    typography: {

        useNextVariants: true,

        fontFamily: 'Lato',

    },

    palette: {

       primary: {

            main: '#008afe',

            light: '#69b9ff',

            dark: '#005eca',

            contrastText: '#ffffff',

        },

        secondary: {

            main: '#79c2ff',

            light: '#aef5ff',

            dark: '#4192cc',

            contrastText: '#000000',

        },

       // Used by `getContrastText()` to maximize the contrast between the background and

        // the text.

        contrastThreshold: 1,

        // Used to shift a color's luminance by approximately

        // two indexes within its tonal palette.

        // E.g., shift from Red 500 to Red 300 or Red 700.

        tonalOffset: 0.2

    },

});

 

export default theme;