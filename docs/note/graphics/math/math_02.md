# 数学基础(二）
----
## 3. 矩阵
### 3.1 定义
一个$m\times n$的矩阵$\boldsymbol A$是一个有$m$行$n$列的数组，
$\boldsymbol A_{ij}$表示第$i$行第$j$列的元素，
$\boldsymbol A_{i,*}$表示第$i$行所有元素，
$\boldsymbol A_{*,j}$表示第$j$列所有元素，
$$
\boldsymbol A=\begin{bmatrix}
A_{11}&A_{12}&A_{13}\\
A_{21}&A_{22}&A_{23}\\
A_{31}&A_{32}&A_{33}
\end{bmatrix}=\begin{bmatrix}
\leftarrow & A_{1,*} & \rightarrow \\
\leftarrow & A_{2,*} & \rightarrow \\
\leftarrow & A_{3,*} & \rightarrow 
\end{bmatrix}=\begin{bmatrix}
\uparrow & \uparrow & \uparrow \\
A_{*,1} & A_{*,2} & A_{*,3} \\
\downarrow & \downarrow & \downarrow 
\end{bmatrix}
$$
### 3.2 加法
如果矩阵$\boldsymbol A$是一个$m\times n$的矩阵，矩阵$\boldsymbol B$是一个$m\times n$的矩阵，那么$\boldsymbol A +\boldsymbol B$是一个$m\times n$的矩阵$\boldsymbol C$，并且
$$
C_{ij}=A_{ij}+ B_{ij}
$$


### 3.3 乘法
#### 3.3.1 定义
矩阵之间的乘法，如果矩阵$\boldsymbol A$是一个$m\times n$的矩阵，矩阵$\boldsymbol B$是一个$n\times p$的矩阵，那么$\boldsymbol{AB}$是一个$m\times p$的矩阵$\boldsymbol C$，并且
$$
C_{ij}=A_{i,*}\cdot B_{*,j}
$$
一般来说$\boldsymbol{AB}\neq \boldsymbol{BA}$
#### 3.3.2 举例
$$\begin{split}
\boldsymbol{AB}&=\begin{bmatrix}
-1&5&4\\3&2&1
\end{bmatrix}\begin{bmatrix}
2&1&0\\0&-2&1\\-1&2&3
\end{bmatrix}\\ &= \begin{bmatrix}
(-1,5,-4)\cdot(2,0,-1) & (-1,5,-4)\cdot(1,-2,2) & (-1,5,-4)\cdot(0,1,3)\\
(3,2,1)\cdot(2,0,-1) & (3,2,1)\cdot(1,-2,2) & (3,2,1)\cdot(1,-2,2)
\end{bmatrix}\\ &=\begin{bmatrix}
2&-19&-7\\
5&1&5
\end{bmatrix}
\end{split}
$$
#### 3.3.3 矢量和矩阵相乘
以三维为例
$$\begin{split}
\vec{\boldsymbol u}\boldsymbol A &=
[x,y,z]\begin{bmatrix}
A_{11}&A_{12}&A_{13}\\
A_{21}&A_{22}&A_{23}\\
A_{31}&A_{32}&A_{33}
 \end{bmatrix}\\&=[x,y,z]\begin{bmatrix}
\uparrow & \uparrow & \uparrow \\
A_{*,1} & A_{*,2} & A_{*,3} \\
\downarrow & \downarrow & \downarrow 
\end{bmatrix}\\&=x\boldsymbol{A}_{*,1}+y\boldsymbol{A}_{*,2}+z\boldsymbol{A}_{*,3}
\end{split}
$$

### 3.4 转置矩阵
#### 3.4.1 定义
将一个$m\times n$的矩阵$\boldsymbol A$的行和列颠倒，变成一个$n\times m$的矩阵，成为$\boldsymbol A$的转置矩阵，记为$\boldsymbol A^T$

#### 3.4.2 举例
$$
\boldsymbol A=\begin{bmatrix}
2&-1&8\\3&6&-4\end{bmatrix}\\
\boldsymbol A^T=\begin{bmatrix}
2&3\\-1&6\\8&-4
\end{bmatrix}
$$

