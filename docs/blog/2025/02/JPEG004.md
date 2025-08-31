---
title: "JPEG算法解密（四）"
tags:  压缩 图像 程序 算法
prev:
  text: JPEG算法解密（三）
  link: JPEG003.md
next:
  text: JPEG算法解密（五）
  link: JPEG005.md
---
# JPEG算法解密（四）

### 步骤五：哈弗曼编码
----
JPEG压缩的最后一步是对数据进行哈弗曼编码(Huffman coding)，哈弗曼几乎是所有压缩算法的基础，它的基本原理是根据数据中元素的使用频率，调整元素的编码长度，以得到更高的压缩比。  
举个例子，比如下面这段数据
``` :no-line-numbers
AABCBABBCDBBDDBAABDBBDABBBBDDEDBD
```
这段数据里面包含了33个字符，每种字符出现的次数统计如下
<table class="gridtable" style="width:400px; text-align: center; border-collapse: collapse;">
<tbody>
<tr>
<th style="width:100px;">字符</th>
<td style="width:60px;">A</td>
<td style="width:60px;">B</td>
<td style="width:60px;">C</td>
<td style="width:60px;">D</td>
<td style="width:60px;">E</td>
</tr>
<tr>
<th>次数</th>
<td>6</td>
<td>15</td>
<td>2</td>
<td>9</td>
<td>1</td>
</tr>
</tbody>
</table>
如果我们用我们常见的定长编码，每个字符都是3个bit。
<table class="gridtable" style="width:400px; text-align: center; border-collapse: collapse;">
<tbody>
<tr>
<th style="width:100px;">字符</th>
<td style="width:60px;">A</td>
<td style="width:60px;">B</td>
<td style="width:60px;">C</td>
<td style="width:60px;">D</td>
<td style="width:60px;">E</td>
</tr>
<tr>
<th>编码</th>
<td>001</td>
<td>010</td>
<td>011</td>
<td>100</td>
<td>101</td>
</tr>
</tbody>
</table>

那么这段文字共需要`3*33=99`个bit来保存，但如果我们根据字符出现的概率来编码，也就是出现频率较高的字符，使用较短的编码，如下：

<table class="gridtable" style="width:400px; text-align: center; border-collapse: collapse;">
<tbody>
<tr>
<th style="width:100px;">字符</th>
<td style="width:60px;">A</td>
<td style="width:60px;">B</td>
<td style="width:60px;">C</td>
<td style="width:60px;">D</td>
<td style="width:60px;">E</td>
</tr>
<tr>
<th>编码</th>
<td>110</td>
<td>0</td>
<td>1110</td>
<td>10</td>
<td>1111</td>
</tr>
</tbody>
</table>

那么这段文字共需要`3*6+1*15+4*2+2*9+4*1=63`个bit来保存，压缩比为63%，哈弗曼编码一般都是使用二叉树来生成的，这样得到的编码符合前缀规则，也就是较短的编码不能够是较长编码的前缀，比如字符'B'使用的编码是'0'，那么其他字符的编码的第一个字符都不能是‘0’。  
上面这个编码实例，就是由下面的这颗二叉树生成的。  

![](/images/2014/08/hufman7.gif)

我们回到JPEG压缩上，回顾上一节的内容，经过数据量化，我们现在要处理的数据是一串一维数组，举例如下：

