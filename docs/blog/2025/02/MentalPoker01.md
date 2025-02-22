---
title: "从抛币协议到智能合约(一)"
tags: 数学 加密
next:
  text: 从抛币协议到智能合约(二)
  link: MentalPoker02.md
---
# 从抛币协议到智能合约(一)

最近区块链非常火，也有人在讨论游戏和区块链的结合，就目前来看，已有的区块链游戏无非就是两种，一种就是类似于[CryptoKitties](https://www.cryptokitties.co/)这样的虚拟资产游戏，还有就是博彩类的游戏，比如[中本聪筛子](https://www.satoshidice.com/)，[vDice](https://www.vdice.io/)等。  

![](/images/2018/04/vdice_01.png "这是我当初花了300刀买的一只CryptoKitties，编号448412")

严格来说，这些都不算是真正的游戏，在我看来，区块链游戏起码要做到真正的去中心化，能够实现玩家和玩家之间的互动，并且能提供玩家最基本的游戏乐趣才行。而目前所谓的区块链游戏还远远无法满足这几点，而且现在的区块链被笼罩在非常不好的资本炒作氛围中，所谓的区块链创业大部分都是挂羊头卖狗肉而已。
从技术上讲，游戏的去中心化并不是一件新鲜事，比如加密领域的“抛币协议”可以算是这方面的老祖宗了。早在1981年，数学家Manuel Blum就曾经发表了一篇著名的论文《Coin Flipping by Telephone: A Protocol for Solving Impossible Problems.》，在开篇就提出一个有趣的情景：
![](/images/2018/04/vdice_02.png)

简单的描述就是两个人想通过抛硬币来决定解决他们之间的分歧，那么如何通过电话或者互联网来实现这个行为呢？很显然让其中一个人来随机是不行的，因为他们互不信任，两个人合作呢？比如说双方各自从0和1之间随机一个值，然后把两个值异或作为最终的结果？也不行，比如说Alice随机出0或者1，她把这个数告诉Bob，那么Bob就有机会根据Alice随机到的值操纵最后结果。所以想得到真正公平的结果，抛币协议必须能够满足“抛币入井”的特性，如同把硬币扔进井中，双方只可以去观看而不能改变结果。  
一种简单的方法是利用单向函数，比如首先让Alice准备一个随机字符串，其中包含”head”或者”tail”作为抛币结果, 然后把这个字符串的hash值给Bob，让Bob猜是head还是tail，最后Alice把原始的字符串公布以验证。这个协议利用了hash函数是单向函数的特性，由于Bob只收到了hash值，他无法判断原始字符串，所以无法作弊，而Alice如果想抵赖，就需要能够操纵这个hash函数，重新构造出一个字符串使其hash值和发给Bob的那个一摸一样，这也是不可能的（或者说很困难的），在WikiPedia给出了一种这个协议的具体实现。  

![](/images/2018/04/vdice_03.png)

但Blum给出的协议并不是这样，原因是使用hash函数并不“严肃”，因为很难对其进行严格的安全性分析，尽管Bob无法从hash值反推回原来的字符串，但他很可能发现一些蛛丝马迹，而且靠其中一方直接随机出抛币结果也不公平，因为这需要依赖很高质量且双方都信任的随机函数，Blum的抛币协议可以简单的描述为下面的过程：
 1. 首先Bob准备一个Blum整数$n=pq$，并且把n发送给Alice
 2. Alice随机一个小于$n$且和$n$互质的数$x$，计算$y=x^2\bmod n$，然后把$y$发送给Bob
 3. Bob猜$x$的雅可比符号$\left(x\mid n\right)$是1还是-1，并且把猜测的结果发送给Alice
 4. Alice向Bob出示$x$
 5. Bob且向Alice出示$p,q$
 6. 双方根据Bob是否猜对来决定硬币是正面还是反面，并且检测对方在这个过程中有没有作弊。  

这个协议利了数论中的一些基本知识，因为并不算复杂，这里先简单介绍一下：

----
#### 二次剩余([Quadratic residue](https://en.wikipedia.org/wiki/Quadratic_residue))  
> 对于整数$n$和$q$，如果存在整数$x$满足$x^2\equiv q\pmod{n}$，那么就称$q$是$n$的二次剩余

比如2就是7的一个二次剩余，因为$3^2\equiv2\pmod7$，但5就不是7的二次剩余，因为找不到一个数满足$x^2\equiv5\pmod7$，这种情况称5是7的二次非剩余。

----
#### 勒让德-雅可比符号  
> 设$p$是一个大于2的质数，$a$是一正整数，那么定义勒让德符号([Legendre Symbol](https://en.wikipedia.org/wiki/Legendre_symbol))如下:
> $$\displaystyle{\left(\frac{a}{p}\right) = \cases{1 & \text{$a$是$p$的二次剩余} \\-1 & \text{$a$是$p$的二次非剩余} \\0 & \text{$a$是$p$的倍数} }}\tag{1}$$  

勒让德符号一般用$\left(\frac{a}{p}\right)$或者$(a\mid p)$表示，可以直接用欧拉准则([Euler’s criterion](https://en.wikipedia.org/wiki/Euler%27s_criterion))计算  
$$
\displaystyle{\left(\frac{a}{p}\right)=a^{(p-1)/2}\pmod{p}}\tag{2}
$$  
比如

$$
(9\mid 13)=9^{(13-1)/2}\pmod{13}=1
$$  

所以9是13的二次剩余。 而

$$
(10\mid 13)=10^{(13-1)/2}\pmod{13}=-1
$$  

所以10是13的二次非剩余, 这是由于在同余系统中$p-1\equiv -1\pmod{p}$  

将勒让德符号扩展到合数$n$就是雅可比符号([Jacobi symbol](https://en.wikipedia.org/wiki/Jacobi_symbol))，同样用$\left(\frac{a}{n}\right)$或者$(a\mid n)$表示。

> 合数$n$可以表达成多个质因子的乘积，也就是$n=p_1p_2\cdots p_k$，那么定义雅可比符号
> $$\displaystyle\left(\frac{a}{n}\right)=\left(\frac{a}{p_1}\right)\left(\frac{a}{p_2}\right)\cdots \left(\frac{a}{p_k}\right)\tag{3}$$  

比如  

$$
\displaystyle{\left(\frac{7}{143}\right)=\left(\frac{7}{11}\right)\left(\frac{7}{13}\right)=(-1)(-1)=1}
$$  

需要注意的是，对于合数，雅可比符号并不能判断二次剩余，比如上面的例子中，尽管$(7|143)=1$，但7并不是143的二次剩余

----
#### Blum整数([Blum Integer](https://en.wikipedia.org/wiki/Blum_integer))
> 如果有质数$p,q$，满足$p\equiv3\pmod4,q\equiv3\pmod4$,那么称它们的乘积$pq$为Blum整数

比如21(3×7)，33(3×11)，133(7×19)都是Blum整数，Blum整数在加密领域用途非常广泛，因为它有很多有用的特性，比如说$a$是Blum整数$n$的一个二次剩余，那么考察下面的二次剩余方程

$$
x^2\equiv a\pmod{n}
$$  

首先这个方程有且只有4个解，如果知道n的两个质因子$pq$的情况下，可以在常数时间内计算出这四个解（一般数论书中都有求解二次剩余方程的方法，这里不再详述），但如果不知道质因子$pq$的话，解这个方程非常困难，难度和分解$n$的难度相等。  
对于Blum整数$n$，这4个解的雅可比符号恰好有两个满足$(x\mid n)=1$，另两个解满足$(x\mid n)=-1$，比如方程$x^2\equiv4\pmod{21}$，四个解分别是2,19,5,16，其中(2|21)=(19|21)=-1，而(5|21)=(16|21)=1  

----
回到Blum抛币协议，当知道Blum整数这些特性后，理解这个协议就简单了，这个协议中一共有$p,q,n,x,y$这几个数，在完成第3步（也就是硬币入井)的时候，Alice知道$n,x,y$，Bob知道$p,q,n,y$  
对于Bob来说，由于他知道$n$的两个质因子，所以他能解出$y\equiv x^2 \pmod{n}$的4个解，但正如我们上面的分析，这4个解中有两个的雅可比符号是1，另两个是-1，所以他猜对的概率是50%，这也保证了这个协议产生的随机数一定是均匀的。  
那么Alice有可能作弊吗？如果她想作弊，那么她需要准备两个$x$，满足  

$$
x_1^2 \equiv x_2^2\pmod{n}
$$  

并且  

$$
(x_1\mid n)\neq(x_2\mid n)
$$  

那么根据Blum整数的其他特性，可以推导出  

$$
x_1^2-x_2^2=(x_1+x_2)(x_1-x_2)\equiv0\pmod{n}
$$  

这相当于分解了$n$，而大数分解又是著名难题，所以Alice也不可能作弊
