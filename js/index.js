	var bottum=document.querySelector(".header input");
	var weiw=document.querySelector(".content ul");
	var shu=document.querySelector(".content strong");
	var shu1=document.querySelector(".over strong");
	var weiw1=document.querySelector(".over ul");
	var bian1=document.querySelector(".over li");
	var bian=document.querySelector(".content li");
	var ts=document.querySelector(".ts");
function getData(){//获取key为todos的数组值和储存的功能
    var data=JSON.parse(localStorage.getItem('todos'));
    data=data||[];
    return data;
}
function saveData(data){//给本地缓存添加数组；
	 localStorage.setItem("todos",JSON.stringify(data))
}
bottum.onkeydown=function(e){
	if(e.keyCode==13){
		var val=bottum.value;
		if(val==""){
			alert('请输入')
		}
		var data=getData();
		data.push({
			"tilie":val,
			"status":false
		})
		/*console.log(data);*/
		saveData(data);
		bottum.value="";
		reload();
	}
}
function chactv(i,type){//查看inpute是否选中
	var data=getData();
	
	if (type==false){
		data[i].status=true;
		saveData(data);
	}else{
		data[i].status=false;
		saveData(data);
	};
	reload();
}
function celier(i){//点击当前的条数进行删除；
	var data=getData();
	data.splice(i,1);
	saveData(data);
	reload();
	if (data.length==0) {
		localStorage.removeItem('todos');
		alert("清空所有记录")
	};
}
function xiugai(i,text){
	var data=getData();
	data[i].tilie=text;
	saveData(data);
}
reload();
function reload(){
	var numW="",numL="",nowW=0,nowL=0;
	var data=getData();
	for(var i=0;i<data.length;i++){
	if(data[i].status==false){
		numW+='<li><input type="checkbox" onclick=chactv('+i+',false)><p contenteditable="true" onblur=('+i+',this.value)>'+data[i].tilie+'</p><a href="javascript:celier('+i+');"></a></li>'
		nowW++;

	}else{
		numL+='<li><input type="checkbox" checked onclick=chactv('+i+',true)><p contenteditable="true" onblur=('+i+',this.value)>'+data[i].tilie+'</p><a href="javascript:celier('+i+');"></a></li>'
		nowL++;
		if(nowW==0){
			alert("恭喜您一天的工作全部完成")
		}
	}

}
	weiw.innerHTML=numW;
	shu.innerHTML=nowW;
	weiw1.innerHTML=numL;
	shu1.innerHTML=nowL;
}
function call(){
		localStorage.removeItem('todos');
		reload();
}
var yuan=document.querySelector(".yuan");
yuan.onclick=function(){
	ts.style.display="none"
}
	
