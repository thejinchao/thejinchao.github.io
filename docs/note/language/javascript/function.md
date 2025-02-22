# JavaScript函数

## 基本函数定义
```javascript :no-line-numbers
function greeter(name)
{
	console.log("Hello, " + name);
}
```
调用函数`greeter('Alice');`

## 箭头方式定义函数
```javascript :no-line-numbers
funcGreeter = (name) => {
	console.log("Hello, " + name);
}
```
如果只有一个参数的函数，可以省掉括号
```javascript :no-line-numbers
name => {
	console.log("Hello, " + name);
}
```
如果函数体只包含一个返回语句，可以省略大括号
```javascript :no-line-numbers
(a, b) => {
	return a+b;
}

//可以写成
(a, b) => a+b;
```
