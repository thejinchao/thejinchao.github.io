# 数论（二）
---

## 5.二次剩余

### 5.1 二次剩余([Quadratic residue](https://en.wikipedia.org/wiki/Quadratic_residue))和二次非剩余定义
设整数$n\gt1, a\lt n$,如果存在$x\in\mathbb{z}_n$,满足$x^2\equiv a\pmod{n}$,那么称$a$是模$n$的二次剩余,否则$a$就称为模$n$的二次非剩余，用$QR_n$表示模$n$的二次剩余集合，用$QNR_n$表示模$n$的二次非剩余集合

### 5.2 举例
$$
\begin{split}
QR_{11}&=\{0^2,1^2,2^2,3^2, 4^2,5^2,6^2,7^2,8^2,9^2,10^2,11^2,\ldots\}\pmod{11}=\{0,1,3,4,5,9\}\\
QNR_{11}&=\{2,6,7,8,10\}
\end{split}
$$

### 5.3 定理：欧拉准则
针对质数$p$的二次剩余判定，对于质数$p$,任意$x\in\mathbb{Z}_p^{*}$，$x\in QR_p$的充分必要条件为
$$
x^{(p-1)/2}\equiv 1\pmod{p}
$$
$x\in QNR_p$的充分必要条件为
$$
x^{(p-1)/2}\equiv -1\pmod{p}
$$

### 5.4 定理
针对合数$n$的二次剩余判定，$n={p_1}^{a_1}\times{p_1}^{a_1}\times\cdots\times{p_k}^{a_k}$，那么$x\in QR_{n}$的充分必要条件为：
$$
x\pmod{{p_i}^{a_i}}\in QR_{{p_i}^{a_i}}
$$

### 5.5 举例
$$\begin{split}
n&=5\times7 \\
QR_5&=\{0,1,4\} \\
QNR_5&=\{2,3\} \\
QR_7&=\{0,1,2,4\} \\
QNR_7&=\{3,5,6\} \\
QR_{35}&=\{0,1,4,9,11,14,15,16,21,25,29,30\}
\end{split}
$$

### 5.6 定理
对于质数$p$,$\mathbb{Z}_p^*$中有$(p-1)/2$个元素是模$p$的二次剩余，另外$(p-1)/2$个元素是模$p$的二次非剩余

### 5.7 举例
$$
\mathbb{Z}_{11}^{*}=\{1,2,3,4,5,6,7,8,9,10\} \\ 
\{1,3,4,5,9\}\in QR_{11}\\
\{2,6,7,8,10\}\in QNR_{11}\\ 
$$

### 5.8 **定理**
对于两个质数的乘积$n=qp$，那么$\mathbb{Z}_{n}$里恰好有1/4的数，也就是$(p-1)(q-1)/4$个是二次剩余，一般来说，如果合数n有k个质数因子，那么$\mathbb{Z}_{n}^{*}$中的元素中有$1/2^k$是二次剩余

### 5.9 **举例**
$$
\mathbb{Z}_{15}^{*}=\{1,2,4,7,8,11,13,14\} \\ 
\{1,4\}\in QR_{15}\\
\{2,7,8,11,13,14\}\in QNR_{15}\\ 
$$

## 6. 勒让德-雅可比符号

