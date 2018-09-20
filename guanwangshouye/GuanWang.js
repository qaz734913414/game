var index=1;
var time;//定时器
var BigPic=document.getElementById("BigPic");
var lisPic=document.getElementById("lisPic");
time=setInterval("show()",3000);//定时器中show（）中没有参数，即参数为空
function show(id){
    if(Number(id)){
        index=id;
        //消除定时器
        clearInterval(time);
    }else{
        //定时器
        index++;
        if(index==6){
            index=1;//将第6张图片变成第一张图片
        }
    }
    //改变图片
    BigPic.src="CJ/sl11"+index+".jpg";
    lisPic.src="CJ/pic_"+index+".jpg";
    //改变文字颜色
    //var lis=document.getElementById("pagination-bottom").getElementsByTagName("li");
    var lis=document.querySelectorAll("#pagination-bottom li")
    var as=document.querySelectorAll(".adBtn a")
    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute("class","pagination-bottom_out");//移出的时候，将所有的颜色设为白色
        if(i==(index-1)){//因为index是从1开始的，所以当i=0是，对应的图片是第一张，第一张图片的索引是1(0==i-1)
            lis[i].setAttribute("class","pagination-bottom_over");//当鼠标移到相应的i的时候，当前颜色设为橘色
        }
    }
    for(var i=0;i<as.length;i++){
        as[i].setAttribute("class","pagination-bottom_out");//移出的时候，将所有的颜色设为白色
        if(i==(index-1)){//因为index是从1开始的，所以当i=0是，对应的图片是第一张，第一张图片的索引是1(0==i-1)
            as[i].setAttribute("class","pagination-bottom_over");//当鼠标移到相应的i的时候，当前颜色设为橘色
        }
    }
}
function start(){
    time=setInterval("show()",3000);
}


var bottomslidePrev=document.getElementById("bottomslidePrev");
var bottomslideNext=document.getElementById("bottomslideNext");
var BigPic=document.getElementById("BigPic");
var lis=document.querySelectorAll("#pagination-bottom li")
//使用数组的方法来切换
var arr=["CJ/sl111.jpg","CJ/sl112.jpg","CJ/sl113.jpg","CJ/sl114.jpg","CJ/sl115.jpg"];
var n=0;//n指的是索引
bottomslidePrev.onclick=function() {
    n--;
    if (n < 0) {
        n = arr.length - 1;//跳到最后一张图片
    }
    change();
}
bottomslideNext.onclick=function(){
    n++;
    if(n>arr.length-1){//arr.length-1=4，当索引n>4超出合理范围时
        n=0;//跳到第一张图片

    }
    //原本n=0,点击下一张的话，n++=1，调用函数change()，num.innerHTML=n+1+"/"+arr.length=2/5
    //如果再次点击下一张，n++=2，调用函数change()，num.innerHTML=n+1+"/"+arr.length=3/5
    change();
}

function change(){
    BigPic.src=arr[n];
    for(var i=0;i<lis.length;i++){
        lis[i].className="";
    }
    lis[n].className="active";
}
change();


var icoNewest=document.getElementById("icoNewest");
var icoNewhander=document.getElementById("icoNewhander");
var icoImprove=document.getElementById("icoImprove");

var icoNewestLine=document.getElementById("icoNewestLine");
var icoNewhanderLine=document.getElementById("icoNewhanderLine");
var icoImproveLine=document.getElementById("icoImproveLine");

var TP1=document.getElementById("TP1");
var TP2=document.getElementById("TP2");
var TP3=document.getElementById("TP3");
var videoItems=document.getElementsByClassName("video-item-top");
var videoLis=document.querySelectorAll(".video-item-top li")
icoNewest.onclick=function(){
    TP1.style.display="block";
    TP2.style.display="none";
    TP3.style.display="none";
    icoNewestLine.className="tab-active";
    icoNewhanderLine.className="";
    icoImproveLine.className="";
}
icoNewhander.onclick=function(){
    TP1.style.display="none";
    TP2.style.display="block";
    TP3.style.display="none";
    icoNewestLine.className="";
    icoNewhanderLine.className="tab-active";
    icoImproveLine.className="";
}
icoImprove.onclick=function(){
    TP1.style.display="none";
    TP2.style.display="none";
    TP3.style.display="block";
    icoNewestLine.className="";
    icoNewhanderLine.className="";
    icoImproveLine.className="tab-active";
}


