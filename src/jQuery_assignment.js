lists=[];
$(document).ready(function(){
  $("#submit").click(function(){
  var product=addItem();
  if (product!= -1){
    console.log("Entering the push array part");
    lists.push(product);
    display(lists);
  }
  $("a").click(function(){
    console.log("Enter the clicked function");
    $(this).html("clicked");
  });
  

  $("a").click(function(){
    console.log("Enter the clicked function");
    $(this).html("Deleted");
  });


  });
});


function addItem(){
var id=$("#productId").val();
var name=$("#productName").val();
var price=$("#productPrice").val();
var quanity=$("#productQuantity").val();
var check = validation(id, lists);
if (!check) {
  var data = { pro_id: id, pro_name: name, pro_price: price,pro_quanity: quanity};
  return data;
} else {
  console.log("yes id exists");
  alert("Product with this ID is already added in List");
  return -1;
}
}



function validation(id, lists) {
  console.log("Hello id " + id);
  console.log(lists);
  for (i = 0; i < lists.length; i++) {
    if (id == lists[i].pro_id) {
      return true;
    }
  }
}

function display(lists) {
  console.log("Entering display function");
  console.log(lists);
  var table =
    "<table><tr><th>Product ID</th><th>Product Name</th><th>Product Price</th><th>Product Quality</th><th>Edit</th><th>Delete</th></tr>";
  for (var i = 0; i < lists.length; i++) {
    table +=
      "<tr><td>" +
      lists[i].pro_id +
      "</td><td>" +
      lists[i].pro_name +
      "</td><td>" +
      lists[i].pro_price +
      "</td><td>" + lists[i].pro_quanity + 
      "</td><td><a href='#'>Edit</a>" +
      "</td><td><a href='#'>Delete</a></td></tr>";
  }
  table += "</table>";
  $("#table").html(table);
  console.log(table);
}

/*function editForm(){
console.log("You have Entered edit function");
}

function del(){
  console.log("You have Entered delete function");
}*/

