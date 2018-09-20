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

//社区互动移入移出事件
//有两层移入移出，对里面li标签也进行了移入移出修改图片和a标签的样式
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



//视频播放的点击事件
var bf=document.getElementById("bf");
var video=document.getElementById("video");
var close=document.getElementById("btn-video-close");
var tmd=document.getElementById("tmd");
var myvideo=document.getElementById("myvideo");
bf.onclick=function(){
    video.style.display="block";
    close.style.display="block" ;
    tmd.style.opacity="0.5";
    myvideo.play();//视频自动播放

}
close.onclick=function(){
        video.style.display="none";
        close.style.display="none" ;
        tmd.style.opacity="1";
        myvideo.pause();//点击关闭之后，视频播放停止
    }


//沙漠地图的点击事件
var lis=document.getElementById("section").getElementsByTagName("li");
function show4(num){
    document.getElementById("section").style.backgroundImage="url(img/bg_02_"+num+".jpg)";//修改section部分的背景图片
    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute("class",""); //现将所有的样式都清空
//            if(i==(index-1)){
//                lis[i].setAttribute("class","weath1");
//            }
    }
    lis[num-1].setAttribute("class","weath1");//给发生点击事件的li标签添加class样式
}


//新增载具的点击事件
var pic1=document.getElementById("pic1");
var arr1=["img/1.png","img/2.png","img/3.png"];//利用数组修改样式
var next=document.getElementById("next");
var up=document.getElementById("up");//获取左右两个箭头
var spans1=document.getElementById("point_A").getElementsByTagName("span");//获取图片下方的○点

function show1(id){
    pic1.src="img/"+id+".png";//每一个○点 对应一张图片
    for(var j=0;j<spans1.length;j++){  //修改○点的样式
        spans1[j].setAttribute("class","point1");
    }
    spans1[id-1].setAttribute("class","point2");
}  //对○点span标签做点击事件，点击指定的○点会修改○点的样式 并且能切换图片

//左右切换的点击事件
var i=0;
var j=1;
var n=0;
next.onclick=function() {
    n++;
    if (n > arr1.length - 1) {   //arr1.length-1=2
        n = 0;//当n>2时，将n强制变成0,这样就能完成循环
    }
    pic1.src = arr1[n];//利用数组修改图片样式

    //图片轮播
    var timer=window.setInterval(function(){
        i=i+200;
        pic1.style.marginLeft="-"+i+"px";//每次向左移动ipx的距离
        if(i>=(1190*j) ){
            clearInterval(timer);//清除定时器
            j++;
            if(j=4){ //3张一循环，大于3时强制转换为1
                j=1;
                i=0;
                pic1.style.marginLeft="0px";
            }
        }
    },20)//图片向右轮播，因为下面的轮播跟这个一样，所以只写了这一个轮播。

    var a = 0;
    for (a = 0; a <= arr1.length - 1; a++) {
        if (a == n) {
            spans1[a].setAttribute("class", "point2");
        } else {
            spans1[a].setAttribute("class", "point1");
        }
    }
}  //修改图片下面○的样式

up.onclick=function(){
        n--;
        if(n<0){
            n=2;
        }
        pic1.src=arr1[n];

        var timer=window.setInterval(function(){
            i=i+200;
            pic1.style.marginLeft=i+"px";
            if(i>=(1190*j) ){
                clearInterval(timer);
                pic1.style.marginLeft="0px";
                j++;
                if(j=4){
                    j=1;
                    i=0;
                    pic1.style.marginLeft="0px";
                }
            }
        },20)//图片向左轮播，因为下面的轮播跟这个一样，所以只写了这一个轮播。


        var a=0;
        for(a=0;a<=arr1.length-1;a++){
            if(a==n){
                spans1[a].setAttribute("class","point2");
            }else{
                spans1[a].setAttribute("class","point1");
            }
        }
    }


//军团系统图片转换
var pic2=document.getElementById("pic2");
var right=document.getElementById("right");
var left=document.getElementById("left");
var arr2=["img/sec05_01.png","img/sec05_02.png","img/sec05_03.png"];
var n=0;

var spans2=document.getElementById("point_B").getElementsByTagName("span");

function show2(a){
    pic2.src="img/sec05_0"+a+".png";

    for(var z=0;z<spans2.length;z++){
        spans2[z].setAttribute("class","point1");
    }
    spans2[a-1].setAttribute("class","point2");
}


