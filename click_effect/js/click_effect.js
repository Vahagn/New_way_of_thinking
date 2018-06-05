//Click effect was created by Smart Coding System(SCS - smartcodingsystem.com), author Vahagn Gabrielyan.
var wiw = window.innerWidth;
var arr = [[".ckMe",".hid_cl",".ow"],[".ckMe2",".hid_cl2",".ow2"]];
arr.forEach(function(ele,ind){
	$(arr[ind][0]).each(function(i,e){
		$(this).on("click",function(){
			var chk = $(arr[ind][1]).css("display");					
			if( chk === "none" && i===0 ){
				$(arr[(ind===0?1:0)][2]+":eq("+i+")").stop(true).animate({height:0},function(){
					$(this).css("width",0);
					$(arr[(ind===0?1:0)][2]+":eq(1)").css({"width":0});
					$(arr[(ind===0?1:0)][1]).css("display","none");
				});							
				$(arr[ind][1]).css("display","block");
				$(arr[ind][2]+":eq(0)").css("width","auto").stop(true).animate({height:"90%"},200,function(){
					$(this).css("height","auto");
				});
			} else if( i===1 ){
				if (parseInt($(arr[ind][2]+":eq(1)").css("width"))===0) {
					$(arr[ind][2]+":eq(0)").css({"width":wiw < 301 ? "30%" : "24%","height":"100%"});
					$(arr[ind][2]+":eq(1)").css({"height":"auto"}).stop(true).animate({width:"100%"});
				} else {
					$(arr[ind][2]+":eq(1)").stop(true).animate({width:0});
				}
			} else {							
				$(arr[ind][2]+":eq("+i+")").stop(true).animate({height:0},function(){
					$(this).css("width",0);
					$(arr[ind][2]+":eq(1)").css({"width":0});
					$(arr[ind][1]).css("display","none");
				});
			}
			return false;
		});
		$(window).on("click blur",function(){
			$(arr[ind][2]+":eq("+i+")").stop(true).animate({height:0},200,function(){
					$(this).css("width",0);
					$(arr[ind][1]).css("display","none");
					$(arr[ind][2]+":eq(1)").css({"width":0});		
				});
		});
	});				
});