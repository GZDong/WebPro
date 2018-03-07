var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",100);
}

timedCount();  //循环每隔一秒调用自己,使用postMessage发送信息