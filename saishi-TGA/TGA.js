var ost_go=document.getElementById("ost_go")
var ost_d=document.getElementById("ost_d");
var ost_g=document.getElementById("ost_g");

ost_g.onmouseover=function(){
    ost_go.style.display="none";
    ost_d.style.display="block";
};
ost_d.onmouseout=function(){
    ost_go.style.display="block";
    ost_d.style.display="none";
};



var picVideos1=document.getElementById("picVideos1");
var picVideos2=document.getElementById("picVideos2");
var picVideos3=document.getElementById("picVideos3");
var picVideos4=document.getElementById("picVideos4");
var picVideos5=document.getElementById("picVideos5");
var picVideos6=document.getElementById("picVideos6");

var picPlays1=document.getElementById("picPlays1");
var picPlays2=document.getElementById("picPlays2");
var picPlays3=document.getElementById("picPlays3");
var picPlays4=document.getElementById("picPlays4");
var picPlays5=document.getElementById("picPlays5");
var picPlays6=document.getElementById("picPlays6");

var V_box=document.getElementById("V_box");
var Vcloser=document.getElementsByClassName("Vcloser")[0];
var Vboxs=document.getElementsByClassName("V-boxs")[0];
var PicVideos=document.getElementsByClassName("PicVideos")[0];

Vcloser.onclick=function(){
    Vboxs.style.display="none";//当点击x的时候，整个box框都不见了
    PicVideos.style.display="none";
};
picPlays1.onclick=function(){
    V_box.style.display="block";
    picVideos1.style.display="block";
    picVideos1.play();
};
picPlays2.onclick=function(){
    V_box.style.display="block";
    picVideos2.style.display="block";
    picVideos2.play();
};
picPlays3.onclick=function(){
    V_box.style.display="block";
    picVideos3.style.display="block";
    picVideos3.play();
};
picPlays4.onclick=function(){
    V_box.style.display="block";
    picVideos4.style.display="block";
    picVideos4.play();
};
picPlays5.onclick=function(){
    V_box.style.display="block";
    picVideos5.style.display="block";
    picVideos5.play();
};
picPlays6.onclick=function(){
    V_box.style.display="block";
    picVideos6.style.display="block";
    picVideos6.play();
};
