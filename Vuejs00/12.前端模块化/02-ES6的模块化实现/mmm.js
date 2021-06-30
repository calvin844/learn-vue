// 1. 导入对象中定义的变量
import {flag,sum} from "./aaa.js"
if(flag){
	console.log('哈哈哈')
}

// 2. 直接导入export定义的变量
import {num1, height} from "./aaa.js"

console.log(num1)
console.log(height)

// 3. 导入export的function
import {mul,Person} from "./aaa.js"

console.log(mul(30,50))

var P = new Person;
P.run()

// 4. 导入export default中的内容
import addr from "./aaa.js"

addr('你好啊')

// 5. 统一全部导入，必须使用as字眼把导入的内容作为对象内容使用
// import {flag,num,num1,height,Person,mul,sum} from "./aaa.js";
import * as aaa from "./aaa.js"
console.log(aaa.flag)
console.log(aaa.height)