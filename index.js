$(document).ready(function(){
    //ORDER BUTTON
    $("button#order").click(function(event){
      $("button#order").hide();
      $("#orderPart").show();
      var pizzaType = $("#pizzaName option:selected").val();
      var pizzaSize = $("#size option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      var pizzaTopping = $("#topping option:selected").val();

      switch(pizzaSize){
        case "Small":
           sizeCost = 500;
         break;
         case "Medium":
           sizeCost = 1000;
         break;
         case "Large":
           sizeCost = 1500;
         default:
           alert("Choose a size"); 
       }
       switch(pizzaCrust){
          case "Crispy":
            crustCost = 50;
          break;
          case "Stuffed":
            crustCost = 150;
          break;
          case "Gluten-Free":
            crustCost = 200;
          break;
          default:
            alert("Select a crust"); 
        }
        switch(pizzaTopping){
          case "Sausage":
            toppingCost = 50;
          break;
          case "Mushrooms":
            toppingCost = 50;
          break;
          case "Extra Cheese":
            toppingCost = 50;
          break;
          default:
            alert("Choose a topping"); 
        }
  
      var totalCost = sizeCost + crustCost + toppingCost;
      console.log(totalCost);
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + totalCost;
  
  
      event.preventDefault();
      document.getElementById("nameOfPizza").innerHTML = pizzaType;
      document.getElementById("sizeOfPizza").innerHTML = pizzaSize;
      document.getElementById("crustOfPizza").innerHTML = pizzaCrust;
      document.getElementById("toppingOfPizza").innerHTML = pizzaTopping;
      document.getElementById("totals").innerHTML = checkoutTotal;

      //ADD PIZZA BUTTON AND ITS OWN DATA
    $("button#addPizza").click(function(event){
        var pizzaType = $("#pizzaName option:selected").val();
        var pizzaSize = $("#size option:selected").val();
        var pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = $("#topping option:selected").val();

          switch(pizzaSize){
            case "Small":
               sizeCost = 500;
             break;
             case "Medium":
               sizeCost = 1000;
             break;
             case "Small":
               sizeCost = 1500;
             default:
               console.log("Choose a size"); 
           }
           switch(pizzaCrust){
              case "Crispy":
                crustCost = 50;
              break;
              case "Stuffed":
                crustCost = 150;
              break;
              case "Gluten-Free":
                crustCost = 200;
              break;
              default:
                console.log("Select a crust"); 
            }
            switch(pizzaTopping){
              case "Sausage":
                toppingCost = 50;
              break;
              case "Mushrooms":
                toppingCost = 50;
              break;
              case "Extra Cheese":
                toppingCost = 50;
              break;
              default:
                console.log("Choose a topping"); 
            }
      
          var totalCost = sizeCost + crustCost + toppingCost;
          console.log(totalCost);
          checkoutTotal = checkoutTotal + totalCost;
          console.log(checkoutTotal);

          function customerOrder( name , size , crust , topping , total ){
            this.name = name;
            this.size = size;
            this.crust = crust;
            this.topping = topping;
            this.total = total;
          };
    
          var addOrder = new customerOrder(pizzaType, pizzaSize, pizzaCrust,pizzaTopping,totalCost);
          event.preventDefault();
          $("#ordersAdded").append('<tr><td id="nameOfPizza">'+ addOrder.name +'</td><td id="sizeOfPizza">' + addOrder.size + '</td><td id="crustOfPizza">'+addOrder.crust + '</td><td id="toppingOfPizza">'+addOrder.topping+'</td><td id="totals">'+addOrder.total+'</td></tr>');
    
    });
            //CHECKOUT BUTTON
      $("button#checkout").click(function(){ 
        $("button#checkout").hide();
        $("button#addPizza").hide();
        $("button#pickUp").show();
        $("button#deliver").show();
        $("#theTotal").append("Your total bill is Ksh. "+checkoutTotal);
      });

      $("button#deliver").click(function(){
        $("#pickUp").hide();
        $(".deliveryForm").show();
      })
  
      $("button#pickUp").click(function(){
        alert("Your are welcome to pick up your order in 10 minutes and have ksh" + checkoutTotal + " to pay for the pizza");
        $("button#pickUp").hide();
        $("button#deliver").hide();
        //reloads the page
        location.reload();
      })
  
      $("button#goDeliver").click(function(){
        $("#notification").show();
        var customer = document.getElementById("customerName").value;
        var location = document.getElementById("customerLocation").value;
        alert("Hey " + customer + " ,your order has been received and will be delivered to " + location + " in 15 minutes . Be ready with ksh" + checkoutTotal + " and ksh100 for the delivery fee!!" );
      })
  })
})
