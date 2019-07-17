//冒泡排序
function bubble_sort(arr){
	let swap;
	for(let i = 0; i < arr.length; i ++){
		for(let j = 0; j < arr.length - i - 1; j ++){
			if(arr[j] > arr[j + 1]){
				swap = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = swap
			}
		}
	}
}
//冒泡方法改进
//记录下最后一次交换的位置，之后的数字均已排好序
function bubble_sort_enhance(arr){
	let i = arr.length - 1
	while(i > 0){
		let pos = 0
		for(let j = 0; j < i; j ++){
			if(arr[j] > arr[j + 1]){
				pos = j
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
		i = pos
	}
	return arr
}

//选择排序
//在未排序序列中找到最小（大）元素，粗放在排序序列的起始位置
//从剩余未排序元素中继续寻找最小（大）元素，放到已排序队列末尾
//以此类推，直到所有元素均排序完毕
function selectionSort(arr){
	const len = arr.length
	let minIndex, temp
	for(let i = 0; i < len - 1; i ++){
		minIndex = i
		for(let j = i + 1; j < len; j ++){
			if(arr[j] < arr[minIndex]){
				minIndex = j
			}
		}
		temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}
	return arr
}

//插入排序1
//通过构建有序序列，对于未排序数据，在已排序序列中从后往前扫描
//找到相应位置并插入
function insertionSort(arr){
	for(let j = 1; j < arr.length; j ++){
		const temp = arr[j]
		let i = j - 1
		while(arr[i] > temp && i >= 0){
			arr[i + 1] = arr[i --]
		}
		arr[i + 1] = temp
	}
	return arr
}
//插入排序2--二分法插入排序
//从第一个元素开始，该元素可以认为已经被排序取出下一个元素，
//在已经排序的元素序列中二分查找到第一个比他大的数的位置，插入
function binaryInsertionSort(arr){
	for(var i = 0; i < arr.length - 1; i ++){
		var left = 0, right = i - 1
		var temp = arr[i]
		while(left <= right){
			var middle = parseInt((left + right) / 2)
			if(temp > arr[middle]){
				left = middle + 1
			} else {
				right = middle - 1
			}
		}
		for(var j = i; j >= left; j --){
			arr[j] = arr[j - 1]
		}
		arr[left] = temp
	}
	return arr;
}

//希尔排序
//简单插入排序的改进版，希尔排序可以动态的定义间隔序列
//先将这个待排序的记录序列分割成若干个子序列分别进行直接插入排序
function shellSort(arr){
	var gap = arr.length
	while(gap > 1){
		gap = parseInt(gap / 2)
		for(var j = gap; j < arr.length; j ++){
			var temp = arr[j]
			var i = j - gap
			while(arr[i] > temp && i >= 0){
				arr[i + gap] = arr[i]
				i = i - gap
			}
			arr[i + gap] = temp
		}
	}
	return arr
}

//归并排序
//将已有序的子序列合并，得到完全有序的序列
function mergeSort(arr){
	var len = arr.length
	if(len < 2){
		return arr
	}
	var middle = parseInt(len / 2)
	var left = arr.slice(0, middle), right = arr.slice(middle)
	return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
	var result = []
	while(left.length && right.length){
		if(left[0] < right[0]){
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	if(left.length === 0){
		result = result.concat(right)
	} else if(right.length === 0){
		result = result.concat(left)
	}
	return result
}

//快速排序
//通过一趟排序将待排记录分割成独立的两个部分，
//其中一部分记录的关键字均比另一部分记录的关键字小
//分别对这两部分记录继续排序，达到整个序列有序
function quickSort(arr){
	var len = arr.length
	if(len <= 2){
		return arr
	}
	var middle = parseInt(len / 2)
	var base = arr[middle]
	var left = [], right = []
	var i =0
	while(i < len){
		if(arr[i] < base){
			left.push(arr[i])
		} else if(arr[i] > base){
			right.push(arr[i])
		}
		i = i + 1
	}
	right.unshift(base)
	return quickSort(left).concat(quickSort(right))
}

//堆排序
//利用堆这个数据结构设计的算法，即子节点的键值或索引总是小于（大于它的父节点
function headAdjust(elements, pos, len){
	var swap = elements[pos]
	var child = pos * 2 + 1
	while(child < len){
		if(child + 1 < len && elements[child] < elements[child + 1]){
			child += 1
		}
		if(elements[pos] < elements[child]){
			elements[pos] = elements[child]
			pos = child
			child = pos * 2 + 1
		} else {
			break
		}
		elements[pos] = swap
	}
}
function buildHeap(elements){
	for(var i = elements.length / 2; i >= 0; i --){
		headAdjust(elements, i, elements.length)
	}
}
function sort(elements){
	buildHeap(elements)
	for(var i = elements.length - 1; i > 0; i --){
		var swap = elements[i]
		elements[i] = elements[0]
		elements[0] = swap
		headAdjust(elements, 0, i)
	}
}

//计数排序
//找出最大值max和最小值min，之后构建length为max-min的数组
//每次计算该值与最小值的差，此时的index为该值
function countingSort(arr, maxValue){
	var bucket = new Array(maxValue + 1),
			sortedIndex = 0,
			arrLen = arr.length
			bucketLen = maxValue + 1
	for(var i = 0; i < arrLen; i ++){
		if(!bucket[arr[i]]){
			bucket[arr[i]] = 0
		}
		bucket[arr[i]] ++
	}
	for(var j = 0; j < bucketLen; j ++){
		while(bucket[j] > 0){
			arr[sortedIndex ++] = j
			bucket[j] --
		}
	}
	return arr
}
























