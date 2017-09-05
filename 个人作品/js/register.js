
$(function(){
			$("#myhead").load("head.html")
			var enter=document.getElementById("enter");
			var register=document.getElementsByClassName("register")[0]
			enter.onclick=function(){
				register.style.background="red";
			}
		})
 