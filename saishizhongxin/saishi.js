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





//视频中心的点击事件
var video1=document.getElementById("video-1");
var close1=document.getElementById("btn-video-close-1");
var em1=document.getElementById("bf1");
var em2=document.getElementById("bf2");
var em3=document.getElementById("bf3");
var em4=document.getElementById("bf4");
var em5=document.getElementById("bf5");
var em6=document.getElementById("bf6");
var em7=document.getElementById("bf7");
var em8=document.getElementById("bf8");
var MyVideo=document.getElementById("MyVideo");
em1.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();//视频自动播放
}
close1.onclick=function(){
        video1.style.display="none";
        close1.style.display="none";
       MyVideo.pause();//关闭时，视频停止播放
    }
em2.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}
em3.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}
em4.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}
em5.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}
em6.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}
em7.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}
em8.onclick=function(){
    video1.style.display="block";
    close1.style.display="block";
    MyVideo.play();
}




var chai=document.getElementById("chai");
var video3=document.getElementsByClassName("video-3")[0];
var Smyvideo=document.getElementById("Smyvideo");
window.onscroll = function () {  //鼠标滚动事件
    var height = document.documentElement.scrollTop; //获取鼠标滚动的距离
    // console.log(height);
    if(height>=1600){     //通过计算，当鼠标滚动距离大于1600px时，页面右侧的小视频会显示
        video3.style.display="block";
    }else{
        video3.style.display="none";

    }
}
chai.onclick=function(){
        video3.style.display="none";
        Smyvideo.pause();  //小视频中，点击×视频停止播放，且界面隐藏
    }
