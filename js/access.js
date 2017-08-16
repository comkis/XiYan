window.onload = function(){

	var guanjian=true;
	var music=document.getElementsByClassName("music")[0];
	var Audio=document.getElementsByClassName("audio")[0];
	var icon=music.getElementsByTagName("i")[0];
	music.style.zIndex = "5";
//	点击音乐播放或停止-------------------
	icon.addEventListener("click",function () {
		if (guanjian) {
			guanjian=false;
			music.classList.remove("aminate");
			icon.className="iconfont icon-yinletingzhi24px";
			Audio.pause();
		}else{
			guanjian=true;
			music.classList.add("aminate");
			icon.className="iconfont icon-yinle";
			Audio.play();
		}
	});
	
	var  web_sign2 = document.querySelector(".web_sign2");
//	判断是否在囍宴页面----------------------
	if (web_sign2!=null) {
		var tit = web_sign2.querySelector(".tit");
//		模拟获取微信唯一识别---------------
		var name = prompt("请输入姓名");
		tit.querySelector(".name").innerHTML = name;
		var none = web_sign2.querySelectorAll("i");
		var inp = web_sign2.querySelector("input");
		web_sign2.querySelector(".pop").style.display = "none";
		
		none[none.length-1].onclick = function(){
			web_sign2.querySelector(".pop").style.display = "none";
		}
		inp.onclick = function(){
			web_sign2.querySelector(".pop").style.display = "block";
		}
//		撒糖果---------------
		var tan = web_sign2.querySelector(".tan");
		var tan_key = true;
		var time_num = 0;
		for (var i = 0; i < 99; i++) {
			var left = parseInt(Math.random()*20);
			var time = setTimeout(function(){
				time_num++;
				var sweet = document.createElement("div");
				sweet.innerHTML = '<img src="../img/tangguo.png"/>';
				sweet.className = "sweet";
				sweet.style.left = parseInt(Math.random()*90) + "%";
				sweet.style.transform = "rotateZ(" + (parseInt(Math.random()*1440)-719) + "deg)";
				tan.appendChild(sweet);
				if (time_num == 99) {
					var time_out = setTimeout(function(){
						tan.style.display = "none";
					},2000)
				}
			},left*100)
		}
	}
	
	var web_sign3 = document.querySelector(".web_sign3");
//	判断是否在查看囍宴页面-----------------
	if (web_sign3!=null) {
		var none = web_sign3.querySelectorAll("i");
//		关闭弹框-----------------------
		none[none.length-1].onclick = function(){
			web_sign3.querySelector(".pop").style.display = "none";
		}
	}
	
	var web_sign1 = document.querySelector(".web_sign1");
	
	var hint = document.getElementsByClassName("hint");
	var name = document.getElementsByClassName("name");
	var none = document.querySelectorAll(".pop i");
	
	var pop = document.querySelector(".pop");
	if (pop.children.length>1) {
		pop.children[1].style.display = "none";
	}
	
	if (web_sign1!=null) {
		var inp = web_sign1.querySelectorAll(".pop-up input");
//			关闭弹框-----------------------
		inp[0].onclick = none[0].onclick = none[1].onclick = function(){
			pop.style.display = "none";
		}
		hint[1].style.display = "none";
	}
	
	var num = ['','一','二','三','四','五','六','七','八','九']
	var mul = ['','十','百'];
	
	var seat = document.getElementsByClassName("seat")[0];
	var branch = document.getElementsByClassName("branch");
	var add = document.querySelector(".add");
//	页面加载完成后抓取一个空白桌子的html代码备用--------------------
	var tem = branch[1].cloneNode(true).innerHTML;
//	添加桌子-------------
	add.onclick = function (){
//		抓取第一个小桌子的代码-------
		var clon = branch[1].cloneNode(true);
		var numb ;
//		将页面加载完成抓取的空白桌子heml代码赋给抓取的节点----------
		clon.innerHTML = tem;
//		判断总桌子数------------
		if (branch.length<10) {
			clon.querySelector("p").innerHTML ="第"+num[branch.length]+"桌";
			
		} else if(branch.length<20){
			numb=branch.length%10;
			clon.querySelector("p").innerHTML ="第十"+num[numb]+"桌";
			
		}
		else if (branch.length<100) {
			numb=branch.length%10;
			clon.querySelector("p").innerHTML ="第"+num[Number(branch.length.toString()[0])]+"十"+num[numb]+"桌";
		}
		var ext = arr.length;
//		判断席位是否坐满,为坐满不予添加桌子并且弹框提示;坐满则添加桌子-------------
		for (var i = 0;i < ext; i++) {
			for (var j = 0; j < 6;j++) {
				if (arr[i][j] == undefined) {
					i = arr.length;
					alert("席位尚未坐满，不能添加桌子");
					break;
				} else if(i == arr.length-1 && j == 5){
//					var arr_seat = [1,2,3,4,5,6];
					var arr_seat = new Array(6);
					arr.push(arr_seat);
					seat.insertBefore(clon,branch[branch.length-1]);
					big();
				}
			}
		}
		
	}
	
	var btn = false;
	var main = document.getElementsByClassName("main");
	var foo = document.getElementsByClassName("foo")[0];
	
	var arr = [];
//	以桌子和对应的椅子数量建立二维数组-----------
	for (var i = 0; i < main.length-1; i++) {
//		var arr_seat = [1,2,3,4,5,6];
		var arr_seat = new Array(6);
		arr.push(arr_seat);
	}
	
	var width = (document.getElementsByClassName("web")[0].clientWidth)/2;
	var heigh = (document.getElementsByClassName("web")[0].clientHeight)/2;
	function big(){
		for (var i = 0;i < main.length-1; i++) {
			main[i].index =i;
//			点击桌子时放大桌子--------------
			main[i].addEventListener("click",function(){
				var this_top = this.offsetTop + this.parentNode.offsetTop + this.clientHeight/2 ;
				console.log(this.scrollTop)
				var this_left = this.offsetLeft + this.parentNode.offsetLeft + this.clientWidth/2 ;
				for (var j = 0;j < main.length; j++) {
					main[j].parentNode.style.opacity = "0";
				}
				
				this.parentNode.style.cssText = "opacity: 1;";
				this.style.cssText = "z-index: 5;";
				if (this.index == 0) {
					this.style.transform = " translate(" + (width - this_left) + "px," + (heigh - this_top ) + "px) scale(2.0)";
					btn = true;
					foo.style.zIndex = "4";
				} else{
					this.style.transform = "translate(" + (width - this_left) + "px," + (heigh - this_top) + "px) scale(2.9)";
					btn = true;
					foo.style.zIndex = "4";
				}
			})
			
			for (var k = 0;k < main[0].children.length-1;k++) {
//				点击椅子判断是否已经有人坐下,有则弹框提示,没有这询问是否坐下---------------
				var that = main[main[0].children.length];
				main[i].children[k+1].index = k;
				main[i].children[k+1].onclick = function(){
					if (this.className.indexOf("sign")>=0) {
						alert(" 这个位置已经被预定了哦！！")
					} else{
						if (btn) {
							btn = false;
							var check = false;
//							输入数字模拟获取微信唯一识别------------
							var str = prompt("输入号码");
							numa = 0;
							if (str != null) {
								console.log(str)
//								判断输入的内容是否纯数字---------------
								if (str.length == parseInt(str).toString().length) {
//									判断输入内容是否已经在数组中存在----------
									for (var m = 0;m<arr.length;m++) {
										for (var n = 0; n < 6; n++) {
											console.log("sa")
											if (arr[m][n] == str) {
												alert("您已入座");
												check = true;
												break;
											}
											if(arr[m][n] != undefined){
												numa++;
											}
										}
										if (check) {
											break;
										}
									}
									if (m==arr.length&&n==6) {
										var answer = confirm("确定入席？")
//										询问是否入席时确认就坐下,否则不做任何操作-----------
										if (answer) {
											arr[this.parentNode.index][this.index] = str;
											this.innerHTML = '<img src="../img/small.jpg"/>';
											this.style.padding = "0";
											this.classList.add("sign");
											check = true;
											numa++;
											if (web_sign1!=null) {
												if (this.parentNode.index ==0 ) {
													name[2].innerHTML = "主宾桌";
												} else if (web_sign1!=null) {
													name[2].innerHTML = this.parentNode.index;
												}
												name[3].innerHTML = this.index + 1;
												hint[0].style.display = "none";
												hint[1].style.display = "block";
												pop.style.display = "block";
												pop.children[0].style.display = "none";
												pop.children[1].style.display = "block";
											}
										}
										
									}
								} else {
									alert("请输入纯数字（不能有空格哦！！）")
								}
								
							}
						}
					}
					
				}
			}
			
		}
	}
	
	big();
	var numa = 0;
	
//	桌子放大后点击桌子外的空白区域缩小桌子-----------
	foo.addEventListener("click",function(e){
		e.stopPropagation();
		for (var k = 0;k < main.length;k++) {
			if (getComputedStyle(main[k].parentNode).opacity == "1") {
				for (var z = 0;z < main.length; z++) {
					main[z].parentNode.style.opacity = "1";
				}
				main[k].parentNode.style.cssText ="z-index:none;"
				if (k == 0) {
					main[k].style.transform = "scale(1) translate(0)"
					btn = false;
					foo.style.zIndex = "-1";
					if (web_sign1!=null) {
						hint[0].style.display = "block";
						hint[1].style.display = "none";
						name[0].innerHTML = numa+1;
						name[1].innerHTML = numa;
					}
					break;
				} else{
//					main[k].parentNode.style.cssText = "width:50%;";
					main[k].style.transform = "scale(1) translate(0)"
					btn = false;
					foo.style.zIndex = "-1";
					if (web_sign1!=null) {
						hint[0].style.display = "block";
						hint[1].style.display = "none";
						name[0].innerHTML = numa+1;
						name[1].innerHTML = numa;
					}
					break;
				}
			}
		}
	},false)
}
