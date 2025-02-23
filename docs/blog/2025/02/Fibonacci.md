---
title: "斐波那契数列和1/89"
tags: 数学
---
斐波那契数列作为最有名的数列之一广为人之，它的顺序就是 0,1,1,2,3,5,8,13,… 每个数字都是前两个数字的和，这个数列有很多有意思的特征，比和数字“89”的关系。方法很简单，把数列排列成一列，然后每个数都依次右移，最后加在一起形成一个小数，这个数恰好就是1/89。  
``` :no-line-numbers
         0.0
         0.01
         0.001
         0.0002
         0.00003
         0.000005
         0.0000008
         0.00000013
         0.000000021
         0.0000000034
             ...
        ----------------
         0.01123595505618...  =  1/89
```
这个是很容易证明的，我们知道Fibonacci数列的一般形式如下  
$$
\displaystyle{a_n=\frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^n – \left(\frac{1-\sqrt{5}}{2}\right)^n \right]}\tag{1}
$$  
设$\alpha=(1+\sqrt{5})/2, \beta=(1-\sqrt{5})/2$，那么  
$$
\displaystyle{a_n=\dfrac{1}{\sqrt{5}}(\alpha^n-\beta^n)}\tag{2}
$$  
对于最开始提到的那个小数，可以描述为下面的方式  
$$
\displaystyle{S=\dfrac{a_0}{10^1}+\dfrac{a_1}{10^2}+\dfrac{a_2}{10^3}+\cdots=\dfrac{1}{10}\sum\limits_{n=0}^{\infty}\dfrac{a_n}{10^n}}\tag{3}
$$  
把公式2带入公式3，可以得到  
$$
\displaystyle{S=\dfrac{1}{10}\sum\limits_{n=0}^{\infty}\dfrac{1}{\sqrt{5}}\dfrac{1}{10^n}(\alpha^n-\beta^n)=\dfrac{1}{10\sqrt{5}}\left[\sum\limits_{n=0}^{\infty}(\dfrac{\alpha}{10})^n-\sum\limits_{n=0}^{\infty}(\dfrac{\beta}{10})^n \right]}\tag{4}
$$  
由于$\alpha$和$\beta$都小于10，根据等比数列的求和计算方法，可以得到  
$$
S=\dfrac{1}{10\sqrt{5}}\left[\dfrac{1}{1-\alpha/10} – \dfrac{1}{1-\beta/10}\right]=\dfrac{1}{\sqrt{5}}\dfrac{\alpha-\beta}{(10-\alpha)(10-\beta)} =\dfrac{1}{89} \tag{5}
$$  
