$('#order').click( (e)=>{
    $('#form').css({'display': 'block'})
})

//pizza prices
var extra = $('#xx-large') ;
extra = 1400
var large = $('#large');
large = 1100;
var medium = $('#medium');
meduim = 1800;
var small = $('#small');
small = 600;

var deliveryfee = 250;

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

console.log(extra)
//all spaces filled
function allcategorieschecked(){
    if($('.pizzaSize').prop('checked') == false){
        alert('fill all spaces')
    }else if($('.pizzaCrust').prop('checked') == false){
        alert('fill crust')
    }else ( $('.pizzaToppings').prop('checked') == false)
    {
        alert('select toppings')
    }
}

function sausageToppings(){
    if($(xx-large).prop('checked') == true){
        var pizzaPrice = extra * sausage
    }else if($('.large').prop('checked')){
        var pizzaPrice = large * sausage
    }else if($('.medium').prop('checked')){
        var pizzaPrice = medium * sausage
    }else
        var pizzaPrice = small * sausage
}


function pizzasize(){
    if($('.extra').prop('checked')== true){
        if($('.sausage').prop('checked') == true){
            var pizzaPrice = extra * sausage
        }else if ($('.chesse').prop('checked') == true){
            var pizzaPrice = extra * chesee
        }
    }
}
$('#submit').click( (e)=>{
     allcategorieschecked();
     //sausage topping

    var delivery = $('#delivery') 
    if(delivery.prop('checked') == true){
       var address = prompt('Enter your Address');
    }

    
})

