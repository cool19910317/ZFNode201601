/**
 * Created by Tanxu123 on 2016/3/5.
 */

// 回调
function boil(){
  console.log('a');
}

setTimeout(boil,2000);
console.log('b');



// 阻塞 后续C不会执行 阻塞c的执行
function ext(){
  while(true){

  }
}
ext();
console.log('c');