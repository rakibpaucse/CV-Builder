
const info  = {
  profile :   {         
        items :  { photoUrl : 'https://pickaface.net/gallery/avatar/demo.webmaster541295de29059.png' , firstName : 'Nazrul Islam' , lastName : 'Rakib' , occupation : 'Fullstack Web developer' , parmanentAddress : 'Noakhali' , currentAddress : 'Mirpur' , phoneNumber : '01521333799' , website : 'www.rakib.me' , email : 'rakibpaucse@gmail.com'} 
    } ,

    objective : { 
         
        items : { shouldshow : true , objectiveHeader : 'My Objective' , description : 'This is Objective . And some more dummy text and text'}
    } , 

     work_experience : { 
       
        items :  { shouldshow : true , 
            list : [{shouldshow : true ,
                        orgName : 'Google.com' , role : 'Dev Ops' , startDate : '2005' , endDate : '2008' , description : 'It was good' } ,

                    {shouldshow : true ,
                        orgName : 'MicroSoft' , role : 'Software Eng' , startDate : '2008' , endDate : '2019' , description : 'It was fantastic' }] ,
             orgName : '' , role : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    education : { 
        
        items :  { shouldshow : true , list : [
            { shouldshow : true , list : [] , institutionName : 'BN college Dhaka' , major : 'SSC' , grade : 'A+' , startDate : '2003' , endDate : '2013' , description : 'I miss my School' },
            { shouldshow : true , list : [] , institutionName : 'BN college Dhaka' , major : 'HSC' , grade : 'A+' , startDate : '2013' , endDate : '2015' , description : 'I Love My college' }
            ,{ shouldshow : true , list : [] , institutionName : 'PrimeAsia University' , major : 'BSC' , grade : '3.81' , startDate : '2017' , endDate : '2020' , description : 'Dont know' }
    ] , institutionName : '' , major : '' , grade : '' , startDate : '' , endDate : '' , description : '' } 
    } , 
    awards :  { 
    
        items :  { shouldshow : true , list : [
            { shouldshow : true , list : [] ,title : 'Divisional HandWriting' , subtitle : 'Bangla HandWriting' , description : '' },
            { shouldshow : true , list : [] ,title : 'IT Olympiad' , subtitle : 'University IT Olympiad' , description : '' },
            ] ,title : '' , subtitle : '' , description : '' } 
    } , 
    certifications : { 
        
        items :  { shouldshow : true , list : [
        {
            shouldshow : true , list : [] , name : 'কথা বন্ধু ' , authority : 'প্রথম আলো' , description : ''
        },{
            shouldshow : true , list : [] , name : 'সেরা পড়ুয়া' , authority : 'বিশ্বসাহিত্য কেন্দ্র' , description : ''
        },{
            shouldshow : true , list : [] , name : 'Progrmming Contest' , authority : 'Inter University Programming Contest' , description : ''
        }] , name : '' , authority : '' , description : '' } 
    } , 
    skill : { 
       
        items :  { shouldshow : true , list : [
            {shouldshow : true , list : [] , skill : 'Programming'},
            {shouldshow : true , list : [] , skill : 'Web Automation'},
            {shouldshow : true , list : [] , skill : 'Writting Bangla Cover and blog'},
            {shouldshow : true , list : [] , skill : 'Manage Computer'},
            {shouldshow : true , list : [] , skill : 'Hiking'},
            {shouldshow : true , list : [] , skill : 'Driving'},
            {shouldshow : true , list : [] , skill : 'swimming'},
        ] , skill : '' } 
    } , 
    hobby :  { 
       
        items :  { shouldshow : true , list : [
            {  shouldshow : true , list : [] , hobby : 'Traveling'},
            {  shouldshow : true , list : [] , hobby : 'Reading'},
            {  shouldshow : true , list : [] , hobby : 'Gamming'},
            {  shouldshow : true , list : [] , hobby : 'Watching Movie'},
            {  shouldshow : true , list : [] , hobby : 'Playing Outdoor games'},
            ] , hobby : '' } 
    } , 
    languages : { 
        
        items :  { shouldshow : true , list : [
            { shouldshow : true , list : [] , languageName : 'Bangla' , level : 'Mother Tounge' , rating : '5'},
            { shouldshow : true , list : [] , languageName : 'English' , level : 'Secondery Language' , rating : '4'}
         ] , languageName : '' , level : '' , rating : '' } 
    } , 
    references : { 
        
        items :  { shouldshow : true , list : [
            {shouldshow : true , list : [] , name : 'Sheikh Hasina' , position : 'Prime Minister(BNG)' , phoneNumber : '0100000000' ,  emailAddress : 'hasina.sheikh@gmail.com' , description : 'I love Him'},
            {shouldshow : true , list : [] , name : 'Donald Trump' , position : 'Prime Minister(USA)' , phoneNumber : '94663259681' ,  emailAddress : 'IamTrump@us.com' , description : ' He is a nice guy'}, 
            {shouldshow : true , list : [] , name : 'Ananta Jalil' , position : 'CEO Jalil group' , phoneNumber : '0195632533' ,  emailAddress : 'IamJalil@gamil.com' , description : ''}
] , name : '' , position : '' , phoneNumber : '' ,  emailAddress : '' , description : '' } 
    } ,
    extra_curriculam : { 
        
        items :  { shouldshow : true , list : [
            {shouldshow : true , list : [] , curriculamName : 'Debate' , curriculamDetails: '' , description : ''},
            {shouldshow : true , list : [] , curriculamName : 'Reading Books' , curriculamDetails: 'I love yo read' , description : ''},
            {shouldshow : true , list : [] , curriculamName : 'Graphics Designing' , curriculamDetails: 'I can make Presentaion , logo etc' , description : ''}
        ] , curriculamName : '' , curriculamDetails: '' , description : '' } 
    } 
}



const demoStore = JSON.parse(JSON.stringify(info));


export default demoStore ;