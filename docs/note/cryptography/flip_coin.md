# 抛币协议
----
## 1. 使用单向函数

1. Alice和Bob各自选择一个随机字符串，比如"ljngjkrjgnfdudiudd" 和 "gfdgdfjkherfsfsd"
2. Alice随机生成一个抛硬币的结果，比如"tail"
3. Bob把自己的随机字符串发送给Alice
4. Alice把抛币结果和两个人的随机字符串合并成一个新的字符串，例如"tail ljngjkrjgnfdudiudd gfdgdfjkherfsfsd"，并且把这个字符串的hash值"59dea408d43183a3937957e71a4bcacc616d9cbc"发送给Bob
5. Alice问Bob: “你猜是head还是tail"?
6. Bob猜一个结果，比如"head"
7. Alice告诉告诉Bob他猜错了，并且出示完整的字符串

## 2. 使用满足交换律的加密算法
1. Alice和Bob通过别的协议协商出各自的RSA密钥对$\{e_a,d_a,n\}, \{e_bb,d_b,n\}$, 满足$e_ad_a\equiv e_bd_b\equiv1\pmod{\phi(pq)}$
2. Alice生成两份消息$M_1$和$M_2$，一份表示"head"，一份表示"tail"，这些字符串还要包含双方协商好的特定字符串和随机字符串，以满足后期的验证
3. Alice使用自己的公钥加密这两份消息，得到$E_a(M_1),E_a(M_2)$，并且以随机的顺序发给Bob
4. Bob无法识别消息的内容，随机选择其中的一个消息$M$，并且用自己的公钥加密得到$E_b(E_a(M))$，然后发送给Alice
5. Alice无法识别消息中的内容，用自己的私钥解密该消息，得到$D_a(E_b(E_a(M)))=E_b(M)$，然后发送回Bob
6. Bob用自己的私钥解密消息，得到$D_b(E_b(M)))=M$，于是Bob得到了抛币的结果并发送给Alice
7. 双方交换各自的密钥对，以验证过程双方有没有欺诈

## 3. 使用二次剩余
1. Alice选择两个质数$p,q$，计算$n=qp$，然后将$n$发送给Bob
2. Bob随机一个数字$x\lt n/2$，计算$y=x^2 \mod n$，并发送$y$给Alice
3. Alice求解同余方程$x^2\equiv y\pmod{pq}$，得到两对解，分别是$\pm x_1, \pm x_2$
4. Alice猜测Bob所随机的数字属于哪组解，并发送该组解$\pm x'$给Bob
5. Bob根据结果判断，如果$x=x'$或者$x=n-x'$，表示Alice猜对了，否则就是猜错了
6. Bob把结果告诉Alice，并出示$x$
7. Alice把$p,q$告诉Bob验算

## 4. 使用雅可比符号
1. Bob随机选择两个质数，满足$p\equiv3\pmod 4, q\equiv 3\pmod 4$, 计算$n=pq$发送给Alice
2. Alice随机选择一个数字$x$, 满足$\gcd(x,n)=1$， 计算$y=x^2 \mod n$，把$y$发送给Bob
3. Bob猜测$J(x,n)$的数值$b\in\{-1,1\}$，并且把$b$发送给Alice
4. Alice向Bob出示$x$
5. Bob验证$y\equiv x^2\pmod{n}$，并向Alice出示$p,q$