### 3.4.3 正交矩阵
如果一个矩阵满足$\boldsymbol{A}\boldsymbol{A}^T=\boldsymbol{I}$，则称$\boldsymbol{A}$为正交矩阵([Orthogonal matrix](https://en.wikipedia.org/wiki/Orthogonal_matrix))。
正交矩阵满足如下特性：
* 必须是一个方阵，即n行n列；
* 矩阵中的每一列若视作向量，则这些向量均两两相互垂直；
* 矩阵中的每一列若视作向量，则这些向量的长度均为1；

### 3.5 基本运算规则
- $\boldsymbol A+\boldsymbol B=\boldsymbol B+\boldsymbol A$
- $(\boldsymbol A+\boldsymbol B)+\boldsymbol C=\boldsymbol A+(\boldsymbol B+\boldsymbol C)$
- $r(\boldsymbol A+\boldsymbol B)=r\boldsymbol A+r\boldsymbol B$
- $(r+s)\boldsymbol A=r\boldsymbol A+s\boldsymbol A$
- $\boldsymbol{A}(\boldsymbol{B}+\boldsymbol{C})=\boldsymbol{AB}+\boldsymbol{AC}$
- $(\boldsymbol A+\boldsymbol B)\boldsymbol{C}=\boldsymbol{AC}+\boldsymbol{BC}$
- $(\boldsymbol{AB})\boldsymbol{C}=\boldsymbol{A}(\boldsymbol{BC})$
- $(\boldsymbol A+\boldsymbol B)^T=\boldsymbol{A}^T+\boldsymbol{B}^T$
- $(c\boldsymbol A)^T=c\boldsymbol A^T$
- $(\boldsymbol{AB})^T=\boldsymbol{B}^T\boldsymbol{A}^T$
- $(\boldsymbol{A}^T)^T=\boldsymbol{A}$
- $(\boldsymbol{A}^{-1})^T=(\boldsymbol{A}^T)^{-1}$
对于矩阵,交换律不生效，大部分情况下
$\boldsymbol{A}\boldsymbol{B}\neq\boldsymbol{B}\boldsymbol{A}$

### 3.6 单位矩阵
#### 3.6.1 定义
一个$n\times n$的矩阵，从左上角到右下角都是1，其他元素都是0，称为单位矩阵，用$\boldsymbol I$表示，如果$\boldsymbol A$是一个$m\times n$矩阵，$\boldsymbol B$是一个$n\times p$矩阵，那么
$$
\boldsymbol{AI}=\boldsymbol{A}, \boldsymbol{B}=\boldsymbol{B}
$$

### 3.7 子式矩阵(Minor Matrix)
#### 3.7.1 定义
对于一个$n\times n$的矩阵，把第i行和第j列去掉之后的子矩阵，称为Minor Matrix(中文翻译比较乱），记为$\overline{\boldsymbol A}_{ij}$，比如对于一个3x3的矩阵
$$
\boldsymbol A=\begin{bmatrix}
A_{11}&A_{12}&A_{13}\\
A_{21}&A_{22}&A_{23}\\
A_{31}&A_{32}&A_{33}
\end{bmatrix}
$$
$$
\overline{\boldsymbol A}_{11}=\begin{bmatrix}
A_{22}&A_{23}\\
A_{32}&A_{33}
\end{bmatrix},
\overline{\boldsymbol A}_{13}=\begin{bmatrix}
A_{21}&A_{22}\\
A_{31}&A_{32}
\end{bmatrix}
$$

### 3.8 行列式（Determinant of a Matrix）
#### 3.8.1 定义
一个矩阵$\boldsymbol A$的行列式是一个数值，记为$\det{\boldsymbol A}$
$$
\det{\boldsymbol A}=\sum_{j=1}^n(\boldsymbol{A}_{1j}(-1)^{1+j}\det{\overline{\boldsymbol A}}_{1j})
$$
当矩阵是一个1x1的矩阵时，$\det{[A_{11}]}=A_{11}$

#### 3.8.2 举例
$$
\det{\begin{bmatrix}
A_{11}&A_{12}\\
A_{21}&A_{22}
\end{bmatrix}}=A_{11}\det[A_{22}]-A_{12}\det[A_{21}]=A_{11}A_{22}-A_{12}A_{21}
$$

$$\begin{split}
&\det{\begin{bmatrix}
A_{11}&A_{12}&A_{13}\\
A_{21}&A_{22}&A_{23}\\
A_{31}&A_{32}&A_{33}
\end{bmatrix}}\\&=A_{11}\det\begin{bmatrix}
A_{22}&A_{23}\\
A_{32}&A_{33}
\end{bmatrix}-A_{12}\det\begin{bmatrix}
A_{21}&A_{23}\\
A_{31}&A_{33}
\end{bmatrix}+A_{13}\det\begin{bmatrix}
A_{21}&A_{22}\\
A_{31}&A_{32}
\end{bmatrix}\\
&=A_{11}A_{22}A_{33}-A_{11}A_{23}A_{32}-A_{12}A_{21}A_{33}+A_{12}A_{23}A_{31}+A_{13}A_{21}
A_{32}-A_{13}A_{22}A_{31}
\end{split}$$

### 3.9 伴随矩阵(Adjoint of a Matrix)

#### 3.9.1 定义
对于$n\times n$的矩阵$\boldsymbol A$，定义另一个$n\times n$矩阵$\boldsymbol C$，使得
$$
C_{ij}=(-1)^{i+j}\det\overline{\boldsymbol A}_{ij}
$$
那么$\boldsymbol C$的转置矩阵称为$\boldsymbol A$的伴随矩阵，记为$\boldsymbol A^*$
$$
\boldsymbol A^*=\boldsymbol C_A^T
$$
#### 3.9.2 举例
$$\begin{split}
\boldsymbol A&=\begin{bmatrix}a&b\\c&d\end{bmatrix} \\
\boldsymbol A^*&=\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
\end{split}$$
#### 3.9.3 基本运算
- $(\boldsymbol A^*)^T=(\boldsymbol A^T)^*$
- $(k\boldsymbol A)^*=k^{n-1}\boldsymbol A^*$
- $\boldsymbol{AA}^*=\boldsymbol{A}^*\boldsymbol{A}=\det(\boldsymbol A)\boldsymbol I$

### 3.10 逆矩阵(Inverse of a Matrix)
#### 3.10.1 **定义**
只有正方形矩阵有逆矩阵，对于一个$n\times n$的矩阵$\boldsymbol M$，定义它的逆矩阵为$\boldsymbol M^{-1}$，满足$\boldsymbol{MM}^{-1}=\boldsymbol{M}^{-1}\boldsymbol{M}=\boldsymbol{I}$

#### 3.10.2 计算方法
$$
\boldsymbol M^{-1}=\frac{\boldsymbol M^{*}}{\det(\boldsymbol A)}
$$

#### 3.10.3 正交矩阵
对于正交矩阵，根据定义有$\boldsymbol M^{-1}=\boldsymbol M^{T}$