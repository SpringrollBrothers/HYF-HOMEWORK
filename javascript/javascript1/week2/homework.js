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




//Event application 

let today=new Date();
let todayIndexWeekday=today.getDay();
const weekdays=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday']

let eventdaysleft=10;
let eventday = (todayIndexWeekday+ eventdaysleft) % 7
console.log(weekdays[eventday]);



//Weather wear

function chooseClothesToWear(temperature){
    if(temperature>0 && temperature<13){
        console.log(`What about some jackets and a hat`);
    }else if (temperature>13 && temperature< 20){
        console.log(`Wear hoodie and sweatpants`);
    }else{
console.log(`wear shorts`);
    }
}
chooseClothesToWear(16);