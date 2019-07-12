1、实现new方法  
(1)、  
```
function A(name){  
	this.name = name   
}  
function ObjectFactory(){   
	var obj = {}   
	Constructor = Array.prototype.shift.call(arguments)   
	//Constructor为第一个函数A(),通过shift()的调用，arguments的值为后面的字符串值，   
	//但是在arguments中，穿进去的值是一个对象表示的，这里是{'0': 'svenzeng'}  
	obj.__proto__ = typeof Constructor.prototype === 'number' ?   
		Object.prototype : Constructor.prototype//指向Constructor的原型  
	var ret = Constructor.apply(obj, arguments)//obj值变化为{'name': 'svenzeng'a}  
	return typeof ret === 'object' ? ret : obj  
}  
var a = ObjectFactory(A, 'svenzeng');  
```
(2)、   
```
function Person(name, age){  
	this.name = name   
	this.age = age   
}  
function New(f){  
	return function(){   
		var o = {"__proto__": f.prototype}   
		f.apply(o, arguments)//继承父类的属性   
		return o//返回一个Object  
	}   
}   
var p1 = New(Person)('Jack', 25)
```