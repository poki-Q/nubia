window.addEventListener("load", function(){
	
	// 系列名称
	var series = ["红魔系列","阿尔法","X","Z系列","周边配件","专属配件"];
	//手机名称
	var names_red = ["红魔3S红蓝竞技","红魔3S银色风暴","红魔3红蓝","红魔3迷彩","红魔3赤焰红","红魔3玄铁黑","红魔Mars烈焰红","红魔Mars曜石黑"];
	var names_alpha = ["阿尔法伯爵黑"];
	var names_x = ["X蓝金版","X星空典藏版","X海光蓝","X黑金","X深空灰"];
	var z = ["Z20锦鲤红","Z20钻石黑"];
	var peripheral = ["红魔弹夹移动电源","红魔3电竞魔盒","战神手柄","努比亚创意贴纸"];
	var parts = ["nubia pods","耳机","保护壳","充电器"];
	var all_names = [names_red,names_alpha,names_x,z,peripheral,parts];
	
	// 声明变量
	var target = 0 ;
	var current  = 0;
	var i = 0;
	var interBannerScroll;
	var indicatorsHTML = "";
	var k = 0; // 指示点下标
	var imgNum = 15;
	
	//获取要操作的标签
	var bannerScroll = document.getElementById("banner_scroll");
	var list = document.getElementById("list");
	var img = list.querySelector("img"); // 轮播图第一张图片
	var indicatorDots = document.getElementById("indicator_dots");
	var dotsList = document.getElementById("dots_list");
	var menu_list = document.getElementById("menu_list");
	var itemsList = document.getElementsByClassName("items-list");
	
	/**
	 * 结构
	 */
	// 克隆第一个子标签放在后面
	list.appendChild(list.children[0].cloneNode(true));
	
	// 设置样式
	imgWidth = img.offsetWidth + 1; // 图片宽度   加1是因为通过图片比例获得宽度，会进行四舍五入
	imgNums = list.children.length; // 轮播图图片个数
	
	indicatorDots.style.width = imgNums * 33 + "px";
	// 添加轮播图指示点
	for(i = 1; i < imgNums; i++){
		indicatorsHTML += "<li>"+ i +"</li>";
	}
	dotsList.innerHTML = indicatorsHTML;
	
	bannerScroll.style.width = imgWidth + "px";
	bannerScroll.style.marginLeft = -imgWidth/2 + "px";	
	list.style.width = imgNums * imgWidth + "px";
	
	
	var seriesHTML = "", serieHTML = "", itemHTML = "";
	// 左侧菜单栏
	for(var i = 0; i < all_names.length; i++){
		// 系列栏标题
		serieHTML = 	"<li>"+
							"<a href='#''>"+ series[i] +"</a>"+
								"<div class='items-list'>";
		for(var j = 0; j < all_names[i].length; j++){
			// 每个手机名
			itemHTML += 		"<a class='item' href='#'>"+
									"<img src='img/ia_1000000"+ imgNum +".png'/>"	+
									"<span> "+ all_names[i][j] +" </span>"+
								"</a>";
			imgNum++;
		}
		// 拼接
		seriesHTML += serieHTML	+ itemHTML + "</div></li>";
		itemHTML = "";
	}
	menu_list.innerHTML = seriesHTML;
	for(var i = 0; i < itemsList.length; i++){
		if(itemsList[i].children.length < 7){
			itemsList[i].style.width = 200 + "px";
		}
	}
	/*
	 菜单栏事件
	 *
	 * */
	// 1.鼠标滑过系列名称时：（1）显示其子菜单栏（2）改变当前系列名称背景颜色
	for(var i = 0; i < itemsList.length; i++){
		(function(i){
			menu_list.children[i].onmouseover = function(){
				// 样式样式清空
				for(var j = 0; j < itemsList.length; j++){
					menu_list.children[j].style.backgroundColor = "";
					itemsList[j].style.display = "none";
				}
				// 设置当前样式
				menu_list.children[i].style.backgroundColor = "#FFFFFF";
				itemsList[i].style.display = "block";
			}
		})(i);
	}
	
	// 2.鼠标离开系列名称区域时：（1）系列子菜单栏隐藏  （2）系列名称背景颜色设置为默认
	menu_list.onmouseleave = function(){
		for(var i = 0; i < menu_list.children.length; i++){
			itemsList[i].style.display = "none";
			menu_list.children[i].style.backgroundColor = "";
		}
		
	}


	/**
	 * 行为
	 * */
	// 设置定时器
	setInterval(function(){
		i++;
		if(i >= imgNums){
			i = 1;
			list.style.left = 0;
			current = 0;
		}
		
		// 设置当前指示点背景颜色
		for(var j = 0; j < imgNums - 1 ; j++){
			dotsList.children[j].style.backgroundColor = "#fff";
		}
		k = i;
		if(i == 3){
			k = 0;
		}
		dotsList.children[k].style.backgroundColor = "orangered";
		
		target = -i * imgWidth; // 每张图片移动的目标值	
		interBannerScroll = setInterval(function(){
			
			current += (target - current) * 0.2; // 每次移动到的值，即list每次移动到current
			if(Math.round(current) <= target){
				current = target;
				clearInterval(interBannerScroll);
			}
			list.style.left = current + "px";
			
		},50);
		
	},2000);
	
	


	
	














































/*
	//3.通过innerHTML添加每一个系列
	var serhtml = "";
	var item = "";
	var all_html = "";
	var src_num = 15;
	
	for(var i = 0; i < series.length; i++){
		console.log(series.length);
		 //3.1系列名
		serhtml = "<li>"+
						"<div class='tab-name-wra'>"+
							"<a href='javascript:void(0)'><h2>"+series[i]+"</h2></a>"+
						"</div>"+
						"<div class='items'>";
						
		for(var j = 0; j < all_names[i].length; j++ ){
			
			//3.2拼接手机单品	
			item +=	"<a href='javascript:void(0)'>"+
						"<div class='link_item'>"+
							"<img src='img/ia_1000000"+src_num+".png'>"+
							"<span>"+all_names[i][j]+"</span>"+
						"</div>"+
					"</a>";
			src_num++;  //图片路径号数加1
		}
		
		 //3.3拼接系列
		all_html += serhtml + item + "</div>"+"</li>";
		item = "";	//清空上一个系列的
	}
	 
	//3.4设置innerHTML
	tabsFather.innerHTML = all_html;
	
	 //3.5个数小于6的系列，宽度设为225px
	for(var i = 0; i < series.length; i++){
		console.log(items[i].children.length);
		if(items[i].children.length < 6){
			items[i].style.width = "225px";
		}
		
	}
	

	//2.设置事件监听
	for(var i = 0; i < tabs.length; i++){
		
		(function(i){
			tabs[i].onmouseover = function(){
				//2.1.1清除所有样式
				for(var j = 0; j < tabs.length; j++){
					tabs[j].className = "tab-name-wra";
					items[j].style.display = "none";	
				}
				 //设置当前样式
				tabs[i].className = "tab-name-wra bgset";
				items[i].style.display = "block";
				
				//2.2设置手机列表背景的的鼠标事件  离开消失进入显示
				items[i].onmouseover = function(){
					this.style.display = "block";
				}
				items[i].onmouseleave = function(){
					this.style.display = "none";
				}
			}
		})(i);
	}
	//2.3设置系列名称列表的鼠标事件  离开消失
	leftMenu.onmouseleave = function(){
		for(var j = 0; j < tabs.length; j++){
			items[j].style.display = "none";
		}
	}*/
	
});