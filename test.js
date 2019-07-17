// function check2(arr,n){
// 	for(var i = 0; i <= n-1; i++){
// 		if((Math.abs(arr[i] - arr[n]) == n - i) || (arr[i] == arr[n])){
// 			return false
// 		}
// 	}
// 	return true
// }

// function backdate(n){
// 	var arr = []
// 	var k = 1 //第n的皇后
// 	arr[0] = 1
// 	while(k > 0){
// 		arr[k-1] = arr[k-1] + 1
// 		while((arr[k-1] <= n) && (!check2(arr,k-1))){
// 			arr[k-1] = arr[k-1] + 1
// 		}
// 		if(arr[k-1] <= n){
// 			if(k == n){
// 				console.log(arr)
// 			}else{
// 				k = k + 1
// 				arr[k-1] = 0
// 			}
// 		}else{
// 			k = k - 1
// 		}
// 	}
// }

// backdate(4)

// var i,a
// for(i = 0; i < 10; i++) {
// 	a = document.createElement('a')
// 	a.innerHTML = i + '<br>'
// 	a.addEventListener('click', function (e) {
// 		e.preventDefault()
// 		alert(i)
// 	})
// 	document.body.appendChild(a)
// }

var spiralOrder = function(matrix) {
	if(matrix.length === 0 ){
		return matrix
	}
	if(matrix.length === 1){
		return matrix[0]
	}
	let rowBegin = 0
	let rowEnd = matrix.length - 1
	let colBegin = 0
	let colEnd = matrix[0].length - 1
	let res = []
	while(rowBegin <= rowEnd && colBegin <= colEnd){
		for(let i = colBegin; i <= colEnd; i++){
			res.push(matrix[rowBegin][i])
		}
		++ rowBegin
		for(let i = rowBegin; i <= rowEnd; i++){
			res.push(matrix[i][rowEnd])
		}
		-- colEnd
		if(rowBegin <= rowEnd){
			for(let i = colEnd; i >= colBegin; i--){
				res.push(matrix[rowEnd][i])
			}
		}
		-- rowEnd
		if(colBegin <= colEnd){
			for(let i = rowEnd; i >= rowEnd; i--){
				res.push(matrix[i][colBegin])
			}
		}
		++ colBegin
	}
	return res
};

const test = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(JSON.stringify(spiralOrder(test)))