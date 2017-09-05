
$(function(){
	
	$("#myhead").load("head.html",function(){
		$(".list_second li").hover(function(){
		$(".sec_nav").hide();
		
	},function(){
		$(".sec_nav").show();
	}
	)
		
		$(".nav-big").hover(function(){
			$(".sec_nav").hide();
		})
	})
	
	
	
	$(".slice").slideUp(1000);
	$(".read-particulars").html("阅读详情");
	var inow=0;
	var onewidth=$(".boutique-items li").eq(0).width();
	//自动轮播
	timer=setInterval(change,2000);
	
	function change(){
		move();
		inow++;
		
	}
	//后按钮
	$(".rigth").click(function(){
			inow++;
			move();
		})
		//前按钮--
		$(".left").click(function(){
			inow--;
			move();
		})

	//点击圆点切换
		$(".swipe-pagination li").click(function(){
			inow=$(this).index();
			move();
		})

   	function move(){
   		if(inow==4){
   			inow=1;
   			$(".boutique-items").css("left",0)//可以让复制的图片移动的时候可以有个过渡效果
   		}
   		//前按钮限制
   		if(inow==-1){
					inow=3;
					$(".boutique-items").css("left",-5*600);
				}
				$(".boutique-items").stop().animate({left:-inow*600},300);
		
		if(inow==3){
				$(".swipe-pagination li").eq(0).addClass("active").siblings().removeClass("active");
				}else{
					$(".swipe-pagination li").eq(inow).addClass("active").siblings().removeClass("active");
				}
       
		$(".boutique-items").stop().animate({left:-inow*onewidth+"px"})
		
	}	
	//轮播下标
	var one=$(".boutique-items li").eq(0).clone();
	$(".boutique-items").append(one).width($(".boutique-items li").length*715);
	
	
	//前后按钮显示
		$(".boutique-list").hover(function(){
			$(".btn").show();
			clearInterval(timer);
		},function(){
			$(".btn").hide();
			timer=setInterval(function(){inow++;move();},2000)
			
		}
		)
		
		
		
//   var flag=true;
//	$(".read-particulars").click(function(){
//		
		$(".read-particulars").click(function(){
			$(".slice").stop(true,true).slideToggle(1000);
			$(".read-particulars").html("阅读详情")
		})
		
//		if(flag=true){
//		$(".slice").stop(true,true).slideDown(1000);
//		$(".read-particulars").html("收起详情");
//		flag=false;
//		}
//	})
//		console.log(flag)
//		if(flag=false){
//			
//		flag=true;
//		console.log(flag)
//		$(".slice").stop(true,true).slideUp(1000);
//		$(".read-particulars").html("阅读详情");
//		}
//		})
//	
//	
      
})
