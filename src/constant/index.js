 const info  = [
    { 
        title : 'profile' , 
        items : [ { photoUrl : '' , firstName : '' , lastname : '' , occupation : '' , parmanentAddress : '' , currentaddress : '' , phoneNumber : '' , website : '' , emailAddress : ''} ]
    } ,
    { 
        title : 'objective' , 
        items : [ { shouldShow : false , textValue : ''}]
    } , 
    { 
        title : 'Work Experience' ,
        items : [ { shouldShow : false , experiences : [] , orgName : '' , role : '' , startingDate : '' , endingDate : '' , description : '' } ]
    } , 
    { 
        title : 'education' ,
        items : [ { shouldShow : false , educations : [] , orgName : '' , major : '' , grader : '' , startingDate : '' , endingDate : '' , description : '' } ]
    } , 
    { 
        title : 'awards' ,
        items : [ { shouldShow : false , awards : [] , awardTitle : '' , awardSubtitle : '' , description : '' } ]
    } , 
    { 
        title : 'certifications' ,
        items : [ { shouldShow : false , certifications : [] , certifyName : '' , certifyAuthority : '' , description : '' } ]
    } , 
    { 
        title : 'skills' ,
        items : [ { shouldShow : false , skills : [] , skill : '' } ]
    } , 
    { 
        title : 'hobbies' ,
        items : [ { shouldShow : false , hobbies : [] , hobby : '' } ]
    } , 
    { 
        title : 'languages' ,
        items : [ { shouldShow : false , languages : [] , lanName : '' , lanLavel : '' , rating : '' } ]
    } , 
    { 
        title : 'references' ,
        items : [ { shouldShow : false , references : [] , refName : '' , position : '' , refPhone : '' ,  refEmail : '' , description : '' } ]
    } ,
    { 
        title : 'extras' ,
        items : [ { shouldShow : false , extras : [] , title : '' , description : '' } ]
    } ,
]

const tabs = [
    { key: 'profile'},
    { key: 'objective' },
    { key: 'work' },
    { key: 'education'},
    { key: 'awards'  },
    { key: 'certifications'},
    { key: 'skills'  },
    { key: 'hobbies' },
    { key: 'languages'},
    { key: 'references' },
    { key: 'extras' },
  ];

export default info ;