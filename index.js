// Code your solutions in this file

function writeCards(arr){
    newArr=[];
    arr.forEach(element => {
      str = 'Thank you, '+element + ', for the wonderful surprise gift!';
      newArr.push(str);
    });
    return newArr;
  }
  
  function countDown( num){
    for(i=num; i >=0; i-- ){
      console.log(i);
    }
  }
   