<table class="gridtable" style="width:600px; text-align:center;">
<tbody>
<tr>
<th style="width:100px; text-align:left;">①原始数据</th>
<td style="width:500px;"><center>35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0</center></td>
</tr>
</tbody>
</table>
在实际的压缩过程中，数据中的0出现的概率非常高，所以首先要做的事情，是使用RLE编码对其中的0进行处理，把数据中的非零的数据，以及数据前面0的个数作为一个处理单元。
<table class="gridtable" align="center"style="width:600px; text-align:center;">
<tbody>
<tr>
<th style="width:100px; text-align:left;">①原始数据</th>
<td style="width:500px;" colspan="8"><center>35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0<center></center></center></td>
</tr>
<tr>
<th style="text-align:left;"><strong>②RLE编码</strong></th>
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td>0,0,…,0,8</td>
<td>0,0,…,0</td>
</tr>
</tbody>
</table>
如果其中某个单元的0的个数超过16，则需要分成每16个一组，如果最后一个单元全都是0，则使用特殊字符“EOB”表示，EOB意思就是“后面的数据全都是0”,
<table class="gridtable" align="center" style="width:600px; text-align:center;">
<tbody>
<tr>
<th style="width:100px; text-align:left;">①原始数据</th>
<td style="width:500px;" colspan="8"><center>35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0<center></center></center></td>
</tr>
<tr>
<th style="text-align:left;" rowspan="3"><strong>②RLE编码</strong></th>
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td colspan="2">0,0,…,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr>
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td>0,0,…,0</td>
<td>0,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr>
<td>(0,35)</td>
<td>(0,7)</td>
<td>(3,-6)</td>
<td>(0,-2)</td>
<td>(2,-9)</td>
<td>(15,0)</td>
<td>(2,8)</td>
<td>EOB</td>
</tr>
</tbody>
</table>
其中（15,0）表示15+1也就是16个0，接下来我们要处理的是括号里右面的数字，这个数字的取值范围在-2047~2047之间，JPEG提供了一张标准的码表用于对这些数字编码：
<table class="gridtable" style="width: 550px; text-align:center;">
<tbody>
<tr>
<th style="width: 250px" colspan="2">Value</th>
<th style="width: 50px">Size</th>
<th style="width: 250px" colspan="2">Bits </th>
</tr>
<tr>
<td align="center" colspan="2">0</td>
<td>0</td>
<td align="center" colspan="2">–</td>
</tr>
<tr>
<td align="right">-1</td>
<td align="left">1</td>
<td>1</td>
<td align="right">0</td>
<td align="left">1</td>
</tr>
<tr>
<td align="right">-3,-2</td>
<td align="left">2,3</td>
<td>2</td>
<td align="right">00,01</td>
<td align="left">10,11</td>
</tr>
<tr>
<td align="right">-7,-6,-5,-4</td>
<td align="left">4,5,6,7</td>
<td>3</td>
<td align="right">000,001,010,011</td>
<td align="left">100,101,110,111</td>
</tr>
<tr>
<td align="right">-15,…,-8</td>
<td align="left">8,…,15</td>
<td>4</td>
<td align="right">0000,…,0111</td>
<td align="left">1000,…,1111</td>
</tr>
<tr>
<td align="right">-31,…,-16</td>
<td align="left">16,…,31</td>
<td>5</td>
<td align="right">0 0000,…,0 1111</td>
<td align="left">1 0000,…,1 1111 </td>
</tr>
<tr>
<td align="right">-63,…,-32</td>
<td align="left">32,…,63</td>
<td>6</td>
<td align="right">00 0000,…</td>
<td align="left">…,11 1111 </td>
</tr>
<tr>
<td align="right">-127,…,-64</td>
<td align="left">64,…,127</td>
<td>7</td>
<td align="right">000 0000,…</td>
<td align="left">…,111 1111 </td>
</tr>
<tr>
<td align="right">-255,…,-128</td>
<td align="left">128,…,255</td>
<td>8</td>
<td align="right">0000 0000,…</td>
<td align="left">…,1111 1111 </td>
</tr>
<tr>
<td align="right">-511,…,-256</td>
<td align="left">256,…,511</td>
<td>9</td>
<td align="right">0 0000 0000,…</td>
<td align="left">…,1 1111 1111 </td>
</tr>
<tr>
<td align="right">-1023,…,-512</td>
<td align="left">512,…,1023</td>
<td>10</td>
<td align="right">00 0000 0000,…</td>
<td align="left">…,11 1111 1111 </td>
</tr>
<tr>
<td align="right">-2047,…,-1024</td>
<td align="left">1024,…,2047</td>
<td>11</td>
<td align="right">000 0000 0000,…</td>
<td align="left">…,111 1111 1111</td>
</tr>
</tbody>
</table>
举例来说，第一个单元中的“35”这个数字，在表中的位置是长度为6的那组，所对应的bit码是“100011”，而“-6”的编码是”001″，由于这种编码附带长度信息，所以我们的数据变成了如下的格式。
<table class="gridtable" align="center" style="width:800px; text-align:center;">
<tbody>
<tr>
<th style="width:100px;text-align:left;">①原始数据</th>
<td style="width:700px;" colspan="8"><center>35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0<center></center></center></td>
</tr>
<tr>
<th style="text-align:left;" rowspan="3"><strong>②RLE编码</strong></th>
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td colspan="2">0,0,…,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr style="padding: 3px 3px;">
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td>0,0,…,0</td>
<td>0,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr>
<td>(0,35)</td>
<td>(0,7)</td>
<td>(3,-6)</td>
<td>(0,-2)</td>
<td>(2,-9)</td>
<td>(15,0)</td>
<td>(2,8)</td>
<td>EOB</td>
</tr>
<tr>
<th style="text-align:left;"><strong>③BIT编码</strong></th>
<td>(0,6, <em><b>100011</b></em>)</td>
<td>(0,3, <em><b>111</b></em>)</td>
<td>(3,3, <em><b>001</b></em>)</td>
<td>(0,2, <em><b>01</b></em>)</td>
<td>(2,4, <em><b>0110</b></em>)</td>
<td>(15,-)</td>
<td>(2,4, <em><b>1000</b></em>)</td>
<td>EOB</td>
</tr>
</tbody>
</table>
括号中前两个数字分都在0~15之间，所以这两个数可以合并成一个byte，高四位是前面0的个数，后四位是后面数字的位数。
<table class="gridtable" align="center" style="width:800px; text-align:center;">
<tbody>
<tr>
<th style="width:100px; text-align:left;">①原始数据</th>
<td style="width:700px;" colspan="8"><center>35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0<center></center></center></td>
</tr>
<tr>
<th style="text-align:left;" rowspan="3"><strong>②RLE编码</strong></th>
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td colspan="2">0,0,…,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr style="padding: 3px 3px;">
<td>35</td>
<td>7</td>
<td>0,0,0,-6</td>
<td>-2</td>
<td>0,0,-9</td>
<td>0,0,…,0</td>
<td>0,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr>
<td>(0,35)</td>
<td>(0,7)</td>
<td>(3,-6)</td>
<td>(0,-2)</td>
<td>(2,-9)</td>
<td>(15,0)</td>
<td>(2,8)</td>
<td>EOB</td>
</tr>
<tr>
<th style="text-align:left;" rowspan="2"><strong>③BIT编码</strong></th>
<td>(0,6, <em><b>100011</b></em>)</td>
<td>(0,3, <em><b>111</b></em>)</td>
<td>(3,3, <em><b>001</b></em>)</td>
<td>(0,2, <em><b>01</b></em>)</td>
<td>(2,4, <em><b>0110</b></em>)</td>
<td>(15,-)</td>
<td>(2,4, <em><b>1000</b></em>)</td>
<td>EOB</td>
</tr>
<tr>
<td>(0x6,<em><b>100011</b></em>)</td>
<td>(0x3,<em><b>111</b></em>)</td>
<td>(0x33,<em><b>001</b></em>)</td>
<td>(0x2,<em><b>01</b></em>)</td>
<td>(0x24,<em><b>0110</b></em>)</td>
<td>(0xF0,-)</td>
<td>(0x24,<em><b>1000</b></em>)</td>
<td>EOB</td>
</tr>
</tbody>
</table>
对于括号前面的数字的编码，就要使用到我们提到的哈弗曼编码了，比如下面这张表，就是一张针对数据中的第一个单元，也就是直流(DC)部分的哈弗曼表，由于直流部分没有前置的0，所以取值范围在0~15之间。
<table class="gridtable" style="width:300px; text-align:left;">
<tbody>
<tr>
<th style="width:50px;">Length</th>
<th style="width:80px;">Value</th>
<th style="width:170px;">Bits</th>
</tr>
<tr>
<td>3 bits </td>
<td>04<br>05<br>03<br>02<br>06<br>01<br>00 (EOB) </td>
<td>000<br>001<br>010<br>011<br>100<br>101<br>110</td>
</tr>
<tr>
<td>4 bits </td>
<td>07</td>
<td>1110</td>
</tr>
<tr>
<td>5 bits </td>
<td>08</td>
<td>1111 0</td>
</tr>
<tr>
<td>6 bits </td>
<td>09</td>
<td>1111 10</td>
</tr>
<tr>
<td>7 bits </td>
<td>0A</td>
<td>1111 110 </td>
</tr>
<tr>
<td>8 bits </td>
<td>0B</td>
<td>1111 1110 </td>
</tr>
</tbody>
</table>
举例来说，示例中的DC部分的数据是0x06，对应的二进制编码是“100”，而对于后面的交流部分，取值范围在0~255之间，所以对应的哈弗曼表会更大一些
<table class="gridtable" style="width:300px; text-align:left;">
<tbody>
<tr>
<th style="width:50px;">Length</th>
<th style="width:80px;">Value</th>
<th style="width:170px;">Bits</th>
</tr>
<tr>
<td>2 bits </td>
<td>01<br>02</td>
<td>00<br>01</td>
</tr>
<tr>
<td>3 bits </td>
<td>03</td>
<td>100</td>
</tr>
<tr>
<td>4 bits </td>
<td>00 (EOB)<br>04<br>11</td>
<td>1010<br>1011<br>1100</td>
</tr>
<tr>
<td>5 bits </td>
<td>05<br>12<br>21</td>
<td>1101 0<br>1101 1<br>1110 0 </td>
</tr>
<tr>
<td>6 bits </td>
<td>31<br>41</td>
<td>1110 10<br>1110 11 </td>
</tr>
<tr>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
<tr>
<td>12 bits </td>
<td>24<br>33<br>62<br>72</td>
<td>1111 1111 0100<br>1111 1111 0101<br>1111 1111 0110<br>1111 1111 0111</td>
</tr>
<tr>
<td>15 bits</td>
<td>82</td>
<td>1111 1111 1000 000</td>
</tr>
<tr>
<td>16 bits </td>
<td>09<br>…<br>FA</td>
<td>1111 1111 1000 0010<br>…<br>1111 1111 1111 1110</td>
</tr>
</tbody>
</table>
这样经过哈弗曼编码，并且序列化后，最终数据成为如下形式
<table class="gridtable" style="width:1000px; text-align:center;">
<tbody>
<tr>
<th style="width:100px; text-align:left;">①原始数据</th>
<td style="width:900px;" colspan="14"><center>35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0<center></center></center></td>
</tr>
<tr>
<th rowspan="3" style="text-align:left;"><strong>②RLE编码</strong></th>
<td colspan="2">35</td>
<td colspan="2">7</td>
<td colspan="2">0,0,0,-6</td>
<td colspan="2">-2</td>
<td colspan="2">0,0,-9</td>
<td colspan="3">0,0,…,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr style="padding: 3px 3px;">
<td colspan="2">35</td>
<td colspan="2">7</td>
<td colspan="2">0,0,0,-6</td>
<td colspan="2">-2</td>
<td colspan="2">0,0,-9</td>
<td>0,0,…,0</td>
<td colspan="2">0,0,8</td>
<td>0,0,…,0</td>
</tr>
<tr>
<td colspan="2">(0,35)</td>
<td colspan="2">(0,7)</td>
<td colspan="2">(3,-6)</td>
<td colspan="2">(0,-2)</td>
<td colspan="2">(2,-9)</td>
<td>(15,0)</td>
<td colspan="2">(2,8)</td>
<td>EOB</td>
</tr>
<tr>
<th style="text-align:left;" rowspan="2"><strong>③BIT编码</strong></th>
<td colspan="2">(0,6, <em><b>100011</b></em>)</td>
<td colspan="2">(0,3, <em><b>111</b></em>)</td>
<td colspan="2">(3,3, <em><b>001</b></em>)</td>
<td colspan="2">(0,2, <em><b>01</b></em>)</td>
<td colspan="2">(2,4, <em><b>0110</b></em>)</td>
<td>(15,-)</td>
<td colspan="2">(2,4, <em><b>1000</b></em>)</td>
<td>EOB</td>
</tr>
<tr>
<td colspan="2">(0x6,<em><b>100011</b></em>)</td>
<td colspan="2">(0x3,<em><b>111</b></em>)</td>
<td colspan="2">(0x33,<em><b>001</b></em>)</td>
<td colspan="2">(0x2,<em><b>01</b></em>)</td>
<td colspan="2">(0x24,<em><b>0110</b></em>)</td>
<td>0xF0</td>
<td colspan="2">(0x24,<em><b>1000</b></em>)</td>
<td>EOB</td>
</tr>
<tr>
<th style="text-align:left;"><strong>④哈弗曼编码</strong></th>
<td><em><b>100</b></em></td>
<td><em><b>100011</b></em></td>
<td><em><b>100</b></em></td>
<td><em><b>111</b></em></td>
<td><em><b>1111 1111 0101</b></em></td>
<td><em><b>001</b></em></td>
<td><em><b>01</b></em></td>
<td><em><b>01</b></em></td>
<td><em><b>1111 1111 0100</b></em></td>
<td><em><b>0110</b></em></td>
<td><em><b>1111 1111 001</b></em></td>
<td><em><b>1111 1111 0100</b></em></td>
<td><em><b>1000</b></em></td>
<td><em><b>1010</b></em></td>
</tr>
<tr>
<th style="text-align:left;" rowspan="2">⑤序列化</th>
<td colspan="14"><center>100100011100111111111110101001010111111111010001101111111100111111111010010001010<center></center></center></td>
</tr>
<tr>
<td colspan="14"><center>91 CF FE A5 7F D1 BF CF FA 45<center></center></center></td>
</tr>
</tbody>
</table>
