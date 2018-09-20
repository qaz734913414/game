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





//游戏资料鼠标移入移出事件
var yx=document.getElementById("yx");
var yxzl=document.getElementById("yxzl");
yx.onmousemove=function(){
    yxzl.style.display="block"
}
yxzl.onmousemove=function(){
    yxzl.style.display="block"
}
yx.onmouseout=function(){
    yxzl.style.display="none"
}
yxzl.onmouseout=function(){
    yxzl.style.display="none"
}

//社区互动鼠标移入移出事件
var shequhudong=document.getElementById("shequhudong");
var shouQ=document.getElementById("shouQ");
var weixinGZH=document.getElementById("weixinGZH");
var weixinQZ=document.getElementById("weixinQZ");
var guangfangWB=document.getElementById("guangfangWB");


var tipsPlayer=document.getElementById("tipsPlayer");
var tips_img1=document.getElementById("tips-img1");
var tips_img2=document.getElementById("tips-img2");
var tips_img3=document.getElementById("tips-img3");
var tips_img4=document.getElementById("tips-img4");

shequhudong.onmouseover=function(){
    tipsPlayer.style.display="block";
};
shequhudong.onmouseout=function(){
    tipsPlayer.style.display="none";
};
shouQ.onmouseover=function(){
    tips_img1.style.display="block";
    tips_img2.style.display="none";
    tips_img3.style.display="none";
    tips_img4.style.display="none";
    shouQ.className="on";
    weixinGZH.className="";
    weixinQZ.className="";
    guangfangWB.className="";
};
shouQ.onmouseout=function(){
    tips_img1.style.display="none";
    shouQ.className="";
};
weixinGZH.onmouseover=function(){
    tips_img1.style.display="none";
    tips_img2.style.display="block";
    tips_img3.style.display="none";
    tips_img4.style.display="none";
    shouQ.className="";
    weixinGZH.className="on";
    weixinQZ.className="";
    guangfangWB.className="";
};
weixinGZH.onmouseout=function(){
    tips_img2.style.display="none";
    weixinGZH.className="";
};
weixinQZ.onmouseover=function(){
    tips_img1.style.display="none";
    tips_img2.style.display="none";
    tips_img3.style.display="block";
    tips_img4.style.display="none";
    shouQ.className="";
    weixinGZH.className="";
    weixinQZ.className="on";
    guangfangWB.className="";
};
weixinQZ.onmouseout=function(){
    tips_img3.style.display="none";
    weixinQZ.className="";
};

guangfangWB.onmouseover=function(){
    tips_img1.style.display="none";
    tips_img2.style.display="none";
    tips_img3.style.display="none";
    tips_img4.style.display="block";
    shouQ.className="";
    weixinGZH.className="";
    weixinQZ.className="";
    guangfangWB.className="on";
};
guangfangWB.onmouseout=function(){
    tips_img4.style.display="none";
    guangfangWB.className="";
};




var ass=document.getElementById("title").getElementsByTagName("a");
var uls=document.getElementById("new-detail").getElementsByTagName("ul");
var i=0;
var divs1=document.getElementById("pagebox");
var divs2=document.getElementById("pagebox_1");
function fac(num){
    for(i=0;i<ass.length;i++){
        ass[i].setAttribute("class","");
        ass[i].style.color="black";
        uls[i].style.display="none";
    }
    ass[num-1].setAttribute("class","li1");
    ass[num-1].style.color="#e8a026";
    uls[num-1].style.display="block";
}

//下一页的点击事件
function show10(){
    divs1.style.display="none";
    divs2.style.display="block";
}