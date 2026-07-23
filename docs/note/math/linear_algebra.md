# 线性代数(Linear Algebra)

## 1. 标量、向量、矩阵和张量

### 1.1 标量(Scalar)
一个标量就是一个单独的数

### 1.2 矢量(Vector)
一个向量是一列数,这些数是有序排列的，用粗体符号表示，例如矢量$\boldsymbol{x}$，用下标表示矢量中的各个元素，例如:
$$
\boldsymbol{x}=\begin{bmatrix}x_1\\x_2\\\vdots\\x_n\end{bmatrix}
$$

### 1.3 矩阵(Matrix)
矩阵是一个二维数组,常会用粗体的大写变量名称，比如$\boldsymbol{A}$,用$A_{i,j}$表示其中第$i$行，第$j$列的某个数据，用$\boldsymbol{A}_{i,:}$表示第$i$行数据，用$\boldsymbol{A}_{:,j}$表示第$j$列数据
$$
\boldsymbol{A}=\begin{bmatrix}
A_{11}&A_{12}&A_{13}\\
A_{21}&A_{22}&A_{23}\\
A_{31}&A_{32}&A_{33}
\end{bmatrix}\\
$$


### 1.4 张量(Tensor)
如果把标量理解为0维数据，矢量理解为1维数据，矩阵理解为2维数据，那么更高维的数据可以称为“张量(Tensor)”，例如一张图片数据维3维张量(`x`,`y`,`channel`)，一批图片数据为4维张量(`number`,`x`, `y`, `channel`)

## 2. 基本运算

### 2.1 转置(Transpose)
矩阵的转置是以对角线为轴的镜像,将矩阵$\boldsymbol A$的转置表示为$\boldsymbol{A}^T$,定义如下
$$
(\boldsymbol{A}^T)_{i,j}=A_{j,i}
$$

### 2.2 乘法(Product)
矩阵之间的乘法，需要满足矩阵$\boldsymbol A$的列数必须和矩阵$\boldsymbol B$的行数相等，如果矩阵$\boldsymbol A$是一个$m\times n$的矩阵，矩阵$\boldsymbol B$是一个$n\times p$的矩阵，那么$\boldsymbol{AB}$是一个$m\times p$的矩阵$\boldsymbol C$
具体地，该乘法操作定义为
$$
C_{i,j}=\sum_k{A_{i,k}B_{k,j}}
$$
两个同维数的矢量$\boldsymbol{x}$和$\boldsymbol{y}$的点积(dot product)可以看作矩阵乘积$\boldsymbol{x}^{T}\boldsymbol{y}$

## 3. 单位矩阵和逆矩阵

### 3.1 单位矩阵(Identity Matrix)
单位矩阵的结构很简单,所有沿主对角线的元素都是1，而所有其他位置的元素都是0, 任意向量和单位矩阵相乘，都不会改变。 们将保持$n$维向量不变的单位矩阵记作$\boldsymbol{I}_n$

### 3.2 逆矩阵(Matrix Inversion)
只有正方形矩阵有逆矩阵，对于一个$n\times n$的矩阵$\boldsymbol{A}$，定义它的逆矩阵为$\boldsymbol{A}^{-1}$，满足
$$
\boldsymbol{AA}^{-1}=\boldsymbol{A}^{-1}\boldsymbol{A}=\boldsymbol{I}_{n}
$$

## 4. 线性相关和生成子空间

### 4.1 生成子空间(Span)
一组向量的生成子空间（Span），是指通过所有可能的线性组合，这组向量可以填充出来的那个空间，例如给定一组向量$\{\boldsymbol{v_1}, \boldsymbol{v_1},\cdots,\boldsymbol{v_n}\}$:
$$
Span(\boldsymbol{v_1}, \boldsymbol{v_1},\cdots,\boldsymbol{v_n})=\{c_1\boldsymbol{v_1}+c_2\boldsymbol{v_2}+\cdots+c_n\boldsymbol{v_n}|c_i\in\mathbb{R}\}
$$
例如对于只包含1个二维向量的集合$\{\boldsymbol{v}\}$, 它的生成子空间就是这个向量所在的直线  
对于包含了2个不重合的向量的集合$\{\boldsymbol{a},\boldsymbol{b}\}$, 它的生成子空间就是这两个向量所在的平面  

