/* // 取得body元素
var body = document.querySelector('body');

// 取得 ID 为 ‘myDiv’ 的元素
var myDiv = document.querySelector('#myDiv');

// 取得类为 ‘selected’ 的第一个元素
var selected = document.querySelector('.selected');

// 取得类为 ‘button’ 的第一个图像元素
var img = document.querySelector('img.button');

console.log(body, myDiv, selected, img);

 */

// matchesSelector() 方法

function matchesSelector(element, selector) {
	if (element.matchesSelector) {
		return element.matchesSelector(selector);
	} else if (element.msMatchesSelector) {
		return element.msMatchesSelector(selector);
	} else if (element.mozMatchesSelector) {
		return element.mozMatchesSelector(selector);
	} else if (element.webkitMatchesSelector) {
		return element.webkitMatchesSelector(selector);
	} else {
		throw new Error('Not supported.');
	}
}

if (matchesSelector(document.body, 'body.page1')) {
	// 执行操作
}