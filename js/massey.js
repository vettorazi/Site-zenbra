
var currentIndex = 0,
  items = $('.slider-portfolio .carta'),
  itemAmt = items.length;
  ultimoitem=items.length - 1;
  var  item = $('.slider-portfolio .carta').eq(currentIndex);
    item.css('display','inline-block');
if (currentIndex == 0) {
   $(".prevo").css("display", "none");
  }
function cycleItems() {
  var item = $('.slider-portfolio .carta').eq(currentIndex);
  console.log(currentIndex);

  items.hide();
  item.css('display','inline-block');
}
// var autoSlide = setInterval(function() {
//   currentIndex += 1;
//   if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
//   }
//   cycleItems();
// }, 3000);
$('.nexto').click(function() {
  console.log(currentIndex);
  //clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  if(currentIndex==ultimoitem){
    $(".nexto").css("display","none");
  }
  if(currentIndex>=0){
$(".prevo").css("display", "inline-block");
};
  cycleItems();
});


$('.prevo').click(function() {
  //clearInterval(autoSlide);
  currentIndex -= 1;
  console.log("previo clicado slide:" + currentIndex);
  if (currentIndex <= 0) {
   $(".prevo").css("display", "none");
    currentIndex = itemAmt - 1;
  }
  if(currentIndex==ultimoitem-1){
    $(".nexto").css("display","inline-block");
  }
  cycleItems();
});
