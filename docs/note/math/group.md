# 群\(Group\)
---

## 群的定义

群\([Group](https://en.wikipedia.org/wiki/Group_%28mathematics%29)\)是一个对象集合G，并且包含了一种运算○，定义如下

集合$G$和运算$\circ$构成，一起成为群$(G,\circ)$，前提时满足下面的条件

1. **封闭律**：$\forall a,b \in G$，有$a\circ b\in G$ 
2. **结合律**：$\forall a,b,c \in G$，有$a\circ(b\circ c) = (a\circ b)\circ c$
3. **单位元律**：存在唯一元素$e\in G$，使得$\forall a \in G$，均有$a\circ e=e\circ a=a$，元素$e$成为单位元
4. **可逆律**：$\forall a \in G$，存在$\exists a^{-1}\in G$，使得$a \circ a^{-1}=a^{-1}\circ a=e$，其中$a^{-1}$称为$a$的逆元

在表示群$(G,\circ)$时，通常省略运算符号，用$G$表示

## 阿贝尔群

如果群中的元素满足交换律，也就是对所有的$a,b\in G$,均有$a\circ b=b\circ a$,那么该群称为阿贝尔群（[Abelian group](https://en.wikipedia.org/wiki/Abelian_group)\)

## 重复运算的简化

令$G$是运算$\circ$下的一个群，那么对于任一元素$a\in G$，非负整数$i\in\mathbb{N}$, a和自己做i次$\circ$运算,可以表达为$a^{i}\in G$, $a^{i}=a\circ a\circ a\circ \ldots\circ a$，对于加法群，$a^i=a\times i$

## 常用群

1. **整数群**: 整数集$\mathbb{Z}$在加法下的群$(\mathbb{Z},+)$，其中$e=0,a^{-1}=-a$,同样
2. **有理数群**: 可以表达为两个整数的商的数称为有理数群，用$\mathbb{Q}$表示，其他还有自然数群$\mathbb{N}$, 实数群$\mathbb{R}$，复数群$\mathbb{C}$，在加法运算下$\mathbb{Z}\subseteq\mathbb{Q}\subseteq\mathbb{R}\subseteq\mathbb{C}$
3. **整数模n加法群**: 对于任意$n\ge1$，$\mathbb{Z}_n$表示所有整数模n的集合，完整表示为$(\mathbb{Z}_n,+(\mod n))$，单位元$e=0$，逆元$a^{-1}=n-a$
   1. $\mathbb{Z}_n=(\{0,1,2,\ldots,n-1\},+(\mod{n}))$
   2. $\#\mathbb{Z}_n=n$
4. **整数模n乘法群**\([Multiplicative group of integers modulo n](https://en.wikipedia.org/wiki/Multiplicative_group_of_integers_modulo_n)\) : $\mathbb{Z}_n$中所有与n互质的元素构成一个有限乘法群，这里的乘法指模n乘法，用$\mathbb{Z}_n^{*}$表示，例如$\mathbb{Z}_{15}^{*}=(\{1,2,4,7,8,11,13,14\},*(\mod{15}))$
   1. 如果p是质数，那么$\mathbb{Z}_p^{*}=(\{1,2,3,\ldots,p-1\},+(\mod{p})), \#\mathbb{Z}_p^{*}=p-1$
   2. 如果$pq$是质数，$n=pq$，那么根据欧拉定理$\mathbb{Z}_n^{*}$里元素的个数为$\phi(n)=(p-1)(q-1)$
   3. $\mathbb{Z}_{12}^{*}=\{1,5,7,11\}$



