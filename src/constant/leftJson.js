const leftInfo = {
    template : {
        selectedTemplate : '' , list:[]
    },
    color:{
        mainColor : '' , SecondaryColor: ''
    },
    font : {
        selectedFont : '' , list:[]
    },
    action : {

    },
    Language: {

    },
    about: {

    }

}

const newState = JSON.parse(JSON.stringify(leftInfo));


export default newState ;
