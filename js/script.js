$(document).ready(function() {
    $("#add-order").click(function() {
      $("#new-order").append('<div class="new-address">' + '<label for="sel">Select the Crust</label>' +     '<select class="form-control" id="sel">' + 
               '<option selected>choose...</option>' +
                '<option>Crispy: 1,500rwf</option>' +
                '<option>Stuffed: 2,000rwf</option>' +
                '<option> Gluten-free: 2,500rwf</option>' +
              '</select><br><br>' +
  '<label for="sel">Select the pizza topping(s)</label>' +

      '<select class="form-control" id="sel">' +
               '<option selected>choose...</option>'+
                '<option>Chicken</option>' +
                '<option>Extra-cheese</option>' +
                '<option>Mushrooms&olive</option>' +
                '<option>Onions</option>' +
                '<option>Peperoni</option>' +
                '<option>Vegetables</option>' +
              '</select>' + '<br>' + '<br>' +
          
      '<label for="sel">Select the pizza size</label>' +

      '<select class="form-control" id="sel">' +
               '<option selected>choose...</option>' +
                '<option>Large</option>' +
                '<option>Medium</option>' +
                '<option>Small</option>' +
              '</select>' + '<br>' + '<br>' +
          
              '<label for="sel">Select the number of pizza you want</label>' +
              '<input type="number" class="form-control" id="nbr" min="1">' + '<br>' + '<br>' );

    });
    
});