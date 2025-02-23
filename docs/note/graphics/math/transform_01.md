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
