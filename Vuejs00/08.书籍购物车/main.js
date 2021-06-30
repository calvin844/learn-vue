			const app = new Vue({
				el: '#app',
				data: {
					book: [{
							id: 1,
							name: '算法导论',
							push_date: '2006-9',
							price: 85.00,
							num: 1
						},
						{
							id: 2,
							name: 'UNIX编程艺术',
							push_date: '2006-2',
							price: 59.00,
							num: 1
						},
						{
							id: 3,
							name: '编程珠玑',
							push_date: '2008-10',
							price: 39.00,
							num: 1
						},
						{
							id: 4,
							name: '代码大全',
							push_date: '2006-3',
							price: 128.00,
							num: 1
						}
					]
				},
				methods: {
					getFinalPrice(price) {
						return '￥' + price.toFixed(2);
					},
					getTotal() {
						let total = 0
						return this.book.reduce(function(preValue,book){
							return preValue+(book.price * book.num)
							this.total_num += book.num
						},0)
					},
					add(index) {
						this.book[index].num++;
						this.getTotal()
					},
					minus(index) {
						this.book[index].num--;
						this.getTotal()
					},
					remove(index) {
						this.book[index].num = 0;
						this.getTotal()
					}
				},
				computed: {
					getTotalNum() {
						return this.book.reduce(function(preValue,book){
							return preValue+book.num
						},0)
					}
				},
				//过滤器
				filters: {
					showPrice(price) {
						return '￥' + price.toFixed(2);
					}
				},

			})
			