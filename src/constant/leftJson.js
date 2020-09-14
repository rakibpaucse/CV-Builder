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
        shouldReset : false , getDemoData : false
    },
    Language: {
        selectedLang : '' , list:[]
    },
    about: {
        
    }

}

const newState = JSON.parse(JSON.stringify(leftInfo));


export default newState ;
