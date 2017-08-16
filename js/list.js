window.onload = function() {

	var list = new XMLHttpRequest();
	list.open("GET", "../js/json/list.json");
	list.send();
	list.addEventListener("readystatechange", function() {
		/*********判断解析是否到了第四部,并且成功接受***********/
		if(list.readyState == 4 && list.status == 200) {
			var list_content = JSON.parse(list.responseText);

			/*************根据宾客排名**************/
			for(var i = 0; i < list_content.length; i++) {
				for(var j = i + 1; j < list_content.length; j++) {
					var a = list_content[i].number;
					var b = list_content[j].number;
					if(a < b) {
						var tmp;
						tmp = list_content[j];
						list_content[j] = list_content[i];
						list_content[i] = tmp
						//判断number来调换整个json
					}

				}
			}

			/*********排名生成页面中的内容**********/
			for(var z = 0; z < 100; z++) {
				var div = '<div class="list_model clearfix "><div  class="xuhao fl "><p class="num">' + (z + 1) + '</p></div><div  class="touxiang fl"><img src=' + list_content[z].img + '/></div><div class="name fl">' + list_content[z].name + '</div><div class="renshu fr">' + list_content[z].number + '位宾客</div></div>';
				$(".main_content").eq(0).append(div);

			}
			/*********生成前三名*********/
			$(".num").eq(0).before('<p class="ic"><img src="../img/list/huangGuan.png" /></p>')
			$(".num").eq(1).before('<p class="ic"><img src="../img/list/yinGuan.png" /></p>')
			$(".num").eq(2).before('<p class="ic"><img src="../img/list/tongGuan.png" /></p>')
			///模拟获得最新数据，json最后一个数据。
			var id = 99999999999;//模拟手写数据
			var arr = [];
			for(var q = 0; q < list_content.length; q++) {
				//电话号码
				arr.push(list_content[q].call);

			}
			var call_weizhi=arr.indexOf(id);
			//将最后一个元素排上去
			var weizhi	='<div class="list_model clearfix weizhi " ><div  class="xuhao fl "><p class="num">' + (call_weizhi + 1) + '</p></div><div  class="touxiang fl"><img src=' + list_content[call_weizhi].img + '/></div><div class="name fl">' + list_content[call_weizhi].name + '</div><div class="renshu fr">' + list_content[call_weizhi].number + '位宾客</div></div>';
			$(".web").eq(0).append(weizhi);
			
		}

	})
}