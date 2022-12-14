
//mainSlide
$(function(){
  var timer = setInterval(slide,4000);
   function slide(){
     var first = $(".imgGroup > img:first");
     $(".imgGroup").animate({"left":"-1920px"},1000, function(){
      $(this).append(first).css("left","0px");
    });
    if($(".imgGroup").is(":animated")){return false}
  };

  $(".goBtn").hover( //button에 stop이벤트
    function(){
      clearInterval(timer);
    },function(){
      timer = setInterval(slide,4000);
    }
   );

  //bestMenu
  $(".prev").click(function(){
    if($(".contain > .wrap").is(":animated")) return false;
    var last = $(".wrap > .box").last();
    $(".contain > .wrap").animate({"left":'0px'},500,function(){
      $(this).prepend(last).css("left","-360px");
    });
  });

  $(".next").click(function(){
    if($(".contain > .wrap").is(":animated")) return false;
    var first = $(".contain > .wrap > .box").first();
    $(".contain > .wrap").animate({"left":'-720px'},500,function(){
      $(this).append(first).css("left","-360px");
    });
  });
});

/*wow플러그인*/
$(function(){
  new WOW().init();
});

/*aos*/
$(function(){
  AOS.init();
});