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



var WuQi=document.getElementById("WuQi");
var PeiJian=document.getElementById("PeiJian");
var WuZi=document.getElementById("WuZi");
var ZaiJu=document.getElementById("ZaiJu");
var DiTu=document.getElementById("DiTu");

var line=document.getElementById("line");

var block_list1=document.getElementById("block_list1");
var block_list2=document.getElementById("block_list2");
var block_list3=document.getElementById("block_list3");
var block_list4=document.getElementById("block_list4");
var block_list5=document.getElementById("block_list5");

WuQi.onclick=function(){
    WuQi.className="wuqi";
    PeiJian.className="";
    WuZi.className="";
    ZaiJu.className="";
    DiTu.className="";
    block_list1.style.display="block";
    block_list2.style.display="none";
    block_list3.style.display="none";
    block_list4.style.display="none";
    block_list5.style.display="none";
    line.style="left:0;"
};
PeiJian.onclick=function(){
    WuQi.className="";
    PeiJian.className="wuqi";
    WuZi.className="";
    ZaiJu.className="";
    DiTu.className="";
    block_list1.style.display="none";
    block_list2.style.display="block";
    block_list3.style.display="none";
    block_list4.style.display="none";
    block_list5.style.display="none";
    line.style="left:146px;"
};
WuZi.onclick=function(){
    WuQi.className="";
    PeiJian.className="";
    WuZi.className="wuqi";
    ZaiJu.className="";
    DiTu.className="";
    block_list1.style.display="none";
    block_list2.style.display="none";
    block_list3.style.display="block";
    block_list4.style.display="none";
    block_list5.style.display="none";
    line.style="left:292px;"
};
ZaiJu.onclick=function(){
    WuQi.className="";
    PeiJian.className="";
    WuZi.className="";
    ZaiJu.className="wuqi";
    DiTu.className="";
    block_list1.style.display="none";
    block_list2.style.display="none";
    block_list3.style.display="none";
    block_list4.style.display="block";
    block_list5.style.display="none";
    line.style="left:438px;"
};
DiTu.onclick=function(){
    WuQi.className="";
    PeiJian.className="";
    WuZi.className="";
    ZaiJu.className="";
    DiTu.className="wuqi";
    block_list1.style.display="none";
    block_list2.style.display="none";
    block_list3.style.display="none";
    block_list4.style.display="none";
    block_list5.style.display="block";
    line.style="left:584px;"
};


var gudao=document.getElementById("gudao");
var shamo=document.getElementById("shamo");

var GD1=document.getElementById("GD1");
var SM1=document.getElementById("SM1");

var map_info1=document.getElementById("map_info1");
var map_info2=document.getElementById("map_info2");

var tit=document.getElementsByClassName("tit");

gudao.onclick=function(){
    map_info1.style.display="block";
    map_info2.style.display="none";
    gudao.className="lab-item curt";
    shamo.className="lab-item";
    GD1.style.display="block";
    SM1.style.display="none";
};
shamo.onclick=function(){
    map_info1.style.display="none";
    map_info2.style.display="block";
    shamo.className="lab-item curt";
    gudao.className="lab-item";
    GD1.style.display="none";
    SM1.style.display="block";
};
var b1=document.getElementById("gou1");
var b2=document.getElementById("gou2");
var b3=document.getElementById("gou3");
var b4=document.getElementById("gou4");
var Sb1=document.getElementById("Sgou1");
var Sb2=document.getElementById("Sgou2");
var Sb3=document.getElementById("Sgou3");
var Sb4=document.getElementById("Sgou4");

var hideall=document.getElementById("hideall");
var hidegrid=document.getElementById("hidegrid");
var hideall2=document.getElementById("hideall2");
var hidegrid2=document.getElementById("hidegrid2");
var MapGrid=document.getElementById("MapGrid");
var MapGrid2=document.getElementById("MapGrid2");

hideall.onclick=function(){
    if(hideall.innerHTML=='隐藏全部'){
        b1.style.display="none";
        b2.style.display="none";
        b3.style.display="none";
        b4.style.display="none";
        hideall.display="none";
        hideall.innerHTML='显示全部';
        hidegrid.innerHTML='显示网格';
    }else{
        b1.style.display="block";
        b2.style.display="block";
        b3.style.display="block";
        b4.style.display="block";
        hideall.display="block";
        hideall.innerHTML='隐藏全部';
        hidegrid.innerHTML='隐藏网格';
    }

};
hidegrid.onclick=function(){
    if(hidegrid.innerHTML=='隐藏网格'){
        MapGrid.style.display="none";
        hidegrid.innerHTML='显示网格';
    }else{
        MapGrid.style.display="block";
        hidegrid.innerHTML='隐藏网格';
    }
};
hideall2.onclick=function(){
    if(hideall2.innerHTML=='隐藏全部'){
        Sb1.style.display="none";
        Sb2.style.display="none";
        Sb3.style.display="none";
        Sb4.style.display="none";
        hideall2.display="none";
        hideall2.innerHTML='显示全部';
        hidegrid2.innerHTML='显示网格';
    }else{
        Sb1.style.display="block";
        Sb2.style.display="block";
        Sb3.style.display="block";
        Sb4.style.display="block";
        hideall2.display="block";
        hideall2.innerHTML='隐藏全部';
        hidegrid2.innerHTML='隐藏网格';
    }

};
hidegrid2.onclick=function(){
    if(hidegrid2.innerHTML=='隐藏网格'){
        MapGrid2.style.display="none";
        hidegrid2.innerHTML='显示网格';
    }else{
        MapGrid2.style.display="block";
        hidegrid2.innerHTML='隐藏网格';
    }
};

