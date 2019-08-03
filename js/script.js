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
      var newOrder = new Order(selectedCrust, selectedTopping, selectedSize, selectedNumber, selectedDelivery, total);

      var cost, totalCost;
       if (selectedTopping === "chicken") {
       if (selectedSize === "large"){
           cost = 5000;
           if (selectedCrust === "crispy") {
               totalCost = (cost * selectedNumber) + 1500;
           }
          else if (selectedCrust === "stuffed") {
             totalCost = (cost * selectedNumber) + 2000;
           }
           else if (selectedCrust === "gluten-free") {
             totalCost = (cost * selectedNumber) + 2500;
           }
        }
          else if (selectedSize === "medium") {
            cost = 3000;
            if (selectedCrust === "crispy"){
              totalCost = (cost * selectedNumber) + 1500;
            }
            else if (selectedCrust === "stuffed") {
              totalCost = (cost * selectedNumber) + 2000;
            }
            else if (selectedCrust === "gluten-free") {
              totalCost = (cost * selectedNumber) + 2500;
            }
        }
        else if (selectedSize === "small") {
          cost = 1000;
          if (selectedCrust === "crispy"){
            totalCost = (cost * selectedNumber) + 1500;
          }
          else if (selectedCrust === "stuffed") {
            totalCost = (cost * selectedNumber) + 2000;
          }
          else if (selectedCrust === "gluten-free") {
            totalCost = (cost * selectedNumber) + 2500;
          }
      }

      }
             //extra-cheese
      else if (selectedTopping === "extra-cheese") {
        if (selectedSize === "large"){
            cost = 5000;
            if (selectedCrust === "crispy") {
                totalCost = (cost * selectedNumber) + 1500;
            }
           else if (selectedCrust === "stuffed") {
              totalCost = (cost * selectedNumber) + 2000;
            }
            else if (selectedCrust === "gluten-free") {
              totalCost = (cost * selectedNumber) + 2500;
            }
         }
           else if (selectedSize === "medium") {
             cost = 3000;
             if (selectedCrust === "crispy"){
               totalCost = (cost * selectedNumber) + 1500;
             }
             else if (selectedCrust === "stuffed") {
               totalCost = (cost * selectedNumber) + 2000;
             }
             else if (selectedCrust === "gluten-free") {
               totalCost = (cost * selectedNumber) + 2500;
             }
         }
         else if (selectedSize === "small") {
           cost = 1000;
           if (selectedCrust === "crispy"){
             totalCost = (cost * selectedNumber) + 1500;
           }
           else if (selectedCrust === "stuffed") {
             totalCost = (cost * selectedNumber) + 2000;
           }
           else if (selectedCrust === "gluten-free") {
             totalCost = (cost * selectedNumber) + 2500;
           }
       }
 
       }
       //mushrooms
      
       else if (selectedTopping === "mushrooms") {
        if (selectedSize === "large"){
            cost = 5000;
            if (selectedCrust === "crispy") {
                totalCost = (cost * selectedNumber) + 1500;
            }
           else if (selectedCrust === "stuffed") {
              totalCost = (cost * selectedNumber) + 2000;
            }
            else if (selectedCrust === "gluten-free") {
              totalCost = (cost * selectedNumber) + 2500;
            }
         }
           else if (selectedSize === "medium") {
             cost = 3000;
             if (selectedCrust === "crispy"){
               totalCost = (cost * selectedNumber) + 1500;
             }
             else if (selectedCrust === "stuffed") {
               totalCost = (cost * selectedNumber) + 2000;
             }
             else if (selectedCrust === "gluten-free") {
               totalCost = (cost * selectedNumber) + 2500;
             }
         }
         else if (selectedSize === "small") {
           cost = 1000;
           if (selectedCrust === "crispy"){
             totalCost = (cost * selectedNumber) + 1500;
           }
           else if (selectedCrust === "stuffed") {
             totalCost = (cost * selectedNumber) + 2000;
           }
           else if (selectedCrust === "gluten-free") {
             totalCost = (cost * selectedNumber) + 2500;
           }
       }
 
       }
       //onions

       else if (selectedTopping === "onions") {
        if (selectedSize === "large"){
            cost = 5000;
            if (selectedCrust === "crispy") {
                totalCost = (cost * selectedNumber) + 1500;
            }
           else if (selectedCrust === "stuffed") {
              totalCost = (cost * selectedNumber) + 2000;
            }
            else if (selectedCrust === "gluten-free") {
              totalCost = (cost * selectedNumber) + 2500;
            }
         }
           else if (selectedSize === "medium") {
             cost = 3000;
             if (selectedCrust === "crispy"){
               totalCost = (cost * selectedNumber) + 1500;
             }
             else if (selectedCrust === "stuffed") {
               totalCost = (cost * selectedNumber) + 2000;
             }
             else if (selectedCrust === "gluten-free") {
               totalCost = (cost * selectedNumber) + 2500;
             }
         }
         else if (selectedSize === "small") {
           cost = 1000;
           if (selectedCrust === "crispy"){
             totalCost = (cost * selectedNumber) + 1500;
           }
           else if (selectedCrust === "stuffed") {
             totalCost = (cost * selectedNumber) + 2000;
           }
           else if (selectedCrust === "gluten-free") {
             totalCost = (cost * selectedNumber) + 2500;
           }
       }
 
       }
              //peperoni

       else if (selectedTopping === "peperoni") {
        if (selectedSize === "large"){
            cost = 5000;
            if (selectedCrust === "crispy") {
                totalCost = (cost * selectedNumber) + 1500;
            }
           else if (selectedCrust === "stuffed") {
              totalCost = (cost * selectedNumber) + 2000;
            }
            else if (selectedCrust === "gluten-free") {
              totalCost = (cost * selectedNumber) + 2500;
            }
         }
           else if (selectedSize === "medium") {
             cost = 3000;
             if (selectedCrust === "crispy"){
               totalCost = (cost * selectedNumber) + 1500;
             }
             else if (selectedCrust === "stuffed") {
               totalCost = (cost * selectedNumber) + 2000;
             }
             else if (selectedCrust === "gluten-free") {
               totalCost = (cost * selectedNumber) + 2500;
             }
         }
         else if (selectedSize === "small") {
           cost = 1000;
           if (selectedCrust === "crispy"){
             totalCost = (cost * selectedNumber) + 1500;
           }
           else if (selectedCrust === "stuffed") {
             totalCost = (cost * selectedNumber) + 2000;
           }
           else if (selectedCrust === "gluten-free") {
             totalCost = (cost * selectedNumber) + 2500;
           }
       }
 
       }

       //vegetable 

       else if (selectedTopping === "vegetables") { 
         price = 2000;
        if (selectedSize === "large"){
            cost = 5000;
            if (selectedCrust === "crispy") {
                totalCost = (cost * selectedNumber) + 1500;
            }
           else if (selectedCrust === "stuffed") {
              totalCost = (cost * selectedNumber) + 2000;
            }
            else if (selectedCrust === "gluten-free") {
              totalCost = (cost * selectedNumber) + 2500;
            }
         }
           else if (selectedSize === "medium") {
             cost = 3000;
             if (selectedCrust === "crispy"){
               totalCost = (cost * selectedNumber) + 1500;
             }
             else if (selectedCrust === "stuffed") {
               totalCost = (cost * selectedNumber) + 2000;
             }
             else if (selectedCrust === "gluten-free") {
               totalCost = (cost * selectedNumber) + 2500;
             }
         }
         else if (selectedSize === "small") {
           cost = 1000;
           if (selectedCrust === "crispy"){
             totalCost = (cost * selectedNumber) + 1500;
           }
           else if (selectedCrust === "stuffed") {
             totalCost = (cost * selectedNumber) + 2000;
           }
           else if (selectedCrust === "gluten-free") {
             totalCost = (cost * selectedNumber) + 2500;
           }
       }
 
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
    });
});
  });

