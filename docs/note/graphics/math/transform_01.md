# 几何变换（一）
----
## 1. 线性变换

### 1.1 定义
假设有某种数学函数$\tau$，输入矢量$\vec{\boldsymbol u}$，输出的仍然是一个矢量，且满足以下条件
$$\begin{split}
\tau(\boldsymbol u + \boldsymbol v)&=\tau(\boldsymbol u) +\tau(\boldsymbol v) \\
\tau(k\boldsymbol u)&=k\tau(\boldsymbol u)
\end{split}$$
那么定义$\tau$为线性变换
### 1.2 举例
比如$\tau(u_x,u_y,u_z)=(u_x^2,u_y^2,u_z^2)$就不是线性变换，因为不满足第二条

### 1.3 使用矩阵表示
一般使用矩阵表示一个线性变换，设一个三维矢量$\vec{\boldsymbol{v}}=[x,y,z]^T=x\vec{\boldsymbol{i}}+y\vec{\boldsymbol{j}}+z\vec{\boldsymbol{k}}$，那么对其做线性变换
$$\begin{split}
\tau(\vec{\boldsymbol{v}})&=\tau(x\vec{\boldsymbol{i}}+y\vec{\boldsymbol{j}}+z\vec{\boldsymbol{k}})\\
&=\tau(\vec{\boldsymbol{i}})x+\tau(\vec{\boldsymbol{j}})y+\tau(\vec{\boldsymbol{k}})z\\
&=\begin{bmatrix}
\uparrow & \uparrow & \uparrow \\
\tau(\vec{\boldsymbol{i}}) & \tau(\vec{\boldsymbol{j}}) & \tau(\vec{\boldsymbol{k}})\\
\downarrow & \downarrow & \downarrow 
\end{bmatrix}\begin{bmatrix}x\\y\\z \end{bmatrix}\\
&=\begin{bmatrix}
T_{11}&T_{12}&T_{13}\\
T_{21}&T_{22}&T_{23}\\
T_{31}&T_{32}&T_{33}
\end{bmatrix}\begin{bmatrix}x\\y\\z \end{bmatrix}
\end{split}\tag{1.3.1}$$


## 2. 缩放变换

### 2.1 定义
定义放缩变换为
$$
S(x,y,z)=(S_xx,S_yy, S_zz)
$$
用矩阵表示
$$
\boldsymbol S=\begin{bmatrix}
S_x&0&0 \\
0&S_y&0 \\
0&0&S_z
\end{bmatrix}
$$

## 3. 旋转变换
**以右手坐标系为例**

### 3.1 正方向约定
描述一个旋转角度时，一般约定沿着坐标轴负方向向原点看，逆时针为正方向

![](./rotate_dir.svg)

### 3.2 围绕标准轴旋转
#### 3.2.1 **结果**
围绕$x,y,z$轴旋转$\theta$的旋转矩阵
$$
\begin{aligned}
\boldsymbol{R_x}&=\begin{bmatrix}1&0&0\\0&\cos(\theta)&-\sin(\theta)\\0&\sin(\theta)&\cos(\theta)\end{bmatrix}\\
\boldsymbol{R_y}&=\begin{bmatrix}\cos(\theta)&0&\sin(\theta)\\ 0&1&0\\ -\sin(\theta)&0&\cos(\theta)\end{bmatrix}\\
\boldsymbol{R_z}&=\begin{bmatrix}\cos(\theta)&-\sin(\theta)&0 \\ \sin(\theta)&\cos(\theta)&0\\ 0&0&1\end{bmatrix}
\end{aligned}
$$
#### 3.2.2 **求解过程**
以$R_z$为例

![](./rotate_standard.svg)