var zuixin=document.getElementById("zuixin");
var zonghe=document.getElementById("zonghe");
var xinshou=document.getElementById("xinshou");
var baike=document.getElementById("baike");

var icoZuiXinLine=document.getElementById("icoZuiXinLine");
var icoZongHeLine=document.getElementById("icoZongHeLine");
var icoXinShouLine=document.getElementById("icoXinShouLine");
var icoBaiKeLine=document.getElementById("icoBaiKeLine");

var GuideTP1=document.getElementById("GuideTP1");
var GuideTP2=document.getElementById("GuideTP2");
var GuideTP3=document.getElementById("GuideTP3");
var GuideTP4=document.getElementById("GuideTP4");

zuixin.onclick=function(){
    GuideTP1.style.display="block";
    GuideTP2.style.display="none";
    GuideTP3.style.display="none";
    GuideTP4.style.display="none";
    icoZuiXinLine.className="tab-active";
    icoZongHeLine.className="";
    icoXinShouLine.className="";
    icoBaiKeLine.className="";
}
zonghe.onclick=function(){
    GuideTP1.style.display="none";
    GuideTP2.style.display="block";
    GuideTP3.style.display="none";
    GuideTP4.style.display="none";
    icoZuiXinLine.className="";
    icoZongHeLine.className="tab-active";
    icoXinShouLine.className="";
    icoBaiKeLine.className="";
}
xinshou.onclick=function(){
    GuideTP1.style.display="none";
    GuideTP2.style.display="none";
    GuideTP3.style.display="block";
    GuideTP4.style.display="none";
    icoZuiXinLine.className="";
    icoZongHeLine.className="";
    icoXinShouLine.className="tab-active";
    icoBaiKeLine.className="";
}
baike.onclick=function(){
    GuideTP1.style.display="none";
    GuideTP2.style.display="none";
    GuideTP3.style.display="none";
    GuideTP4.style.display="block";
    icoZuiXinLine.className="";
    icoZongHeLine.className="";
    icoXinShouLine.className="";
    icoBaiKeLine.className="tab-active";
}



var wuqi=document.getElementById("wuqi");
var peijian=document.getElementById("peijian");
var zaiju=document.getElementById("zaiju");
var zhuangbei=document.getElementById("zhuangbei");

var icoWuQiLine=document.getElementById("icoWuQiLine");
var icoPeiJianLine=document.getElementById("icoPeiJianLine");
var icoZaiJuLine=document.getElementById("icoZaiJuLine");
var icoZhuangBeiLine=document.getElementById("icoZhuangBeiLine");

var DataTP1=document.getElementById("DataTP1");
var DataTP2=document.getElementById("DataTP2");
var DataTP3=document.getElementById("DataTP3");
var DataTP4=document.getElementById("DataTP4");

wuqi.onclick=function(){
    DataTP1.style.display="block";
    DataTP2.style.display="none";
    DataTP3.style.display="none";
    DataTP4.style.display="none";
    icoWuQiLine.className="tab-active";
    icoPeiJianLine.className="";
    icoZaiJuLine.className="";
    icoZhuangBeiLine.className="";
}
peijian.onclick=function(){
    DataTP1.style.display="none";
    DataTP2.style.display="block";
    DataTP3.style.display="none";
    DataTP4.style.display="none";
    icoWuQiLine.className="";
    icoPeiJianLine.className="tab-active";
    icoZaiJuLine.className="";
    icoZhuangBeiLine.className="";
}
zaiju.onclick=function(){
    DataTP1.style.display="none";
    DataTP2.style.display="none";
    DataTP3.style.display="block";
    DataTP4.style.display="none";
    icoWuQiLine.className="";
    icoPeiJianLine.className="";
    icoZaiJuLine.className="tab-active";
    icoZhuangBeiLine.className="";
}
zhuangbei.onclick=function(){
    DataTP1.style.display="none";
    DataTP2.style.display="none";
    DataTP3.style.display="none";
    DataTP4.style.display="block";
    icoWuQiLine.className="";
    icoPeiJianLine.className="";
    icoZaiJuLine.className="";
    icoZhuangBeiLine.className="tab-active";
}



