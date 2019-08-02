function Order(crust, topping, size, number, delivery) {
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.number = number;
    this.delivery = delivery;
  }
  
  Order.prototype.fullOrder = function(){
      return this.crust + " " + this.topping + " " + " " + this.size + " " + this.number + " "+ this.delivery;
  }

  $(document).ready(function() {
    $("form#ordering").submit(function(event) {
      event.preventDefault();
  
      var selectedCrust = $("select#crust").val();
      var selectedTopping = $("select#topping").val();
      var selectedSize = $("select#size").val();
      var selectedNumber =$("input#nbr").val();
      var selectedDelivery = $("select#delivery").val();
      var newOrder = new Order(selectedCrust, selectedTopping, selectedSize, selectedNumber, selectedDelivery);
     
      $("ul#orders").append("<li><span class='order'>" + newOrder.delivery + "</span></li>");

      $("select#crust").val();
      $("select#topping").val();
      $("select#size").val();
      $("input#nbr").val();
      $("select#delivery").val();
    $(".order").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newOrder.crust);
      $(".crust").text(newOrder.crust);
      $(".topping").text(newOrder.topping);
      $(".size").text(newOrder.size);
      $(".number").text(newOrder.number);
      $(".delivery").text(newOrder.delivery);
    });
});
  });

$(document).ready(function() {
    $("#add-order").click(function() {
      $("#new-order").append('<div class="new-order">' + '<label for="crust">Select the Crust</label>' +     '<select class="form-control" id="crust">' + 
               '<option selected>choose...</option>' +
                '<option value="crispy">Crispy     @1,500rwf</option>' +
                '<option value="stuffed">Stuffed     @2,000rwf</option>' +
                '<option value="gluten-free"> Gluten-free     @2,500rwf</option>' +
              '</select><br><br>' +
  '<label for="topping">Select the pizza topping(s)</label>' +

      '<select class="form-control" id="topping">' +
               '<option selected>choose...</option>'+
                '<option value="chicken">Chicken     @3,000rwf</option>' +
                '<option value="extra-cheese">Extra-cheese     @2,000rwf</option>' +
                '<option value="mushrooms">Mushrooms&olive     @1,000rwf</option>' +
                '<option value="onions">Onions     @1,000rwf</option>' +
                '<option value="peperoni">Peperoni     @2,000rwf</option>' +
                '<option value="vegetables">Vegetables     @2,000rwf</option>' +
              '</select>' + '<br>' + '<br>' +
          
      '<label for="size">Select the pizza size</label>' +

      '<select class="form-control" id="size">' +
               '<option selected>choose...</option>' +
                '<option value="large">Large  @5,000rwf</option>' +
                '<option value="medium">Medium  @3,000rwf</option>' +
                '<option value="small">Small  @1,000rwf</option>' +
              '</select>' + '<br>' + '<br>' +
          
              '<label for="nbr">Select the number of pizza you want</label>' +
              '<input type="number" class="form-control" id="nbr" min="1">' + '<br>' + '<br>' );

    });
    
});