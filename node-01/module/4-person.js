/**
 * Created by Tanxu123 on 2016/3/5.
 */

function Person(name){
  this.name = name;
}

module.exports = Person;

/**
 * 1.如果以属性方式的话，用exports module.exports 效果一样
 * 2. 如果需要导出的是一个引用类型，只能使用module.exports
 *
 */