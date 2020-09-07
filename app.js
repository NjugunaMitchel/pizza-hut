$('#order').click( (e) =>{
    $('#form').css({'display':'block'})
})

$('#cancel').click((e) =>{
    $('#form').css({'display':'none'})
})

var pizzaSize = {
    xlarge : 1400,
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
var adress;

function pricing(){
    function delivry(){
        var total;
        var deliveryfee = 250;
        if ($('#delivery').prop('checked') == true){
            total = pizzaPrice + deliveryfee;
             address = prompt('enter address details')
             alert(`Your order is  an extra Large pizza with sausage toppings for Ksh ${pizzaPrice} will be delivered at ${address}`)
        }  }  
     
    var numberOfPizzas = $('#pizzaNumber').val()
   //extra large and toppings
    if($('#xx-large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.sausage) * numberOfPizzas;
            delivry();
           // confirm(`Your order is  an extra Large pizza with sausage toppings for Ksh ${pizzaPrice} at ${address}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.xcheese) * numberOfPizzas;
            confirm(`Your order is  an extra Large pizza with extra cheese toppings  for Ksh ${pizzaPrice} at ${address}`)
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.onions ) * numberOfPizzas;
            confirm(`Your order is  an extra Large pizza with onion toppings  for Ksh ${pizzaPrice} at ${address}`);
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.greenPepper ) * numberOfPizzas;
            confirm(`Your order is  an extra Large pizza with green pepper toppings  for Ksh ${pizzaPrice} at ${address}`);
        }
        else {
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.mushroom ) * numberOfPizzas;
            confirm(`Your order is  an extra Large pizza with mushroom toppings  for Ksh ${pizzaPrice} at ${address}`)
        }
        //large pizza
    }else if($('large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.sausage ) * numberOfPizzas;
            confirm(`Your order is  a  Large pizza with sausage toppings  for Ksh ${pizzaPrice} at ${address}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.xcheese ) * numberOfPizzas;
            confirm(`Your order is  a  Large pizza with extra cheese toppings  for Ksh ${pizzaPrice} at ${address}`)
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.onions)  * numberOfPizzas;
            confirm(`Your order is  a  Large pizza with onion toppings  for Ksh ${pizzaPrice} at ${address}`);
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.greenPepper)  * numberOfPizzas;
            confirm(`Your order is  a  Large pizza with green pepper toppings  for Ksh ${pizzaPrice} at ${address}`);
        }
        else {
            var pizzaPrice = (pizzaSize.large + toppingsPrices.mushroom)  * numberOfPizzas;
            confirm(`Your order is  a  Large pizza with mushroom toppings  for Ksh ${pizzaPrice} at ${address}`)
        }
        //medium pizza
   }else if($('#medium').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.sausage)  * numberOfPizzas;
            confirm(`Your order is   medium pizza with sausage toppings  for Ksh ${pizzaPrice} at ${address}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.xcheese ) * numberOfPizzas;
            confirm(`Your order is   medium pizza with extra cheese toppings  for Ksh ${pizzaPrice} at ${address}`)
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.onions ) * numberOfPizzas;
            confirm(`Your order is   medium pizza with onion toppings  for Ksh ${pizzaPrice} at ${address}`);
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.greenPepper)  * numberOfPizzas;
            confirm(`Your order is   medium pizza with green pepper toppings  for Ksh ${pizzaPrice} at ${address}`);
        }
        else {
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.mushroom ) * numberOfPizzas;
            confirm(`Your order is   medium pizza with mushroom toppings  for Ksh ${pizzaPrice} at ${address}`)
        }
        //small
    }   if($('#small').prop('checked') == true){
            if($('#sausage').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.sausage)  * numberOfPizzas;
                confirm(`Your order is  small  pizza with sausage toppings  for Ksh ${pizzaPrice} at ${address}`)
                
            }else if($('#xcheese').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.xcheese ) * numberOfPizzas;
                confirm(`Your order is  small  pizza with extra cheese toppings  for Ksh ${pizzaPrice} at ${address}`)
            }else if($('#onions').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.onions ) * numberOfPizzas;
                confirm(`Your order is  small  pizza with onion toppings  for Ksh ${pizzaPrice} at ${address}`);
            }else if($('#green-pepper').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.greenPepper)  * numberOfPizzas;
                confirm(`Your order is  small  pizza with green pepper toppings  for Ksh ${pizzaPrice} at ${address}`);
            }
            else {
                var pizzaPrice = (pizzaSize.small + toppingsPrices.mushroom ) * numberOfPizzas;
                confirm(`Your order is  small  pizza with mushroom toppings  for Ksh ${pizzaPrice} at ${address}`)
        }

    }

     delivry()

}



$('#submit').click( (e) =>{
    e.preventDefault();
    pricing();

    console.log($('#pizzaNumber').val())
})

