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


var tmd=document.getElementById("tmd");  //给整个网页设置了一个透明度
var loginPop=document.getElementById("loginPop");
var myvideo=document.getElementById("myvideo");
window.onload = function(){
    loginPop.style.display="block";//当网页加载完之后弹出登录界面且透明度为半透明
    tmd.style.opacity="0.5";
    myvideo.play();//视频自动播放
}
function show7(){
    loginPop.style.display="none";  //关闭登录界面后，网页透明度恢复正常
    tmd.style.opacity="1";
}


function show8(){
    loginPop.style.display="block";
    tmd.style.opacity="0.5";
}
function show7(){
    loginPop.style.display="none";
    tmd.style.opacity="1";
}



//直播界面的图片轮换与点击事件
var Left2=document.getElementById("Left2");
var Right2=document.getElementById("Right2");
var ul2=document.getElementById("hostbox").getElementsByTagName("ul");
var divs=document.querySelectorAll(".left");
var Num=0
var c=0;
var d=1;
var h2=document.getElementById("hostbox").getElementsByTagName("h2");
var Timer=setInterval(Next,5000);//设置定时器，每5000毫秒切换一张
Right2.onclick=function(){
    Next();
    clearInterval(Timer);
}
function Next(){
    Num++;
    if ( Num>3) {
        Num = 0;
    }

    var X = 0;
    for (X = 0; X <= ul2.length - 1; X++) {
        if (X ==Num) {
            ul2[X].style.display = "block";
            divs[X].style.display = "block";
            h2[X].style.display = "block";
        } else {
            ul2[X].style.display = "none";
            divs[X].style.display = "none";
            h2[X].style.display = "none";
        }
    }
}
Left2.onclick=function(){
    Num--;
    if(Num<0){
        Num=3;
    }
    var l=0;
    for(l=0;l<=ul2.length-1;l++){
        if(l==Num){
            ul2[l].style.display="block";
            divs[l].style.display = "block";
        }else{
            ul2[l].style.display="none";
            divs[l].style.display = "none";
        }
    }
    clearInterval(Timer);
}



var left1=document.getElementById("left");
var right1=document.getElementById("right");
var uls=document.getElementById("mid7").getElementsByTagName("ul");
var n=0;
var i=0;
var j=1
right1.onclick=function() {
    next();
    clearInterval(timer);
    /* var Timer=window.setInterval(function(){
           i++;
           document.querySelector(".ul1").style.left="-"+i+"%";
           //滚动了整个屏幕之后，清除定时器，不要动了
           if(i==100*j) {
               clearInterval(Timer);
           }
           },20)  */
}
function next(){
    n++;
    if (n>4) {
        n = 0;
    }
    var x = 0;
    for (x = 0; x <= uls.length - 1; x++) {
        if (x == n) {
            uls[x].setAttribute("class", "ul1");
            uls[x].style.display = "block";
        } else {
            uls[x].setAttribute("class", "");
            uls[x].style.display = "none";
        }
    }
}
left1.onclick=function(){
    n--;
    if(n<0){
        n=4;
    }
    var x=0;
    for(x=0;x<=uls.length-1;x++){
        if(x==n){
            uls[x].setAttribute("class","ul1");
            uls[x].style.display="block";
        }else{
            uls[x].setAttribute("class","");
            uls[x].style.display="none";
        }
    }
    clearInterval(timer);
}

/* time=setTimeout(function(){
      n++;
      if (n>4) {
          n = 0;
      }
      for(var I=0;I<=uls.length;I++) {
          if(I==n){
              uls[I].setAttribute("class","ul1");
              uls[I].style.display="block";
          }else{
              uls[I].setAttribute("class","");
              uls[I].style.display="none";
          }
      }
  },500);*/
/*定时器应用*/
var timer=setInterval(next,5000);//每5000毫秒切换一张

function show9(){
    loginPop.style.display="block";
    tmd.style.opacity="0.5";
}
function show7(){
    loginPop.style.display="none";
    tmd.style.opacity="1";
}

var hdgz=document.getElementById("hdgz");
var activeRulePop=document.getElementById("activeRulePop")
var hjjl=document.getElementById("hjjl");
hdgz.onclick=function(){
    activeRulePop.style.display="block";
    tmd.style.opacity="0.5";
}
function show12(){
    activeRulePop.style.display="none";
    tmd.style.opacity="1";
}
cjjl.onclick=function(){
    loginPop.style.display="block";
    tmd.style.opacity="0.5";
}
function show7(){
    loginPop.style.display="none";
    tmd.style.opacity="1";
}
