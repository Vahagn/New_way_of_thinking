//Menu bar was created by Smart Coding System(SCS - smartcodingsystem.com), author Vahagn Gabrielyan.
var str = "g0",cI,wiw = window.innerWidth;
$(".mobile").on("click",function(){	
	wiw = window.innerWidth;
	var ulWh = $(".mob3 ul").width(),
		ulHt = $(".mob3 ul").height(),
		m2Wh = $(".mob2").width(),
		mlHt = $(".mobLine").height();
	if(str === "g0"){
		str = "g1";
		if(!$(".mob2 .mob3").length){
			$(".mob2").css("display","block");
			$(".mobLine").css("display","none");
			$(".mob3").prependTo(".mob2").css({"position":"relative","width":0,"height":m2Wh,"transform":"rotate(90deg)","visibility":"visible"});
		}
		$(".mobile").css("cursor","default").stop(true).animate({width:"100%",height:"100%",top:0,left:0,borderRadius:0,zIndex:99},{duration:800,start:function(){
			$(".mob1").stop(true).animate({width:ulWh,height:ulHt,margin:0},{duration:800});
		},
			complete:function(){
				$(".mob2").stop(true).animate({height:"100%"},{duration:800,
					start:function(){
						$(".mob3").stop(true).animate({top:$(".mob3 ul").height()/2-8},{duration:800});
					},
complete:function(){							
	i = 90, cI = setInterval(rot,1);
	function rot(){									
		if(i===0){
			i = 0;
			clearInterval(cI);
			conti();								
		}
		$(".mob3").css({"transform":"rotate("+i+"deg)"});
		i = i-1;
	}
	function conti(){
		$(".mob3").stop(true).animate({margin:0},{duration:800,
			complete:function(){
				$(".mob2").stop(true).animate({width:"100%"},{duration:800,
					start:function(){
						$(".mob3").stop(true).animate({height:"100%",top:0},{duration:800,complete:
							function(){										
								$(this).css("background","transparent").animate({width:"100%"},{duration:800,
									complete:function(){
										$(".mob2,.mob3").stop(true).animate({borderWidth:mlHt,},500);
										$(".mob1").css("height","auto");
									}
								});
							}
						});
					}
				});
			}
		});											
	}
}
				});
			}
		});
	} else if (str === "g1") {rem();}
});	
function rem(){
	str = "g0";
	clearInterval(cI);
	$(".mobile,.mob1,.mob2,.mob3").stop(true);
	$(".mobile").removeAttr("style");
	$(".mob1").removeAttr("style");
	$(".mob2").removeAttr("style");
	$(".mob3").removeAttr("style").insertAfter(".mobile");
	$(".mobLine").removeAttr("style");
	if($("html,body").scrollTop() > 700 ){$(".mobile").attr("style","display: flex;");}
}
$(window).scroll(function(){
	if($("html,body").scrollTop() > 700 ){
		if ($(".top.hid").is(".top.hid")){
			$(".top").css({"top":"-5%","opacity":0}).stop(true).animate({top:"5%",opacity:1},{duration:500,start:function(){
				$(this).css("display","flex").attr("class","top");
			}});
		}
	} else {
		if (!($(".top.hid").is(".top.hid"))){
			$(".top").animate({top:"-5%",opacity:0},{duration:500,start:function(){
				$(this).attr("class","top hid");
			},complete:function(){
				$(this).removeAttr("style");
			}});
		}
	}		
});
$(".top").on("click",function(){$("html,body").stop(true).animate({scrollTop:0},800);});
$(window).resize(function(){rem();});