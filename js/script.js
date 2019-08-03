function Order(crust, topping, size, number, delivery, cost) {
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.number = number;
    this.delivery = delivery;
    this.total = cost;
  }
  
  Order.prototype.fullOrder = function(){
      return this.crust + " " + this.topping + " " + " " + this.size + " " + this.number + " "+ this.delivery + " " + this.total;
  }

  $(document).ready(function() {
    $("form#ordering").submit(function(event) {
      event.preventDefault();
  
      var selectedCrust = $("select#crust").val();
      var selectedTopping = $("select#topping").val();
      var selectedSize = $("select#size").val();
      var selectedNumber =$("input#nbr").val();
      var selectedDelivery = $("select#delivery").val();
      var newOrder = new Order(selectedCrust, selectedTopping, selectedSize, selectedNumber, selectedDelivery, totalCost);
      console.log(newOrder);
      var cost, totalCost;
      switch (selectedTopping){
       case selectedTopping = "chicken": 
       switch (selectedSize) {
         case (selectedSize) = "large" :
             cost = 5000;
         if (selectedCrust === "crispy") {
             totalCost = (cost * selectedNumber) + 1500 + 3000;
         }
        else if (selectedCrust === "stuffed") {
           totalCost = (cost * selectedNumber) + 2000 + 3000;
         }
         else if (selectedCrust === "gluten-free") {
           totalCost = (cost * selectedNumber) + 2500 + 3000;
         }
         break;
         case (selectedSize) ="medium" :
         cost = 3000;
         if (selectedCrust === "crispy"){
           totalCost = (cost * selectedNumber) + 1500 + 3000;
         }
         else if (selectedCrust === "stuffed") {
           totalCost = (cost * selectedNumber) + 2000 + 3000;
         }
         else if (selectedCrust === "gluten-free") {
           totalCost = (cost * selectedNumber) + 2500 + 3000;
         }
         break;
         case (selectedSize) = "small" :
         cost = 1000;
         if (selectedCrust === "crispy"){
           totalCost = (cost * selectedNumber) + 1500 + 3000;
         }
         else if (selectedCrust === "stuffed") {
           totalCost = (cost * selectedNumber) + 2000 + 3000;
         }
         else if (selectedCrust === "gluten-free") {
           totalCost = (cost * selectedNumber) + 2500 + 3000;
         }
         break;
      }
         break;
         case (selectedTopping) = "extra-cheese":
         switch (selectedSize){
          case (selectedSize) = "large" :
          cost = 5000;
      if (selectedCrust === "crispy") {
          totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
     else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
      case (selectedSize) ="medium" :
      cost = 3000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
      case (selectedSize) = "small" :
      cost = 1000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
   }
      break;
      case (selectedTopping) = "mushrooms":
         switch (selectedSize){
          case (selectedSize) = "large" :
          cost = 5000;
      if (selectedCrust === "crispy") {
          totalCost = (cost * selectedNumber) + 1500 + 1000;
      }
     else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 1000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 1000;
      }
      break;
      case (selectedSize) ="medium" :
      cost = 3000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 1000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 1000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 1000;
      }
      break;
      case (selectedSize) = "small" :
      cost = 1000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 1000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 1000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 1000;
      }
      break;
   }
      break;

      case (selectedTopping) = "onions":
         switch (selectedSize){
          case (selectedSize) = "large" :
          cost = 5000;
      if (selectedCrust === "crispy") {
          totalCost = (cost * selectedNumber) + 1500 + 1000;
      }
     else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 1000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 1000;
      }
      break;
      case (selectedSize) ="medium" :
      cost = 3000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 1000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 1000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 1000;
      }
      break;
      case (selectedSize) = "small" :
      cost = 1000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 1000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 1000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 1000;
      }
      break;
   }
      break;
      
      case (selectedTopping) = "peperoni":
         switch (selectedSize){
          case (selectedSize) = "large" :
          cost = 5000;
      if (selectedCrust === "crispy") {
          totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
     else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
      case (selectedSize) ="medium" :
      cost = 3000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
      case (selectedSize) = "small" :
      cost = 1000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
   }
      break;
      
      case (selectedTopping) = "vegetables":
         switch (selectedSize){
          case (selectedSize) = "large" :
          cost = 5000;
      if (selectedCrust === "crispy") {
          totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
     else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
      case (selectedSize) ="medium" :
      cost = 3000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
      case (selectedSize) = "small" :
      cost = 1000;
      if (selectedCrust === "crispy"){
        totalCost = (cost * selectedNumber) + 1500 + 2000;
      }
      else if (selectedCrust === "stuffed") {
        totalCost = (cost * selectedNumber) + 2000 + 2000;
      }
      else if (selectedCrust === "gluten-free") {
        totalCost = (cost * selectedNumber) + 2500 + 2000;
      }
      break;
   }
      break;
      
         }

      // $("ul#orders").append("<li><span class='order'>" + newOrder.delivery + "</span></li>");

      $("select#crust").val();
      $("select#topping").val();
      $("select#size").val();
      $("input#nbr").val();
      $("select#delivery").val();
    $(".btn").last().click(function() {
      $("#show-order").show();
      // $("#show-order h2").text(newOrder.delivery);
      $(".crust").text(newOrder.crust);
      $(".topping").text(newOrder.topping);
      $(".size").text(newOrder.size);
      $(".number").text(newOrder.number);
      $(".delivery").text(newOrder.delivery);
      $(".total").text(newOrder.total)
    });
});
  });

