window.onload=function (){
  // 定义一个变量，并赋值给view
  let view={
    // 将一个字符串作为参数，并在消息区域显示,用于显示左上角的消息提示
    displayMessage:function(mag){
      // 用dom获取HTML中div元素
      let messageArea=document.getElementById('messageArea');
      // 将messageArea的innerHTML设置为mag，用于更新message元素的版本
      messageArea.innerHTML=mag;
    },
    displayHit:function(location){
      // 使用玩家猜测生成的id，来获取要更新的元素
      // 将location元素的class改为hit 用于在屏幕上显示战舰图片
      let cell=document.getElementById(location);
      cell.setAttribute('class','hit');
    },
    displayMiss:function(location){
      // 将location元素的class改为miss，用于显示未击中的图像
      let cell=document.getElementById(location);
      cell.setAttribute('class','miss');
    }
  };
  // view.displayMiss('00');
  // view.displayHit('34');
  // view.displayMessage('123456')

  // 每一个战舰都是一个对象，对象包含属性locations，hits，
  let ships=[
    {
      // 属性locations为一个数组，储存了战舰占据游戏版的单元格
      locations:['10','20','30'],
      // hits数组指出了战舰的各个部位是否被击中，将数组中的每个元素都初始化为空的字符串，并在战舰的某个部位被击中时将相对应的元素改为“hit”
      hits:['hit','',''],
    },
    {
      locations:['32','33','34'],
      hits:['','','']
    },
    {
      locations:['63','64','65'],
      hits:['','','hit']
    }
  ];
}