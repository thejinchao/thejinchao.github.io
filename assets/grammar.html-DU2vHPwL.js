import{_ as a,c as n,a as p,o as e}from"./app-Di6K-ctW.js";const t={};function c(o,s){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="javascript基本语法" tabindex="-1"><a class="header-anchor" href="#javascript基本语法"><span>JavaScript基本语法</span></a></h1><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>声明变量</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>JavaScript有如下基本的变量类型<code>Number</code>, <code>String</code>, <code>Boolean</code>, <code>Undefined</code>, <code>Null</code></p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>		<span class="token comment">//Number</span></span>
<span class="line"><span class="token keyword">var</span> b<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>	<span class="token comment">//String\`</span></span>
<span class="line"><span class="token keyword">var</span> c<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>		<span class="token comment">//Boolean</span></span>
<span class="line"><span class="token keyword">var</span> d<span class="token punctuation">;</span>			<span class="token comment">//Undefined\`</span></span>
<span class="line"><span class="token keyword">var</span> e<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>		<span class="token comment">//Null</span></span>
<span class="line"></span></code></pre></div><p>JavaScript 是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h2><h3 id="条件-if-else-结构" tabindex="-1"><a class="header-anchor" href="#条件-if-else-结构"><span>条件(if...else 结构)</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token punctuation">{</span>  </span>
<span class="line">	<span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line"> <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"><span class="token keyword">else</span> <span class="token punctuation">{</span>  <span class="token comment">// ... }</span></span>
<span class="line"></span></code></pre></div><h3 id="switch-结构" tabindex="-1"><a class="header-anchor" href="#switch-结构"><span>switch 结构</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>fruit<span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line"><span class="token keyword">case</span> <span class="token string">&quot;banana&quot;</span><span class="token operator">:</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">case</span> <span class="token string">&quot;apple&quot;</span><span class="token operator">:</span> </span>
<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3><p>while循环</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//do something</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//do something</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>for循环</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0 1 2 </span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>和c++一样，<code>continue</code>和<code>break</code>在循环体中起到同样作用</p>`,19)]))}const i=a(t,[["render",c],["__file","grammar.html.vue"]]),r=JSON.parse('{"path":"/note/language/javascript/grammar.html","title":"JavaScript基本语法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"流程控制","slug":"流程控制","link":"#流程控制","children":[{"level":3,"title":"条件(if...else 结构)","slug":"条件-if-else-结构","link":"#条件-if-else-结构","children":[]},{"level":3,"title":"switch 结构","slug":"switch-结构","link":"#switch-结构","children":[]},{"level":3,"title":"循环","slug":"循环","link":"#循环","children":[]}]}],"git":{"updatedTime":1740235322000,"contributors":[{"name":"thejinchao","username":"thejinchao","email":"thejinchao@gmail.com","commits":1,"url":"https://github.com/thejinchao"}]},"filePathRelative":"note/language/javascript/grammar.md"}');export{i as comp,r as data};
