const info  = {
  profile :   {         
        items :  { photoUrl : '' , firstName : '' , lastName : '' , occupation : '' , parmanentAddress : '' , currentAddress : '' , phoneNumber : '' , website : '' , email : ''} 
    } ,

    objective : { 
         
        items : { shouldShow : false , objectiveHeader : ''}
    } , 

     workExperience : { 
       
        items :  { shouldShow : false , experiences : [] , orgName : '' , role : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    education : { 
        
        items :  { shouldShow : false , educations : [] , institutionName : '' , major : '' , grade : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    awards :  { 
    
        items :  { shouldShow : false , awards : [] ,title : '' , subitle : '' , description : '' } 
    } , 
    certifications : { 
        
        items :  { shouldShow : false , certifications : [] , name : '' , authority : '' , description : '' } 
    } , 
    skill : { 
       
        items :  { shouldShow : false , skills : [] , skill : '' } 
    } , 
    hobby :  { 
       
        items :  { shouldShow : false , hobbies : [] , hobby : '' } 
    } , 
    languages : { 
        
        items :  { shouldShow : false , languages : [] , languageName : '' , level : '' , rateYourself : '' } 
    } , 
    references : { 
        
        items :  { shouldShow : false , references : [] , name : '' , position : '' , phoneNumber : '' ,  emailAddress : '' , description : '' } 
    } ,
    extras : { 
        
        items :  { shouldShow : false , extras : [] , curricilamName : '' , curriculamDetails: '' , description : '' } 
    } 
}

const newState = JSON.parse(JSON.stringify(info));
console.log(newState);


export default newState ;