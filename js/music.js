window.onload=function () {
	var guanjian=true;
  	var music=document.getElementsByClassName("music")[0];
	var Audio=document.getElementsByClassName("audio")[0];
	var icon=music.getElementsByTagName("i")[0];
	icon.addEventListener("click",function () {
		if (guanjian) {
			guanjian=false;
			music.classList.remove("amin");
			icon.className="iconfont icon-yinletingzhi24px";
			Audio.pause();
		}else{
			guanjian=true;
			music.classList.add("aminate");
			icon.className="iconfont icon-yinle";
			Audio.play();
		}
	});
	
}