$(document).ready(function(){
  
    //ORDER BUTTON
    $("button.order").click(function(event){
      $("button.order").hide();
      $("#partTwo").show();
      var pizzaType = $("#pizzaName option:selected").val();
      var pizzaSize = $("#size option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      var pizzaTopping = $("#topping option:selected").val();