var manhua=document.getElementById("manhua");
var guangziji=document.getElementById("guangziji");
var zuixinji=document.getElementById("zuixinji");
var dongman=document.getElementById("dongman");

var icoManHuaLine=document.getElementById("icoManHuaLine");
var icoGuangZiJiLine=document.getElementById("icoGuangZiJiLine");
var icoZuiXinJiLine=document.getElementById("icoZuiXinJiLine");
var icoDongManLine=document.getElementById("icoDongManLine");

var DoujinTP1=document.getElementById("DoujinTP1");
var DoujinTP2=document.getElementById("DoujinTP2");
var DoujinTP3=document.getElementById("DoujinTP3");
var DoujinTP4=document.getElementById("DoujinTP4");

manhua.onclick=function(){
    DoujinTP1.style.display="block";
    DoujinTP2.style.display="none";
    DoujinTP3.style.display="none";
    DoujinTP4.style.display="none";
    icoManHuaLine.className="tab-active";
    icoGuangZiJiLine.className="";
    icoZuiXinJiLine.className="";
    icoDongManLine.className="";
}
guangziji.onclick=function(){
    DoujinTP1.style.display="none";
    DoujinTP2.style.display="block";
    DoujinTP3.style.display="none";
    DoujinTP4.style.display="none";
    icoManHuaLine.className="";
    icoGuangZiJiLine.className="tab-active";
    icoZuiXinJiLine.className="";
    icoDongManLine.className="";
}
zuixinji.onclick=function(){
    DoujinTP1.style.display="none";
    DoujinTP2.style.display="none";
    DoujinTP3.style.display="block";
    DoujinTP4.style.display="none";
    icoManHuaLine.className="";
    icoGuangZiJiLine.className="";
    icoZuiXinJiLine.className="tab-active";
    icoDongManLine.className="";
}
dongman.onclick=function(){
    DoujinTP1.style.display="none";
    DoujinTP2.style.display="none";
    DoujinTP3.style.display="none";
    DoujinTP4.style.display="block";
    icoManHuaLine.className="";
    icoGuangZiJiLine.className="";
    icoZuiXinJiLine.className="";
    icoDongManLine.className="tab-active";
}



var infozuixin=document.getElementById("infozuixin");
var infonew=document.getElementById("infonew");
var infonotice=document.getElementById("infonotice");
var infoactive=document.getElementById("infoactive");

var InFoTB1=document.getElementById("InFoTB1");
var InFoTB2=document.getElementById("InFoTB2");
var InFoTB3=document.getElementById("InFoTB3");
var InFoTB4=document.getElementById("InFoTB4");

infozuixin.onclick=function(){
    InFoTB1.style.display="block";
    InFoTB2.style.display="none";
    InFoTB3.style.display="none";
    InFoTB4.style.display="none";
    infozuixin.style="color:#ffb007; border-bottom:3px solid #ffb007;";
    infonew.style="";
    infonotice.style="";
    infoactive.style="";
}
infonew.onclick=function(){
    InFoTB1.style.display="none";
    InFoTB2.style.display="block";
    InFoTB3.style.display="none";
    InFoTB4.style.display="none";
    infozuixin.style="";
    infonew.style="color:#ffb007; border-bottom:3px solid #ffb007;";
    infonotice.style="";
    infoactive.style="";
}
infonotice.onclick=function(){
    InFoTB1.style.display="none";
    InFoTB2.style.display="none";
    InFoTB3.style.display="block";
    InFoTB4.style.display="none";
    infozuixin.style="";
    infonew.style="";
    infonotice.style="color:#ffb007; border-bottom:3px solid #ffb007;";
    infoactive.style="";
}
infoactive.onclick=function(){
    InFoTB1.style.display="none";
    InFoTB2.style.display="none";
    InFoTB3.style.display="none";
    InFoTB4.style.display="block";
    infozuixin.style="";
    infonew.style="";
    infonotice.style="";
    infoactive.style="color:#ffb007; border-bottom:3px solid #ffb007;";
}


