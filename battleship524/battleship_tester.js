  // 定义一个变量，并赋值给view，
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
      locations:['00','00','00'],
      // hits数组指出了战舰的各个部位是否被击中，将数组中的每个元素都初始化为空的字符串，并在战舰的某个部位被击中时将相对应的元素改为“hit”
      hits:['','',''],
    },
    {
      locations:['00','00','00'],
      hits:['','','']
    },
    {
      locations:['00','00',''],
      hits:['','','']
    }
  ],
  generateShipLocations:function(){
    let direction=Math.floor(Math.random()*2);
    let row,col;
    let newShipLocations=[];
    for(let i=0;i<this.shipLength;i++){
      if (direction===1){
        // 生成水平战舰的起始位置
      }else{
        // 生成垂直战舰的起始位置
      }
    }
    // 生成所有位置后返回这个数组
    return newShipLocations;

  let locations;
  // 循环次数与要为其生成位置的战舰数相同
  for(let i=0;i<this.numShips;i++){
    do{
      // 生成战舰占据的一系列，并检查这些位置是否重叠，如果重叠，再次尝试。不断的生成新位置，直到不在重叠为止
      location=this.generateShip();
    }while(this.collision(locations));
    // 生成可行的位置后，将其赋给数组model，ships中相应战舰的属性locations
    this.ships[i].locations=locations;
  }
  },
  // 设置一个参数guess，迭代数组ships，每次检查一艘战舰,遍历每艘战舰
  fire:function(guess){
    for (let i=0;i<this.numShips;i++){
      let ship = this.ships[i];
      // 获取战舰占据的位置
      // 将一个值作为参数，并返回数值在数组中的索引,如果guess包含在数组locations中说明击中战舰
            // let location=ships.locations;串接
      let index=ship.locations.indexOf(guess);
      // 判断战舰是否被击中
      if(index>=0){
        // 数组hits的相应元素设置为hit
        ship.hits[index]='hit';
        // 告诉视图，玩家的猜测击中了战舰，并让视图显示hit！
        view.displayHit(guess);
        view.displayMessage('hit!');
        // 确定战舰被击中后，执行检查，如果战舰被击沉，击沉战舰数（shipsSunk）＋1
        if (this.isSunk(ship)){
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
  // model.fire('53');检测

  // 获取并处理玩家的猜测，记录猜测次数，让模型根据当前猜测更新自己，判断游戏是否结束（是否已击沉所有战舰）
  let controller={
    // 定义了controller对象，包含一个属性guesses，该属性被初始化为0
    guesses:0,
    // 将格式“A1”的猜测位置作为参数
    processGuess:function(guess){
      // 使用parseguess来验证玩家猜测的有效性
      let location=parseGuess(guess);
      // 只要返回的不是null，说明获得的位置是有效的（null是一个假值）
      if (location){
        // 如果玩家猜测有效，guesses就加一，
        this.guesses++;
        // 以字符串的形式将行号和列好传递给model对象的fire，仅当击中战舰时，方法fire才返回true
        let hit=model.fire(location);
        // 如果击中战舰且击沉战舰数量与游戏包含战舰数量相等，向玩家输出这句话，并指出他击沉了所有战舰和猜测次数
        if(hit&&model.shipsSunk===model.numShips){
          view.displayMessage('You sank all my battleships,in'+this.guesses+'guesses')
        }
      };
      // 包含可出现的有效猜测中所有的字母
      let alphabet=['A','B','C','D','E','F','G'];
      // 当guess为空或长度不为2时，提醒玩家……，如果guess不为空且长度为2时……
      if(guess===null||guess.length!==2){
        alert('Oops,please enter a letter and number on the board.')
      }else{
        // 获取guess中的第一个字符，再使用indexOf获取0-6的数字，它是这个数字在数组中的位置
        firstChar=guess.charAt(0);
        let row=alphabet.indexOf(firstChar);
        // 获取字符串中的第二个字符
        let column=guess.chartAt(1);
        // 使用函数isNaN检查row和culumn是否都是数字……，否则如果row小于0，或大于等于model模型的网格大小，或column小于0或column大于等于网格大小
        if(isNaN(row)||isNaN(column)){
          alert("Oops,that isn's on the board.");
        }else if (row<0||row>=model.boardSize||column<0||column>=model.boardSize){
          alert("Oops,that's off the board!");
        }else{
          return row+column;
        }
      }
      return null;
    }
  }
  function init(){
  let fireButton=document.getElementById('fireButton');
  // 给fireButton按钮添加一个单机事件
  fireButton.onclick=handleFireButton;
  let guessInput=document.getElementById('guessInput');
  // 添加一个新的处理程序，用于处理HTML输入字段的按键事件
  guessInput.onkeypress=handleKeyPress;  
}
  // 每当玩家单机handleFireButton时，都调用这个函数
  function handleFireButton(){
    let guessInput=document.getElementById('guessInput');
    // 另玩家猜测的值等于guess
    let guess=guessInput.value;
    // 将猜测的值交给processGuess
    controller.processGuess(guess);
    // 猜测后让值为空
    guessInput.value='';
  };
  // 每当用户在这个表单输入字段中按键时，都将调用这个处理程序，浏览器向事件处理程序传递一个事件对象，其中包括有关用户按下了哪个键的信息
  function handleKeyPress(e){
    let fireButton=document.getElementById('fireButton');
    // 如果用户按下回车键，事件对象的属性keyCode将为13，fire按钮像自己被单机一样行事
    if(e.keyCode===13){
      fireButton.click();
      // 返回false，让表单不做其他任何事情（如提交）
      return false;
    }
  };
window.onload=init;