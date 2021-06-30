var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
	return num1 + num2;
}

if (flag) {
	console.log(sum(20, 30))
}

// 1. 导出方式一：
export {
	flag,
	sum
}

// 2. 导出方式二：
export var num1 = 1000;
export var height = 1.88

// 3. 导出函数/类
export function mul(num1, num2) {
	return num1 * num2;
}

// ES6定义类
export class Person {
	run() {
		console.log('在奔跑')
	}
}

// ES5定义类
// function Person(){}

// 4. export default：别人导入时不需要指定命名
// const address = '北京市'
// export{address}
// export const address = '北京市'
// const address = '北京市'
// 一个模块文件最多只能有一个export default
// export default address

export default function(argument) {
	console.log(argument)
}