标准矢量$\vec{\boldsymbol{i}}=[1,0,0]^T,\vec{\boldsymbol{j}}=[0,1,0]^T,\vec{\boldsymbol{k}}=[0,0,1]^T,$经过旋转$\theta$后，结果为
$$\begin{split}
R_z(\vec{\boldsymbol{i}})&=[\cos(\theta),\sin(\theta),0]^T \\
R_z(\vec{\boldsymbol{j}})&=[-\sin(\theta),\cos(\theta),0]^T \\
R_z(\vec{\boldsymbol{k}})&=[0,0,1]^T
\end{split}
$$
所以根据公式1.3.1
$$
\boldsymbol{R_z}=\begin{bmatrix}\cos(\theta)&-\sin(\theta)&0 \\ \sin(\theta)&\cos(\theta)&0\\ 0&0&1\end{bmatrix}
$$


### 3.3 围绕任意轴
#### 3.3.1 **结果**
有穿过原点单位轴$\vec{\boldsymbol{n}}$

![](./rotate_axis.svg)

求围绕该轴旋转$\theta$的旋转矩阵

#### 3.3.2 **求解过程**

![](./rotate_axis_1.svg)![](./rotate_axis_2.svg)

将矢量$\vec{\boldsymbol{v}}$分解成两个矢量的和，一个是平行于$\vec{\boldsymbol{n}}$的分量$\vec{\boldsymbol{v}}_1$和垂直于$\vec{\boldsymbol{n}}$的分量$\vec{\boldsymbol{v}}_2$
$$\begin{split}
\vec{\boldsymbol{v}} &= \vec{\boldsymbol{v}}_1+\vec{\boldsymbol{v}}_2\\
\|\vec{\boldsymbol{v}}_1\|&=\|\vec{\boldsymbol{v}}\|\cos(\alpha) \\
\|\vec{\boldsymbol{v}}_2\|&=\|\vec{\boldsymbol{v}}\|\sin(\alpha)
\end{split}$$
由于$\vec{\boldsymbol{n}}$是单位矢量，$\|\vec{\boldsymbol{n}}\|=1$，所以
$$
\vec{\boldsymbol{v}}\cdot\vec{\boldsymbol{n}}=\|\vec{\boldsymbol{v}}\|\|\vec{\boldsymbol{n}}\|\cos(\alpha)=\|\vec{\boldsymbol{v}}\|\cos(\alpha)=\|\vec{\boldsymbol{v}}_1\| \tag{3.3.2.1}
$$

