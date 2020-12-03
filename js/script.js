$(document).ready(function(){ 
  $("form").submit(function(){
    alert("Submitted");
  });
  $("#bot").click(function(){
    var SendInfo={"mail":"rod@mail.com","password":"abc","nombre":"tra","trato":"mss","apPaterno":"Cab","apMaterno":"Pli","telefono":22222};
    $.ajax({
      
      type: 'POST',
      url: 'https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/creacuenta',
      data: JSON.stringify(SendInfo),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function (data) {
        console.log("Response: "+data['result']);
      }
  }); 
  });
});