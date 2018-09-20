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



var Vzuixin=document.getElementById("Vzuixin");
var Vzonghe=document.getElementById("Vzonghe");
var Vxinshou=document.getElementById("Vxinshou");
var Vjiqiao=document.getElementById("Vjiqiao");
var Vquwei=document.getElementById("Vquwei");
var Vzhubo=document.getElementById("Vzhubo");
var Vbaike=document.getElementById("Vbaike");

var VL1=document.getElementById("VL1");
var VL2=document.getElementById("VL2");
var VL3=document.getElementById("VL3");
var VL4=document.getElementById("VL4");
var VL5=document.getElementById("VL5");
var VL6=document.getElementById("VL6");

Vzuixin.onclick=function(){
    VL1.style.display="block";
    VL2.style.display="none";
    VL3.style.display="none";
    VL4.style.display="none";
    VL5.style.display="none";
    VL6.style.display="none";
    Vzuixin.className="on";
    Vzonghe.className="";
    Vxinshou.className="";
    Vquwei.className="";
    Vzhubo.className="";
    Vbaike.className="";

};
Vzonghe.onclick=function(){
    VL1.style.display="none";
    VL2.style.display="block";
    VL3.style.display="none";
    VL4.style.display="none";
    VL5.style.display="none";
    VL6.style.display="none";
    Vzuixin.className="";
    Vzonghe.className="on";
    Vxinshou.className="";
    Vquwei.className="";
    Vzhubo.className="";
    Vbaike.className="";
};
Vxinshou.onclick=function(){
    VL1.style.display="none";
    VL2.style.display="none";
    VL3.style.display="block";
    VL4.style.display="none";
    VL5.style.display="none";
    VL6.style.display="none";
    Vzuixin.className="";
    Vzonghe.className="";
    Vxinshou.className="on";
    Vquwei.className="";
    Vzhubo.className="";
    Vbaike.className="";
};
Vjiqiao.onclick=function(){
    VL1.style.display="block";
    VL2.style.display="none";
    VL3.style.display="none";
    VL4.style.display="none";
    VL5.style.display="none";
    VL6.style.display="none";
    Vzuixin.className="on";
    Vzonghe.className="";
    Vxinshou.className="";
    Vquwei.className="";
    Vzhubo.className="";
    Vbaike.className="";
};
Vquwei.onclick=function(){
    VL1.style.display="none";
    VL2.style.display="none";
    VL3.style.display="none";
    VL4.style.display="block";
    VL5.style.display="none";
    VL6.style.display="none";
    Vzuixin.className="";
    Vzonghe.className="";
    Vxinshou.className="";
    Vquwei.className="on";
    Vzhubo.className="";
    Vbaike.className="";

};
Vzhubo.onclick=function(){
    VL1.style.display="none";
    VL2.style.display="none";
    VL3.style.display="none";
    VL4.style.display="none";
    VL5.style.display="block";
    VL6.style.display="none";
    Vzuixin.className="";
    Vzonghe.className="";
    Vxinshou.className="";
    Vquwei.className="";
    Vzhubo.className="on";
    Vbaike.className="";
};
Vbaike.onclick=function(){
    VL1.style.display="none";
    VL2.style.display="none";
    VL3.style.display="none";
    VL4.style.display="none";
    VL5.style.display="none";
    VL6.style.display="block";
    Vzuixin.className="";
    Vzonghe.className="";
    Vxinshou.className="";
    Vquwei.className="";
    Vzhubo.className="";
    Vbaike.className="on";
};

var V_box=document.getElementById("V_box");
var Vcloser=document.getElementsByClassName("Vcloser")[0];
var Vboxs=document.getElementsByClassName("V-boxs")[0];
var PicVideos=document.getElementsByClassName("PicVideos")[0];

