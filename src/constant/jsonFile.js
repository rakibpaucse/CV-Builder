const info  = {
  profile :   {         
        items :  { photoUrl : '' , firstName : '' , lastName : '' , occupation : '' , parmanentAddress : '' , currentAddress : '' , phoneNumber : '' , website : '' , email : ''} 
    } ,

    objective : { 
         
        items : { shouldShow : false , objectiveHeader : ''}
    } , 

     work_experience : { 
       
        items :  { shouldShow : false , list : [] , orgName : '' , role : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    education : { 
        
        items :  { shouldShow : false , list : [] , institutionName : '' , major : '' , grade : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    awards :  { 
    
        items :  { shouldShow : false , list : [] ,title : '' , subitle : '' , description : '' } 
    } , 
    certifications : { 
        
        items :  { shouldShow : false , list : [] , name : '' , authority : '' , description : '' } 
    } , 
    skill : { 
       
        items :  { shouldShow : false , list : [] , skill : '' } 
    } , 
    hobby :  { 
       
        items :  { shouldShow : false , list : [] , hobby : '' } 
    } , 
    languages : { 
        
        items :  { shouldShow : false , list : [] , languageName : '' , level : '' , rating : '' } 
    } , 
    references : { 
        
        items :  { shouldShow : false , list : [] , name : '' , position : '' , phoneNumber : '' ,  emailAddress : '' , description : '' } 
    } ,
    extra_curriculam : { 
        
        items :  { shouldShow : false , list : [] , curriculamName : '' , curriculamDetails: '' , description : '' } 
    } 
}

const newState = JSON.parse(JSON.stringify(info));


export default newState ;