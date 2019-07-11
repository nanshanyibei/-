// const myModule = (function(){
// 	const privateVariable = 'Hello World'
// 	function privateMethod(){
// 		console.log(privateVariable)
// 	}
// 	return {
// 		publicMethod: function(){
// 			privateMethod()
// 		}
// 	}
// })()

// myModule.publicMethod()

// const myModule = {
// 	publicMethod: function(){
// 		privateMethod()
// 	}
// }

// const myRevealingModule = (function(){
// 	let privateVar = 'Peter'
// 	const publicVar = 'Hello World'
// 	function privateFunction(){
// 		console.log("Name: " + privateVar)
// 	}
// 	function publicSetName(name){
// 		privateVar = name
// 	}
// 	function publicGetName(){
// 		privateFunction()
// 	}
// 	return {
// 		setName: publicSetName,
// 		greeting: publicVar,
// 		getName: publicGetName
// 	}
// })

// var singleton = function(fn){
// 	var result;
// 	return function(){
// 		return result || (result = fn.apply(this, arguments))
// 	}
// }

// var createMask = singleton(function(){
// 	return document.body.appendChild(document.createElement('div'))
// })

function A(name){
	this.name = name
}
function ObjectFactory(){
	var obj = {}
	Constructor = Array.prototype.shift.call(arguments)//这个地方只拿到了第一个参数值
	obj.__proto__ = typeof Constructor.prototype === 'number' ?
		Object.prototype : Constructor.prototype
	var ret = Constructor.apply(obj, arguments)
	return typeof ret === 'object' ? ret : obj
}
var a = ObjectFactory(A, 'svenzeng');

// function ObjectFactory(){
// 	var obj = {}
// 	console.log("这是arguments",arguments)
// 	Constructor = Array.prototype.shift.call(arguments)
// 	console.log("这是Constructor",Constructor)
// 	console.log('这是Constructor.prototype',Constructor.prototype)
// 	obj.__proto__ = typeof Constructor.prototype === 'number' ?
// 		Object.prototype : Constructor.prototype
// 	console.log("这是obj",obj)
// 	console.log("这是obj.__proto__",obj.__proto__)
// 	var ret = Constructor.apply(obj, arguments)
// 	console.log("这是ret",ret)
// 	return typeof ret === 'object' ? ret : obj
// }