var picVideos1=document.getElementById("picVideos1");
var picVideos2=document.getElementById("picVideos2");
var picVideos3=document.getElementById("picVideos3");
var picVideos4=document.getElementById("picVideos4");
var picVideos5=document.getElementById("picVideos5");
var picVideos6=document.getElementById("picVideos6");
var picVideos7=document.getElementById("picVideos7");
var picVideos8=document.getElementById("picVideos8");
var picVideos9=document.getElementById("picVideos9");
var picVideos10=document.getElementById("picVideo10");

var picPlays1=document.getElementById("picPlays1");
var picPlays2=document.getElementById("picPlays2");
var picPlays3=document.getElementById("picPlays3");
var picPlays4=document.getElementById("picPlays4");
var picPlays5=document.getElementById("picPlays5");
var picPlays6=document.getElementById("picPlays6");
var picPlays7=document.getElementById("picPlays7");
var picPlays8=document.getElementById("picPlays8");
var picPlays9=document.getElementById("picPlays9");
var picPlays10=document.getElementById("picPlays10");

var pic2Plays1=document.getElementById("pic2Plays1");
var pic2Plays2=document.getElementById("pic2Plays2");
var pic2Plays3=document.getElementById("pic2Plays3");
var pic2Plays4=document.getElementById("pic2Plays4");
var pic2Plays5=document.getElementById("pic2Plays5");
var pic2Plays6=document.getElementById("pic2Plays6");
var pic2Plays7=document.getElementById("pic2Plays7");
var pic2Plays8=document.getElementById("pic2Plays8");
var pic2Plays9=document.getElementById("pic2Plays9");
var pic2Plays10=document.getElementById("pic2Plays10");

var pic3Plays1=document.getElementById("pic3Plays1");
var pic3Plays2=document.getElementById("pic3Plays2");
var pic3Plays3=document.getElementById("pic3Plays3");
var pic3Plays4=document.getElementById("pic3Plays4");
var pic3Plays5=document.getElementById("pic3Plays5");
var pic3Plays6=document.getElementById("pic3Plays6");
var pic3Plays7=document.getElementById("pic3Plays7");
var pic3Plays8=document.getElementById("pic3Plays8");
var pic3Plays9=document.getElementById("pic3Plays9");
var pic3Plays10=document.getElementById("pic3Plays10");

var pic4Plays1=document.getElementById("pic4Plays1");
var pic4Plays2=document.getElementById("pic4Plays2");
var pic4Plays3=document.getElementById("pic4Plays3");
var pic4Plays4=document.getElementById("pic4Plays4");
var pic4Plays5=document.getElementById("pic4Plays5");
var pic4Plays6=document.getElementById("pic4Plays6");
var pic4Plays7=document.getElementById("pic4Plays7");
var pic4Plays8=document.getElementById("pic4Plays8");
var pic4Plays9=document.getElementById("pic4Plays9");
var pic4Plays10=document.getElementById("pic4Plays10");

var pic5Plays1=document.getElementById("pic5Plays1");
var pic5Plays2=document.getElementById("pic5Plays2");
var pic5Plays3=document.getElementById("pic5Plays3");
var pic5Plays4=document.getElementById("pic5Plays4");
var pic5Plays5=document.getElementById("pic5Plays5");
var pic5Plays6=document.getElementById("pic5Plays6");
var pic5Plays7=document.getElementById("pic5Plays7");
var pic5Plays8=document.getElementById("pic5Plays8");
var pic5Plays9=document.getElementById("pic5Plays9");
var pic5Plays10=document.getElementById("pic5Plays10");

var pic6Plays1=document.getElementById("pic6Plays1");
var pic6Plays2=document.getElementById("pic6Plays2");
var pic6Plays3=document.getElementById("pic6Plays3");
var pic6Plays4=document.getElementById("pic6Plays4");
var pic6Plays5=document.getElementById("pic6Plays5");
var pic6Plays6=document.getElementById("pic6Plays6");
var pic6Plays7=document.getElementById("pic6Plays7");
var pic6Plays8=document.getElementById("pic6Plays8");
var pic6Plays9=document.getElementById("pic6Plays9");
var pic6Plays10=document.getElementById("pic6Plays10");




