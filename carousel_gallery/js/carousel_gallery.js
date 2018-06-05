//Gallery carousel was created by Smart Coding System(SCS - smartcodingsystem.com), author Vahagn Gabrielyan.
$(function(){
	function rtSn(){
		var i,l_a,r_a,img,mpRt,ut,
			gB = $(".gallery_body"),
			item = is_wrap = l = "",
			img1_path = "img/img-1/g",
			img1g_path = "img/img-1-gallery/g",
			img1t_path = "img/img-1-thumb/g",
			pic_amount = 14,
			wiw = window.innerWidth,
			wih = window.innerHeight;		
		wiw < 451 || wiw > 1366 ? ut = "vw" : ut = "px";
		
		for( i = 1; i < 4; i++){
			item += "<div class=\"item\"><a class=\"item_anch\"><p class=\"num\"></p></a><p class=\"numT\">num</p><img alt=\"\"></div>";
			}
		if (wiw < 651 ) {
			for( i = 1; i < 2; i++){
				is_wrap = "<dic class=\"items_wrap\">" + item + "</div>";
				gB.append(is_wrap);
			}
		} else if (wiw < 951 ) {
			for( i = 1; i < 3; i++){
				is_wrap = "<dic class=\"items_wrap\">" + item + "</div>";
				gB.append(is_wrap);
			}
		} else {
			for( i = 1; i < 4; i++){
				is_wrap = "<dic class=\"items_wrap\">" + item + "</div>";
				gB.append(is_wrap);
			}
		}
		
		$(".num").each(function(ind){$(this).text(pic_amount-ind);});
		$(".item img").each(function(ind){$(this).attr("src",img1g_path + (pic_amount-ind) + ".jpg");});	
			
		function rHov() {
			$(".gallery_wrap").hover(
				function(){
					$(".gallery_wrap .r_aWp").css("display","block").stop(true).animate({opacity:1,right:"10%"},800);},
				function(){
					$(".gallery_wrap .r_aWp").stop(true).animate({opacity:0,right:"50%"},800,function(){$(this).css("display","none")});}
			);		
		}rHov();
		function lHov() {
			$(".gallery_wrap").hover(							
				function(){
					$(".gallery_wrap .l_aWp").css("display","flex").stop(true).animate({opacity:1,left:"10%"},800);},
				function(){
					$(".gallery_wrap .l_aWp").stop(true).animate({opacity:0,left:"50%"},800,function(){$(this).css("display","none")});}
			);
		}
		
		var isWpF = $(".items_wrap:eq(0)"),
			isWpL = $(".items_wrap:last-child"),
			isWpFI = $(".items_wrap:eq(0) img"),
			isWpLI = $(".items_wrap:last-child img"),
			isWpLImL = $(".items_wrap:last-child .item:last-child"),
			isWpLImL2 = $(".items_wrap:last-child .item:nth-last-child(-n+2)"),	
			rt = $(".items_wrap").width(),
			mnLt = parseInt($(".items_wrap:eq(1)").css("margin-left"));		
		$(".gallery_wrap .r_a").on("click",function(){
			var f_img = isWpFI.attr("src").match(/\d+\./g).join(""),
				l_img = isWpLI.attr("src").match(/\d+\./g).join(""),
				chkF = parseInt(f_img),
				chkL = parseInt(l_img);			
			if (!(chkL < 3)) {
				$(".gallery_body").stop(true).animate({right: rt + (wiw < 651 ? 0 : mnLt)},
					{
						duration: 500,
						start: function(){
							isWpF.stop(true).animate({opacity: 0},500,function(){$(this).css("opacity","1");});
						},
						complete: function(){
							$(this).removeAttr("style");
							$(".item img").each(function(){
								var src = $(this).attr("src").match(/\d+\./g).join(""),
								add_img = Number(src) - 3;
								$(this).attr("src",img1g_path + add_img + ".jpg");					
							});
							$(".num").each(function(){
								var num = $(this).text(),
								add_num = Number(num) - 3;
								$(this).text(add_num);
							});
							isWpL.css("opacity","0").stop(true).animate({opacity: 1},500);
							if (chkL === 5) {
								isWpLImL.css("display","none");
							} else if (chkL === 4) {
								isWpLImL2.css("display","none");
							}							
							if ( chkL < 6 ) {
								$(".gallery_wrap .r_aWp").stop(true).animate({opacity:0,right:"50%"},800,function(){$(this).css("display","none")});
								$(".gallery_wrap").off("mouseenter mouseleave");
								lHov();
							}							
							if ( chkF === pic_amount ) {
								
								$(".gallery_wrap .l_aWp").css("display","flex").stop(true).animate({opacity:1,left:"10%"},800);lHov();
							}
						}
					}
				);
			}			
		});
		$(".gallery_wrap .l_a").on("click",function(){
			f_img = isWpFI.attr("src").match(/\d+\./g).join(""),
			l_img = isWpLI.attr("src").match(/\d+\./g).join(""),
			chkF = parseInt(f_img),
			chkL = parseInt(l_img);
			
			if (chkF < pic_amount) {				
				$(".gallery_body").stop(true).animate({left: rt + (wiw < 651 ? 0 : mnLt)},
					{
						duration: 500,
						start: function(){
							isWpL.stop(true).animate({opacity: 0},500,function(){$(this).css("opacity","1");});
						},
						complete: function(){					
							$(this).removeAttr("style");
							$(".item img").each(function(){
								var src = $(this).attr("src").match(/\d+\./g).join(""),
								subt = Number(src) + 3;			
								$(this).attr("src",img1g_path + subt + ".jpg");
							});
							$(".num").each(function(){
								var num = $(this).text(),
								subt_num = Number(num) + 3;
								$(this).text(subt_num);
							});
							isWpF.css("opacity","0").stop(true).animate({opacity: 1},500);
							
							if (chkL === 2) {
								isWpLImL.css("display","block");
							} else if (chkL === 1) {
								isWpLImL2.css("display","block");
							}
							if ( chkL === 1 || chkL === 2 ) {
								$(".gallery_wrap .r_aWp").css("display","flex").stop(true).animate({opacity:1,right:"10%"},800);
								rHov();
							}
							if ( chkF === pic_amount - 3 ) {
								$(".gallery_wrap .l_aWp").stop(true).animate({opacity:0,left:"50%"},800,function(){$(this).css("display","none")});
								$(".gallery_wrap").off("mouseenter mouseleave");rHov();
							}
						}
					}
				);
			}
		});
		
		//Hover effect(|)
		$(".item").each(function(i,e){$(this).attr("id","id-" + (i+1) + "");});
		var id_numBd,id_numFS,id_numFSI,arr,ie,
			ua = window.navigator.userAgent.match(/trident/gi);
		if(ua){ie = ua.join("");}
		
		if(wiw < 451){
			id_numBd = (ie === "Trident" ? "17vw" : "14vw"),id_numFS = "4.5vw",id_numFSI = "3.5vw";
		} else if(wiw < 1367) {
			id_numBd = (ie === "Trident" ? "130px" : "70px"),id_numFS = "18px",id_numFSI = "14px";
		} else {
			id_numBd = (ie === "Trident" ? "8vw" : "5vw"),id_numFS = "1.5vw",id_numFSI = "1vw";
		}
		for(i = 1; i < 10; i++){l += i;} arr = l.split("");	
		arr.forEach(function(e,i){
			var id_num = $("#id-" + e + " .num"),
				id_ia = $("#id-" + e + " .item_anch");
			if (wiw < 451 || wiw > 1366) {				
				var nmWpW = (id_num.width()*100/wiw).toFixed(1),
				nmWpH = (id_num.height()*100/wiw).toFixed(1),
				nmWpP = (parseInt(id_num.css("padding-top"))*100/wiw).toFixed(1);
			} else {
				var nmWpW = id_num.width(),
				nmWpH = id_num.height(),
				nmWpP = parseInt(id_num.css("padding-top"));				
			}
			id_ia.hover(
			function(){
				id_ia.css({"background":"rgba(0,0,0,.5)"});			
				id_num.css({"background":"url(img/search.svg) no-repeat center/" + id_numBd}).stop(true).animate({width:"100%",height:"100%",fontSize:id_numFS,padding:0});
			},
			function(){
				id_ia.css({"background":"none"});			
				id_num.css({"background":"none"}).stop(true).animate({fontSize:id_numFSI,width:nmWpW+ut,height:nmWpH+ut,padding:nmWpP+ut},function(){
					id_ia.removeAttr("style");
					id_num.removeAttr("style");
				});
			});		
		});
		
		//Project(|)	
		$(".item_anch").each(function(ind,ele){
			$(this).on("click",function(){
				$("body").css("overflow","hidden");
				$(".project_wrap").fadeIn();
				$(".project_body").fadeIn({
					duration: 1500,
					start: function(){
					$(this).css("display","flex");}
				});
				$(".mg_wrap,.models img").remove();
				var main_num = $("#id-" + (ind+1) + " .num").text(),main_img = "",
					full_tip = img1t_path + main_num;
				[1,0,-1].forEach(function(e,i){
					main_img += "<div class=\"mg_wrap\"><img class=\"main_img\" src=\"" + img1_path + (Number(main_num) +e) + "_0.jpg\" alt=\"\"></div>";
				});
				$(".main_imgs_wrap").append(main_img);
				$(".title span").text(main_num);			
				[1,2,3].forEach(function(e){
					$(".models").append("<img src=\"" + full_tip + "_" + e + ".jpg\" alt=\"\" />");
					var ok = "ok-" + e;
					if (ok == "ok-1" || ok == "ok-2" || ok == "ok-3") {models();}
				});
				var mg2I = $(".main_img:eq(1)").attr("src").match(/\d+_\d/).join("");
					b = parseInt(mg2I);
				if (b === pic_amount){	
					$(".arrows .l_a").css("display","none");
					$(".arrows .r_a").css("display","block");
				} else if (b === 1){
					$(".arrows .r_a").css("display","none");
					$(".arrows .l_a").css("display","block");
				} else {
					$(".arrows .l_a,.arrows .r_a").css("display","block");		
				}
			});
		});
		function models(){
			$(".models img").each(function(i){
				var main_src,main_src_num,main_src1,main_src_num1,f_r1,f_r2;
				$(this).click(function(){					
					$(".main_img:eq(1)").stop(true).fadeOut(function(){	
						main_src = $(this).attr("src");
						main_src_num = main_src.match(/_\d/).join("");
						main_src1 = document.querySelectorAll(".models img")[i].getAttribute("src");
						main_src_num1 = main_src1.match(/_\d/).join("");
						f_r1 = main_src.replace(main_src_num,main_src_num1);
						f_r2 = main_src1.replace(main_src_num1,main_src_num);
						$(this).attr("src",f_r1);					
					}).fadeIn();			
					$(this).stop(true).fadeOut(function(){$(this).attr("src",f_r2)}).fadeIn();
				});
			});
		}	
		$(".close,.project_wrap").on("click",function(){
			$(".project_wrap").fadeOut(1000,function(){
				$("body").css("overflow","auto");
			});
			$(".project_body").fadeOut();
		});
		$(".project_body").on("click",false);
		
		function resln(){img = $(".main_img:eq(1)"),mpRt = 2*(img.width()*100/wiw).toFixed(1);}
		
		$(".arrows .r_a").on("click",function(){
			var img1 = $(".main_img:eq(0)"),
				img2 = $(".main_img:eq(1)"),
				img3 = $(".main_img:eq(2)"),
				a = img2.attr("src"),
				a1 = a.match(/\d+_\d/).join(""),			
				b = parseInt(a1) - 1;
			resln();
			$(".main_imgs_wrap").stop(true).animate({right:parseInt($(".main_imgs_wrap").css("right"))===0 ? mpRt/2+"vw" : mpRt + "vw"},
				{
					duration: 1000,
					start: function(){
						$(".models img").remove();
						$(".main_img:eq(0),.main_img:eq(2)").css({opacity:0});
						$(".main_img:eq(1)").stop(true).animate({opacity:0},1000);
						$(".main_img:eq(2)").stop(true).animate({opacity:1},1000);
					},
					complete: function(){
						$(".main_img:eq(1)").css("opacity",1);
						$(".main_img:eq(0),.main_img:eq(2)").css("opacity",0);
						$(".main_imgs_wrap").css("right",mpRt/2+"vw");
						var c1 = a.replace(a1,(b + 1)+"_0"),
							c2 = a.replace(a1,b+"_0"),
							c3 = a.replace(a1,(b - 1)+"_0");
						img1.attr("src",c1);
						img2.attr("src",c2);
						img3.attr("src",c3);					
						
						$(".title span").text(b);
						 if (b < 2){
							$(".arrows .r_a").fadeTo(0,800,function(){
								$(this).css("display","none");
							});			
						} else if (b < pic_amount){
							$(".arrows .l_a").fadeTo(1,800,function(){
								$(this).css("display","block");
							});			
						}
						$(".models img").remove();
						[1,2,3].forEach(function(e){										
							$(".models").append("<div class=\"mlImgWp\"><img src=\"" + img1t_path + b + "_" + e + ".jpg\" alt=\"\" /></div>");
							var ok = "ok-" + e;
							if (ok == "ok-1" || ok == "ok-2" || ok == "ok-3") {models();}	
						});
						
					}
				}
			);
			var l_n = $(".items_wrap:last-of-type .item:last-of-type .num").text();
			if(b < l_n && l_n > 1){
				$(".gallery_wrap .r_a").click();
			}
		});
		$(".arrows .l_a").on("click",function(){
			var img1 = $(".main_img:eq(0)"),
				img2 = $(".main_img:eq(1)"),
				img3 = $(".main_img:eq(2)"),
				a = img2.attr("src"),
				a1 = a.match(/\d+_\d/).join(""),			
				b = parseInt(a1) + 1;
			resln();			
			$(".main_imgs_wrap").stop(true).animate({right:0},
				{
					duration: 1000,
					start: function(){
						$(".models img").remove();
						$(".main_img:eq(0),.main_img:eq(2)").css({opacity:0});
						$(".main_img:eq(1)").stop(true).animate({opacity:0},1000);
						$(".main_img:eq(0)").stop(true).animate({opacity:1},1000);
					},
					complete: function(){
						$(".main_img:eq(1)").css("opacity",1);
						$(".main_img:eq(0)" + b === pic_amount ? + "" : + ",.main_img:eq(2)").css("opacity",0);
						$(".main_imgs_wrap").css("right",mpRt/2+"vw");			
						var c1 = a.replace(a1,(b + 1)+"_0"),
							c2 = a.replace(a1,b+"_0"),
							c3 = a.replace(a1,(b - 1)+"_0");
						img1.attr("src",c1);
						img2.attr("src",c2);
						img3.attr("src",c3);						
						$(".title span").text(b);					
						if (b === pic_amount){
							$(".arrows .l_a").fadeTo(0,800,function(){
								$(this).css("display","none");
							});			
						} else if (b > 1){
							$(".arrows .r_a").fadeTo(1,800,function(){
								$(this).css("display","block");
							});
						}
						$(".models img").remove();
						[1,2,3].forEach(function(e){									
							$(".models").append("<div class=\"mlImgWp\"><img src=\"" + img1t_path + b + "_" + e + ".jpg\" alt=\"\" /></div>");
							var ok = "ok-" + e;
							if (ok == "ok-1" || ok == "ok-2" || ok == "ok-3") {models();}	
						});
					}
				}
			);
			var f_n = $(".items_wrap:first-of-type .item:first-of-type .num").text();
			if(b > f_n && f_n < pic_amount){
				$(".gallery_wrap .l_a").click();
			}
		});	
	}rtSn();
	$(window).resize(function(){
		if (wiw !== window.innerWidth) {console.log("Please, reload the page!");$(".items_wrap").remove();rtSn();$(".r_aWp").remove();$(".l_aWp").remove();}	
	});
});