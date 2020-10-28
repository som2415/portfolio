$(function(){
    $(".top").stop().delay(500).animate({"width":"100%"},900,function(){
		$(".right").stop().animate({"height":"100%"},900,function(){
			$(".bottom").stop().animate({"width":"100%"},900,function(){
				$(".left").stop().animate({"height":"100%"},900,function(){
				
					
				}); // left end
			}); // bottom end
		}); // right end
	}); // top end
	/*skill*/

    /*$(window).scroll(function(){
	var aa=parseInt($(this).scrollTop()); 
	if (aa>500) {
	$(".PS>.graph").animate({width:"270px"},800);	
	$(".AI>.graph").animate({width:"285px"},800);
	$(".HTML>.graph").animate({width:"260px"},800);
	$(".CSS>.graph").animate({width:"250px"},800);
	$(".JS>.graph").animate({width:"150px"},800);
	$(".JQ>.graph").animate({width:"200px"},800);
	}
	});	*/

$("section>a:nth-child(6), #section7>p:nth-child(3)").mouseenter(function(){
		$(this).stop().animate({
            backgroundColor:"#fff", 
            color:"#2e2674",
            letterSpacing:"6px",
            fontWeight:"bold"
        })
});
$("section>a:nth-child(6), #section7>p:nth-child(3)").mouseleave(function(){
	$(this).stop().animate({
        backgroundColor:"#2e2674",
        color:"#fff",
        letterSpacing:"5px",
        fontWeight:"bold"
    })
});
$("section>a:nth-child(7)").mouseenter(function(){
		$(this).stop().animate({
            backgroundColor:"#2e2674", 
            color:"#e6e6e6",
            letterSpacing:"6px",
            fontWeight:"bold"
        })
});
$("section>a:nth-child(7)").mouseleave(function(){
	$(this).stop().animate({
        backgroundColor:"#e6e6e6",
        color:"#2e2674",
        letterSpacing:"5px",
        fontWeight:"bold"
    })
});	

    $("#section7 p:nth-child(3)").click(function(){
		$(".phoneDetail").show();
	});
	var n=0;
	var img_count=$(".phoneSlide li").last().index()+1;
	
	$(".button1>img").click(function(){
		n++;
		if(n==img_count){
			$(".phoneSlide").css({left:0});
			n=1;
		}
		$('.phoneSlide').stop(true).animate({left:-500*n});		
	});
	
	$(".button2>img").click(function(){
		n--;
		if(n==-1){
			$(".phoneSlide").css({left:-500*(img_count-1)});
			n=4;
		}
		$('.phoneSlide').stop(true).animate({left:-500*n});	
	});
    
    $(".close").click(function(){
		$(".phoneDetail").hide();
	});
    
    
    
    
    $(".box1>img").click(function(){
		$(".up_back,.up1").show();
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up1").hide();
	});

	$(".box2>img").click(function(){
		$(".up_back,.up2").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up2").hide();
	});
	
	$(".box3>img").click(function(){
		$(".up_back, .up3,.detail2>div").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back, .up3,.detail2>div").hide();
	});
	
	$(".box4>img").click(function(){
		$(".up_back,.up4").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up4").hide();
	});
	
	$(".box5>img").click(function(){
		$(".up_back,.up5").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up5").hide();
	});
	
	$(".box6>img").click(function(){
		$(".up_back,.up6").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up6").hide();
	});
    
    $(".box7>img").click(function(){
		$(".up_back,.up7").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up7").hide();
	});
    
     $(".box8>img").click(function(){
		$(".up_back,.up8").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up8").hide();
	});
	/*var nom=0;
	var bb=$(".up3>ul>li").last().index()+1;
	
	$(".button3>img").click(function(){
		nom++;
		if(nom==bb){
			$(".up3").css({left:0});
			nom=1;
		}
		$('.up3').stop(true).animate({left:-500*nom});		
	});*/
	
	$(".button4>img").click(function(){
		nom--;
		if(nom==-1){
			$(".up3").css({left:-500*(bb-1)});
			nom=11;
		}
		$('.up3').stop(true).animate({left:-500*nom});	
	});
    
});