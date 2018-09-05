function forLoop(array){
  var newArr = [];
  for (let i = 0; i<25; i++){
    if (1===array[i]){
      console.log (newArr.push( "I am 1 strange loop."))
    }else{
      console.log (newArr.push("I am "+ array[i] +" strange loops"))
  }
  }
  return newArr;
}