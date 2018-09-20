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


var YXZL=document.getElementById("YXZL");
var yx_sub=document.getElementById("yx_sub");
var wuqiPJ=document.getElementById("wuqiPJ");
var banbenGX=document.getElementById("banbenGX");
YXZL.onmouseover=function(){
    yx_sub.style.display="block";
};
YXZL.onmouseout=function(){
    yx_sub.style.display="none";
};
wuqiPJ.onmouseover=function(){
    wuqiPJ.style.color="#ffb400";
};
wuqiPJ.onmouseout=function(){
    wuqiPJ.style.color="#ffffff";
};
banbenGX.onmouseover=function(){
    banbenGX.style.color="#ffb400";
};
banbenGX.onmouseout=function(){
    banbenGX.style.color="#ffffff";
};




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