$$
\|\vec{\boldsymbol{v}}\times\vec{\boldsymbol{n}}\| =\|\vec{\boldsymbol{v}}\|\|\vec{\boldsymbol{n}}\| \sin(\alpha)=\|\vec{\boldsymbol{v}}\| \sin(\alpha)=\|\vec{\boldsymbol{v}}_2\| \tag{3.2.2.2}
$$
所以根据公式3.3.2.1，$\vec{\boldsymbol{v}}_1$和$\vec{\boldsymbol{n}}$同方向，且长度和$\vec{\boldsymbol{v}}\cdot\vec{\boldsymbol{n}}$相等，所以
$$
\vec{\boldsymbol{v}}_1=\|\vec{\boldsymbol{v}}_1\|\vec{\boldsymbol{n}}=(\vec{\boldsymbol{v}}\cdot\vec{\boldsymbol{n}})\vec{\boldsymbol{n}}\tag{3.3.2.3}
$$
由于$\vec{\boldsymbol{v}}_1$不受旋转影响，所以
$$
R_n(\vec{\boldsymbol{v}})=\vec{\boldsymbol{v}}_1+R_n(\vec{\boldsymbol{v}}_2)\tag{3.3.2.4}
$$
$R_n(\vec{\boldsymbol{v}}_2)$可以分解成两部分，一部分是平行于$\vec{\boldsymbol{v}}_2$的分量$\vec{\boldsymbol{v}}_2\cos(\theta)$另一部分是垂直于$\vec{\boldsymbol{v}}_2$的分量$\vec{\boldsymbol{v}}_2\sin(\theta)$，联合公式3.2.2.2
$$
R_n(\vec{\boldsymbol{v}}_2)=\vec{\boldsymbol{v}}_2\cos(\theta)+(\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v}})\sin(\theta)\tag{3.3.2.5}
$$
代入3.3.2.4可以得到
$$\begin{split}
R_n(\vec{\boldsymbol{v}})&=\vec{\boldsymbol{v}}_1+R_n(\vec{\boldsymbol{v}}_2)\\
&=\vec{\boldsymbol{v}}_1+\vec{\boldsymbol{v}}_2\cos(\theta)+(\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v}})\sin(\theta)\\
&=\vec{\boldsymbol{v}}_1+(\vec{\boldsymbol{v}}-\vec{\boldsymbol{v}}_1)\cos(\theta)+(\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v}})\sin(\theta)\\
&=\vec{\boldsymbol{v}}\cos(\theta)+(1-\cos(\theta))\vec{\boldsymbol{v}}_1+(\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v}})\sin(\theta)\\
&=\vec{\boldsymbol{v}}\cos(\theta)+(1-\cos(\theta))(\vec{\boldsymbol{v}}\cdot\vec{\boldsymbol{n}})\vec{\boldsymbol{n}}+(\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v}})\sin(\theta)
\end{split}\tag{3.3.2.6}$$
这个公式称为罗德里格旋转公式[Rodrigues' rotation formula](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula),使用以下方法得到其矩阵形式  
#### 3.3.3 一般形式
$$\begin{split}
R_n(\vec{v})&=\vec{v}-\vec{v}+\vec{v}\cos(\theta)+(1-\cos(\theta))(\vec{v}\cdot\vec{n})\vec{n}+(\vec{n}\times\vec{v})\sin(\theta)\\
&=\vec{v}-(1-\cos(\theta))\vec{v}+(1-\cos(\theta))(\vec{v}\cdot\vec{n})\vec{n}+(\vec{n}\times\vec{v})\sin(\theta)\\
&=\vec{v}+(1-\cos(\theta))[(\vec{v}\cdot\vec{n})\vec{n}-\vec{v}]+(\vec{n}\times\vec{v})\sin(\theta)\\
&=\vec{v}+(1-\cos(\theta))[(\vec{v}\cdot\vec{n})\vec{n}-(\vec{n}\cdot\vec{n})\vec{v}]+(\vec{n}\times\vec{v})\sin(\theta)
\end{split}$$
根据矢量[三重积公式](/note/graphics/math/math_01.html#_2-7-%E4%B8%89%E9%87%8D%E7%A7%AF)，可以得到
$$
(\vec{v}\cdot\vec{n})\vec{n}-(\vec{n}\cdot\vec{n})\vec{v}=\vec{n}\times(\vec{n}\times\vec{v})
$$
所以
$$
R_n(\vec{v})=\vec{v}+(1-\cos(\theta))[\vec{n}\times(\vec{n}\times\vec{v})]+(\vec{n}\times\vec{v})\sin(\theta)
$$
使用向量$\vec{n}$的[叉乘矩阵](/note/graphics/math/math_01.html#_2-5-4-%E5%8F%89%E7%A7%AF%E7%9A%84%E7%9F%A9%E9%98%B5%E5%BD%A2%E5%BC%8F)$[\boldsymbol{n}]_{\times}$来代替叉乘，这里记矩阵$\boldsymbol{M_n}$为向量$\vec{n}$的叉积矩阵
$$
\boldsymbol{M_n}=\begin{bmatrix}
0&-n_z&n_y\\
n_z&0&-n_x\\
-n_y&n_x&0
\end{bmatrix}
$$
使用矩阵形式表达罗德里格旋转公式
$$\begin{split}
R_n(\vec{v})&=\boldsymbol{I}\vec{v}+(1-\cos(\theta))[\boldsymbol{M_n}(\boldsymbol{M_n}\vec{v})]+\boldsymbol{M_n}\vec{v}\sin(\theta)\\
&=[\boldsymbol{I}+(1-\cos(\theta)){\boldsymbol{M_n^2}}+\boldsymbol{M_n}\sin(\theta)]\vec{v}
\end{split}$$
所以矩阵形式的罗德里格旋转公式的公式为
$$
R_n=\boldsymbol{I}+\boldsymbol{M_n^2}(1-\cos(\theta))+\boldsymbol{M_n}\sin(\theta)
$$
#### 3.3.4 三维行列式  
设$\vec{\boldsymbol{n}}=[x,y,z]^T, c=\cos(\theta), s=\sin(\theta)$分别将$\vec{\boldsymbol{i}}, \vec{\boldsymbol{j}}, \vec{\boldsymbol{k}}$带入3.3.2.6，得到
$$\begin{split}
R_n(\vec{\boldsymbol{i}})&=c\vec{i}+(1-c)(\vec{i}\cdot\vec{n})\vec{n}
+(\vec{n}\times\vec{i})s\\
&=[c+(1-c)x^2, (1-c)xy+sz, (1-c)xz-sy]^T\\
R_n(\vec{\boldsymbol{j}})&=[(1-c)xy-sz,c+(1-c)y^2,(1-c)yz+sx]^T\\
R_n(\vec{\boldsymbol{k}})&=[(1-c)xz+sy,(1-c)yz-sx,c+(1-c)z^2]^T
\end{split}$$
代入公式[1.3.1](/note/graphics/math/transform_01.html#_1-3-使用矩阵表示)得到
$$
\boldsymbol{R_n}=\begin{bmatrix}
c+(1-c)x^2& (1-c)xy-sz&(1-c)xz+sy\\
(1-c)xy+sz&c+(1-c)y^2&(1-c)yz-sx\\
(1-c)xz-sy&(1-c)yz+sx&c+(1-c)z^2
\end{bmatrix}
$$

### 3.4 四元数

#### 3.4.1 复数
复数([Complex Number](https://simple.wikipedia.org/wiki/Complex_number))可以表达为
$$\begin{aligned}
z=a+bi\\
a,b\in\mathbb{R}, i^2=-1
\end{aligned}$$
其中$a$被成为实部(Real Part), $b$被称为虚部(Imaginary Part), 复数的基本运算规律如下，设$z_1=a_1+b_1i, z_2=a_2+b_2i$，那么
$$
\begin{aligned}
z_1+z_2&=(a_1+a_2)+(b_1+b_2)i\\
z_1-z_2&=(a_1-a_2)+(b_1-b_2)i\\
z_1z_2&=(a_1a_2-b_1b_2)+(a_1b_2+a_2b_1)i
\end{aligned}
$$

#### 3.4.2 四元数定义
四元数([Quaternion](https://en.wikipedia.org/wiki/Quaternion))可以视为对复数的扩充，有1个实部，3个虚部，形式如下
$$
q=s+xi+yj+zk
$$
其中$s,x,y,z\in\mathbb{R}$，$i,j,k$满足如下计算性质
$$
\begin{aligned}
i^2&=j^2=k^2=ijk=-1\\
ij&=k\quad ji=-k\\
jk&=i\quad kj=-i\\
ki&=j\quad ik=-j\\
\end{aligned}
$$
汇总到如下表格中 
|  | $i$ | $j$ | $k$ |
| :--- | :--- | :--- | :--- |
| $i$ | $-1$ | $k$ | $-j$ |
| $j$ | $-k$ | $-1$ | $i$ |
| $k$ | $j$ | $-i$ | $-1$ |

四元数也可以表达成将实数部和虚数部分开的形式，对于四元数$q=s+xi+yj+zk$，设$\vec{v}=[x,y,z]^T$，则这个四元数可以表达为
$$
q=[s,\vec{v}]
$$

#### 3.4.3 四元数的基本运算
对于两个四元数$q_1=[s_1,\vec{v_1}], q_2=[s_2,\vec{v_2}]$，基本运算规律如下
$$
\begin{aligned}
q_1+q_2&=[s_1+s_2,\quad \vec{v_1}+\vec{v_2}]\\
q_1-q_2&=[s_1-s_2,\quad \vec{v_1}-\vec{v_2}]\\
q_1q_2&=[s_1s_2-\vec{v_1}\cdot\vec{v_2},\quad s_1\vec{v_2}+s_2\vec{v_1}+\vec{v_1}\times\vec{v_2}]
\end{aligned}
$$
四元数的乘法满足结合律，但不满足交换律
$$
\begin{aligned}
(q_1q_2)q_3&=q_1(q_2q_3)\\
q_1q_2&\neq q_2q_1
\end{aligned}
$$
但如果$q_1,q_2$中的向量部分平行，由于$\vec{v_1}\times\vec{v_2}=0$，易证
$$
q_1q_2=q_2q_1\quad(when\quad \vec{v_1}\parallel\vec{v_2})
\tag{3.4.3.1}
$$
定义四元数$q=s+xi+yj+zk$的模为
$$
\|q\|=\sqrt{s^2+x^2+y^2+z^2}
$$
如果一个四元数的模为1，那么称这个四元数为单位四元数

#### 3.4.4 四元数的共轭和逆
定义四元数$q=[s, \vec{v}]$的共轭四元数$\overline{q}$为
$$
\overline{q}=[s, -\vec{v}]
$$
共轭四元数满足如下运算
$$
q\overline{q}=\overline{q}q=\|q\|^2\tag{3.4.4.1}
$$
对于单位四元数，有$q\overline{q}=1$  
定义四元数$q$的逆为$q^{-1}$，满足$qq^{-1}=1$，由公式3.4.4.1可知
$$
qq^{-1}=1=\frac{q\overline{q}}{\|q\|}
$$
所以
$$
q^{-1}=\frac{\overline{q}}{\|q\|^2}\tag{3.4.4.2}
$$
四元数的逆满足如下运算
$$\begin{aligned}
(q_1q_2)^{-1}&=q_2^{-1}q_1^{-1}\\
(q_1q_2\ldots q_n)^{-1}&=q_n^{-1}\ldots q_2^{-1}q_1^{-1}
\end{aligned}\tag{3.4.4.3}
$$
易知，如果是单位四元数
$$
\overline{q_1q_2\ldots q_n}=\overline{q_n}\ldots \overline{q_2}\,\overline{q_1}\tag{3.4.4.4}
$$

#### 3.4.5 四元数与向量
如果一个四元数的实部为0，那么称之为纯四元数(Pure Quaternion)，由于纯四元数仅有3个虚部，可以将一个3D向量转换为一个纯四元数。记$q_v=[0,\vec{v}]$，那么
$$\begin{aligned}
\lambda q_v&=[0, \lambda\vec{v}]\\
q_{u}\pm q_{v}&=[0, \vec{u}\pm\vec{v}]
\end{aligned}$$
由此可见，向量的线性运算，都可以使用与之对应的纯四元数来代替。但乘法则不同，设两个纯四元数$q_u=[0, \vec{u}], q_v=[0, \vec{v}]$，相乘后结果为
$$
q_uq_v=[-\vec{u}\cdot\vec{v}, \vec{u}\times\vec{v}]\tag{3.4.5.1}
$$
对于向量$\vec{v}$，记四元数$q(\theta, \vec{v})=[\cos\theta, \vec{v}\sin\theta]$，这种四元数有一些很有用的特性，首先如果$\vec{v}$是单位向量，那么$q(\theta, \vec{v})$是单位四元数，易证:
$$
\|q(\theta, \vec{v})\|=\sqrt{\cos^2\theta+\sin^2\theta(v_x^2+v_y^2+v_z^2)}=1
$$
另外
$$\begin{aligned}
q(\alpha, \vec{v})q(\theta, \vec{v})&=[\cos\alpha,\quad\vec{v}\sin\alpha][\cos\theta,\quad\vec{v}\sin\theta]\\
&=[\cos\alpha\cos\theta-\sin\alpha\sin\theta,\quad\vec{v}(\cos\alpha\sin\theta+\cos\theta\sin\alpha)]\\
&=[\cos(\alpha+\theta),\quad\vec{v}\sin(\alpha+\theta)]\\
&=q(\alpha+\theta, \vec{v})\\
q(\theta, \vec{v})^2&=q(2\theta, \vec{v})
\end{aligned}\tag{3.4.5.2}$$

#### 3.4.6 使用四元数表达旋转
观察上面推导罗德里格旋转公式过程中的公式3.3.2.5，其中
$$\begin{aligned}
\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v}}&=\vec{\boldsymbol{n}}\times(\boldsymbol{v_1}+\boldsymbol{v_2})\\
&=\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v_1}}+\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v_2}}\\
&=\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v_2}}
\end{aligned}$$
带入公式3.3.2.5,可以得到
$$
R_n(\vec{\boldsymbol{v}}_2)=\vec{\boldsymbol{v}}_2\cos(\theta)+(\vec{\boldsymbol{n}}\times\vec{\boldsymbol{v_2}})\sin(\theta)\tag{3.4.6.1}
$$
设两个纯四元数$q_n, q_{v2}$
$$\begin{aligned}
q_n&=[0, \vec{n}]\\
q_{v2}&=[0, \vec{v_2}]
\end{aligned}\tag{3.4.6.2}
$$
根据公式3.4.5.1
$$\begin{aligned}
q_nq_{v2}&=[-\vec{n}\cdot\vec{v_2},\quad\vec{n}\times\vec{v_2}]\\
&=[0,\quad\vec{n}\times\vec{v_2}]
\end{aligned}\tag{3.4.6.3}$$
所以$q_nq_{v2}$是一个纯四元数  
由于3.4.6.1中都是线性计算，将3.4.6.2和3.4.6.3代入其中，可以得到$R_n(\vec{\boldsymbol{v}}_2)$的四元数形式
$$\begin{aligned}
\quad[0, R_n(\vec{\boldsymbol{v}}_2)]&= q_{v2}\cos\theta+q_nq_{v2}\sin\theta\\
&=(\cos\theta+q_n\sin\theta)q_{v2}\\
&=[\cos\theta, \vec{n}\sin\theta]q_{v2}\\
&=q(\theta, \vec{n})q_{v2}
\end{aligned}\tag{3.4.6.4}$$
设一个新的四元数$p$
$$
p=q(\frac{\theta}{2}, \vec{n})=[\cos\frac{\theta}{2},\vec{n}\sin\frac{\theta}{2}]\tag{3.4.6.5}
$$
根据公式3.4.5.2，可以得到
$$
pp=q(\theta, \vec{n})
$$
且由于$p$是单位四元数，可以知道
$$
pp^{-1}=p\overline{p}=1
$$
将3.4.6.4带入3.3.2.4中，可以得到罗德里格旋转公式的四元数形式为
$$\begin{aligned}
R_n(\vec{\boldsymbol{v}})&=\vec{\boldsymbol{v}}_1+R_n(\vec{\boldsymbol{v}}_2)\\
\quad[0,R_n(\vec{\boldsymbol{v}})]&=q_{v1}+q(\theta, \vec{n})q_{v2}\\
&=p\overline{p}q_{v1}+ppq_{v2}
\end{aligned}\tag{3.4.6.6}
$$
由于$\vec{n}\parallel\vec{v_1}$，根据公式3.4.3.1，可知$\overline{p}q_{v1}=q_{v1}\overline{p}$  
由于$\vec{n}\perp\vec{v_2}$，可以推断出$pq_{v2}=q_{v2}\overline{p}$，证明如下：  
$$\begin{aligned}
pq_{v2}&=[\cos\frac{\theta}{2},\vec{n}\sin\frac{\theta}{2}][0, \vec{v_2}]\\
&=[0,\vec{v_2}\cos\frac{\theta}{2}+(\vec{n}\times\vec{v_2})\sin\frac{\theta}{2}]\\
q_{v2}\overline{p}&=[0, \vec{v_2}][\cos\frac{\theta}{2},-\vec{n}\sin\frac{\theta}{2}]\\
&=[0,\vec{v_2}\cos\frac{\theta}{2}-(\vec{v_2}\times\vec{n})\sin\frac{\theta}{2}]
\end{aligned}$$
带入3.4.6.6，可以得到
$$\begin{aligned}
\quad[0,R_n(\vec{\boldsymbol{v}})]&=pq_{v1}\overline{p}+pq_{v2}\overline{p}\\
&=p(q_{v1}+q_{v2})\overline{p}\\
&=pq_v\overline{p}
\end{aligned}\tag{3.4.6.7}
$$
也就是说，对于向量$\vec{v}$，围绕单位向量$\vec{n}$旋转$\theta$，只需要构造四元数$[\cos\frac{\theta}{2}, \vec{n}\sin\frac{\theta}{2}]$，可以利用下面的等式计算旋转后的向量$\vec{v'}$
$$
[0, \vec{v'}]=[\cos\frac{\theta}{2}, \vec{n}\sin\frac{\theta}{2}][0,\vec{v}][\cos\frac{\theta}{2}, -\vec{n}\sin\frac{\theta}{2}]
$$

#### 3.4.7 四元数组合
使用四元数表达旋转有一个好处就是可以实现组合、插值等计算，例如一个向量$v$经过两次旋转变化，用四元数表示分别是$q_1,q_2$，那么
$$\begin{aligned}
q'&=q_2(q_1q_v\overline{q_1})\overline{q_2}\\
&=(q_2q_1)q_v(\overline{q_1}\,\overline{q_2})\\
\end{aligned}$$
根据公式3.4.4.4，可知
$$
q'=(q_2q_1)q_v(\overline{q_2q_1})
$$
#### 3.4.7 四元数转换为旋转矩阵
两个四元数相乘，可以转换为同等效果的矩阵，设两个四元数
$$\begin{aligned}
p=a+bi+cj+dk\\
q=s+xi+yj+zk
\end{aligned}$$
那么
$$\begin{aligned}
pq=&(a+bi+cj+dk)(s+xi+yj+zk)\\
=&(as−bx−cy−dz)+ \\
&(bs+ax−dy+cz)i+\\
&(cs+dx+ay−bz)j+\\
&(ds−cx+by+az)k\\
\end{aligned}$$
可以将左乘四元数$p$视作左乘矩阵$L(p)$
$$
L(p)=\begin{bmatrix}
a&-b&-c&-d \\
b&a&−d&c \\
c&d&a&−b \\
d&−c&b&a \\
\end{bmatrix}
$$
而右乘四元数$p$视作左乘矩阵$R(q)$
$$
Q(q)=\begin{bmatrix}
a&−b&−c&−d \\
b&a&d&-c \\
c&-d&a&b \\
d&c&-b&a \\
\end{bmatrix}
$$
那么旋转一个向量$\vec{v}$对应的四元数$q_v$的过程可以写作
$$
pq_v\overline{p}=L(p)R(\overline{p})q_v
$$
或者
$$
pq_v\overline{p}=R(\overline{p})L(p)q_v
$$
容易证明，这两个结果是一样的，经计算
$$\begin{aligned}
L(p)R(\overline{p})q_v&=\begin{bmatrix}
a&-b&-c&-d \\
b&a&−d&c \\
c&d&a&−b \\
d&−c&b&a \\
\end{bmatrix}\begin{bmatrix}
a&b&c&d \\
-b&a&-d&c \\
-c&d&a&-b \\
-d&-c&b&a \\
\end{bmatrix}\begin{bmatrix}0\\v_x\\v_y\\v_z\end{bmatrix}\\
&=\begin{bmatrix}
1&0&0&0\\
0&1-2c^2-2d^2&2bc-2ad&2ac+2bd\\
0&2bc+2ad&1-2b^2-2d^2&2cd-2ab\\
0&2bd-2ac&2ab+2cd&1-2b^2-2c^2
\end{bmatrix}\begin{bmatrix}0\\v_x\\v_y\\v_z\end{bmatrix}
\end{aligned}
$$
忽略掉四元数中为0的实数部分，可以将一个旋转四元数转换为旋转矩阵
$$
v'=\begin{bmatrix}
1-2c^2-2d^2&2bc-2ad&2ac+2bd\\
2bc+2ad&1-2b^2-2d^2&2cd-2ab\\
2bd-2ac&2ab+2cd&1-2b^2-2c^2
\end{bmatrix}\begin{bmatrix}v_x\\v_y\\v_z\end{bmatrix}
$$
其中
$$\begin{aligned}
a&=\cos(\theta/2)\\
b&=\sin(\theta/2)n_x\\
c&=\sin(\theta/2)n_y\\
d&=\sin(\theta/2)n_z
\end{aligned}
$$
