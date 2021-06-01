window.onload=function(){
  let input='jenny@wickedlysmart.com';
  for (let i=0;i<input.length;i++){
    if(input.charAt(i)==='@'){
      console.log("There's an @ sign at index"+i);
    }
  }
  let phrase ='the cat in the hat';
  let index=phrase.indexOf('cat');
  console.log("There's a cat sitting at index "+ index);
  index=phrase.indexOf('the',5);
  console.log("There's a the sitting at index"+index);
  index=phrase.indexOf('dog');
  console.log("There's a dog sitting at index"+index);

  let data = 'name|phone|address';
  let val=data.substring(5,10);
  console.log('Substring is'+val);
  val=data.substring(5);
  console.log('Substring is now'+val);
  let vals=data.split('|');
  console.log('Split array is', vals)
}