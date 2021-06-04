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

  // 建立一个model对象，用于储存多艘战舰，使用对象避免了使用硬编码
  let model={
    // 网格大小，游戏所包含的战舰数量，每艘战舰占据单元格数，指玩家当前击沉的战舰数
    boardSize:7,
    numShips:3,
    shipLength:3,
    shipSunk:0,

    // 每一个战舰都是一个对象，对象包含属性locations，hits，表示战舰的占据的位置以及被击中的部位
    ships:[
    {
      // 属性locations为一个数组，储存了战舰占据游戏版的单元格
      // location：位置，地点
      locations:['06','16','26'],
      // hits数组指出了战舰的各个部位是否被击中，将数组中的每个元素都初始化为空的字符串，并在战舰的某个部位被击中时将相对应的元素改为“hit”
      hits:['','',''],
    },
    {
      locations:['24','34','44'],
      hits:['','','']
    },
    {
      locations:['10','11','12'],
      hits:['','','']
    }
  ],
  // 设置一个参数guess，迭代数组ships，每次检查一艘战舰,遍历每艘战舰
  fire:function(guess){
    for (let i=0;i<this.numShips;i++){
      let ship = this.ships[i];
      // 获取战舰占据的位置
      let location=ships.locations;
      // 将一个值作为参数，并返回数值在数组中的索引,如果guess包含在数组locations中说明击中战舰
      let index=locations.indexOf(guess);
      // 判断战舰是否被击中
      if(index>=0){
        // 数组hits的相应元素设置为hit
        ship.hits[index]='hit';
        // 告诉视图，玩家的猜测击中了战舰，并让视图显示hit！
        view.displayHit(guess);
        view.displayMessage('hit!');
        // 确定战舰被击中后，执行检查，如果战舰被击沉，击沉战舰数（shipsSunk）＋1
        if (this.shipSunk(ship)){
          // 让玩家知道他击沉了一艘战舰
          view.displayMessage('You sank my battleship');
          this.shipSunk++;
        }
        return true;
      }
    }
    // 告诉玩家未击中战舰，并让视图显示you missed
    view.displayMiss(guess);
    view.displayMessage('You missed.');
    // 遍历所有战舰后，没有发现被击中的战舰，返回false
    return false;
  },
      // 接受一艘战舰作为参数，如果战舰被击沉返回false，浮在水面返回true
      isSunk:function(ship){
        // 检查是否每个部位都被击中
        for (let i=0;i<this.shipLength;i++){
          // 只要有任何部位未被击中，战舰就浮于水面，返回false
          if(ship.hits[i]!=='hit'){
            return false;
          }
        }
        // 否则战舰被击沉，返回true
        return true;
      },
  }
}