//标题栏图片移入移出事件  第907行
var a1=document.getElementById("ost");
var a2=document.getElementById("ost_nb");
//强制性的移入移出事件（也可使用延时器）
a1.onmousemove=function(){ //鼠标移入a1
    // console.log("鼠标移入");
    this.style.display="none";//a1隐藏
    a2.style.display="block";//a2显示

}
a1.onmouseout=function(){
    // console.log("鼠标移出");
    this.style.display="block"; //a1显示
    a2.style.display="none";//a2隐藏
}
a2.onmousemove=function(){
    a1.style.display="none";  //当a1发生鼠标移入事件后立马，a2就会显示出来，此时立马强制对a2进行移入移出事件
    this.style.display="block"
}
a2.onmouseout=function(){
    a1.style.display="block";
    this.style.display="none"
}
//游戏排行榜的移入移出事件   第918行

//跟标题栏图片移入移出事件原理一样
var a3=document.getElementById("but");
var yc=document.getElementById("ost_p");
a3.onmousemove=function(){
    // console.log("鼠标移入");
    yc.style.display="block"

}
a3.onmouseout=function(){
    // console.log("鼠标移出");
    yc.style.display="none"
}
yc.onmousemove=function(){
    this .style.display="block"
}
yc.onmouseout=function(){
    this.style.display="none"
}

