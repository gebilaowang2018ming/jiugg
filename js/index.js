window.onload=function(){
	var start=document.getElementById("start")
	var end=document.getElementById("end");
	var top=document.getElementById("top");
	var span=top.getElementsByTagName("span");
	//开始闪烁
	start.onclick=function(){
		this.style.backgroundColor="#fea600";
		this.style.color="#ffffff";
		end.style.backgroundColor="#FFFFFF";
		end.style.color="#FEA600";
		var time=setInterval(y,500);
		//结束闪烁
		end.onclick=function(){
			this.style.backgroundColor="#fea600";
			this.style.color="#ffffff";
			start.style.backgroundColor="#FFFFFF";
			start.style.color="#FEA600";
			clearInterval(time);
			for(var r=0;r<span.length;r++){
				span[r].style.backgroundColor="#FEA600"
			}
		}
	}
	//随机选取3个数与3个颜色
	function y(){
		var arr = [0,1,2,3,4,5,6,7,8];
		var out=[];
		var col=[];
		while(out.length < 3){
		    var temp =Math.random()*arr.length;
		    out.push(arr.splice(temp,1));
		    col.push('#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6));
		}
		x(out,col);
	}
	//选取随机的九宫格（3块）并更改背景颜色
	function x(q,w){
		for(var r=0;r<span.length;r++){
			span[r].style.backgroundColor="#FEA600"
		}
		for(var i=0;i<q.length;i++){
			span[q[i]].style.backgroundColor=w[i];
		}
	}
}
