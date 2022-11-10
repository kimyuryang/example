$(function(){
 //왼쪽 화살표버튼
 $(".prev").click(function(){
  if($(".wrap").is(":animated")) return false;//애니메이션 기능이 적용중일 때 함수에 있는 코드를 실행하지 않음.
  var last = $(".wrap > .child").last();
  $(".wrap").animate({"left":'0px'},500,function(){
    $(this).prepend(last).css("left","-360px");
  });//.wrap의 left값을 -360에서 0으로 변경(오른쪽으로 이동)후 마지막 요소를 첫번 째 위치로 변경하고 left값을 -360으로 초기화
});

//오른쪽 화살표버튼
$(".next").click(function(){
  if($(".wrap").is(":animated")) return false;
  var first = $(".wrap > .box").first();
  $(".wrap").animate({"left":'-720px'},500,function(){
    $(this).append(first).css("left","-360px");
});//.wrap의 left값을 -360에서 -720위치로 이동(왼쪽으로이동)시켜줍니다. 그 후에 첫번 째 요소를 마지막 위치로 이동시키고 left값을 초기값을 변경합니다.
});
});