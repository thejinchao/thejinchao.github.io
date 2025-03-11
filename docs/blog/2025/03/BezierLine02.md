---
title: "匀速贝塞尔曲线运动的实现(二)"
tags: 程序 算法
---
# 匀速贝塞尔曲线运动的实现(二)

实际工程应用中最为常见的是三次贝塞尔曲线，也就是下面这种用4个控制点生成的曲线

![](/images/2025/03/bezier_3_big.gif)

三次贝塞尔曲线的一个方便之处在于可以将相邻的两个控制点之间的连线视作控制点的“切线”，进而便于使用者编辑，因此在很多软件中的贝塞尔曲线编辑器都是使用的三次贝塞尔曲线。比如下面这段曲线，其实就是由几段三次贝塞尔曲线组成的。

![](/images/2025/03/bezier01.png)

三次贝塞尔曲线的公式为：
$$
\boldsymbol{B}(t)=(1-t)^3 \boldsymbol{P_0}+3t(1-t)^2 \boldsymbol{P_1}+3(1-t)t^2 \boldsymbol{P_2}+t^3\boldsymbol{P_3}, t\in[0, 1]
$$
虽然仍然可以按照相同的思路去实现匀速运动，但是由于三次贝塞尔曲线的长度计算已经非常复杂，根本无法通过对速度进行积分得到解析解，更别说通过反函数去求解匀速需要的自变量了。 因此在实际计算中，一般也只能通过提前建立一个曲线的长度查询表辅助运算。 这个长度查询表可以利用一般的数值积分的方式建立，比如[辛普森积分法](https://en.wikipedia.org/wiki/Simpson%27s_rule)  
下面是一个JavaScript实现的互动范例，代码可以直接查看这个<a href="/html/bezier02.html" target="_blank">页面</a>的<a href="/js/bezier_cubic.js" target="_blank">JS源码</a>

<iframe width="100%" height="270" frameborder=0 src="/html/bezier02.html?uniformSpeed=1"></iframe>

