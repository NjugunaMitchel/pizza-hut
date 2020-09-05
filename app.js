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
$('#submit').click( (e)=>{
     allcategorieschecked();
    let delivery = $('#delivery') 
    if(delivery.prop('checked') == true){
       let address = prompt('Enter your Address');
       alert(address)
    }

    function prize(a,b){
        let sum = a + b
        alert (sum)
    }
    prize(3, 3)

    console.log($('.pizzaCrust').val())
})

