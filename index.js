var order = document.getElementById('order');
var cancel = document.getElementById('cancel');
var form = document.getElementById('form');
var  submit = document.getElementById('submit');
var deliver = document.getElementById('delivery');
var  num = document.getElementById('pizzaNumber');
var myOrder = document.getElementById('myOrder')
var pizzanum = num.value;                   
//sizes
var large = document.getElementById('large');
var medium = document.getElementById('medium');
var small = document.getElementById('small');

//toppings
var mushroom  = document.getElementById('mushrooms');
var onions = document.getElementById('onions');
var cheese = document.getElementById('extra-cheese');
var sausage = document.getElementById('sausage');
var greenPepper = document.getElementById('green-pepper')

//crust
var crispy = document.getElementById('crispy');
var stuffed = document.getElementById('stuffed');
var glutenFree = document.getElementById('gluten-free')

var totals;
var address;
var pizzaPrice;
var deliveryfee = 200

// set pricing
var pizzaSize = {
    large : 1100,
    medium : 800,
    small : 600
}

var toppingsPrices = {
    mushroom : 400,
    xcheese : 300,
    onions : 100,
    greenPepper : 150,
    sausage : 500
}

var crust = {
    crispy : 200,
    stuffed : 400,
    glutenFree : 500
}
order.addEventListener('click', showform);
cancel.addEventListener('click', checkout);
submit.addEventListener('click', totalPricing)

function showform(){
    form.style.display = 'block'
}




function delivery(){
   if(deliver.checked == true){
       address = prompt('enter your address')
       pizzaPrice += deliveryfee
   }else
   {
       alert( 'pick up in 20min')
   }

}



function pricings(){
    delivery()
    if(large.checked == true){
        if(crispy.checked == true){
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.large + toppingsPrices.mushroom + crust.crispy) * num.value;
                var confirms =`Your Order: ${num.value} large  pizza with a crispy crust and mushroom toppings for ${pizzaPrice} `;
                confirm( confirms)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.xcheese + crust.crispy) * num.value; 
                confirm(`Your Order: ${num.value} large  pizza with  a crispy crust and extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.onions + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with  a crispy crust and onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.sausage + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with  a crispy crust and sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.large + toppingsPrices.greenPepper + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with  a crispy crust and green pepper toppings for ${pizzaPrice} `)
            }
        }else if(stuffed.checked == true){
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.large + toppingsPrices.mushroom + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.xcheese + crust.stuffed) * num.value; 
                confirm(`Your Order: ${num.value} large  pizza with extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.onions + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.sausage + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.large + toppingsPrices.greenPepper + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with green pepper toppings for ${pizzaPrice} `)
            }
        } else(glutenFree.checked == true)
        {
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.large + toppingsPrices.mushroom + crust.glutenFree ) * num.value;
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.xcheese + crust.glutenFree ) * num.value; 
                confirm(`Your Order: ${num.value} large  pizza with extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.onions + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.large + toppingsPrices.sausage + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.large + toppingsPrices.greenPepper + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} large  pizza with green pepper toppings for ${pizzaPrice} `)
            }
        } 
    } else if(medium.checked == true){
        if(crispy.checked == true){
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.mushroom + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.xcheese + crust.crispy) * num.value; 
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.onions + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.sausage + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.medium + toppingsPrices.greenPepper + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and green pepper toppings for ${pizzaPrice} `)
            }
        }else if(stuffed.checked == true){
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.mushroom + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with  a stuffed crust and mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.xcheese + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a stuffed crust and extra cheese toppings for ${pizzaPrice} `) 
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.onions + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a stuffed crust and onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.sausage + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a stuffed crust and sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.medium + toppingsPrices.greenPepper + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a stuffed crust and green pepper toppings for ${pizzaPrice} `)
            }
        } else(glutenFree.checked == true)
        {
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.mushroom + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with  a gluten free crust and mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.xcheese + crust.glutenFree ) * num.value; 
                confirm(`Your Order: ${num.value} meduim  pizza with gluten free crust and  extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.onions + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with gluten free crust and  onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.medium + toppingsPrices.sausage + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with gluten free crust and  sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.medium + toppingsPrices.greenPepper + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with gluten free crust and  green pepper toppings for ${pizzaPrice} `)
            }
        } 
    }else(small.checked == true)
    {
        if(crispy.checked == true){
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.small + toppingsPrices.mushroom + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.xcheese + crust.crispy) * num.value; 
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.onions + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.sausage + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with a crispy crust and sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.small + toppingsPrices.greenPepper + crust.crispy) * num.value;
                confirm(`Your Order: ${num.value} meduim  pizza with green pepper toppings for ${pizzaPrice} `)
            }
        }else if(stuffed.checked == true){
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.small + toppingsPrices.mushroom + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with a stuffed crust and  mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.xcheese + crust.stuffed) * num.value; 
                confirm(`Your Order: ${num.value} small  pizza with  a stuffed crust and extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.onions + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with  a stuffed crust and onion toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.sausage + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with  a stuffed crust and sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.small + toppingsPrices.greenPepper + crust.stuffed) * num.value;
                confirm(`Your Order: ${num.value} small pizza with a stuffed crust and  green pepper toppings for ${pizzaPrice} `)
            }
        } else(glutenFree.checked == true)
        {
            if(mushroom.checked == true ){
                pizzaPrice = (pizzaSize.small + toppingsPrices.mushroom + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with gluten free crust and mushroom toppings for ${pizzaPrice} `)
            console.log(pizzaPrice)
            }else if(cheese.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.xcheese + crust.glutenFree ) * num.value; 
                confirm(`Your Order: ${num.value} small  pizza with  gluten free crust and extra cheese toppings for ${pizzaPrice} `)
            }else if(onions.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.onions + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with gluten free crust and onions toppings for ${pizzaPrice} `)
            }else if(sausage.checked == true){
                pizzaPrice = (pizzaSize.small + toppingsPrices.sausage + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with gluten free crust and sausage toppings for ${pizzaPrice} `)
            }else( greenPepper.checked == true)
            {
                pizzaPrice = (pizzaSize.small + toppingsPrices.greenPepper + crust.glutenFree ) * num.value;
                confirm(`Your Order: ${num.value} small  pizza with  gluten free crust andgreen pepper toppings for ${pizzaPrice} `)
            }
        } 
    }
    
}
function totalPricing(e){
    e.preventDefault();
    pricings()
    console.log(pizzaPrice)

}

function checkout(){
    e.preventDefault();
    form.style.display = 'none';
    
};
