 const info  = [
    { 
        title : 'profile' , 
        items : [ { photoUrl : '' , firstName : '' , lastName : '' , occupation : '' , parmanentAddress : '' , currentAddress : '' , phoneNumber : '' , website : '' , emailAddress : ''} ]
    } ,
    { 
        title : 'objective' , 
        items : [ { shouldShow : false , ObjectiveHeader : ''}]
    } , 
    { 
        title : 'Work Experience' ,
        items : [ { shouldShow : false , experiences : [] , orgName : '' , role : '' , startDate : '' , endDate : '' , description : '' } ]
    } , 
    { 
        title : 'education' ,
        items : [ { shouldShow : false , educations : [] , institutionName : '' , major : '' , grade : '' , startDate : '' , endDate : '' , description : '' } ]
    } , 
    { 
        title : 'awards' ,
        items : [ { shouldShow : false , awards : [] ,title : '' , subitle : '' , description : '' } ]
    } , 
    { 
        title : 'certifications' ,
        items : [ { shouldShow : false , certifications : [] , name : '' , authority : '' , description : '' } ]
    } , 
    { 
        title : 'skill' ,
        items : [ { shouldShow : false , skills : [] , skill : '' } ]
    } , 
    { 
        title : 'hobbies' ,
        items : [ { shouldShow : false , hobbies : [] , hobby : '' } ]
    } , 
    { 
        title : 'languages' ,
        items : [ { shouldShow : false , languages : [] , languageName : '' , level : '' , rateYourself : '' } ]
    } , 
    { 
        title : 'references' ,
        items : [ { shouldShow : false , references : [] , name : '' , position : '' , phoneNumber : '' ,  emailAddress : '' , description : '' } ]
    } ,
    { 
        title : 'extras' ,
        items : [ { shouldShow : false , extras : [] , curricilamName : '' , curriculamDetails: '' , description : '' } ]
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