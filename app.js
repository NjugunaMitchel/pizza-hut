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

var deliveryfee = 250;



function pricing(){
    var numberOfPizzas = $('#pizzaNumber').val()
   
    if($('#xx-large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = /* pizzaSize.xlarge + */ /* toppingsPrices.sausage * */ numberOfPizzas;
            $('.myOrder').append(`Your order is  an extra Large pizza with sausage toppings ${pizzaPrice}`)
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = pizzaSize.xlarge + toppingsPrices.xcheese * numberOfPizzas;
            $('.myOrder').append('Your order is  an extra Large pizza with extra cheese toppings')
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = pizzaSize.xlarge + toppingsPrices.onions;
            $('.myOrder').append('Your order is  an extra Large pizza with onion toppings');
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = pizzaSize.xlarge + toppingsPrices.greenPepper;
            $('.myOrder').append('Your order is  an extra Large pizza with green pepper toppings');
        }
        else {
            var pizzaPrice = pizzaSize.xlarge + toppingsPrices.mushroom;
            $('.myOrder').append('Your order is  an extra Large pizza with mushroom toppings')
        }
        //large pizza
    }else if($('large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = pizzaSize.large + toppingsPrices.sausage;
            $('.myOrder').append('Your order is  a  Large pizza with sausage toppings')
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = pizzaSize.large + toppingsPrices.xcheese;
            $('.myOrder').append('Your order is  a  Large pizza with extra cheese toppings')
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = pizzaSize.large + toppingsPrices.onions;
            $('.myOrder').append('Your order is  a  Large pizza with onion toppings');
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = pizzaSize.large + toppingsPrices.greenPepper;
            $('.myOrder').append('Your order is  a  Large pizza with green pepper toppings');
        }
        else {
            var pizzaPrice = pizzaSize.large + toppingsPrices.mushroom;
            $('.myOrder').append('Your order is  a  Large pizza with mushroom toppings')
        }
        //medium pizza
   }else if($('#medium').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            var pizzaPrice = pizzaSize.medium + toppingsPrices.sausage;
            $('.myOrder').append('Your order is   medium pizza with sausage toppings')
            
        }else if($('#xcheese').prop('checked') == true){
            var pizzaPrice = pizzaSize.medium + toppingsPrices.xcheese;
            $('.myOrder').append('Your order is   medium pizza with extra cheese toppings')
        }else if($('#onions').prop('checked') == true){
            var pizzaPrice = pizzaSize.medium + toppingsPrices.onions;
            $('.myOrder').append('Your order is   medium pizza with onion toppings');
        }else if($('#green-pepper').prop('checked') == true){
            var pizzaPrice = pizzaSize.medium + toppingsPrices.greenPepper;
            $('.myOrder').append('Your order is   medium pizza with green pepper toppings');
        }
        else {
            var pizzaPrice = pizzaSize.xlarge + toppingsPrices.mushroom;
            $('.myOrder').append('Your order is   medium pizza with mushroom toppings')
        }
        //small
    }   if($('#small').prop('checked') == true){
            if($('#sausage').prop('checked') == true){
                var pizzaPrice = pizzaSize.small + toppingsPrices.sausage;
                $('.myOrder').append('Your order is  small  pizza with sausage toppings')
                
            }else if($('#xcheese').prop('checked') == true){
                var pizzaPrice = pizzaSize.small + toppingsPrices.xcheese;
                $('.myOrder').append('Your order is  small  pizza with extra cheese toppings')
            }else if($('#onions').prop('checked') == true){
                var pizzaPrice = pizzaSize.small + toppingsPrices.onions;
                $('.myOrder').append('Your order is  small  pizza with onion toppings');
            }else if($('#green-pepper').prop('checked') == true){
                var pizzaPrice = pizzaSize.small + toppingsPrices.greenPepper;
                $('.myOrder').append('Your order is  small  pizza with green pepper toppings');
            }
            else {
                var pizzaPrice = pizzaSize.small + toppingsPrices.mushroom;
                $('.myOrder').append('Your order is  small  pizza with mushroom toppings')
        }

    }



}

$('#submit').click( (e) =>{
    e.preventDefault();
    pricing();

    console.log($('#pizzaNumber').val())
})