### 4.2 线性相关(Linearly Dependent)和线性无关(Linearly Independent)
如果一组向量中的任意一个向量都不能表示成其他向量的线性组合，那么这组向量称为线性无关,反之则成为线性相关  
例如在3维空间中，如果3个向量不共面，则是线性无关的，如果共面，则是线性相关的

## 5. 范数(Norm)
范数用来衡量一个向量的“长度/大小/距离”这个概念，例如常用的$L^2$范数,表示从原点出发到向量$x$确定的点的欧几里得距离:
$$
\|\boldsymbol{x}\|_2=\sqrt{x_{1}^{2}+x_{2}^{2}+\cdots+x_{n}^{2}}
$$
通用范数表示为:
$$
\|\boldsymbol{x}\|_p=\left(\sum_{i}{|x_i|^p}\right)^{1/p}
$$
另外一个经常在机器学习中出现的范数是范数$L^{\infty}$，也被称为最大范数。这个范数表示向量中具有最大绝对值的元素的绝对值：
$$
\|\boldsymbol{x}\|_{\infty}=\text{max}\left(|x_1|,|x_2|,\cdots,|x_n|\right)
$$

## 6. 特殊矩阵和向量

### 6.1 对角矩阵(Diagonal Matrix)
只在主对角线上含有非零元素，其他位置都是0的矩阵. 用$diag(\boldsymbol{v})$表示一个对角矩阵，且对角线上的元素是给定的矢量，例如:
$$
\text{diag}([1,2,3])=\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}
$$

### 6.2 对称(Symmetric)矩阵是转置和自己相等的矩阵
$$
\boldsymbol{A}=\boldsymbol{A}^T
$$


### 6.3 单位向量(Unit Vector)是指具有单位范数的向量
$$
\|\boldsymbol{x}\|_2=1
$$

### 6.4 正交(Orthogonal)
对于向量$\boldsymbol{x}$和$\boldsymbol{y}$，如果$\boldsymbol{x}^T\boldsymbol{y}=0$，则它们互相正交(Orthogonal),两个向量正交在几何意义上是指它们互相垂直  
如果一组向量两两正交，并且范数都为1，则称它们为标准正交(Orthonormal)  

### 6.5 正交矩阵(Orthogonal Matrix)是指行向量和列向量是分别标准正交的方阵:
$$
\boldsymbol{A}^T\boldsymbol{A}=\boldsymbol{A}\boldsymbol{A}^T=\boldsymbol{I}
$$
这也意味着:
$$
\boldsymbol{A}^{-1}=\boldsymbol{A}^T
$$

