$(function(){
	$(".list_second li").hover(function(){
		var index=$(this).index();
		console.log(index)
		$(".nav-big").show();
		$(".nav-big>div").eq(index).show().siblings().hide();
	   if(index==5){
	   	$(".nav-big").hide();
	   }
	},function(){
		$(".nav-big").hide();
	}
	)
	
//	var flag=true;
// if(flag){
	//鼠标移入导航的时候不能消失
   	$(".nav-big").hover(function(){
// 		flag=false;
   		$(".nav-big").show();
   	},function(){
// 		flag=true;
   		$(".nav-big").hide();
   	}
   	)
// }
   
   $(".list_second li:eq(5)").hover(function(){
	$(".nav-big").hide();
	
   })
	
})
//	},function(){
//		$(".nav-menu").hide();
//	}
//	
//	)
//	
//	
//
//
//
//
   
   
   
