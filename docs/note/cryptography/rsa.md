# RSA算法
-----

## 1. 历史
1977年，三位数学家RonRivest、Adi Shamir 和 Leonard Adleman 设计了一种算法，可以实现非对称加密。这种算法用他们三个人的名字命名，叫做RSA算法。

## 2. 密钥生成
1. 随机选择两个不相等的质数$p$和$q$
2. 计算$n=qp, \phi(n)=(p-1)(q-1)$
3. 选择一个整数$e$,满足$1\lt e \lt\phi(n), \gcd(e,\phi(n))=1$
4. 计算$e$的模反元素$d$，满足$ed\equiv1\pmod {\phi(n)}$
5. 公钥为$(e,n)$，密钥为$(d,n)$

## 3. 加密和解密
1. 加密明文$M, M\lt n$, 
$$
C=E(M)=M^e\pmod{n}
$$
2. 解密密文$C$, 
$$
M=D(C)=C^d\pmod{n}
$$

## 4. 举例
1. 爱丽丝选择了$p=61,q=53$, 计算
$$
\begin{split}
n&=pq=61\times53=3233\\
\phi(n)&=(p-1)(q-1)=360\times52=3120
\end{split}
$$

2. 爱丽丝选择$e=17$，解同余方程
$$
17\times d\equiv1\pmod{3120}
$$
使用扩展欧几里得算法解方程
$$
17d+3120y=1
$$
得到$d=2753$

3. 公钥为$(17,3233)$, 密钥为$(2753,3233)$

4. 鲍勃使用公钥加密明文'A'=65
$$
E(65)=65^{17}\pmod{3233}=2790
$$
5. 爱丽丝用私钥解密
$$
D(2790)=2790^{2753}\pmod{3233}=65
$$

## 5. 证明
根据加密规则$M^e \equiv C\pmod {n}, C$可以写成$C=M^e-kn$
下面证明下面的公式成立
$$
C^d \equiv M\pmod {n}
$$
将C代入要我们要证明的那个解密规则：
$$
(M^e-kn)^{d}\equiv M\pmod {n}
$$
它等同于求证
$$
M^{ed}\equiv M\pmod {n}
$$
由于
$$
ed\equiv1\pmod {\phi(n)}
$$
所以
$$
ed=h\phi(n)+1
$$
将ed代入得到：
$$
M^{h\phi(n)+1}\equiv M\pmod{n}
$$
接下来，分成两种情况证明上面这个式子。
#### 5.1 $M$与$n$互质 
根据欧拉定理，此时
$$
M^{\phi(n)}\equiv 1\pmod{n}
$$
得到
$$
{(M^{\phi(n)})}^h\times M\equiv M\pmod{n}
$$
原式得到证明。

#### 5.2 $M$与$n$不是互质关系
此时，由于$n$等于质数$p$和$q$的乘积，所以$M$必然等于$kp$或$kq$。
以$M = kp$为例，考虑到这时$k$与$q$必然互质，则根据欧拉定理，下面的式子成立：
$$
{(kp)}^{q-1}\equiv 1\pmod{q}
$$
进一步得到
$$
((kp)^{q-1})^{h(p-1)}\times kp\equiv kp \pmod{q} 
$$
即
$$
(kp)^{ed}\equiv kp \pmod{q}
$$
将它改写成下面的等式
$$
(kp)^{ed}=tq+kp
$$
这时$t$必然能被$p$整除，即 $t=t'p$
$$
(kp)^{ed}=t'pq+kp
$$
因为 $m=kp, n=pq$，所以
$$
M^{ed} \equiv M\pmod {n}
$$
原式得到证明。

## 6. 密钥对的个数
对于选定的$n=pq$，能够产生的密钥对$\{e,d,n\}$有多少个？

由于$ed\equiv1\pmod{\phi(n)}$，所以$\gcd(e,\phi(n))=1$，而且$1\lt e\lt \phi(n)$，所以$e$的个数是和$\phi(n)$互质的数的个数，也就是$e$有$\phi(\phi(n))$个
对于$d$，由于$ed\equiv1\pmod{\phi(n)}$，当$e$确定时，方程$ex\equiv1\pmod{\phi(n)}$在$1\lt x\lt \phi(n)$有且只有一个解，所以密钥对$\{e,d,n\}$的个数为$\phi(\phi(n))$个


比如$p=13,q=17$，那么$\phi(n)=12\times 16=2^6\times 3$,
$\phi(\phi(n))=\phi(2^6)\times\phi(3)=2^5\times2=64$
所以一共有64对密钥

## 7. 交换律
当通信的双方使用模数相等的RSA算法时，RSA算法满足交换律，也就是说Alice使用的密钥为$\{e_1,d_1,n\}$, Bob使用的密钥对为$\{e_2,d_2,n\}$，满足
$$
e_1d_1\equiv e_2d_2\equiv 1\pmod{\phi(n)}
$$
那么
$$
E_B(E_A(M))=E_A(E_B(M))
$$