## 7. 特征分解(Eigen Decomposition)
正如整数可以分解质因数相乘一样，可以通过分解矩阵来发现一些隐藏的特质，特征分解用于将矩阵分解为一组特征值和特征向量.  
对于方阵$A$，存在矢量$\boldsymbol{v}$和标量$\lambda$，使得
$$
\boldsymbol{A}\boldsymbol{v}=\lambda\boldsymbol{v}
$$
矢量$\boldsymbol{v}$称为此方阵$\boldsymbol{A}$的特征向量(Eigen Vector)，标量$\lambda$被称为这个特征向量对应的特征值(Eigen Value)  
如果$\boldsymbol{v}$是$\boldsymbol{A}$的特征向量，那么任何缩放后的向量$s\boldsymbol{v}(s\in\mathbb{R},s\neq0)$也是$\boldsymbol{A}$的特征向量。此外$\boldsymbol{v}$和$s\boldsymbol{v}$有相同的特征值。基于这个原因，通常我们只考虑单位特征向量  
假设矩阵$\boldsymbol{A}$有$n$个线性无关的特征向量$\{\boldsymbol{v}^{(1)},\boldsymbol{v}^{(2)},\cdots,\boldsymbol{v}^{(n)}\}$，对应的特征向值为$\{\lambda_1,\lambda_2,\cdots,\lambda_n\}$,那么可以将这些特征向量组成一个新的矩阵$\boldsymbol{V}$，使其每一列都是一个特征向量
$$
\boldsymbol{V}=[\boldsymbol{v}^{(1)},\boldsymbol{v}^{(2)},\cdots,\boldsymbol{v}^{(n)}]
$$
并且将特征值组成一个对角矩阵
$$
\boldsymbol{\Lambda}=\text{diag}{[\lambda_1,\lambda_2,\cdots,\lambda_n]}
$$
那么方阵$\boldsymbol{A}$的特征分解可以记为:
$$
\boldsymbol{A}=\boldsymbol{V}\boldsymbol{\Lambda}\boldsymbol{V}^{-1}
$$
使用numpy求矩阵的特征向量和特征值
```python
# 定义一个 3x3 矩阵
A = np.array([[3, 4, 7],
              [0, 2, 5],
              [1, 9, 9]])

# 计算特征值、特征向量
eigenvalues, eigenvectors = np.linalg.eig(A)

print("特征值：")
print(eigenvalues)

print("\n特征向量（每一列是一个）：")
print(eigenvectors)
```

## 8. 奇异值分解(Singular Value Decomposition,SVD)
奇异值分解是另一种分解矩阵的方法，不同于特征分解只能用于方阵，奇异值分解可以应用与任何形状的矩阵.  
经过奇异值分解，矩阵$\boldsymbol{A}$可以被分解为三个矩阵的乘积:  
$$
\boldsymbol{A}=\boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{T}
$$
如果矩阵$\boldsymbol{A}$是$m\times n$的矩阵，那么:  
  * $\boldsymbol{U}$: 是$m\times m$正交矩阵,其列向量被称为**左奇异向量**，通常代表了原始数据在行空间上的特征
  * $\boldsymbol{\Sigma}$: 是$m\times n$对角矩阵，对角线上的元素$\sigma_i$称为**奇异值**(Singular Values),他们按照从大到小的顺序排列，$\sigma_1 \ge \sigma_2 \ge \dots \ge 0$
  * $\boldsymbol{V}^{T}$: 是一个 $n \times n$ 的正交矩阵,其行向量（即 $V$ 的列向量）被称为**右奇异向量**，代表了原始数据在列空间上的特征

### 8.1 几何意义
如果把矩阵$\boldsymbol{A}$视作一个几何线性变换矩阵，那么奇异值分解可以将这个变换分解为三个步骤
  * 旋转 ($V^T$)：在原空间中进行坐标旋转，不改变向量长度
  * 缩放 ($\Sigma$)：在旋转后的坐标轴方向上进行拉伸或压缩
  * 再次旋转 ($U$)：在目标空间中再次进行坐标旋转。

### 8.2 使用numpy计算
```python
A = np.array([[1, 2, 3],
              [4, 5, 6]])

U, S, VT = np.linalg.svd(A)

print("U:\n", U)
print("S（奇异值）:\n", S)
print("VT:\n", VT)
print(f"VT[0]={VT[0]}, VT[1]={VT[1]}, VT[2]={VT[2]}")
```
numpy输出的S是特征值向量，如果需要转换为对角矩阵，可以使用`np.diag(S)`转换为对角矩阵，但这个对角矩阵是方阵，需要在补充全零的行向量或者列向量，使其成为$m\times n$的对角矩阵

## 9. 伪逆(Moore-Penrose)
TODO...

## 10. 迹运算
TODO...

