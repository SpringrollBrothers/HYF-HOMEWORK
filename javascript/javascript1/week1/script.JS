const yearOfBirth = 1987;
const yearOfFutrue=2027;
const age = yearOfFutrue - yearOfBirth;
console.log("You will be "+age+ " years old in "+yearOfFutrue+".");


const dogYearOfBirth= 2021;
const dogYearFuture=2027;
let dogYear= dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears= true;
if(shouldShowResultInDogYears)
    {
        dogYear*=7;
console.log("Your dog will be "+ dogYear+" dog year old in " +dogYearFuture+".");
}
else{
    console.log("Your dog will be " +dogYear+" human years old in"+dogYearFuture+".");
}