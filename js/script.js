$(document).ready(function() {
    $("#add-order").click(function() {
      $("#new-order").append('<div class="new-address">' + '<label for="sel">Select the Crust</label>' +     '<select class="form-control" id="sel">' + 
               '<option selected>choose...</option>' +
                '<option>Crispy     @1,500rwf</option>' +
                '<option>Stuffed     @2,000rwf</option>' +
                '<option> Gluten-free     @2,500rwf</option>' +
              '</select><br><br>' +
  '<label for="sel">Select the pizza topping(s)</label>' +

      '<select class="form-control" id="sel">' +
               '<option selected>choose...</option>'+
                '<option>Chicken     @3,000rwf</option>' +
                '<option>Extra-cheese     @2,000rwf</option>' +
                '<option>Mushrooms&olive     @1,000rwf</option>' +
                '<option>Onions     @1,000rwf</option>' +
                '<option>Peperoni     @2,000rwf</option>' +
                '<option>Vegetables     @2,000rwf</option>' +
              '</select>' + '<br>' + '<br>' +
          
      '<label for="sel">Select the pizza size</label>' +

      '<select class="form-control" id="sel">' +
               '<option selected>choose...</option>' +
                '<option>Large  @5,000rwf</option>' +
                '<option>Medium  @3,000rwf</option>' +
                '<option>Small  @1,000rwf</option>' +
              '</select>' + '<br>' + '<br>' +
          
              '<label for="sel">Select the number of pizza you want</label>' +
              '<input type="number" class="form-control" id="nbr" min="1">' + '<br>' + '<br>' );

    });
    
});