function AddtoCart(name) {

    debugger;

    let shoppingcart = document.querySelector('#shoppingcart tbody');

    let newItem = shoppingcart.insertRow();

    let itemProduct = newItem.insertCell(0);
    itemProduct.innerHTML = name;

    let elementId = '#' + name.replace('','');

    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;

    let itemQuantity = newItem.insertCell(2);
    itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;
    document.querySelector(elementId + ' td .quantity') = '';  

}

function checkout()
{
document.querySelectorAll('#shoppingcart tbody tr').forEach(row => row.remove());
alert("End Checkout");

}

//window.sumInputs = function() {
    //var inputs = document.getElementsByTagName('input'),
      //  result = document.getElementById('total'),
        //sum = 0;            
    
    //for(var i=0; i<inputs.length; i++) {
        //var ip = inputs[i];
    
        //if (ip.name && ip.name.indexOf("total") < 0) {
            //sum += parseInt(ip.value) || 0;
      //  }
    
    //}
    
    //result.value = sum;
//}