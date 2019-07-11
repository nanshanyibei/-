const myModule = (function(){
	const privateVariable = 'Hello World'
	function privateMethod(){
		console.log(privateVariable)
	}
	return {
		publicMethod: function(){
			privateMethod()
		}
	}
})()

myModule.publicMethod()

const myModule = {
	publicMethod: function(){
		privateMethod()
	}
}

const myRevealingModule = (function(){
	let privateVar = 'Peter'
	const publicVar = 'Hello World'
	function privateFunction(){
		console.log("Name: " + privateVar)
	}
	function publicSetName(name){
		privateVar = name
	}
	function publicGetName(){
		privateFunction()
	}
	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	}
})

