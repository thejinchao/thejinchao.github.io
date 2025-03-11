---
title: "匀速贝塞尔曲线运动的实现(一)"
tags: 程序 算法
---
# 匀速贝塞尔曲线运动的实现(一)

贝塞尔曲线([Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve))是一种常用的曲线，以最简单的二次贝塞尔曲线为例，通常以如下方式构建，给定二维平面上的固定点$P_0$, $P_1$, $P_2$，用$B(t)$表示该条曲线 
$$
\boldsymbol{B}(t)=(1-t)^2 \boldsymbol{P_0}+2t(1-t) \boldsymbol{P_1}+t^2 \boldsymbol{P_2}, t\in[0, 1]
$$  
用一个动画来演示，可以更加清楚的表明这条曲线的构建过程

![](/images/2025/03/bezier_2_big.gif)

如果$t$变量本身是线性变化的话，这条贝塞尔曲线的生成过程是并不是匀速的，通常都是两头快中间慢。 

<iframe width="100%" height="270" frameborder=0 src="/html/bezier01.html?uniformSpeed=0"></iframe>

可以看出中间的点较为密集，而两边则较为稀疏。
如何得到匀速的贝塞尔曲线运动呢？比如我们在某款游戏中设计了一条贝塞尔曲线的路径，如何实现NPC匀速在这条路径上运动？​ 
首先需要求得$B(t)$相对于$t$的速度公式$s(t)$
$$
s(t)=\sqrt{B_{x}^{'}(t)^2+B_{y}^{'}(t)^2}
$$  
为了简化公式，定义如下变量
$$
\begin{aligned}
\boldsymbol{a}&=\boldsymbol{P_0}-2\boldsymbol{P_1}+\boldsymbol{P_2}\\
\boldsymbol{b}&=2\boldsymbol{P_1}-2\boldsymbol{P_0}\\
A&=4(a_x^2+a_y^2)\\
B&=4(a_xb_x+a_yb_y)\\
C&=b_x^2+b_y^2
\end{aligned}
$$  
计算出$s(t)$可以表达为
$$
s(t)=\sqrt{At^2+Bt+C}
$$  
根据这个公式，求得贝塞尔曲线的长度公式$L(t)$为
$$
\begin{aligned}
L(t)&=\int_0^t\sqrt{Ax^2+Bx+C}dx\\
&=\frac{1}{8A^{3/2}}\biggl(2\sqrt{A}\left[(2At+B)\sqrt{At^2+Bt+C}-B\sqrt{C}\right] \\
&\quad+(B^2-4AC)\left[ln(B+2\sqrt{AC})-ln\left(B+2At+2\sqrt{A}\sqrt{At^2+Bt+C}\right)\right]\biggr)
\end{aligned}
$$  
特别当$t=1.0$时，$L(1.0)$就是这条曲线的总长度。  
设$u$是能够使$L(u)$实现匀速运动的自变量，那么此时曲线长度应该满足随着时间$t$线性增长，也就是
$$
L(u)=L(1.0)t\tag{1}
$$  
也就是$u=L^{-1}(L(1.0)t)$，由于$L(t)$函数非常复杂，直接求其逆函数的解析解几乎不可能，还好我们知道它的导数为$s(t)$，在实际使用中，可以使用[牛顿切线法](https://en.wikipedia.org/wiki/Newton%27s_method)获得$u$的数值解。  
视$u$为未知数，根据公式1有以下方程
$$
F(u)=L(u)-L(1.0)t=0
$$  
根据牛顿切线法，求解$u$的迭代公式为:
$$
\begin{aligned}
u_{n+1}&=u_n-\frac{F(u_n)}{F'(u_n)}\\&=u_n-\frac{L(u_n)-L(1.0)t}{s(u_n)}
\end{aligned}
$$  
由于$t$和$u$相差不大，可以设$u_0=t$来开始求解，以下是修正后的匀速贝塞尔曲线

<iframe width="100%" height="270" frameborder=0 src="/html/bezier01.html?uniformSpeed=1"></iframe>

上面是使用javascript实现的互动曲线，核心代码如下

@[code js :no-line-numbers](@public/js/bezier_quad.js)
