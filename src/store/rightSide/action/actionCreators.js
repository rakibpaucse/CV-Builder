import SET_COLOR from './actionTypes'

export const setTheColor = ({SecondaryColor , mainColor}) => ({
    type : SET_COLOR,
    SecondaryColor : SecondaryColor,
    mainColor : mainColor,
})