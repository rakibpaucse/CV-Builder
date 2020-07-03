const info  = {
  profile :   {         
        items :  { photoUrl : '' , firstName : '' , lastName : '' , occupation : '' , parmanentAddress : '' , currentAddress : '' , phoneNumber : '' , website : '' , email : ''} 
    } ,

    objective : { 
         
        items : { shouldshow : false , objectiveHeader : ''}
    } , 

     work_experience : { 
       
        items :  { shouldshow : false , list : [] , orgName : '' , role : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    education : { 
        
        items :  { shouldshow : false , list : [] , institutionName : '' , major : '' , grade : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    awards :  { 
    
        items :  { shouldshow : false , list : [] ,title : '' , subitle : '' , description : '' } 
    } , 
    certifications : { 
        
        items :  { shouldshow : false , list : [] , name : '' , authority : '' , description : '' } 
    } , 
    skill : { 
       
        items :  { shouldshow : false , list : [] , skill : '' } 
    } , 
    hobby :  { 
       
        items :  { shouldshow : false , list : [] , hobby : '' } 
    } , 
    languages : { 
        
        items :  { shouldshow : false , list : [] , languageName : '' , level : '' , rating : '' } 
    } , 
    references : { 
        
        items :  { shouldshow : false , list : [] , name : '' , position : '' , phoneNumber : '' ,  emailAddress : '' , description : '' } 
    } ,
    extra_curriculam : { 
        
        items :  { shouldshow : false , list : [] , curriculamName : '' , curriculamDetails: '' , description : '' } 
    } 
}

const newState = JSON.parse(JSON.stringify(info));


export default newState ;