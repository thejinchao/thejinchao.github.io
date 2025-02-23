# 光照模型（二）

## 2. Blinn-Phong模型

### 2.1 基本定义

![](./Blinn-Phong_Vectors.svg)

和Phong模型很类似，只不过增加了半角向量$\vec{\mathrm{H}}$，也就是指向光源的向量$\vec{\mathrm{L}}$和指向相机的向量$\vec{\mathrm{V}}$的中间向量
$$
\vec{\mathrm{V}}=\frac{\vec{\mathrm{L}}+\vec{\mathrm{V}}}{\|\vec{\mathrm{L}}+\vec{\mathrm{V}}\|}
$$

### 2.2 算法

[https://en.wikipedia.org/wiki/Blinn%E2%80%93Phong_shading_model](https://en.wikipedia.org/wiki/Blinn%E2%80%93Phong_shading_model)

$$
I_\mathrm{BlinnPhong}=I_\mathrm{ambient}+\sum({I_\mathrm{diffuse}+I_\mathrm{specular}})
$$
其中环境光和漫反射和Phong相同
$$
I_\mathrm{diffuse}=(\vec{L}\cdot\vec{N})L_dK_d \\
I_\mathrm{specular}=(\vec{\mathrm{R}}\cdot\vec{\mathrm{V}})^\alpha L_sK_s
$$

高光部分使用$\vec{\mathrm{N}}\cdot\vec{\mathrm{H}}$代替$\vec{\mathrm{R}}\cdot\vec{\mathrm{V}}$
$$
I_\mathrm{specular}=(\vec{\mathrm{N}}\cdot\vec{\mathrm{H}})^nL_sK_s
$$


