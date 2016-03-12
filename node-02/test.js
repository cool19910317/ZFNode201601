/**
 * Created by Tanxu123 on 2016/3/6.
 */
try{
  setTimeout(function () {
    throw Error('error');
  },1000)
}catch(e){
  console.log(e)
}
console.log('c');