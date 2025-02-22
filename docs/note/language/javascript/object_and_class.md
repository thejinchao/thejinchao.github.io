# 对象和类

## 对象
JavaScript中的对象(object)用于存储各种键值集合和更复杂的实体。例如下面的对象
```javascript :no-line-numbers
var person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	isStudent: false,
	greet: function() {
		console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
	}
	print_name() {
		console.log(lastName + ' ' + firstName) 
	}
};
```
如何使用对象
```javascript :no-line-numbers
console.log(person.firstName);  // 输出: John
person.greet();  // 输出: Hello, I am John Doe
```

## 类
javascript中的类(class)是用于创建对象的模板，和c++中的类相似，但是需要在`constructor()`函数中声明类成员
```javascript :no-line-numbers
class User {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log("Hello, I'm " + this.name) 
	}
}
```
使用方法
```javascript :no-line-numbers
var user = new User("Alice")
user.greet()
```