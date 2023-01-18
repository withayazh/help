$(document).ready(function(){
  $('button').on('mousedown', 
    function(event) {
        event.preventDefault();
    }
);
var lgmodal = $("#lgmodal")[0];
var rgmodal = $('#rgmodal')[0];
var img1modal = $('#fampsy')[0];
var img2modal = $('#purpimg')[0];
var fgpass = $('#fgpass')[0];
window.onclick = function(event) {
  if (event.target == lgmodal) {
    lgmodal.style.display = "none";
  }
  if (event.target == rgmodal) {
    rgmodal.style.display = "none";
  }
  if (event.target == img1modal) {
    img1modal.style.display = "none";
  }
  if (event.target == img2modal) {
    img2modal.style.display = "none";
  }
  if (event.target == fgpass) {
    fgpass.style.display = "none";
  }
}
});
toTopBtn = $("#toTopBtn")[0];
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function JSalert(name, phone){
  let person={
    Name: name,
    Phone: phone
  };
  if(person.Name==""||person.Phone==""){
    Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Please, enter all fields',
    })
  }else{
  swal("Congrats, "+person.Name, " Your contacts are saved!", "success");
    $('#TxfName')[0].value="";
    $('#TxfPhone')[0].value="";
  }
 }
 $(document).ready(function() { 
      var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3'); 
      var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3') 
      $(".btn").mousedown(function() { 
        audio2.load(); 
        audio2.play(); 
      }); 
      $(".btn").mouseup(function() { 
        audio.load(); 
        audio.play(); 
      }); 
    });
function Big(x) {
  var a = x.width;
  x.style.width=a*1.4+"px";
}
function Norm(x) {
  x.style.width = "100px";
}
function openModal(id) {
  $('#'+id).fadeIn('medium');
}
function closeModal(id) {
  $('#'+id).fadeOut('medium');
} 
/*function lengthVal(idPass, idName){
  let textUname=$('#'+idName)[0];
  let textPass=$('#'+idPass)[0];
  if(textUname.value.length<6||$('#'+idName).value.length>20){
    swal("Congrats, "+person.Name, " Your contacts are saved!", "success");
  }
  if(textPass.value.length<6||$('#'+idPass).value.length>20){
    swal("Congrats, "+person.Name, " Your contacts are saved!", "success");
  }
}*/