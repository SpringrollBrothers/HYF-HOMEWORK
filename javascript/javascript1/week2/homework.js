//Formal fullname


function getFullname(firstname,surname,useFormalName = false){ 
    if (useFormalName){         
        return `Lord.${firstname} ${surname}`
    }else{
       return `${firstname} ${surname}`
    }
    } 
    
    let firstName1=getFullname('Benjamin','Button');
    let firstName2=getFullname('Benjamin','Button',true);
    
    console.log(firstName1);
    console.log(firstName2);