var buGun=document.getElementById("buGun");
var chongfengGun=document.getElementById("chongfengGun");
var jujiGun=document.getElementById("jujiGun");
var sandanGun=document.getElementById("sandanGun");
var jiGun=document.getElementById("jiGun");
var shouGun=document.getElementById("shouGun");
var jinzhanGun=document.getElementById("jinzhanGun");
buGun.onclick=function(){
    buGun.className="lab-item curt";
    chongfengGun.className="lab-item";
    jujiGun.className="lab-item";
    sandanGun.className="lab-item";
    jiGun.className="lab-item";
    shouGun.className="lab-item";
    jinzhanGun.className="lab-item";
};
chongfengGun.onclick=function(){
    buGun.className="lab-item";
    chongfengGun.className="lab-item curt";
    jujiGun.className="lab-item";
    sandanGun.className="lab-item";
    jiGun.className="lab-item";
    shouGun.className="lab-item";
    jinzhanGun.className="lab-item";
};
jujiGun.onclick=function(){
    buGun.className="lab-item";
    chongfengGun.className="lab-item";
    jujiGun.className="lab-item curt";
    sandanGun.className="lab-item";
    jiGun.className="lab-item";
    shouGun.className="lab-item";
    jinzhanGun.className="lab-item";
};
sandanGun.onclick=function(){
    buGun.className="lab-item";
    chongfengGun.className="lab-item";
    jujiGun.className="lab-item";
    sandanGun.className="lab-item curt";
    jiGun.className="lab-item";
    shouGun.className="lab-item";
    jinzhanGun.className="lab-item";
};
jiGun.onclick=function(){
    buGun.className="lab-item";
    chongfengGun.className="lab-item";
    jujiGun.className="lab-item";
    sandanGun.className="lab-item";
    jiGun.className="lab-item curt";
    shouGun.className="lab-item";
    jinzhanGun.className="lab-item";
};
shouGun.onclick=function(){
    buGun.className="lab-item";
    chongfengGun.className="lab-item";
    jujiGun.className="lab-item";
    sandanGun.className="lab-item";
    jiGun.className="lab-item";
    shouGun.className="lab-item curt";
    jinzhanGun.className="lab-item";
};
jinzhanGun.onclick=function(){
    buGun.className="lab-item";
    chongfengGun.className="lab-item";
    jujiGun.className="lab-item";
    sandanGun.className="lab-item";
    jiGun.className="lab-item";
    shouGun.className="lab-item";
    jinzhanGun.className="lab-item curt";
};


var WB=document.getElementById("WB");
var QK=document.getElementById("QK");
var DX=document.getElementById("DX");
var QT=document.getElementById("QT");
var MZJ=document.getElementById("MZJ");

WB.onclick=function(){
    WB.className="lab-item curt";
    QK.className="lab-item";
    DX.className="lab-item";
    QT.className="lab-item";
    MZJ.className="lab-item";
};
QK.onclick=function(){
    WB.className="lab-item";
    QK.className="lab-item curt";
    DX.className="lab-item";
    QT.className="lab-item";
    MZJ.className="lab-item";
};
DX.onclick=function(){
    WB.className="lab-item";
    QK.className="lab-item";
    DX.className="lab-item curt";
    QT.className="lab-item";
    MZJ.className="lab-item";
};
QT.onclick=function(){
    WB.className="lab-item";
    QK.className="lab-item";
    DX.className="lab-item";
    QT.className="lab-item curt";
    MZJ.className="lab-item";
};
MZJ.onclick=function(){
    WB.className="lab-item";
    QK.className="lab-item";
    DX.className="lab-item";
    QT.className="lab-item";
    MZJ.className="lab-item curt";
};

var TK=document.getElementById("TK");
var FDY=document.getElementById("FDY");
var YP=document.getElementById("YP");
var WQDY=document.getElementById("WQDY");
var TZW=document.getElementById("TZW");
TK.onclick=function(){
    TK.className="lab-item curt";
    FDY.className="lab-item";
    YP.className="lab-item";
    WQDY.className="lab-item";
    TZW.className="lab-item";
};
FDY.onclick=function(){
    TK.className="lab-item";
    FDY.className="lab-item curt";
    YP.className="lab-item";
    WQDY.className="lab-item";
    TZW.className="lab-item";
};
YP.onclick=function(){
    TK.className="lab-item";
    FDY.className="lab-item";
    YP.className="lab-item curt";
    WQDY.className="lab-item";
    TZW.className="lab-item";
};
WQDY.onclick=function(){
    TK.className="lab-item";
    FDY.className="lab-item";
    YP.className="lab-item";
    WQDY.className="lab-item curt";
    TZW.className="lab-item";
};
TZW.onclick=function(){
    TK.className="lab-item";
    FDY.className="lab-item";
    YP.className="lab-item";
    WQDY.className="lab-item";
    TZW.className="lab-item curt";
};

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


