 const localStorage=window.localStorage;
 const cart_btn=document.getElementsByClassName('btn-cart');
 const delete_btn=document.getElementsByClassName('delete');

 eventListenerst();
 function eventListenerst(){
    window.addEventListener("load",function(){
        for(let i=0;i<cart_btn.length;i++) cart_btn[i].addEventListener('click',AddCart);
    })
 }
 function AddCart(e){
    let id=e.target.name;
    let price=parseInt(document.getElementById('p-price-'+id).innerText.split(' ')[0]);
    let count=parseInt(document.getElementById('p-count-'+id).value);
    let cart={
        product_name:document.getElementById('p-name'+id).innerText,
        product_price:price,
        product_count:count,
        total_Price:price*count

    }
    
    AddCartsToStorage(cart);
    ShowAlert();
 }

 function GetCartsFromStorage(){
    let carts;
    if(localStorage.getItem("carts")===null) carts=[];
    else carts=JSON.parse(localStorage.getItem("carts"));
  
    return carts;
}
function AddCartsToStorage(){
    let carts=GetCartsFromStorage();
    carts.push(data);
    localStorage.setItem("carts",JSON.stringify(carts));
}
function DeleteCartsFromStorage(id){
    let carts=GetCartsFromStorage();
    carts.splice(id,1);
    localStorage.setItem("carts",JSON.stringify(carts));
}
function ShowAlert(){
    $('#success_alert').show();
    setTimeout(function(){$('#success-alert').hide();},2000);
}