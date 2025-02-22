# JavaScript基本语法

## 变量
声明变量
```javascript :no-line-numbers
var a = 1;
```
JavaScript有如下基本的变量类型`Number`, `String`, `Boolean`, `Undefined`, `Null`
```javascript :no-line-numbers
var a=1;		//Number
var b="hello";	//String`
var c=true;		//Boolean
var d;			//Undefined`
var e=null;		//Null
```
JavaScript 是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。
```javascript :no-line-numbers
var a=1;
a="hello";
```

## 流程控制

### 条件(if...else 结构)
```javascript :no-line-numbers
if (m === 0) 
{  
	// ...
} 
else if (m === 1) { 
 // ...
} 
else if (m === 2) {  
// ...
} 
else {  // ... }
```
### switch 结构
```javascript :no-line-numbers
switch (fruit) {  
case "banana":
	{
		//...
	}
    break;  
case "apple": 
    break;  
default:
}
```
### 循环
while循环
```javascript :no-line-numbers
while(condition) {
	//do something
}

do {
	//do something
}while(condition)
```
for循环
```javascript :no-line-numbers
for (var i = 0; i < 3; i++) {  
	console.log(i); // 0 1 2 
}
```
和c++一样，`continue`和`break`在循环体中起到同样作用
