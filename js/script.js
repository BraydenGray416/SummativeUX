console.log("external JS is working");
$(document).ready(function(){
    console.log("jquery has loaded")


  });

  $("#confirmBtnOrdering").click(function(){
    $("#orderingContent").hide();
    $("#confirmOrderContent").show();
    $("#bar").css("width", "50%");
    $("#orderingTab").removeClass("active");
    $("#confirmTab").addClass("active");
  });

  $("#previousBtnConfirm").click(function(){
    $("#confirmOrderContent").hide();
    $("#orderingContent").show();
    $("#bar").css("width", "25%");
    $("#confirmTab").removeClass("active");
    $("#orderingTab").addClass("active");
  });

  $("#confirmBtnConfirm").click(function(){
    $("#confirmOrderContent").hide();
    $("#paymentContent").show();
    $("#bar").css("width", "75%");
    $("#confirmTab").removeClass("active");
    $("#paymentTab").addClass("active");
  });

  $("#previousBtnPayment").click(function(){
    $("#paymentContent").hide();
    $("#confirmOrderContent").show();
    $("#bar").css("width", "50%");
    $("#paymentTab").removeClass("active");
    $("#confirmTab").addClass("active");
  });

  $("#payInStore").click(function(){
    $("#paymentContent").hide();
    $("#timeContent").show();
    $("#bar").css("width", "100%");
    $("#paymentTab").removeClass("active");
    $("#timeTab").addClass("active");
  });

  $("#payNow").click(function () {
    $("#payInStore").hide();
    $("#cardPayment").show();
  });

  $("#submitBtnCard").click(function () {
    $("#paymentContent").hide();
    $("#timeContent").show();
    $("#bar").css("width", "100%");
    $("#paymentTab").removeClass("active");
    $("#timeTab").addClass("active");
  });
