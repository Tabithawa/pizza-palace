$(document).ready(function(){
  
    //ORDER BUTTON
    $("button.order").click(function(event){
      $("button.order").hide();
      $("#partTwo").show();
      var pizzaType = $("#pizzaName option:selected").val();
      var pizzaSize = $("#size option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      var pizzaTopping = $("#topping option:selected").val();

      switch(pizzaSize){
        case "0":
          price =0;
        break;
        case "Large":
           price = 1500;
           console.log(price);
         break;
         case "Medium":
           price = 1000;
           console.log("The price is "+price);
         break;
         case "Small":
           price = 500;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pizzaCrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 50;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-Free":
            crust_price = 200;
          break;
          default:
            console.log("No price"); 
        }
        switch(pizzaTopping){
          case "0":
            topping_price = 0;
          break;
          case "Sausage":
            topping_price = 50;
          break;
          case "Mushrooms":
            topping_price = 50;
          break;
          case "Extra Cheese":
            topping_price = 50;
          break;
          default:
            console.log("No price"); 
        }
  
      var total = price + crust_price + topping_price;
      console.log(total);
      let checkoutTotal =0;
      checkoutTotal = checkoutTotal + total;
  
  
      event.preventDefault();
      document.getElementById("pizzaname").innerHTML = pizzaType;
      document.getElementById("pizzasize").innerHTML = pizzaSize;
      document.getElementById("pizzacrust").innerHTML = pizzaCrust;
      document.getElementById("pizzatopping").innerHTML = pizzaTopping;
      document.getElementById("totals").innerHTML = checkoutTotal;

          //ADD PIZZA BUTTON AND ITS OWN DATA
    $("button#addPizza").click(function(event){
        var pizzaType = $("#pizzaName option:selected").val();
        var pizzaSize = $("#size option:selected").val();
        var pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = $("#topping option:selected").val();

        switch(pizzaSize){
            case "0":
              price =0;
            break;
            case "Large":
               price = 1500;
               console.log(price);
             break;
             case "Medium":
               price = 1000;
               console.log("The price is "+price);
             break;
             case "Small":
               price = 500;
               console.log(price);
             default:
               console.log("error"); 
           }
           switch(pizzaCrust){
              case "0":
                crust_price = 0;
              break;
              case "Crispy":
                crust_price = 50;
              break;
              case "Stuffed":
                crust_price = 150;
              break;
              case "Gluten-Free":
                crust_price = 200;
              break;
              default:
                console.log("No price"); 
            }
            switch(pizzaTopping){
              case "0":
                topping_price = 0;
              break;
              case "Sausage":
                topping_price = 50;
              break;
              case "Mushrooms":
                topping_price = 50;
              break;
              case "Extra Cheese":
                topping_price = 50;
              break;
              default:
                console.log("No price"); 
            }
      
          var total = price + crust_price + topping_price;
          console.log(total);
    
          checkoutTotal = checkoutTotal + total;
          console.log(checkoutTotal);

          function Getpizza( name,size,crust,topping, total ){
            this.name = name;
            this.size = size;
            this.crust = crust;
            this.topping = topping;
            this.total = total;
          }
    
          var newOrder = new Getpizza(pizzaType, pizzaSize, pizzaCrust,pizzaTopping,total);
          event.preventDefault();
          $("#ordersMade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
          console.log(newOrder);
    
        });
            //CHECKOUT BUTTON
    $("button#checkout").click(function(){ 
        $("button#checkout").hide();
        $("button#addPizza").hide();
        $("button#pickUp").show();
        $("button#deliver").show();
        console.log("Your total bills is sh. "+checkoutTotal);
        $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
      });