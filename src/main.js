import $ from 'jquery'

// import './css/index.css'
import './less/index.less'




$(function () {
  $('ul li:even').css('backgroundColor', 'pink').css("fontSize", 40)
  $('ul li:odd').css('backgroundColor', 'skyblue').css("fontSize", 40)
})

class Person {
  static info = { name: 'zs', age: 18 }

}

console.log(Person.info)