var ost_go=document.getElementById("ost_go")
var ost_d=document.getElementById("ost_d");
var ost_g=document.getElementById("ost_g");

ost_g.onmouseover=function(){
    ost_go.style.display="none";
    ost_d.style.display="block";
}
ost_d.onmouseout=function(){
    ost_go.style.display="block";
    ost_d.style.display="none";
}


var Tplay_auto=document.getElementById("Tplay_auto");
var Video_auto=document.getElementById("Video_auto");

var picVideos1=document.getElementById("picVideos1");
var picVideos2=document.getElementById("picVideos2");
var picVideos3=document.getElementById("picVideos3");
var picVideos4=document.getElementById("picVideos4");
var picVideos5=document.getElementById("picVideos5");
var picVideos6=document.getElementById("picVideos6");

var pic2Videos1=document.getElementById("pic2Videos1");
var pic2Videos2=document.getElementById("pic2Videos2");
var pic2Videos3=document.getElementById("pic2Videos3");
var pic2Videos4=document.getElementById("pic2Videos4");
var pic2Videos5=document.getElementById("pic2Videos5");
var pic2Videos6=document.getElementById("pic2Videos6");

var pic3Videos1=document.getElementById("pic3Videos1");
var pic3Videos2=document.getElementById("pic3Videos2");
var pic3Videos3=document.getElementById("pic3Videos3");
var pic3Videos4=document.getElementById("pic3Videos4");
var pic3Videos5=document.getElementById("pic3Videos5");
var pic3Videos6=document.getElementById("pic3Videos6");

var picPlays1=document.getElementById("picPlays1");
var picPlays2=document.getElementById("picPlays2");
var picPlays3=document.getElementById("picPlays3");
var picPlays4=document.getElementById("picPlays4");
var picPlays5=document.getElementById("picPlays5");
var picPlays6=document.getElementById("picPlays6");

var pic2Plays1=document.getElementById("pic2Plays1");
var pic2Plays2=document.getElementById("pic2Plays2");
var pic2Plays3=document.getElementById("pic2Plays3");
var pic2Plays4=document.getElementById("pic2Plays4");
var pic2Plays5=document.getElementById("pic2Plays5");
var pic2Plays6=document.getElementById("pic2Plays6");

var pic3Plays1=document.getElementById("pic3Plays1");
var pic3Plays2=document.getElementById("pic3Plays2");
var pic3Plays3=document.getElementById("pic3Plays3");
var pic3Plays4=document.getElementById("pic3Plays4");
var pic3Plays5=document.getElementById("pic3Plays5");
var pic3Plays6=document.getElementById("pic3Plays6");


var V_box=document.getElementById("V_box");
var Vcloser=document.getElementsByClassName("Vcloser")[0];
var Vboxs=document.getElementsByClassName("V-boxs")[0];
var PicVideos=document.getElementsByClassName("PicVideos")[0];



Tplay_auto.onclick=function(){
    V_box.style.display="block";
    Video_auto.style.display="block";
    Video_auto.play();
};