right.onclick=function(){
    n++;
    if(n>arr2.length-1){
        n=0;
    }
    pic2.src=arr2[n];
    var x=0;
    for(x=0;x<=arr2.length-1;x++){
        if(x==n){
            spans2[x].setAttribute("class","point2");
        }else{
            spans2[x].setAttribute("class","point1");
        }
    }
}
left.onclick=function(){
    n--;
    if(n<0){
        n=2;
    }
    pic2.src=arr2[n];
    var x=0;
    for(x=0;x<=arr2.length-1;x++){
        if(x==n){
            spans2[x].setAttribute("class","point2");
        }else{
            spans2[x].setAttribute("class","point1");
        }
    }
}



//体验优化的点击事件
var ass=document.getElementById("sec_07-box").getElementsByTagName("a");
var divs=document.getElementById("sec_07-box").getElementsByTagName("div");
var spans=document.getElementById("sec_07-box").getElementsByTagName("span");

function show6(num){
    for(m=0;m<ass.length;m++){
        divs[m].style.display="none";
        ass[m].style.backgroundImage="url(img/sec07_dark.png)";
        ass[m].setAttribute("class","f1");
    }
    divs[num-1].style.display="block";
    ass[num-1].style.backgroundImage="url(img/sec07_light.png)";
    ass[num-1].setAttribute("class","active");
}


//游戏特的图片转换与点击事件
var n=0;
var left2=document.getElementById("left2");
var right2=document.getElementById("right2");
var arr3=["url(img/strategy_1.jpg)","url(img/strategy_2.jpg)","url(img/strategy_3.jpg)","url(img/strategy_4.jpg)"];

var spans3=document.getElementById("point_C").getElementsByTagName("span");
function show3(num){
    document.getElementById("sec_08").style.backgroundImage="url(img/strategy_"+num+".jpg)";
    for(var y=0;y<spans3.length;y++){
        spans3[y].setAttribute("class","point1");
    }
    spans3[num-1].setAttribute("class","point2");
}

right2.onclick=function(){
    n++;
    if(n>arr3.length-1){
        n=0;
    }
    document.getElementById("sec_08").style.backgroundImage=arr3[n];
    var c=0
    for(c=0;c<=arr3.length-1;c++){
        if(c==n){
            spans3[c].setAttribute("class","point2");
        }else{
            spans3[c].setAttribute("class","point1");
        }
    }
}
left2.onclick=function(){
        n--;
        if(n<0){
            n=3;
        }
        document.getElementById("sec_08").style.backgroundImage=arr3[n];
        var c=0
        for(c=0;c<=arr3.length-1;c++){
            if(c==n){
                spans3[c].setAttribute("class","point2");
            }else{
                spans3[c].setAttribute("class","point1");
            }
        }
    }

//页面右侧的滚动菜单栏
var e=0;
var as=document.getElementById("nav-inner").getElementsByTagName("a");
var ems=document.getElementById("nav-inner").getElementsByTagName("em");
var liss=document.getElementById("nav-inner").getElementsByTagName("li");
function show5(d) {
    for(e=0;e<as.length;e++){
        as[e].setAttribute("class","");    //清除所有的样式
        ems[e].style.display="none";       //em标签全部隐藏
        liss[e].style.marginLeft=33+"px";    //因为li是浮动的，所有当em标签隐藏之后，li标签会有文档流向左边偏移，所以要要将所有的li标签都设置一个居左的距离，通过计算是33px;
    }
    as[d-1].setAttribute("class","sro");  //给发生点击事件的a标签 添加样式，这里通过增加class来改变样式
    ems[d-1].style.display="block";    //给发生点击事件的em标签显示出来
    liss[d-1].style.marginLeft=8+"px";//em标签显示出来，则li标签不会出现文档流则不需要再居左33px;通过计算为8px;
}
window.onscroll = function () {   //鼠标滚动事件
        var t =document.documentElement.scrollTop;//获取鼠标距最上方的距离
        //console.log(t);
        if(t<1200){    //当鼠标距上1200px时，第一个li改变样式
            as[0].setAttribute("class","sro");
            ems[0].style.display="block";
            liss[0].style.marginLeft=8+"px";
        }else{
            as[0].setAttribute("class","");
            ems[0].style.display="none";
            liss[0].style.marginLeft=33+"px";
        }
        for(var k=1;k<as.length;k++){    //之后每个li相隔900px;
            if( (t<1200+k*900) && (t>=1200+(k-1)*900) ){  //这边两个条件必须满足才能该变样式，因为只有鼠标在某个距离范围之内，该范围内的li标签才会改变样式
                as[k].setAttribute("class","sro");
                ems[k].style.display="block";
                liss[k].style.marginLeft=8+"px";
            }else{
                as[k].setAttribute("class","");
                ems[k].style.display="none";
                liss[k].style.marginLeft=33+"px";
            }
        }
        if(t>6600){    //当鼠标距上方6600px时不设置任何样式
            as[7].setAttribute("class","");
            ems[7].style.display="none";
            liss[7].style.marginLeft=33+"px";
        }
    }


