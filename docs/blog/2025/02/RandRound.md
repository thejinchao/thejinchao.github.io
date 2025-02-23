---
title: "如何生成一个随机的圆形"
tags:  数学 概率 程序 算法
---
# 如何生成一个随机的圆形

最近在工作中遇到这么一个问题：  
>在游戏场景中有一个怪物生成点，这个生长点产生的怪物均匀分布在半径为R的圆形内，这个随机算法应该如何生成？看起来很简单，随手写了一个：

```cpp :no-line-numbers
#define RAND  ((float)rand()/RAND_MAX)
 
void get_random_pos(float center_x, float center_y, float radius, float&x, float& y)
{
    float u = RAND*radius;
    float v = RAND*2*PI;
    
    x = center_x + u*cos(v);
    y = center_y + u*sin(v);
}
```

但写的过程中，直觉告诉我，这么写肯定是有问题的，试想，如果以北京为例，如果北京的人口是均匀分布的，那么如果让所有人都报出自己家和天安门的距离，那么这些数据肯定不是均匀，因为居住在五环附近的人数肯定要大于居住在二环附近的人数，于是用Mathamatica实验一下：  

![](/images/2015/05/rnd_01.gif)

果然，这么写是不对的，网上查了一下，这个问题还真是有人研究过，说应该把所获得的随机数开平方一下，实验一下：  

![](/images/2015/05/rnd_02.gif)

但是，这个开平方背后的数学原理究竟是什么呢？抽空翻了下概率书，原来，其中的道理并不复杂，这里涉及到概率里的一个基本概念，累计分布函数（Cumulative distribution function），简称CFD，它的定义如下：
设有一个随机变量$X$，它的取值范围是从负无穷到正无穷，如果把它的值小于$x$的概率表达为一个函数$F(x)$，那么这个函数就称为$X$的累计分布函数  
$$
\displaystyle{F(x)=P(X\leq x)}
$$  
以最为常见的均匀分布概率为例，设均匀分布的随机变量$X$的取值范围是$[a,b]$，那么它的累计分布函数以及函数图像是  
<div align="center">
<table class="invisibletable">
<tbody>
<tr>
<td>

$$ 
F(x)=\begin{cases} 
0 &  {x < a} \\
\frac{x-a}{b-a} & {a\leq  x < b}\\
1 & {b\leq x}
\end{cases}
$$

</td>
<td>
<img src="/images/2015/05/rnd_03.gif">
</td>
</tr><tr>
</tr></tbody>
</table>
</div>

对于一个累计分布函数，符合以下规律  
 * $0\le F(x)\le 1$
 * $F(x)$单调递增
 * $\lim\limits_{x \to -\infty}{ F(x)=0} , \lim\limits_{x \to +\infty}{ F(x)=1}$  

回到我们的问题中，假设怪物产生的范围的半径为$R$，随机产生一只怪物时，它和中心的距离是一个随机变量$X$，显然，对于怪物均匀分布的情况，$X$落在半径为$x$的圆内的概率，等于半径为$x$小圆和半径为$X$的大圆的面积之比  

![](/images/2015/05/rnd_04.png)

也就是说  
$$
F(x)=P(X\leq x)=x^2/R^2
$$ 
现在我们手头上只有均匀概率的随机数产生器，要想产生这么个随机数需要用到一个很巧妙的运算，就是反函数。设随机变量$u$是一个均匀分布在$[0,1]$之间的随机数，另一个随机变量$X=F−1(u)$,现在我们需要证明X的累计分布函数是$F(x)$  
证明如下  
$$
\begin{aligned} 
P(X\le x) & = P(F^{-1}(u)\le x) \\ 
 & = P(u\le F(x)) \\ 
 & = F(x) 
\end{aligned}
$$  
初看起来有点复杂，其实在下面的图上可以很直观的理解这个过程：  

![](/images/2015/05/rnd_07.png)

这是利用了$F(x)$是单调递增函数的特性，在我们的问题中，$F(x)$的反函数可以表达为  
$$
F^{-1}(u)=R\sqrt{u}
$$  
所以最终的算法可以写成  
```cpp :no-line-numbers
#define RAND  ((float)rand()/RAND_MAX)
 
void get_random_pos(float center_x, float center_y, float radius, float&x, float& y)
{
    float u = sqrt(RAND)*radius;
    float v = RAND*2*PI;
    
    x = center_x + u*cos(v);
    y = center_y + u*sin(v);
}
```