Vcloser.onclick=function(){
    Vboxs.style.display="none";//当点击x的时候，整个box框都不见了
    PicVideos.style.display="none";
    Video_auto.pause();
    picVideos1.pause();
    picVideos2.pause();
    picVideos3.pause();
    picVideos4.pause();
    picVideos5.pause();
    picVideos6.pause();
    pic2Videos1.pause();
    pic2Videos2.pause();
    pic2Videos3.pause();
    pic2Videos4.pause();
    pic2Videos5.pause();
    pic2Videos6.pause();
    pic3Videos1.pause();
    pic3Videos2.pause();
    pic3Videos3.pause();
    pic3Videos4.pause();
    pic3Videos5.pause();
    pic3Videos6.pause();
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


pic2Plays1.onclick=function(){
    V_box.style.display="block";
    pic2Videos1.style.display="block";
    pic2Videos1.play();
};
pic2Plays2.onclick=function(){
    V_box.style.display="block";
    pic2Videos2.style.display="block";
    pic2Videos2.play();
};
pic2Plays3.onclick=function(){
    V_box.style.display="block";
    pic2Videos3.style.display="block";
    pic2Videos3.play();
};
pic2Plays4.onclick=function(){
    V_box.style.display="block";
    pic2Videos4.style.display="block";
    pic2Videos4.play();
};
pic2Plays5.onclick=function(){
    V_box.style.display="block";
    pic2Videos5.style.display="block";
    pic2Videos5.play();
};
pic2Plays6.onclick=function(){
    V_box.style.display="block";
    pic2Videos6.style.display="block";
    pic2Videos6.play();
};

pic3Plays1.onclick=function(){
    V_box.style.display="block";
    pic3Videos1.style.display="block";
    pic3Videos1.play();
};
pic3Plays2.onclick=function(){
    V_box.style.display="block";
    pic3Videos2.style.display="block";
    pic3Videos2.play();
};
pic3Plays3.onclick=function(){
    V_box.style.display="block";
    pic3Videos3.style.display="block";
    pic3Videos3.play();
};
pic3Plays4.onclick=function(){
    V_box.style.display="block";
    pic3Videos4.style.display="block";
    pic3Videos4.play();
};
pic3Plays5.onclick=function(){
    V_box.style.display="block";
    pic3Videos5.style.display="block";
    pic3Videos5.play();
};
pic3Plays6.onclick=function(){
    V_box.style.display="block";
    pic3Videos6.style.display="block";
    pic3Videos6.play();
};


var SlidePrev=document.getElementById("SlidePrev");
var SlideNext=document.getElementById("SlideNext");
var SWrapper=document.getElementById("SWrapper");

var i=0;
var j=1;
var timer;
var a=-1868.3327;
SlidePrev.onclick=function(){
    clearInterval(timer);
    timer=window.setInterval(function(){
        a=a+98.3333;
        SWrapper.style.left=a+"px";
        clearInterval(timer);
        if(a==(j*98.3333)) {
            clearInterval(timer);
        }
        j++;
        if(a>=0){
            SWrapper.style.left="-1868.3327px";
            a=-1868.3327;
            j=1;
        }
        clearInterval(timer2);
    },10);

};
SlideNext.onclick=function(){
    clearInterval(timer);
    timer=window.setInterval(function(){
        i=i+98.3333;
        SWrapper.style.left="-"+i+"px";
        if(i==(j*98.3333)) {
            clearInterval(timer);
        }
        j++;
        if(i>=13*98.3333){
            SWrapper.style.left="0px";
            i=0;
            j=1;
        }
        clearInterval(timer2);
    },10);
};

var timer2;
var myInterval=setInterval(function () {
    autoPlay();
},3000);

function autoPlay(){
    clearInterval(timer2);
    timer2=window.setInterval(function(){
        i=i+98.3333;
        SWrapper.style.left="-"+i+"px";
        if(i==(j*98.3333)) {
            clearInterval(timer2);
        }
        j++;
        if(i==13*98.3333){
            SWrapper.style.left="0px";
            i=0;
            j=1;
        }
    },10);
}

var getAPP=document.getElementById("getAPP");
var pop_id_app=document.getElementById("pop_id_app");
var app_close=document.getElementById("app_close");
getAPP.onclick=function(){
    pop_id_app.style.display="block";
};
app_close.onclick=function(){
    pop_id_app.style.display="none";
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
