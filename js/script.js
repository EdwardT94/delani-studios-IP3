$(document).ready(function(){
    $("#des").click(function() {
      $("#des").toggle();
      $("#content1").toggle();
 });
});
$(document).ready(function(){
    $("#content1").click(function() {
      $("#des").toggle();
      $("#content1").toggle();
 });
});
$(document).ready(function(){
    $("#dev").click(function() {
      $("#dev").toggle();
      $("#content2").toggle();
 });
});
$(document).ready(function(){
    $("#content2").click(function() {
      $("#dev").toggle();
      $("#content2").toggle();
 });
});
$(document).ready(function(){
    $("#pdg").click(function() {
      $("#pdg").toggle();
      $("#content3").toggle();
 });
});
$(document).ready(function(){
    $("#content3").click(function() {
      $("#pdg").toggle();
      $("#content3").toggle();
 });
});

$(document).ready(function(){
    $(".work1").mouseover(function() {
      $("#w1").show();
    }).mouseout(function(){
      $("#w1").hide();
 });
});

$(document).ready(function(){
    $(".work2").mouseover(function() {
      $("#w2").show();
    }).mouseout(function(){
      $("#w2").hide();
 });
});
$(document).ready(function(){
    $(".work3").mouseover(function() {
      $("#w3").show();
    }).mouseout(function(){
      $("#w3").hide();
 });
});
$(document).ready(function(){
    $(".work4").mouseover(function() {
      $("#w4").show();
    }).mouseout(function(){
      $("#w4").hide();
 });
});
$(document).ready(function(){
    $(".work5").mouseover(function() {
      $("#w5").show();
    }).mouseout(function(){
      $("#w5").hide();
 });
});
$(document).ready(function(){
    $(".work6").mouseover(function() {
      $("#w6").show();
    }).mouseout(function(){
      $("#w6").hide();
 });
});
$(document).ready(function(){
    $(".work7").mouseover(function() {
      $("#w7").show();
    }).mouseout(function(){
      $("#w7").hide();
 });
});
$(document).ready(function(){
    $(".work8").mouseover(function() {
      $("#w8").show();
    }).mouseout(function(){
      $("#w8").hide();
 });
});

$(document).ready(function(){
    $(".form").submit(function(event){
      var name=$(".name").val();
    alert("We received your message! Thank you for contacting us.");
    event.preventDefault();
    });
   });