$(function(){
	$(".service").hover(function(){
		$(".service").animate({"bottom":0},2000)
		
	},function(){
		$(".service").animate({"bottom":-45},2000)
	}
	)
	
})
