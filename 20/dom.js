function showAlert() {
    alert('你点到我了');
}
// 当窗体加载完毕的时候
// 1 有一个触发机制，当什么什么的时候，执行什么代码
//  这个出发机制，其实被称为“浏览器事件”

// 2 当什么什么事情发生以后，执行什么什么代码
// 请注意专业名词“回调函数”
window.onload = function() {
    // 把script标签内部的代码，单独建立一个js文档，并保存
    document.getElementById('chText').innerText = '我是替换后的文字';
}