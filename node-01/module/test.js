/**
 * Created by Tanxu123 on 2016/3/5.
 */

var person = {
  name : 'zfpx',
  age : '6'
};

console.log(Object.keys(person));

for(var attr in person){
  console.log(attr);
  console.log(person[attr]);
}