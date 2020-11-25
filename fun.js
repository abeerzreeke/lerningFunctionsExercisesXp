
// Exercise 1 : Keyless Car

const checkDriverAge = (age) =>{


     if (Number(age) < 18) {
         alert("Sorry, you are too yound to drive this car. Powering off");
     } else if (Number(age) > 18) {
         alert("Powering On. Enjoy the ride!");
     } else if (Number(age) === 18) {
         alert("Congratulations on your first year of driving. Enjoy the ride!");
     }
 }

// checkDriverAge(92)

//Exercise 2 : Is_Blank

let Is_Blank = (str) => {

     let long = (str.length > 0) ?
     console.log('true') :
     console.log('false');
  
}
Is_Blank("")

//Exercise 5 : Amazon Shopping

let amazonBasket = {
     glasses: 1,
     books: 2,
     floss: 100
}

let item = prompt("What item you wants?");


     if (`${item}` in amazonBasket){
         alert("yes is in the basket  ")
     }
     else{
         alert("No, isn't in the basket  ")
    
 }

//Exercise 6 : What’s In My Wallet ?

let stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}  

 let prices = {    
     "banana": 4, 
     "apple": 2, 
     "pear": 1,
     "orange": 1.5,
     "blueberry":10
 } 

 var shoppingList = ["banana", "orange", "apple"];
 var priceSpent = 0;
 let  myBill = () => {

     for(let i of shoppingList){
         if (i in prices)
         priceSpent += prices[i];
         stock[i]=(stock[i]-1)
     }
     return(priceSpent)
 }

console.log(myBill())
console.log(stock)

//Exercise 9 : Omnipresent Value

var numbers = [[3, 3], [3, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
var val = prompt("Put A Value");
var count = 0;
const isOmnipresent = (numbers,val) => {

  for (var i = 0 ; i < numbers.length; i++){
        for(var x = 0; x < numbers[i].length; x++){
             if(val == numbers[i][x]){
                 count++;
                 break;
             }         
         }
    }
    if(count == numbers.length){
        alert('true')
    }
    else{
        alert('false')
    }
}

isOmnipresent(numbers,val)


//Exercise 10 : Vacations Costs

const hotel_cost = () => {

    do {
        var numOfNights = parseInt(prompt('Please Put number of nights you wants to stay in the hotel.'));

      }
    while (!Number.isInteger(numOfNights));

    var total = numOfNights * 140;
    console.log(`Your Total Price Of All Nights In Hotel Is ${total} $ `);
}

// console.log(hotel_cost())

const plane_ride_cost = () =>{

    do { 
        var destination = prompt('Please Put Your Destination.');

      }
    while (/^\d+$/.test(destination.trim()) || !destination);

    
    switch (capitalizeFirstLetter(destination)) {
      case 'London':
        console.log('The Plane Tickets Cost In London Is 183$ .');
        break;
      case 'Paris':
        console.log('The Plane Tickets Cost In Paris Is 220$ .');
        break;
      default:
        console.log(`The Plane Tickets Cost In ${destination} Is 300$`);
        break;
      
    } 

    function capitalizeFirstLetter(destination) {
      return destination.charAt(0).toUpperCase() + destination.slice(1);
    }
   
}

// plane_ride_cost()

const rental_car_cost = () => {

  var totalCosts = 0;

  do {
    var carDays = parseInt(prompt('Please Put number of days you wants to rent the car.'));

  }
  while (!Number.isInteger(carDays));


  if (carDays <= 10){totalCosts = carDays * 40;}
  else {totalCosts = carDays * 40 * 0.95}

  console.log(` The Car Cost: ${totalCosts} $`);

}

// rental_car_cost()

const total_vacation_cost = () => {
     
  hotel_cost()
  plane_ride_cost()
  rental_car_cost()

}

total_vacation_cost()





















