$('#order').click( (e)=>{
    $('#form').css({'display': 'block'})
})
var pizzaPrice;
var nm = $('input#pizzaNumber').val();
var numberOfPizza  =nm

//var deliveryFee;
//pizza prices
/* var extra = $('#xx-large') ;
extra = 1400
var large = $('#large');
large = 1100;
var medium = $('#medium');
meduim = 1800;
var small = $('#small');
small = 600;

//toppings prices
var sausage = $('#Sausage') 
sausage = 200
var cheese = $('#extra-cheese') 
cheese = 300;
var onions = $('#onions') 
onions = 150
var mushrooms = $('#mushrooms');
mushrooms = 400
var pepper = $('#green pepper');
pepper = 100  */ 

//all check
function validation(){
   
    if($('.pizzaToppings:checked').length == 0){
        alert('select atleast one checkbox  ')
        
    }
   
}


/* function pizzasize(){
    if($('#xx-large').prop('checked')== true){
        if($('#sausage').prop('checked') == true){
            pizzaPrice = extra + sausage
        }else if($('#extra-chesee').prop('checked') == true){
            pizzaPrice = extra + cheese
        }else if($('#mushroom').prop('checked') == true){
            pizzaPrice = extra + mushroom
        }else if($('#onions').prop('checked') == true){
            pizzaPrice = extra + onions
        }else 
            pizzaPrice =  extra + pepper

            large
    }else if ($('#large').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            pizzaPrice = large + sausage
        }else if($('#extra-cheese').prop('checked') == true){
            pizzaPrice = large + cheese
        }else if($('#mushroom').prop('checked') == true){
            pizzaPrice = large + mushroom
        }else if($('#onions').prop('checked') == true){
            pizzaPrice = large + onions
        }else 
            pizzaPrice =  large + pepper
            //medium
    }else if ($('#small').prop('checked') == true){
        if($('#sausage').prop('checked') == true){
            pizzaPrice = medium + sausage
        }else if($('#extra-cheese').prop('checked') == true){
            pizzaPrice = medium + cheese
        }else if($('#mushroom').prop('checked') == true){
            pizzaPrice = medium + mushroom
        }else if($('#onions').prop('checked') == true){
            pizzaPrice = medium + onions
        }else 
            pizzaPrice =  medium + pepper
    }else
        //small pizza
        if($('#sausage').prop('checked') == true){
            pizzaPrice = small + sausage
        }else if($('#extra-cheese').prop('checked') == true){
            pizzaPrice = small + cheese
        }else if($('#mushroom').prop('checked') == true){
            pizzaPrice = small + mushroom
        }else if($('#onions').prop('checked') == true){
            pizzaPrice = small + onions
        }else 
            {pizzaPrice =  small + pepper}
          
} */

//checking for a delivery fee
/* function deliveryFee(){
    var deliveryfee = 200; 
    var delivery = $('#delivery') 
    if(delivery.prop('checked') == true){
       var address = prompt('Enter your Address');
    }
} */

$('#submit').click( (e)=>{
    e.preventDefault();
    validation();
        var deliveryfee = 200; 
        var delivery = $('#delivery') 
        if(delivery.prop('checked') == true){
           var address = prompt('Enter your Address');
        }

        //
        var extra = $('#xx-large') ;
extra = 1400
var large = $('#large');
large = 1100;
var medium = $('#medium');
meduim = 1800;
var small = $('#small');
small = 600;

//toppings prices
var sausage = $('#Sausage') 
sausage = 200
var cheese = $('#extra-cheese') 
cheese = 300;
var onions = $('#onions') 
onions = 150
var mushrooms = $('#mushrooms');
mushrooms = 400
var pepper = $('#green pepper');
pepper = 100 
        //
    function pizzasize(){
        if($('#xx-large').prop('checked')== true){
            if($('#sausage').prop('checked') == true){
                pizzaPrice = extra + sausage
            }else if($('#extra-chesee').prop('checked') == true){
                pizzaPrice = extra + cheese
            }else if($('#mushroom').prop('checked') == true){
                pizzaPrice = extra + mushroom
            }else if($('#onions').prop('checked') == true){
                pizzaPrice = extra + onions
            }else 
                pizzaPrice =  extra + pepper
    
                large
        }else if ($('#large').prop('checked') == true){
            if($('#sausage').prop('checked') == true){
                pizzaPrice = large + sausage
            }else if($('#extra-cheese').prop('checked') == true){
                pizzaPrice = large + cheese
            }else if($('#mushroom').prop('checked') == true){
                pizzaPrice = large + mushroom
            }else if($('#onions').prop('checked') == true){
                pizzaPrice = large + onions
            }else 
                pizzaPrice =  large + pepper
                //medium
        }else if ($('#small').prop('checked') == true){
            if($('#sausage').prop('checked') == true){
                pizzaPrice = medium + sausage
            }else if($('#extra-cheese').prop('checked') == true){
                pizzaPrice = medium + cheese
            }else if($('#mushroom').prop('checked') == true){
                pizzaPrice = medium + mushroom
            }else if($('#onions').prop('checked') == true){
                pizzaPrice = medium + onions
            }else 
                pizzaPrice =  medium + pepper
        }else
            //small pizza
            if($('#sausage').prop('checked') == true){
                alert()
                pizzaPrice = small + sausage
            }else if($('#extra-cheese').prop('checked').val() == true){
                console.log(pizzaPrice = small + cheese)
            }else if($('#mushroom').prop('checked') == true){
                pizzaPrice = small + mushroom
            }else if($('#onions').prop('checked') == true){
                pizzaPrice = small + onions
            }else 
                pizzaPrice =  small + pepper
              
                console.log( pizzaPrice)
    }

    pizzasize()
    console.log(large + pepper + deliveryfee)
            console.log(  deliveryfee)
  
})