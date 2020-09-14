
const info  = {
    profile :   {         
          items :  { photoUrl : '' , firstName : '' , lastName : '' , occupation : '' , parmanentAddress : '' , currentAddress : '' , phoneNumber : '' , website : '' , email : ''} 
      } ,
  
      objective : { 
           
          items : { shouldshow : true , objectiveHeader : '' , description : ''}
      } , 
  
       work_experience : { 
         
          items :  { shouldshow : true , list : [] , orgName : '' , role : '' , startDate : '' , endDate : '' , description : '' } 
      } , 
      education : { 
          
          items :  { shouldshow : true , list : [] , institutionName : '' , major : '' , grade : '' , startDate : '' , endDate : '' , description : '' } 
      } , 
      awards :  { 
      
          items :  { shouldshow : true , list : [] ,title : '' , subtitle : '' , description : '' } 
      } , 
      certifications : { 
          
          items :  { shouldshow : true , list : [] , name : '' , authority : '' , description : '' } 
      } , 
      skill : { 
         
          items :  { shouldshow : true , list : [] , skill : '' } 
      } , 
      hobby :  { 
         
          items :  { shouldshow : true , list : [] , hobby : '' } 
      } , 
      languages : { 
          
          items :  { shouldshow : true , list : [] , languageName : '' , level : '' , rating : '' } 
      } , 
      references : { 
          
          items :  { shouldshow : true , list : [] , name : '' , position : '' , phoneNumber : '' ,  emailAddress : '' , description : '' } 
      } ,
      extra_curriculam : { 
          
          items :  { shouldshow : true , list : [] , curriculamName : '' , curriculamDetails: '' , description : '' } 
      } 
  }
  
  
  
  const resetStore = JSON.parse(JSON.stringify(info));
  
  
  export default resetStore ;