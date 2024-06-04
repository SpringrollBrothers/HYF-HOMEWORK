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


const houseOfPeter=8*10*10;
const houseOfJulia=5*11*8;
const gardenOfPeter=100;
const gardenOfJulia=70;
const peterHousePriceShouldBe=houseOfPeter*2.5*1000+gardenOfPeter*300;
const juliahousePriceShouldBe=houseOfJulia*2.5*1000+gardenOfJulia*300;
const peterHousePriceCost= 2500000;
const juliahousePriceCost=1000000;
if(peterHousePriceCost<=peterHousePriceShouldBe)
    {console.log("Peter is having a good deal!");}
else{
    console.log("Peter is paying too much for the house!");
}

if(juliahousePriceCost<=juliahousePriceShouldBe)
    {console.log("Julia is having a good deal!");}
else{
    console.log("Julia is paying too much for the house!");
}