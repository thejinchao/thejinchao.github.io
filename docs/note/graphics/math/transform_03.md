# 几何变换（三）
----
## 7. 法线变换
做几何变换时，法线比较特殊，需要保证法线经过变换之后仍然垂直于原先的切平面，如果使用和顶点变换相同的变换，无法保证这一点

### 7.1 举例

![](./transform_normal.svg)

如图，线段ab经过放缩变换之后成为a'b'，但法线经过同样的放缩矩阵变换之后发生错误，实际法线需要另外的矩阵计算

### 7.2 法线变换矩阵
以上图为例，设$\vec{\boldsymbol{u}}=\vec{ab}$，那么$\vec{\boldsymbol{u}}\cdot\vec{\boldsymbol{n}}=0$，用矩阵的方式表达，$\mathrm{u}=[u_x, u_y, u_z]$, $\mathrm{n}=[n_x, n_y, n_z]$，就是$\mathrm{u}\mathrm{n}^T=0$
设从$\vec{ab}$到$\vec{a'b'}$的变换矩阵为$A$，根据转置矩阵的[基本运算规则](/note/graphics/math/math_02.html#_3-5-基本运算规则) ，可以得到
$$\begin{split}
0&=\mathrm{u}\mathrm{n}^T\\
&=\mathrm{u}(\mathrm{AA^{-1}})\mathrm{n}^T \\
&=(\mathrm{uA})(\mathrm{A^{-1}n^T}) \\
&=(\mathrm{uA})((\mathrm{A^{-1}n^T})^T)^T \\
&=(\mathrm{uA})(\mathrm{n(A^{-1})^T})^T \\
&=(\vec{\boldsymbol{u}}\mathrm{A})\cdot(\vec{\boldsymbol{n}}(\mathrm{A}^{-1})^T) \\
&= (\vec{\boldsymbol{u}}\mathrm{A})\cdot(\vec{\boldsymbol{n}}\mathrm B)
\end{split}$$
所以法线转换矩阵为
$$
\mathrm{B}=(\mathrm{A}^{-1})^T
$$