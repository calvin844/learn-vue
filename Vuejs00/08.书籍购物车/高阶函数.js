//编程范式：命令式编程/声明式编程
			//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
			//高阶函数：filter/map/reduce
			const nums = [10, 50, 92, 64232, 541, 111, 222, 8, 63]


			//1.需求：取出所有小于100的数字
			let newNums = []
			for (let n of nums) {
				if (n < 100) {
					newNums.push(n)
				}
			}
			console.log(newNums);
			//对数组内元素做单个判断时使用filter
			//filter中的回调函数要求：必须返回一个boolean值
			//当返回ture时，函数内部会自动将这次回调的n加入到新的数组中
			//当返回false时，函数内部会过滤点这次的n
			newNums = nums.filter(function(n) {
				return n < 100
			})
			console.log(newNums)



			//2.需求：将所有小于100的数字进行转化：全部*2
			let new2Nums = []
			for (let n of newNums) {
				new2Nums.push(n * 2)
			}
			console.log(new2Nums);
			//对数组内所有元素做变化时使用map
			//如果需要对数组里面所有元素都进行变化的话，就是用map函数
			new2Nums = newNums.map(function(n) {
				return n * 2
			})
			console.log(new2Nums);



			//3.需求：将所有new2Nums数字相加，得到最终的结果
			let total = 0
			for (let n of new2Nums) {
				total += n
			}
			console.log(total)
			//reduce的作用是对数组中所有的内容进行汇总
			//对数组内元素与前一元素（初始值）做反应时使用reduce
			//参数一为函数，参数二为初始值
			//reduce内参数一函数的preValue为上次的返回值，n为当前数组传入值
			total = new2Nums.reduce(function(preValue, n) {
				return preValue + n
			}, 0)
			//第一次：preValue:0,n:20
			//第二次：preValue:20,n:100
			//第三次：preValue:120,n:184
			console.log(total)

			total = nums.filter(function(n) {
				return n < 100
			}).map(function(n) {
				return n * 2
			}).reduce(function(preValue, n) {
				return preValue + n
			}, 0)
			console.log(total)

			total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
			console.log(total)