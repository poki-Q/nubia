window.onload = function(){
	//hover-tabs
	//1.获取标签
	var navItem = document.getElementById("navItem");;
	var items = navItem.getElementsByTagName("a");
	var tabs = document.getElementsByClassName("hover-tabs");
	var notice = document.getElementById("notice");
	var cha = notice.getElementsByTagName("a")[0];
	
	//2.事件
	//公告
	cha.onclick = function(){
		notice.style.display = "none";
	}
	
	
	
	
	//tabs-hover
	for(var i = 1; i < 4; i++){
		items[i].setAttribute('title', i);
		
		items[i].onmouseover = function(){
			//清除属性
			for(var j = 0; j < tabs.length; j++){
				tabs[j].style.display="none";
			}
			
				tabs[this.title - 1].style.display = "block";
			}
		
		
			items[i].onmouseleave = function(){
				tabs[this.title - 1].style.display = "none";
			}
		
	}
	
	for(var i = 0; i < tabs.length; i++){
		tabs[i].onmouseover = function(){
				this.style.display = "block";
			}
			tabs[i].onmouseleave = function(){
				this.style.display = "none";
			}
	}
	
	
	
}
