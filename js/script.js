function Order(crust, topping, size, number, delivery, totalCost) {
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.number = number;
    this.delivery = delivery;
    this.totalCost = totalCost;
  }
  
  Order.prototype.fullOrder = function(){
      return this.crust + " " + this.topping + " " + " " + this.size + " " + this.number + " "+ this.delivery + " " + this.totalCost;
  }

  $(document).ready(function() {
    $("form#ordering").submit(function(event) {
      event.preventDefault();
  
      });
$(".btn").click(function() {
  var crusts = $("select#crust").val();
  var toppings = $("select#topping").val();
  var sizes = $("select#size").val();
  var numbers =$("input#nbr").val();

  

  var cost, total;
       switch (sizes) {
         case sizes = "large" :
             cost = 5000;
         if (crusts === "crispy") {
             totalCost = (cost * numbers) + 1500;
         }
        else if (crusts === "stuffed") {
           totalCost = (cost * numbers) + 2000 ;
         }
         else if (crusts === "gluten-free") {
           totalCost = (cost * numbers) + 2500;
         }
         break;
         case sizes ="medium" :
         cost = 3000;
         if (crusts === "crispy"){
           totalCost = cost + 1500;
         }
         else if (crusts === "stuffed") {
           totalCost = cost + 2000;
         }
         else if (crusts === "gluten-free") {
           totalCost = cost + 2500;
         }
         break;
         case sizes = "small" :
         cost = 1000;
         if (crusts === "crispy"){
           totalCost = cost + 1500;
         }
         else if (crusts === "stuffed") {
           totalCost = cost + 2000;
         }
         else if (crusts === "gluten-free") {
           totalCost = cost + 2500;
         }
         break;
      }
         
      switch (toppings){
        case toppings = "chicken":
        totalCost = (totalCost + 3000) * numbers;
        break;
        case toppings = "extra-cheese":
        totalCost = (totalCost + 2000) * numbers;
        break;
        case toppings = "mushrooms":
        totalCost = (totalCost + 1000) * numbers;
        break;
        case toppings = "onions":
        totalCost = (totalCost + 1000) * numbers;
        break;
        case toppings = "peperoni":
        totalCost = (totalCost + 2000) * numbers;
        break;
        case toppings = "vegetables":
        totalCost = (totalCost + 2000) * numbers;
        break;
      };
 console.log(totalCost);

      var selectedDelivery = $("select#delivery").val();
      var totalCost;
 var newOrder = new Order(crusts, toppings, sizes, numbers, selectedDelivery, totalCost);
 
  $("#show-order").show();
  // $("#show-order h2").text(newOrder.delivery);
  $(".crust").text(newOrder.crust);
  $(".topping").text(newOrder.topping);
  $(".size").text(newOrder.size);
  $(".number").text(newOrder.number);
  $(".delivery").text(newOrder.delivery);
  $(".totalCost").text(newOrder.totalCost);


 console.log(newOrder);
  }); 
});