### 6.1 定义
对于任意质数$p\gt2$，和任意$a$，定义勒让德符号([Legendre_symbol](https://en.wikipedia.org/wiki/Legendre_symbol))为$L(a,p)$
$$
L(a,p) =\begin{cases}
1  & \text{if } a\in QR_p \text{ and } a\not\equiv 0 \pmod p\cr
-1 & \text{if } a\in QNR_p \text{ and } a\not\equiv 0 \pmod p\cr
0 & \text{if } a \equiv 0 \pmod p\cr
\end{cases}
$$

### 6.2 定理
勒让德符号计算方法
$$
L(a,p)=a^{(p-1)/2}\pmod{p}, \text{ and }L(a,p)=\in\{-1,0,1\}
$$

### 6.3 定义
对于合数$n\gt1$, 其素因子$n=p_1p_2\cdots p_k$（可重复），任意整数$a$，定义雅可比符号([Jacobi symbol](https://en.wikipedia.org/wiki/Jacobi_symbol))
$$
J(a,n)=L(a,p_1)L(a,p_2)\cdots L(a,p_k)
$$
注意：雅可比符号不能确定一个数$a$是否是对模$n$的二次剩余（除非$n$是质数），比如
$$
J(7,143)=L(7,11)L(7,13)=1
$$
但7并不是143的二次剩余

### 6.4 简写
勒让德符号和雅可比符号也可统一简写为$\left(\frac{a}{p}\right)$ ,或者$(a|p)$


## 7. 模质数的二次平方根

### 7.1 定理
对于质数$p\gt2$，如果$a\in QR_p, a\neq 0$，那么方程
$$
x^2\equiv a\pmod{p}
$$
在有两个解，也就是说a有两个平方根，其中一个在区间$[1,(p-1)/2]$，另一个在区间$[(p+1)/2, p-1]$，而且，其中一个平方根也属于模$p$的二次剩余，称为主平方根(pricipal square root)

### 7.2 举例
对于方程
$$
x^2\equiv9\pmod{11}\\ 
$$
有两个解$x_1=3,x_2=8$, 其中
$$
3\in[1,5], 8\in[6,10], 3\in QR_{11}
$$

### 7.3 算法：求模为质数时的平方根
#### 7.3.1 特殊情况
对于方程$x^2\equiv a\pmod{p},a\in QR_p$
如果$p\equiv 3,7\pmod{8}$, $x\equiv \pm a^{(p+1)/2}\pmod{p}$
如果$p\equiv 5\pmod{8}$, $x\equiv \pm a^{(p+3)/8}\pmod{p}$
如果$p\equiv 3\pmod{4}$, $x\equiv \pm a^{(p+1)/4}\pmod{p}$

#### 7.3.2 
对于一般情况的质数$p$,使用[Tonelli–Shanks](https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm)算法求解

## 8. 模合数的二次平方根

参考: [https://www.johndcook.com/blog/quadratic_congruences/](https://www.johndcook.com/blog/quadratic_congruences/)

### 8.1 **算法** 模2的幂
对于方程$x^2\equiv a\pmod 2$，有解$x\equiv1\pmod2$
方程$x^2\equiv a\pmod{2^2}$，当$a\equiv1\pmod4$时有2个解，$x\equiv\pm1\pmod4$
方程$x^2\equiv a\pmod{2^n},n\geq3,\gcd(a,2)=1$, 当$a\equiv1\pmod8$时有4个解，

### 8.2 **算法** 模质数的幂
求解方程$x^2\equiv a\pmod{p^k},k\gt0, \gcd(a,p)=1$,
方程有解的充分必要条件是$\left(\frac{a}{p}\right)=1$, 也就是a是模p的二次剩余
方程有两个解，使用[Hensel's lemma](https://en.wikipedia.org/wiki/Hensel%27s_lemma)算法
设$x_k$是$x^2\equiv a\pmod{p^k}$的解，有$y_k$存在使得等式$2x_ky_k\equiv1\pmod{p^k}$成立，那么$x_{k+1}=x_k-(x_k^2-a)y_k$是方程$x^2\equiv a\pmod{p^{k+1}}$的解

### 8.3 **举例**
求解方程
$$
x^2\equiv23\pmod{343}
$$
其中$343=7^3$，首先解方程
$$
x_1^2\equiv23\equiv2\pmod{7}, x_1=\pm3
$$
以$x_1=3$为例，使用扩展欧几里得算法求解
$$
2\times3\times y_1\equiv1\pmod{7}, y_1=6 \\
x_2=(x_1-(x_1^2-a)y_1)\pmod{49}=38
$$
同理，求方程
$$
2\times38\times y_2\equiv1\pmod{49}, y_2=20 \\ 
x_3=(38-(38^2-23)\times20)\pmod{343}=87
$$
所以，最终方程的两个解是$\pm87(87,256)$

### 8.4 **算法**
对于合数$n=p_1p_2\cdots p_k$， 整数$a\in QR_n$, 求解方程$x^2\equiv a\pmod{n}$
首先求解模质数方程
$$
x_{p_1}^2\equiv a\pmod{p_1}\\
x_{p_1}^2\equiv a\pmod{p_1}\\
\cdots \\
x_{p_k}^2\equiv a\pmod{p_k}
$$
然后根据中国剩余定理，解方程组
$$
\cases{
x\equiv x_{p_1}\pmod{p_1} \\
x\equiv x_{p_2}\pmod{p_2} \\
\cdots \\
x\equiv x_{p_k}\pmod{p_k}
}
$$
得到$x$，由于每个$x_{p_i}$有两个解，所以最终$x$有$2^k$个解

### 8.5 **举例**
$$
x^2\equiv15\pmod{77}, p=7,q=11
$$
按照模为质数的方法解方程
$$
\begin{cases}
x_p^2\equiv15\equiv 1\pmod{7}  & \text{ } x_p=\pm1(1,6) \\
x_q^2\equiv15\equiv 4\pmod{11}  & \text{ } x_q=\pm9(2,9) 
\end{cases}
$$
按照中国剩余定理，解以下四个方程组
$$
\cases{
x\equiv1\pmod{7} \\
x\equiv2\pmod{11} 
}\cases{
x\equiv1\pmod{7} \\
x\equiv9\pmod{11} 
}\cases{
x\equiv6\pmod{7} \\
x\equiv2\pmod{11} 
}\cases{
x\equiv6\pmod{7} \\
x\equiv9\pmod{11} 
}
$$
得到四个解$x=57,64,13,20$

### 8.6 **定理**
如果不知道$n$的素因子，那么就模$n$的平方根是非常困难的问题




