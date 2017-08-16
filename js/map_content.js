
window.onload=function(){

		

	/***********地图****************/
			var map, geolocation;

				//加载地图，调用浏览器定位服务
				map = new AMap.Map('container', {
					resizeEnable: true,
					//					center: lnglat,
					zoom: 15
				});
				/***********加载定位插件****************/
				map.plugin('AMap.Geolocation', function() {
					geolocation = new AMap.Geolocation({
						enableHighAccuracy: true, //是否使用高精度定位，默认:true
						timeout: 10000, //超过10秒后停止定位，默认：无穷大
						buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
						zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
						buttonPosition: 'RB',
						 panToLocation: true
						
						
					});
					map.addControl(geolocation);
					geolocation.getCurrentPosition();
					AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息,实时监听位置
					AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息,实时监听是否错误
				});

				//解析定位结果
				function onComplete(data) {

					str = ['定位成功'];
					str.push('经度：' + data.position.getLng());
					str.push('纬度：' + data.position.getLat());
					if(data.accuracy) {
						str.push('精度：' + data.accuracy + ' 米');
					} //如为IP精确定位结果则没有精度信息
					str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
					document.getElementById('tip').innerHTML = str.join('<br>');

				}
				//解析定位错误信息
				function onError(data) {
					document.getElementById('tip').innerHTML = '定位失败';
				}
				/*********信息窗口marker**********/
				/****************加载高级信息窗体的插件**************/
				map.plugin('AMap.AdvancedInfoWindow', function() {
					
					var lnglat = ['113.33098', '23.14109']
					
					var marker = new AMap.Marker({
						position: lnglat,
						map: map
					});
					marker.setMap(map);

					var content = '<div class="info-title">高德地图</div><div class="info-content">' +
						'<img src="http://webapi.amap.com/images/amap.jpg">' +
						'高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>' +
						'<a target="_blank" href = "http://mobile.amap.com/">点击下载高德地图</a></div>';
					var infowindow1 = new AMap.AdvancedInfoWindow({
						content:content,
						offset: new AMap.Pixel(0, -30), //信息宽口的位置,对于标注点的位置
						closeWhenClickMap: true,
						placeSearch: true,
						asOrigin: true,
						asDestination: true,
						//					size:new AMap.Size(300, 0)
					});
					/***点击标注显示信息窗口功能***/
					AMap.event.addListener(marker, 'click', function() {
						console.log(123);
						//					infowindow1.open(map);
						/*************************/
						infowindow1.open(map, lnglat);
					})
				})
}