Vcloser.onclick=function(){
    Vboxs.style.display="none";//当点击x的时候，整个box框都不见了
    PicVideos.style.display="none";
    picVideos1.pause();
    picVideos2.pause();
    picVideos3.pause();
    picVideos4.pause();
    picVideos5.pause();
    picVideos6.pause();
    picVideos7.pause();
    picVideos8.pause();
    picVideos9.pause();
    picVideos10.pause();
    pic2Plays1.pause();
    pic3Plays1.pause();
    pic4Plays1.pause();

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
picPlays7.onclick=function(){
    V_box.style.display="block";
    picVideos7.style.display="block";
    picVideos7.play();
};
picPlays8.onclick=function(){
    V_box.style.display="block";
    picVideos8.style.display="block";
    picVideos8.play();
};
picPlays9.onclick=function(){
    V_box.style.display="block";
    picVideos9.style.display="block";
    picVideos9.play();
};
picPlays10.onclick=function(){
    V_box.style.display="block";
    picVideos10.style.display="block";
    picVideos10.play();
};

pic2Plays1.onclick=function(){
    V_box.style.display="block";
    picVideos1.style.display="block";
    picVideos1.play();
};
pic2Plays2.onclick=function(){
    V_box.style.display="block";
    picVideos2.style.display="block";
    picVideos2.play();
};
pic2Plays3.onclick=function(){
    V_box.style.display="block";
    picVideos3.style.display="block";
    picVideos3.play();
};
pic2Plays4.onclick=function(){
    V_box.style.display="block";
    picVideos4.style.display="block";
    picVideos4.play();
};
pic2Plays5.onclick=function(){
    V_box.style.display="block";
    picVideos5.style.display="block";
    picVideos5.play();
};
pic2Plays6.onclick=function(){
    V_box.style.display="block";
    picVideos6.style.display="block";
    picVideos6.play();
};
pic2Plays7.onclick=function(){
    V_box.style.display="block";
    picVideos7.style.display="block";
    picVideos7.play();
};
pic2Plays8.onclick=function(){
    V_box.style.display="block";
    picVideos8.style.display="block";
    picVideos8.play();
};
pic2Plays9.onclick=function(){
    V_box.style.display="block";
    picVideos9.style.display="block";
    picVideos9.play();
};
pic2Plays10.onclick=function(){
    V_box.style.display="block";
    picVideos10.style.display="block";
    picVideos10.play();
};

pic3Plays1.onclick=function(){
    V_box.style.display="block";
    picVideos1.style.display="block";
    picVideos1.play();
};
pic3Plays2.onclick=function(){
    V_box.style.display="block";
    picVideos2.style.display="block";
    picVideos2.play();
};
pic3Plays3.onclick=function(){
    V_box.style.display="block";
    picVideos3.style.display="block";
    picVideos3.play();
};
pic3Plays4.onclick=function(){
    V_box.style.display="block";
    picVideos4.style.display="block";
    picVideos4.play();
};
pic3Plays5.onclick=function(){
    V_box.style.display="block";
    picVideos5.style.display="block";
    picVideos5.play();
};
pic3Plays6.onclick=function(){
    V_box.style.display="block";
    picVideos6.style.display="block";
    picVideos6.play();
};
pic3Plays7.onclick=function(){
    V_box.style.display="block";
    picVideos7.style.display="block";
    picVideos7.play();
};
pic3Plays8.onclick=function(){
    V_box.style.display="block";
    picVideos8.style.display="block";
    picVideos8.play();
};
pic3Plays9.onclick=function(){
    V_box.style.display="block";
    picVideos9.style.display="block";
    picVideos9.play();
};
pic3Plays10.onclick=function(){
    V_box.style.display="block";
    picVideos10.style.display="block";
    picVideos10.play();
};

pic4Plays1.onclick=function(){
    V_box.style.display="block";
    picVideos1.style.display="block";
    picVideos1.play();
};
pic4Plays2.onclick=function(){
    V_box.style.display="block";
    picVideos2.style.display="block";
    picVideos2.play();
};
pic4Plays3.onclick=function(){
    V_box.style.display="block";
    picVideos3.style.display="block";
    picVideos3.play();
};
pic4Plays4.onclick=function(){
    V_box.style.display="block";
    picVideos4.style.display="block";
    picVideos4.play();
};
pic4Plays5.onclick=function(){
    V_box.style.display="block";
    picVideos5.style.display="block";
    picVideos5.play();
};
pic4Plays6.onclick=function(){
    V_box.style.display="block";
    picVideos6.style.display="block";
    picVideos6.play();
};
pic4Plays7.onclick=function(){
    V_box.style.display="block";
    picVideos7.style.display="block";
    picVideos7.play();
};
pic4Plays8.onclick=function(){
    V_box.style.display="block";
    picVideos8.style.display="block";
    picVideos8.play();
};
pic4Plays9.onclick=function(){
    V_box.style.display="block";
    picVideos9.style.display="block";
    picVideos9.play();
};
pic4Plays10.onclick=function(){
    V_box.style.display="block";
    picVideos10.style.display="block";
    picVideos10.play();
};

pic5Plays1.onclick=function(){
    V_box.style.display="block";
    picVideos1.style.display="block";
    picVideos1.play();
};
pic5Plays2.onclick=function(){
    V_box.style.display="block";
    picVideos2.style.display="block";
    picVideos2.play();
};
pic5Plays3.onclick=function(){
    V_box.style.display="block";
    picVideos3.style.display="block";
    picVideos3.play();
};
pic5Plays4.onclick=function(){
    V_box.style.display="block";
    picVideos4.style.display="block";
    picVideos4.play();
};
pic5Plays5.onclick=function(){
    V_box.style.display="block";
    picVideos5.style.display="block";
    picVideos5.play();
};
pic5Plays6.onclick=function(){
    V_box.style.display="block";
    picVideos6.style.display="block";
    picVideos6.play();
};
pic5Plays7.onclick=function(){
    V_box.style.display="block";
    picVideos7.style.display="block";
    picVideos7.play();
};
pic5Plays8.onclick=function(){
    V_box.style.display="block";
    picVideos8.style.display="block";
    picVideos8.play();
};
pic5Plays9.onclick=function(){
    V_box.style.display="block";
    picVideos9.style.display="block";
    picVideos9.play();
};
pic5Plays10.onclick=function(){
    V_box.style.display="block";
    picVideos10.style.display="block";
    picVideos10.play();
};

pic6Plays1.onclick=function(){
    V_box.style.display="block";
    picVideos1.style.display="block";
    picVideos1.play();
};
pic6Plays2.onclick=function(){
    V_box.style.display="block";
    picVideos2.style.display="block";
    picVideos2.play();
};
pic6Plays3.onclick=function(){
    V_box.style.display="block";
    picVideos3.style.display="block";
    picVideos3.play();
};
pic6Plays4.onclick=function(){
    V_box.style.display="block";
    picVideos4.style.display="block";
    picVideos4.play();
};
pic6Plays5.onclick=function(){
    V_box.style.display="block";
    picVideos5.style.display="block";
    picVideos5.play();
};
pic6Plays6.onclick=function(){
    V_box.style.display="block";
    picVideos6.style.display="block";
    picVideos6.play();
};
pic6Plays7.onclick=function(){
    V_box.style.display="block";
    picVideos7.style.display="block";
    picVideos7.play();
};
pic6Plays8.onclick=function(){
    V_box.style.display="block";
    picVideos8.style.display="block";
    picVideos8.play();
};
pic6Plays9.onclick=function(){
    V_box.style.display="block";
    picVideos9.style.display="block";
    picVideos9.play();
};
pic6Plays10.onclick=function(){
    V_box.style.display="block";
    picVideos10.style.display="block";
    picVideos10.play();
};

