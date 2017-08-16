window.onload=function(){
	
	$('.btn').eq(0).on('click',function(){
		$('.hainan_head').css("display","none");
		$('.guangdong_head').css('display','block');

		
	})
	
	$('.btn').eq(1).on('click',function(){
		$('.hainan_head').css("display","block");
		$('.guangdong_head').css('display','none');

		
	});
	var music=document.querySelector(".music");
	var audio=music.querySelector(".audio");
	
	var kaiguan =true;
	music.addEventListener('click',function(){
		var span=music.querySelector("span")
		console.log(span)
		if(kaiguan){
			audio.pause();
			kaiguan=false;
			span.classList.remove("aminate");
		}else{
			audio.play();
			kaiguan=true;
			span.classList.add("aminate");
			
		}
		
	})
	
	
	
	
	
}
