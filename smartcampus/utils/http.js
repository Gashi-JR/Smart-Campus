const url_all = {
	'DEV': 'http://10.34.57.117:8080', // 开发
	'PRO': 'http://10.33.50.45:8080', // 生产
}

let BASEURL = url_all['DEV'] // 调整当前环境

/*
 * 全局请求封装
 * @param path 请求路径
 * @param method 请求类型(GET/POST/DELETE等)
 * @oaram data 请求体数据
 * @param loading 请求未完成是是否显示加载中，默认为true
 */
export default (path, method, data = {}, headers = {}) => {
	// 获取存储token
	const token = uni.getStorageSync("token");

	//根据token进行调用函数
	if (token != '') {
		return tokenRequest(path, method, data, headers, token)
	} else {
		return noTokenRequest(path, method, data, headers)
	}
};

// 无token时发送请求函数
function noTokenRequest(path, method, data = {}, headers = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + path,
			method: method,
			data,
			header: headers,
			success(response) {
				// console.log('%c响应拦截：', ' background:green', response);
				/* if (response.data.code === 3001) {
					// logout()
				} */
				/* if (response.data.code !== 20) {
					uni.showToast({
						icon: "none",
						duration: 4000,
						title: response.data.msg
					});
				} */
				console.log(response.data)
				resolve(response.data);
			},
			fail(err) {
				// uni.showToast({
				// 	icon: "none",
				// 	title: '服务响应失败'
				// });
				console.error(err);
				reject(err);
			},
			complete() {
				//	uni.hideLoading();
			}
		});
	});
}


// 有token时发送请求函数
function tokenRequest(path, method, data, headers, token) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + path,
			method: method,
			data,
			header: {
				...headers,
				"token": token
			},
			success(response) {
				console.log('%c响应拦截：', ' background:green', response);
				if (response.data.code === 40101) {
					// logout()
				}
				console.log(response.data)
				resolve(response.data);
			},
			fail(err) {
				// uni.showToast({
				// 	icon: "none",
				// 	title: '服务响应失败'
				// });
				console.error(err);
				reject(err);
			},
			complete() {
				//	uni.hideLoading();
			}
		});
	});
}