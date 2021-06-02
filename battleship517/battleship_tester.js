window.onload=function (){
  // 定义一个变量，并赋值给view
  let view={
    // 将一个字符串作为参数，并在消息区域显示,用于显示左上角的消息提示
    displayMessage:function(mag){
      // 用dom获取HTML中div元素
      let messageArea=document.getElementById('messageArea');
      // 将messageArea的innerHTML设置为mag，用于
      messageArea.innerHTML=mag;
    },
    displayHit:function(location){
    },
    displayMiss:function(location){
    }
  };

}