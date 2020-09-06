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



function pricing(){
    function delivry(){
        var total;
        var deliveryfee = 250;
        if ($('#delivery').prop('checked') == true){
            pizzaSize = pizzaPrice + 250;
            
    var numberOfPizzas = $('#pizzaNumber').val()
   //extra large and toppings
    if($('#xx-large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.sausage +250) * numberOfPizzas;
            $('.myOrder').append(`Your order is  an extra Large pizza with sausage toppings for Ksh ${pizzaPrice}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.xcheese) * numberOfPizzas;
            $('.myOrder').append(`Your order is  an extra Large pizza with extra cheese toppings  for Ksh ${pizzaPrice}`)
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.onions ) * numberOfPizzas;
            $('.myOrder').append(`Your order is  an extra Large pizza with onion toppings  for Ksh ${pizzaPrice}`);
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.greenPepper ) * numberOfPizzas;
            $('.myOrder').append(`Your order is  an extra Large pizza with green pepper toppings  for Ksh ${pizzaPrice}`);
        }
        else {
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.mushroom ) * numberOfPizzas;
            $('.myOrder').append(`Your order is  an extra Large pizza with mushroom toppings  for Ksh ${pizzaPrice}`)
        }
        //large pizza
    }else if($('large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.sausage ) * numberOfPizzas;
            $('.myOrder').append(`Your order is  a  Large pizza with sausage toppings  for Ksh ${pizzaPrice}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.xcheese ) * numberOfPizzas;
            $('.myOrder').append(`Your order is  a  Large pizza with extra cheese toppings  for Ksh ${pizzaPrice}`)
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.onions)  * numberOfPizzas;
            $('.myOrder').append(`Your order is  a  Large pizza with onion toppings  for Ksh ${pizzaPrice}`);
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = (pizzaSize.large + toppingsPrices.greenPepper)  * numberOfPizzas;
            $('.myOrder').append(`Your order is  a  Large pizza with green pepper toppings  for Ksh ${pizzaPrice}`);
        }
        else {
            var pizzaPrice = (pizzaSize.large + toppingsPrices.mushroom)  * numberOfPizzas;
            $('.myOrder').append(`Your order is  a  Large pizza with mushroom toppings  for Ksh ${pizzaPrice}`)
        }
        //medium pizza
   }else if($('#medium').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.sausage)  * numberOfPizzas;
            $('.myOrder').append(`Your order is   medium pizza with sausage toppings  for Ksh ${pizzaPrice}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.xcheese ) * numberOfPizzas;
            $('.myOrder').append(`Your order is   medium pizza with extra cheese toppings  for Ksh ${pizzaPrice}`)
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.onions ) * numberOfPizzas;
            $('.myOrder').append(`Your order is   medium pizza with onion toppings  for Ksh ${pizzaPrice}`);
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = (pizzaSize.medium + toppingsPrices.greenPepper)  * numberOfPizzas;
            $('.myOrder').append(`Your order is   medium pizza with green pepper toppings  for Ksh ${pizzaPrice}`);
        }
        else {
            var pizzaPrice = (pizzaSize.xlarge + toppingsPrices.mushroom ) * numberOfPizzas;
            $('.myOrder').append(`Your order is   medium pizza with mushroom toppings  for Ksh ${pizzaPrice}`)
        }
        //small
    }   if($('#small').prop('checked') == true){
            if($('#sausage').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.sausage)  * numberOfPizzas;
                $('.myOrder').append(`Your order is  small  pizza with sausage toppings  for Ksh ${pizzaPrice}`)
                
            }else if($('#xcheese').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.xcheese ) * numberOfPizzas;
                $('.myOrder').append(`Your order is  small  pizza with extra cheese toppings  for Ksh ${pizzaPrice}`)
            }else if($('#onions').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.onions ) * numberOfPizzas;
                $('.myOrder').append(`Your order is  small  pizza with onion toppings  for Ksh ${pizzaPrice}`);
            }else if($('#green-pepper').prop('checked') == true){
                var pizzaPrice = (pizzaSize.small + toppingsPrices.greenPepper)  * numberOfPizzas;
                $('.myOrder').append(`Your order is  small  pizza with green pepper toppings  for Ksh ${pizzaPrice}`);
            }
            else {
                var pizzaPrice = (pizzaSize.small + toppingsPrices.mushroom ) * numberOfPizzas;
                $('.myOrder').append(`Your order is  small  pizza with mushroom toppings  for Ksh ${pizzaPrice}`)
        }

    }
}}
     delivry()

}



$('#submit').click( (e) =>{
    e.preventDefault();
    pricing();

    
})

