import{_ as r,c as s,b as i,a as t,d,e,f as u,r as a,o}from"./app-BZ0j62cq.js";const b="/images/2014/08/hufman7.gif",p={},g={class:"gridtable",style:{width:"600px","text-align":"center"}},x={style:{width:"500px"}},h={class:"gridtable",align:"center",style:{width:"600px","text-align":"center"}},y={style:{width:"500px"},colspan:"8"},m={class:"gridtable",align:"center",style:{width:"600px","text-align":"center"}},f={style:{width:"500px"},colspan:"8"},w={class:"gridtable",align:"center",style:{width:"800px","text-align":"center"}},B={style:{width:"700px"},colspan:"8"},E={class:"gridtable",align:"center",style:{width:"800px","text-align":"center"}},D={style:{width:"700px"},colspan:"8"},O={class:"gridtable",style:{width:"1000px","text-align":"center"}},A={style:{width:"900px"},colspan:"14"},C={colspan:"14"},J={colspan:"14"};function P(G,l){const n=a("center");return o(),s("div",null,[l[34]||(l[34]=i(`<h1 id="jpeg算法解密-四" tabindex="-1"><a class="header-anchor" href="#jpeg算法解密-四"><span>JPEG算法解密（四）</span></a></h1><h3 id="步骤五-哈弗曼编码" tabindex="-1"><a class="header-anchor" href="#步骤五-哈弗曼编码"><span>步骤五：哈弗曼编码</span></a></h3><hr><p>JPEG压缩的最后一步是对数据进行哈弗曼编码(Huffman coding)，哈弗曼几乎是所有压缩算法的基础，它的基本原理是根据数据中元素的使用频率，调整元素的编码长度，以得到更高的压缩比。<br> 举个例子，比如下面这段数据</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AABCBABBCDBBDDBAABDBBDABBBBDDEDBD</span>
<span class="line"></span></code></pre></div><p>这段数据里面包含了33个字符，每种字符出现的次数统计如下</p><table class="gridtable" style="width:400px;text-align:center;border-collapse:collapse;"><tbody><tr><th style="width:100px;">字符</th><td style="width:60px;">A</td><td style="width:60px;">B</td><td style="width:60px;">C</td><td style="width:60px;">D</td><td style="width:60px;">E</td></tr><tr><th>次数</th><td>6</td><td>15</td><td>2</td><td>9</td><td>1</td></tr></tbody></table> 如果我们用我们常见的定长编码，每个字符都是3个bit。 <table class="gridtable" style="width:400px;text-align:center;border-collapse:collapse;"><tbody><tr><th style="width:100px;">字符</th><td style="width:60px;">A</td><td style="width:60px;">B</td><td style="width:60px;">C</td><td style="width:60px;">D</td><td style="width:60px;">E</td></tr><tr><th>编码</th><td>001</td><td>010</td><td>011</td><td>100</td><td>101</td></tr></tbody></table><p>那么这段文字共需要<code>3*33=99</code>个bit来保存，但如果我们根据字符出现的概率来编码，也就是出现频率较高的字符，使用较短的编码，如下：</p><table class="gridtable" style="width:400px;text-align:center;border-collapse:collapse;"><tbody><tr><th style="width:100px;">字符</th><td style="width:60px;">A</td><td style="width:60px;">B</td><td style="width:60px;">C</td><td style="width:60px;">D</td><td style="width:60px;">E</td></tr><tr><th>编码</th><td>110</td><td>0</td><td>1110</td><td>10</td><td>1111</td></tr></tbody></table><p>那么这段文字共需要<code>3*6+1*15+4*2+2*9+4*1=63</code>个bit来保存，压缩比为63%，哈弗曼编码一般都是使用二叉树来生成的，这样得到的编码符合前缀规则，也就是较短的编码不能够是较长编码的前缀，比如字符&#39;B&#39;使用的编码是&#39;0&#39;，那么其他字符的编码的第一个字符都不能是‘0’。<br> 上面这个编码实例，就是由下面的这颗二叉树生成的。</p><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们回到JPEG压缩上，回顾上一节的内容，经过数据量化，我们现在要处理的数据是一串一维数组，举例如下：</p>',14)),t("table",g,[t("tbody",null,[t("tr",null,[l[1]||(l[1]=t("th",{style:{width:"100px","text-align":"left"}},"①原始数据",-1)),t("td",x,[e(n,null,{default:u(()=>l[0]||(l[0]=[d("35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0")])),_:1})])])])]),l[35]||(l[35]=d(" 在实际的压缩过程中，数据中的0出现的概率非常高，所以首先要做的事情，是使用RLE编码对其中的0进行处理，把数据中的非零的数据，以及数据前面0的个数作为一个处理单元。 ")),t("table",h,[t("tbody",null,[t("tr",null,[l[3]||(l[3]=t("th",{style:{width:"100px","text-align":"left"}},"①原始数据",-1)),t("td",y,[e(n,null,{default:u(()=>[l[2]||(l[2]=d("35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0")),e(n)]),_:1})])]),l[4]||(l[4]=t("tr",null,[t("th",{style:{"text-align":"left"}},[t("strong",null,"②RLE编码")]),t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",null,"0,0,…,0,8"),t("td",null,"0,0,…,0")],-1))])]),l[36]||(l[36]=d(" 如果其中某个单元的0的个数超过16，则需要分成每16个一组，如果最后一个单元全都是0，则使用特殊字符“EOB”表示，EOB意思就是“后面的数据全都是0”, ")),t("table",m,[t("tbody",null,[t("tr",null,[l[6]||(l[6]=t("th",{style:{width:"100px","text-align":"left"}},"①原始数据",-1)),t("td",f,[e(n,null,{default:u(()=>[l[5]||(l[5]=d("35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0")),e(n)]),_:1})])]),l[7]||(l[7]=t("tr",null,[t("th",{style:{"text-align":"left"},rowspan:"3"},[t("strong",null,"②RLE编码")]),t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",{colspan:"2"},"0,0,…,0,8"),t("td",null,"0,0,…,0")],-1)),l[8]||(l[8]=t("tr",null,[t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",null,"0,0,…,0"),t("td",null,"0,0,8"),t("td",null,"0,0,…,0")],-1)),l[9]||(l[9]=t("tr",null,[t("td",null,"(0,35)"),t("td",null,"(0,7)"),t("td",null,"(3,-6)"),t("td",null,"(0,-2)"),t("td",null,"(2,-9)"),t("td",null,"(15,0)"),t("td",null,"(2,8)"),t("td",null,"EOB")],-1))])]),l[37]||(l[37]=i(' 其中（15,0）表示15+1也就是16个0，接下来我们要处理的是括号里右面的数字，这个数字的取值范围在-2047~2047之间，JPEG提供了一张标准的码表用于对这些数字编码： <table class="gridtable" style="width:550px;text-align:center;"><tbody><tr><th style="width:250px;" colspan="2">Value</th><th style="width:50px;">Size</th><th style="width:250px;" colspan="2">Bits </th></tr><tr><td align="center" colspan="2">0</td><td>0</td><td align="center" colspan="2">–</td></tr><tr><td align="right">-1</td><td align="left">1</td><td>1</td><td align="right">0</td><td align="left">1</td></tr><tr><td align="right">-3,-2</td><td align="left">2,3</td><td>2</td><td align="right">00,01</td><td align="left">10,11</td></tr><tr><td align="right">-7,-6,-5,-4</td><td align="left">4,5,6,7</td><td>3</td><td align="right">000,001,010,011</td><td align="left">100,101,110,111</td></tr><tr><td align="right">-15,…,-8</td><td align="left">8,…,15</td><td>4</td><td align="right">0000,…,0111</td><td align="left">1000,…,1111</td></tr><tr><td align="right">-31,…,-16</td><td align="left">16,…,31</td><td>5</td><td align="right">0 0000,…,0 1111</td><td align="left">1 0000,…,1 1111 </td></tr><tr><td align="right">-63,…,-32</td><td align="left">32,…,63</td><td>6</td><td align="right">00 0000,…</td><td align="left">…,11 1111 </td></tr><tr><td align="right">-127,…,-64</td><td align="left">64,…,127</td><td>7</td><td align="right">000 0000,…</td><td align="left">…,111 1111 </td></tr><tr><td align="right">-255,…,-128</td><td align="left">128,…,255</td><td>8</td><td align="right">0000 0000,…</td><td align="left">…,1111 1111 </td></tr><tr><td align="right">-511,…,-256</td><td align="left">256,…,511</td><td>9</td><td align="right">0 0000 0000,…</td><td align="left">…,1 1111 1111 </td></tr><tr><td align="right">-1023,…,-512</td><td align="left">512,…,1023</td><td>10</td><td align="right">00 0000 0000,…</td><td align="left">…,11 1111 1111 </td></tr><tr><td align="right">-2047,…,-1024</td><td align="left">1024,…,2047</td><td>11</td><td align="right">000 0000 0000,…</td><td align="left">…,111 1111 1111</td></tr></tbody></table> 举例来说，第一个单元中的“35”这个数字，在表中的位置是长度为6的那组，所对应的bit码是“100011”，而“-6”的编码是”001″，由于这种编码附带长度信息，所以我们的数据变成了如下的格式。 ',3)),t("table",w,[t("tbody",null,[t("tr",null,[l[11]||(l[11]=t("th",{style:{width:"100px","text-align":"left"}},"①原始数据",-1)),t("td",B,[e(n,null,{default:u(()=>[l[10]||(l[10]=d("35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0")),e(n)]),_:1})])]),l[12]||(l[12]=t("tr",null,[t("th",{style:{"text-align":"left"},rowspan:"3"},[t("strong",null,"②RLE编码")]),t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",{colspan:"2"},"0,0,…,0,8"),t("td",null,"0,0,…,0")],-1)),l[13]||(l[13]=t("tr",{style:{padding:"3px 3px"}},[t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",null,"0,0,…,0"),t("td",null,"0,0,8"),t("td",null,"0,0,…,0")],-1)),l[14]||(l[14]=t("tr",null,[t("td",null,"(0,35)"),t("td",null,"(0,7)"),t("td",null,"(3,-6)"),t("td",null,"(0,-2)"),t("td",null,"(2,-9)"),t("td",null,"(15,0)"),t("td",null,"(2,8)"),t("td",null,"EOB")],-1)),l[15]||(l[15]=t("tr",null,[t("th",{style:{"text-align":"left"}},[t("strong",null,"③BIT编码")]),t("td",null,[d("(0,6, "),t("em",null,[t("b",null,"100011")]),d(")")]),t("td",null,[d("(0,3, "),t("em",null,[t("b",null,"111")]),d(")")]),t("td",null,[d("(3,3, "),t("em",null,[t("b",null,"001")]),d(")")]),t("td",null,[d("(0,2, "),t("em",null,[t("b",null,"01")]),d(")")]),t("td",null,[d("(2,4, "),t("em",null,[t("b",null,"0110")]),d(")")]),t("td",null,"(15,-)"),t("td",null,[d("(2,4, "),t("em",null,[t("b",null,"1000")]),d(")")]),t("td",null,"EOB")],-1))])]),l[38]||(l[38]=d(" 括号中前两个数字分都在0~15之间，所以这两个数可以合并成一个byte，高四位是前面0的个数，后四位是后面数字的位数。 ")),t("table",E,[t("tbody",null,[t("tr",null,[l[17]||(l[17]=t("th",{style:{width:"100px","text-align":"left"}},"①原始数据",-1)),t("td",D,[e(n,null,{default:u(()=>[l[16]||(l[16]=d("35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0")),e(n)]),_:1})])]),l[18]||(l[18]=t("tr",null,[t("th",{style:{"text-align":"left"},rowspan:"3"},[t("strong",null,"②RLE编码")]),t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",{colspan:"2"},"0,0,…,0,8"),t("td",null,"0,0,…,0")],-1)),l[19]||(l[19]=t("tr",{style:{padding:"3px 3px"}},[t("td",null,"35"),t("td",null,"7"),t("td",null,"0,0,0,-6"),t("td",null,"-2"),t("td",null,"0,0,-9"),t("td",null,"0,0,…,0"),t("td",null,"0,0,8"),t("td",null,"0,0,…,0")],-1)),l[20]||(l[20]=t("tr",null,[t("td",null,"(0,35)"),t("td",null,"(0,7)"),t("td",null,"(3,-6)"),t("td",null,"(0,-2)"),t("td",null,"(2,-9)"),t("td",null,"(15,0)"),t("td",null,"(2,8)"),t("td",null,"EOB")],-1)),l[21]||(l[21]=t("tr",null,[t("th",{style:{"text-align":"left"},rowspan:"2"},[t("strong",null,"③BIT编码")]),t("td",null,[d("(0,6, "),t("em",null,[t("b",null,"100011")]),d(")")]),t("td",null,[d("(0,3, "),t("em",null,[t("b",null,"111")]),d(")")]),t("td",null,[d("(3,3, "),t("em",null,[t("b",null,"001")]),d(")")]),t("td",null,[d("(0,2, "),t("em",null,[t("b",null,"01")]),d(")")]),t("td",null,[d("(2,4, "),t("em",null,[t("b",null,"0110")]),d(")")]),t("td",null,"(15,-)"),t("td",null,[d("(2,4, "),t("em",null,[t("b",null,"1000")]),d(")")]),t("td",null,"EOB")],-1)),l[22]||(l[22]=t("tr",null,[t("td",null,[d("(0x6,"),t("em",null,[t("b",null,"100011")]),d(")")]),t("td",null,[d("(0x3,"),t("em",null,[t("b",null,"111")]),d(")")]),t("td",null,[d("(0x33,"),t("em",null,[t("b",null,"001")]),d(")")]),t("td",null,[d("(0x2,"),t("em",null,[t("b",null,"01")]),d(")")]),t("td",null,[d("(0x24,"),t("em",null,[t("b",null,"0110")]),d(")")]),t("td",null,"(0xF0,-)"),t("td",null,[d("(0x24,"),t("em",null,[t("b",null,"1000")]),d(")")]),t("td",null,"EOB")],-1))])]),l[39]||(l[39]=i(' 对于括号前面的数字的编码，就要使用到我们提到的哈弗曼编码了，比如下面这张表，就是一张针对数据中的第一个单元，也就是直流(DC)部分的哈弗曼表，由于直流部分没有前置的0，所以取值范围在0~15之间。 <table class="gridtable" style="width:300px;text-align:left;"><tbody><tr><th style="width:50px;">Length</th><th style="width:80px;">Value</th><th style="width:170px;">Bits</th></tr><tr><td>3 bits </td><td>04<br>05<br>03<br>02<br>06<br>01<br>00 (EOB) </td><td>000<br>001<br>010<br>011<br>100<br>101<br>110</td></tr><tr><td>4 bits </td><td>07</td><td>1110</td></tr><tr><td>5 bits </td><td>08</td><td>1111 0</td></tr><tr><td>6 bits </td><td>09</td><td>1111 10</td></tr><tr><td>7 bits </td><td>0A</td><td>1111 110 </td></tr><tr><td>8 bits </td><td>0B</td><td>1111 1110 </td></tr></tbody></table> 举例来说，示例中的DC部分的数据是0x06，对应的二进制编码是“100”，而对于后面的交流部分，取值范围在0~255之间，所以对应的哈弗曼表会更大一些 <table class="gridtable" style="width:300px;text-align:left;"><tbody><tr><th style="width:50px;">Length</th><th style="width:80px;">Value</th><th style="width:170px;">Bits</th></tr><tr><td>2 bits </td><td>01<br>02</td><td>00<br>01</td></tr><tr><td>3 bits </td><td>03</td><td>100</td></tr><tr><td>4 bits </td><td>00 (EOB)<br>04<br>11</td><td>1010<br>1011<br>1100</td></tr><tr><td>5 bits </td><td>05<br>12<br>21</td><td>1101 0<br>1101 1<br>1110 0 </td></tr><tr><td>6 bits </td><td>31<br>41</td><td>1110 10<br>1110 11 </td></tr><tr><td>…</td><td>…</td><td>…</td></tr><tr><td>12 bits </td><td>24<br>33<br>62<br>72</td><td>1111 1111 0100<br>1111 1111 0101<br>1111 1111 0110<br>1111 1111 0111</td></tr><tr><td>15 bits</td><td>82</td><td>1111 1111 1000 000</td></tr><tr><td>16 bits </td><td>09<br>…<br>FA</td><td>1111 1111 1000 0010<br>…<br>1111 1111 1111 1110</td></tr></tbody></table> 这样经过哈弗曼编码，并且序列化后，最终数据成为如下形式 ',5)),t("table",O,[t("tbody",null,[t("tr",null,[l[24]||(l[24]=t("th",{style:{width:"100px","text-align":"left"}},"①原始数据",-1)),t("td",A,[e(n,null,{default:u(()=>[l[23]||(l[23]=d("35,7,0,0,0,-6,-2,0,0,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,…,0")),e(n)]),_:1})])]),l[28]||(l[28]=t("tr",null,[t("th",{rowspan:"3",style:{"text-align":"left"}},[t("strong",null,"②RLE编码")]),t("td",{colspan:"2"},"35"),t("td",{colspan:"2"},"7"),t("td",{colspan:"2"},"0,0,0,-6"),t("td",{colspan:"2"},"-2"),t("td",{colspan:"2"},"0,0,-9"),t("td",{colspan:"3"},"0,0,…,0,8"),t("td",null,"0,0,…,0")],-1)),l[29]||(l[29]=t("tr",{style:{padding:"3px 3px"}},[t("td",{colspan:"2"},"35"),t("td",{colspan:"2"},"7"),t("td",{colspan:"2"},"0,0,0,-6"),t("td",{colspan:"2"},"-2"),t("td",{colspan:"2"},"0,0,-9"),t("td",null,"0,0,…,0"),t("td",{colspan:"2"},"0,0,8"),t("td",null,"0,0,…,0")],-1)),l[30]||(l[30]=t("tr",null,[t("td",{colspan:"2"},"(0,35)"),t("td",{colspan:"2"},"(0,7)"),t("td",{colspan:"2"},"(3,-6)"),t("td",{colspan:"2"},"(0,-2)"),t("td",{colspan:"2"},"(2,-9)"),t("td",null,"(15,0)"),t("td",{colspan:"2"},"(2,8)"),t("td",null,"EOB")],-1)),l[31]||(l[31]=t("tr",null,[t("th",{style:{"text-align":"left"},rowspan:"2"},[t("strong",null,"③BIT编码")]),t("td",{colspan:"2"},[d("(0,6, "),t("em",null,[t("b",null,"100011")]),d(")")]),t("td",{colspan:"2"},[d("(0,3, "),t("em",null,[t("b",null,"111")]),d(")")]),t("td",{colspan:"2"},[d("(3,3, "),t("em",null,[t("b",null,"001")]),d(")")]),t("td",{colspan:"2"},[d("(0,2, "),t("em",null,[t("b",null,"01")]),d(")")]),t("td",{colspan:"2"},[d("(2,4, "),t("em",null,[t("b",null,"0110")]),d(")")]),t("td",null,"(15,-)"),t("td",{colspan:"2"},[d("(2,4, "),t("em",null,[t("b",null,"1000")]),d(")")]),t("td",null,"EOB")],-1)),l[32]||(l[32]=t("tr",null,[t("td",{colspan:"2"},[d("(0x6,"),t("em",null,[t("b",null,"100011")]),d(")")]),t("td",{colspan:"2"},[d("(0x3,"),t("em",null,[t("b",null,"111")]),d(")")]),t("td",{colspan:"2"},[d("(0x33,"),t("em",null,[t("b",null,"001")]),d(")")]),t("td",{colspan:"2"},[d("(0x2,"),t("em",null,[t("b",null,"01")]),d(")")]),t("td",{colspan:"2"},[d("(0x24,"),t("em",null,[t("b",null,"0110")]),d(")")]),t("td",null,"0xF0"),t("td",{colspan:"2"},[d("(0x24,"),t("em",null,[t("b",null,"1000")]),d(")")]),t("td",null,"EOB")],-1)),l[33]||(l[33]=t("tr",null,[t("th",{style:{"text-align":"left"}},[t("strong",null,"④哈弗曼编码")]),t("td",null,[t("em",null,[t("b",null,"100")])]),t("td",null,[t("em",null,[t("b",null,"100011")])]),t("td",null,[t("em",null,[t("b",null,"100")])]),t("td",null,[t("em",null,[t("b",null,"111")])]),t("td",null,[t("em",null,[t("b",null,"1111 1111 0101")])]),t("td",null,[t("em",null,[t("b",null,"001")])]),t("td",null,[t("em",null,[t("b",null,"01")])]),t("td",null,[t("em",null,[t("b",null,"01")])]),t("td",null,[t("em",null,[t("b",null,"1111 1111 0100")])]),t("td",null,[t("em",null,[t("b",null,"0110")])]),t("td",null,[t("em",null,[t("b",null,"1111 1111 001")])]),t("td",null,[t("em",null,[t("b",null,"1111 1111 0100")])]),t("td",null,[t("em",null,[t("b",null,"1000")])]),t("td",null,[t("em",null,[t("b",null,"1010")])])],-1)),t("tr",null,[l[26]||(l[26]=t("th",{style:{"text-align":"left"},rowspan:"2"},"⑤序列化",-1)),t("td",C,[e(n,null,{default:u(()=>[l[25]||(l[25]=d("100100011100111111111110101001010111111111010001101111111100111111111010010001010")),e(n)]),_:1})])]),t("tr",null,[t("td",J,[e(n,null,{default:u(()=>[l[27]||(l[27]=d("91 CF FE A5 7F D1 BF CF FA 45")),e(n)]),_:1})])])])])])}const L=r(p,[["render",P],["__file","JPEG004.html.vue"]]),j=JSON.parse('{"path":"/blog/2025/02/JPEG004.html","title":"JPEG算法解密（四）","lang":"zh-CN","frontmatter":{"title":"JPEG算法解密（四）","tags":"压缩 图像 程序 算法"},"headers":[{"level":3,"title":"步骤五：哈弗曼编码","slug":"步骤五-哈弗曼编码","link":"#步骤五-哈弗曼编码","children":[]}],"git":{"updatedTime":1740225290000,"contributors":[{"name":"thejinchao","username":"thejinchao","email":"thejinchao@gmail.com","commits":1,"url":"https://github.com/thejinchao"}]},"filePathRelative":"blog/2025/02/JPEG004.md"}');export{L as comp,j as data};
