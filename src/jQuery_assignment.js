lists=[];
$(document).ready(function(){
  $("#submit").click(function(){
  $("#update").hide();
  var product=addItem();
  if (product!= -1){
    console.log("Entering the push array part");
    lists.push(product);
    display(lists);
  }
  });
  $("body").on("click","#editProduct",function(){
    $("#submit").hide();
    $("#update").show();
    console.log("Entered the Edit function");
    var editId=$(this).data("id");
    var editName=$("#productName").val();
    var editPrice=$("#productPrice").val();
    var editQuantity=$("#productQuantity").val();
    $("#productId").val(editId);
    $("#productName").val(editName);
    $("#productPrice").val(editPrice);
    $("#productQuantity").val(editQuantity);
    
  });


  $("body").on("click","#delProduct",function(){
    console.log("Entered the Delete function");
    var delId=$(this).data("id");
    $(this).parents('tr').empty();
    lists.splice(lists[i].pro_id==delId);
    console.log(lists);
  });

  $("#update").click(function(){
    console.log("Entered the update function");
    var updateId=$("#productId").val();
    var updateName=$("#productName").val();
    var updatePrice=$("#productPrice").val();
    var updateQuantity=$("#productQuantity").val();
    updateValidation(updateId,updateName,updatePrice,updateQuantity,lists);
  });
});



function updateValidation(updateId,updateName,updatePrice,updateQuantity,lists){
  console.log("Entered the update validation");
  if(lists.length>=1){
    console.log("List is not empty");
    for (i = 0; i < lists.length; i++){
      if(updateId == lists[i].pro_id){
        console.log("Item with this id exists so you can update it");
        lists[i].pro_id=updateId;
        lists[i].pro_name=updateName;
        lists[i].pro_price=updatePrice;
        lists[i].pro_quantity=updateQuantity;
        display(lists);
        $("#update").hide();
        $("#submit").show();
       productAdded();
        
      }else{
        console.log("Item with this id doesn't exists in list");
        $("#error").css({"background-color": "red", "border-width": "1px",
                      "border-style": "solid",
                      "border-radius": "5px",
                      "padding": "8px",
                      "margin": "5px",
                      "padding-left": "20px",
                      "padding-right": "60%",
                      "font-weight": "bold"});
        $("#error").html("Product with this Id doesn't exists");
        $("#error").fadeToggle(2000);
      }
}
}
}



function addItem(){
var id=$("#productId").val();
var name=$("#productName").val();
var price=$("#productPrice").val();
var quantity=$("#productQuantity").val();
var empty= emptyField(id,name,price,quantity);
var check = validation(id, lists);
if (!check && empty != -1) {
  var data = { pro_id: id, pro_name: name, pro_price: price,pro_quantity: quantity};
  productAdded(lists);
  return data;
} else {
  console.log("Yes there is some error");
  error(check,empty);
  return -1;
}
}


function emptyField(id,name,price,quantity){
console.log("You have entered the emptyfield function");
if(id.length === 0){
  console.log("Id field is empty")
  $("#productId").css("border-style","1px solid red");
  return -1;
}
if(name.length === 0){
console.log("Name field is empty");
$("#productName").css("border-style","1px solid red");
return -1;
}
if(price.length === 0){
  console.log("Price field is empty");
  $("#productPrice").css("border-style","1px solid red");
  return -1;
}
if(quantity.length === 0){
    console.log("quanity field is empty");
    $("#productQuantity").css("border-style","1px solid red");
    return -1;
}else {
  console.log("All fields filled");
  validation(id, lists);
  return 0;
  
}
}

function validation(id, lists) {
  console.log("You have Entered the validation function");
  for (i = 0; i < lists.length; i++) {
    if (id == lists[i].pro_id) {
      console.log("Id exists in list");
      return true;
    }
  }
}




function display(lists) {
  console.log("Entering display function");
  console.log(lists);
  var table =
    "<table><tr><th>Product ID </th><th> Product Name </th><th> Product Price </th><th> Product Quantity </th><th> Edit Details </th><th> Delete Product </th></tr>";
    for (var i = 0; i < lists.length; i++){
      table +=
          "<tr><td>" +
          lists[i].pro_id +
          "</td><td>" +
          lists[i].pro_name +
          "</td><td>" +
          lists[i].pro_price +
          "</td><td>" + lists[i].pro_quantity + 
          "</td><td><a href='#' id='editProduct' data-id=" +lists[i].pro_id +">Edit</a>" +
          "</td><td><a href='#' id='delProduct' data-id=" +lists[i].pro_id +">Delete</a></td></tr>";
      }
  table += "</table>";
  $("#table").html(table);
}






function error(check,empty){
  if(empty === -1){
    console.log("finally entered the empty field check");
    $("#error").css({"background-color": "red", "border-width": "1px",
                      "border-style": "solid",
                      "border-radius": "5px",
                      "padding": "8px",
                      "margin": "5px",
                      "padding-left": "20px",
                      "padding-right": "60%",
                      "font-weight": "bold"});
    $("#error").html("You Cant leave any fields empty");
    $("#error").fadeToggle(2000);
}else{
  console.log("Failed to add cause ID already exists")
    $("#error").css({"background-color": "red", "border-width": "1px",
                      "border-style": "solid",
                      "border-radius": "5px",
                      "padding": "8px",
                      "margin": "5px",
                      "padding-left": "20px",
                      "padding-right": "60%",
                      "font-weight": "bold"});
    $("#error").html("ID already exists");
    $("#error").fadeToggle(2000);
  }
}
  

function productAdded(){
    console.log("Product added in list")
    $("#error").css({"background-color":"green","border-width": "1px",
                    "border-style": "solid",
                    "border-radius": "5px",
                    "padding": "8px",
                    "margin": "5px",
                    "padding-left": "20px",
                    "padding-right": "60%",
                    "font-weight": "bold"});;
    $("#error").html("Product Added successfully");
    $("#error").fadeToggle(1000);
}
