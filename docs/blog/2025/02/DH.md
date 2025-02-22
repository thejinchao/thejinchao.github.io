---
title: "一个简单的DH密钥协商算法的实现"
tags: 加密 程序 算法
---
# 一个简单的DH密钥协商算法的实现

密码的管理可以说是加密体系中最为性命攸关的问题，在计算机发明之前，加密方法只能使用简单的移位、查表等简单的方法，这种级别的加密算法，基本上都无法逃脱被破解的命运，比如二战中德国发明的“英格玛”可以说是前计算机时代人类所发明的最为复杂的加密方法了，但以图灵为首的盟军科学家们，仍然可以用粗暴的暴力破解法硬生生从密文中破解出原文出来。  
进入计算机时代后，加密算法的复杂度有了质的飞跃，相对应的破解难度也不断加大，到了如今，像AES这样变态的加密算法，已经比英格玛不知复杂了多少个数量级，在没有密码的情况下，想直接从密文中破解出明文，即使图灵重生也全无可能了。于是，密钥本身的管理变成了加密环节中最脆弱的环节，“如何安全的把密码告诉别人”成了一个难题，比如，如果你需要发给同事一封包含加密附件的邮件，一般都会把密码放在另外一封邮件中发送，或者用其他方式告诉他，尽管这样做也并不安全，但总比那种傻乎乎的把密码和加密附件直接放在一起强多了。  
1976年，美国的两位数学家[Whitfield Diffie](http://en.wikipedia.org/wiki/Whitfield_Diffie)和[Martin Hellman](http://en.wikipedia.org/wiki/Martin_Hellman)率先发表了一种解决该密钥传输的方法，因此这种方法被大家称为[Diffie–Hellman key exchange](http://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)算法，这种算法提出这么一个做法：“在加密通讯之前双方各自生成密码的一部分，然后互换后合成起来，作为最终的密码”。这就是密钥协商，维基百科上使用了一个很有趣的比喻，就是颜料的混合：  
设想这样一个场景，Alice(A)和Bob(B)，他们想在不见面的情况下秘密约定出一种颜色，但他们互相沟通的信息都会被公开，应该怎么办呢？
<table class="gridtable" style="width:100%; text-align:center;border-collapse:collapse;">
<tbody>
<tr>
<th rowspan="2" width="20%"></th>
<th colspan="2" style="text-align:center">Alice</th>
<th rowspan="2" width="15%"></th>
<th colspan="2" style="text-align:center">Bob</th>
</tr>
<tr>
<th style="text-align:center">私密信息</th>
<th style="text-align:center">公开信息</th>
<th style="text-align:center">公开信息</th>
<th style="text-align:center">私密信息</th>
</tr>
<tr>
<td style="vertical-align:middle">A和B首先约定好公开的一种颜色，比如黄色</td>
<td></td>
<td><img src="/images/2015/05/dh_01.png"></td>
<td></td>
<td><img src="/images/2015/05/dh_01.png"></td>
<td></td>
</tr>
<tr>
<td style="vertical-align:middle">A，B各自挑选出一种私密的颜色，比如橙色和兰色</td>
<td><img src="/images/2015/05/dh_02.png"></td>
<td></td>
<td></td>
<td></td>
<td><img src="/images/2015/05/dh_03.png"></td>
</tr>
<tr>
<td style="vertical-align:middle">A，B各自将两种颜色混合起来</td>
<td><img src="/images/2015/05/dh_01_add_02.png" ></td>
<td><img src="/images/2015/05/dh_04.png"></td>
<td></td>
<td><img src="/images/2015/05/dh_05.png"></td>
<td><img src="/images/2015/05/dh_01_add_03.png"></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td><img src="/images/2015/05/dh_07.png"></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="vertical-align:middle">双方交换混合后的颜色</td>
<td></td>
<td><img src="/images/2015/05/dh_05.png" ></td>
<td></td>
<td><img src="/images/2015/05/dh_04.png" ></td>
<td></td>
</tr>
<tr>
<td style="vertical-align:middle">A，B各自将自己的私密颜色再次混入得到的颜色中</td>
<td><img src="/images/2015/05/dh_05_add_02.png"></td>
<td></td>
<td></td>
<td></td>
<td><img src="/images/2015/05/dh_04_add_03.png"></td>
</tr>
<tr>
<td style="vertical-align:middle">现在A，B得到了一种相同的颜色，这种颜色是由一份黄色、一份橙色、一份兰色混合而来，但外界无法得知</td>
<td><img src="/images/2015/05/dh_08.png"></td>
<td></td>
<td></td>
<td></td>
<td><img src="/images/2015/05/dh_08.png"></td>
</tr>
</tbody>
</table>

秘密在于，颜色混合是一种“不可逆”的操作，当双方交换颜色时，尽管我们知道他们交换的颜色都是由一份黄色和另一份其他颜色混合得到的，但我们还是无法或者很难得到他们的私密颜色。而DH秘钥交换的原理非常相似，也是利用了数学上的一个“不可逆”的运算，就是离散对数（Discrete logarithm）  
乘方得逆运算称为对数运算，比如已知$7^x=49$,那么可知$x=log_7 49=2$, 对数运算非常容易，即使在数字很大的时候是，但如果是下面的情况  
$$
7^x\bmod 13=8 
$$  
求X的过程称为“离散对数”，就不那么容易了，在数字很大时几乎是一个不可能的运算，而DH秘钥交换就是利用了这种离散对数计算非常困难的特性来设计的。公式里的mod是取模运算，取模运算有几条基本的定律如下  
$$
 \begin{aligned} 
(a+b)\bmod P &= (a\bmod P + b\bmod P)\bmod P \\ 
(a*b)\bmod P &= (a\bmod P * b\bmod P)\bmod P \\ 
(a^b)\bmod P &= ((a\bmod P)^b)\bmod P 
\end{aligned}
$$  
根据上面的公式，可以推导出一个非常重要的公式  
$$
(G^{a*b})\bmod P = (G^a\bmod P)^b\bmod P = (G^b\bmod P)^a\bmod P
$$  
根据这个公式，我们可以向上面交换颜色那样设计出一个秘密交换数字的流程出来  
<table class="gridtable" style="width:100%; text-align:center;border-collapse:collapse;">
<tbody>
<tr>
<th rowspan="2" width="40%"></th>
<th colspan="2" style="text-align:center">Alice</th>
<th rowspan="2"></th>
<th colspan="2" style="text-align:center">Bob</th>
</tr>
<tr>
<th style="text-align:center">私密信息</th>
<th style="text-align:center">公开信息</th>
<th style="text-align:center">公开信息</th>
<th style="text-align:center">私密信息</th>
</tr>
<tr>
<td style="vertical-align:middle">A和B首先约定两个公开的质数p和g</td>
<td></td>
<td>

$p,g$

</td>
<td></td>
<td>

$p,g$

</td>
<td></td>
</tr>
<tr>
<td style="vertical-align:middle">A和B各自随机产生两个数a,b，作为自己的私钥</td>
<td>

$a$

</td>
<td></td>
<td></td>
<td></td>
<td>

$b$

</td>
</tr>
<tr><td style="vertical-align:middle">各自计算出自己的公钥A,B</td>
<td></td>
<td>

$\small{A=g^a\bmod p}$

</td>
<td></td>
<td>

$\small{B=g^b\bmod p}$

</td>
<td></td>
</tr>
<tr><td style="vertical-align:middle">交换公钥A,B</td>
<td></td>
<td>

$\small{B=g^b\bmod p}$

</td>
<td></td>
<td>

$\small{A=g^a\bmod p}$

</td>
<td></td>
</tr>
<tr><td style="vertical-align:middle">计算出加密用的密钥S</td>
<td>

$$
\small{\begin{aligned} 
S_a &= B^a\bmod p \\ 
&=(g^b\bmod p)^a\bmod p \\ 
&=g^{ab}\bmod p 
\end{aligned}}
$$  

</td>
<td></td>
<td></td>
<td></td>
<td>

$$
\small{\begin{aligned} 
S_b &= A^b\bmod p \\ 
&=(g^a\bmod p)^b\bmod p \\ 
&=g^{ab}\bmod p 
\end{aligned}}
$$  

</td>
</tr>
</tbody>
</table>

最终两个人得到的秘密数字都是$g^{ab}\bmod p$，而窃听者仅从$p,g,A,B$四个公开信息，是无法得到这个秘密数字的。  
举个例子，假如  
$$
p=23,g=5
$$  
Alice选取的秘密数字$a=6$, 那么  
$$
A=5^6\bmod 23 =8
$$  
Bob选取的秘密数字是$15$, 那么  
$$
B=5^{15}\bmod 23 = 19
$$  
交换$A$和$B$后，Alice计算出的密钥  
$$
S=19^6\bmod 23=2
$$
Bob计算出的密钥  
$$
S=8^{15}\bmod 23=2
$$  
当然，实际运算中不可能取这么小的数值，比如如果需要128bit长度的密钥，那么p值需要是128bit长度的质数，由于有模运算，所获得的密钥不会大于$p$，所以$p$值可以是128bit数字中最大的一个质数，$g$可以随便设置一个小的质数即可。  
我在[github](https://github.com/thejinchao/dhexchange)上写了一个DH密钥交换算法，支持128bit长度密钥运算，纯C完成，没有引用其他库，只有两个接口，用法如下  
```cpp :no-line-numbers
//Alice获得随机私钥a并计算出对应的公钥A
DH_KEY alice_private, alice_public;
DH_generate_key_pair(alice_public, alice_private);
//Bob获得随机私钥b并计算出对应的公钥B
DH_KEY bob_private, bob_public;
DH_generate_key_pair(bob_public, bob_private);
//交换公钥后Alice计算出加密用密钥s
DH_KEY alice_secret;
DH_generate_key_secret(alice_secret, alice_private, bob_public);
//Bob计算出加密用密钥s
DH_KEY bob_secret;
DH_generate_key_secret(bob_secret, bob_private, alice_public);
```
