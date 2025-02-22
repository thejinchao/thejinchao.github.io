---
title: "JPEG算法解密（五）"
tags:  压缩 图像 程序 算法
---
# JPEG算法解密（五）

最后，我提供给大家一个简易的jpeg压缩算法的代码，这份代码用C++编写，以开源方式提供，放在了github上，可以到下面这个网址下载  
[http://github.com/thejinchao/jpeg_encoder](http://github.com/thejinchao/jpeg_encoder)  
使用方法很简单，像下面这样就可以了  
```cpp :no-line-numbers
#include "jpeg_encoder.h"
 
JpegEncoder encoder;
//输入的文件必须是24bit的bmp文件，尺寸必须是8的倍数
encoder.readFromBMP(inputFileName);
 
//第二个参数在1~199之间，代表文件压缩程度，数字越大，压缩后的文件体积越小
encoder.encodeToJPG(outputFileName, 50);
```
这份代码只是为了配合这个系列的文章，所以没有考虑优化，如果你想在实际工程中使用jpeg的压缩算法，还是使用被广泛应用的libjpeg或者OpenJpeg。  

------
参考资料：  
【1】[http://www.impulseadventure.com/photo/jpeg-huffman-coding.html](http://www.impulseadventure.com/photo/jpeg-huffman-coding.html)  
【2】[http://www.mysanco.cn/index.php?class=wenku&action=wenku_item&id=96](http://www.mysanco.cn/index.php?class=wenku&action=wenku_item&id=96)  
【3】[http://www.codingnow.com/2000/download/jpeg.txt](http://www.codingnow.com/2000/download/jpeg.txt)  
【4】[http://jingyan.baidu.com/article/cbf0e500f1ce562eaa2893f4.html](http://jingyan.baidu.com/article/cbf0e500f1ce562eaa2893f4.html)  
【5】[http://www.codeproject.com/Articles/83225/A-Simple-JPEG-Encoder-in-C](http://www.codeproject.com/Articles/83225/A-Simple-JPEG-Encoder-in-C)  

