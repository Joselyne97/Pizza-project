function Order(crust, topping, size, number) {
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.number = number;
  }
  $(document).ready(function() {
    $("form#ordering").submit(function(event) {
      event.preventDefault();
  
      var inputtedCrust = $("input#new-first-name").val();
      var inputtedTopping = $("input#new-last-name").val();
      var inputtedSize = $("").val();
      var inputtedNumber =$("").val();

// $(document).ready(function() {
//     $("#add-order").click(function() {
//       $("#new-order").append('<div class="new-address">' + '<label for="sel">Select the Crust</label>' +     '<select class="form-control" id="sel">' + 
//                '<option selected>choose...</option>' +
//                 '<option value="crispy">Crispy     @1,500rwf</option>' +
//                 '<option value="stuffed">Stuffed     @2,000rwf</option>' +
//                 '<option value="gluten-free"> Gluten-free     @2,500rwf</option>' +
//               '</select><br><br>' +
//   '<label for="sel">Select the pizza topping(s)</label>' +

//       '<select class="form-control" id="sel">' +
//                '<option selected>choose...</option>'+
//                 '<option value="chicken">Chicken     @3,000rwf</option>' +
//                 '<option value="extra-cheese">Extra-cheese     @2,000rwf</option>' +
//                 '<option value="mushrooms">Mushrooms&olive     @1,000rwf</option>' +
//                 '<option value="onions">Onions     @1,000rwf</option>' +
//                 '<option value="peperoni">Peperoni     @2,000rwf</option>' +
//                 '<option value="vegetables">Vegetables     @2,000rwf</option>' +
//               '</select>' + '<br>' + '<br>' +
          
//       '<label for="sel">Select the pizza size</label>' +

//       '<select class="form-control" id="sel">' +
//                '<option selected>choose...</option>' +
//                 '<option value="large">Large  @5,000rwf</option>' +
//                 '<option value="medium">Medium  @3,000rwf</option>' +
//                 '<option value="small">Small  @1,000rwf</option>' +
//               '</select>' + '<br>' + '<br>' +
          
//               '<label for="sel">Select the number of pizza you want</label>' +
//               '<input type="number" class="form-control" id="nbr" min="1">' + '<br>' + '<br>' );

//     });
    
});