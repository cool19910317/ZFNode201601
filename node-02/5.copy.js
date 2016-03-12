/**
 * Created by Tanxu123 on 2016/3/6.
 */

/**
 *
 */


function copy(src,target){
  var fs = require('fs');
  fs.readFile(src,'utf8',function(err,data){
    if(err){
      console.error(err);
    }else{
      fs.writeFile(target,data,'utf8',function(err){
        if(err){
          console.error(err);
        }else{
          console.log('success');
        }
      })
    }
  })
}
copy('./name.txt','./name.bak.txt');