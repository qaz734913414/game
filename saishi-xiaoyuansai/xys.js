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







var li2=document.getElementById("containerz").getElementsByTagName("li");
var pop=document.getElementById("pop");
var index=1;
function bot(){
    pop.style.display="block"
}
function clo(){
    pop.style.display="none"
}

function show12(num) {
    console.log("aa");
    for (var z = 0; z < li2.length; z++) {
        li2[z].setAttribute("class", "");
    }
    li2[num - 1].setAttribute("class", "f1");
}
var li5 = document.getElementById("part4").getElementsByTagName("li");
for (let i = 0; i < li5.length; i++) {
    li5[i].onmouseover = function () {
        for(let j = 0; j < li5.length; j++){
            if(i==j){
                li5[j].setAttribute("class", "f1");
            }else{
                li5[j].setAttribute("class", "");
            }
        }
    };
    li5[i].onmouseout = function () {
        this.setAttribute("class", "");
        li2[0].setAttribute("class", "f1");
        console.log("bb");
    }
}
/* $(function(){
     $("li").click(function() {
         $(this).siblings('li').removeClass('f1');  // 删除其他兄弟元素的样式
         $(this).addClass('f1');                    // 添加当前元素的样式
     });

     $("li").mouseover(function() {
         $(this).siblings('li').removeClass('f1');  // 删除其他兄弟元素的样式
         $(this).addClass('f1');                   // 添加当前元素的样式
     });

     $("li").mouseout(function() {
         $(this).removeClass('f1');
     })
 }); */







var a1=document.getElementById("tabs2").getElementsByTagName("a");
var pic3=document.getElementById("pic3");
function show11(f){
    pic3.src="img/"+f+".jpg";

    for(e=0;e<a1.length;e++){
        a1[e].setAttribute("class","")
    }
    a1[f-1].setAttribute("class","current");

    var i=0;
    var j=1;
    var timer=window.setInterval(function(){
        i=i+100;
        pic3.style.marginLeft="-"+i+"px";
        if(i>=(672*j) ){
            clearInterval(timer);
            pic3.style.marginLeft="0px";
            j++;
            if(j=6){
                j=1;
                i=0;
                pic3.style.marginLeft="0px";
            }
        }
    },20)
}