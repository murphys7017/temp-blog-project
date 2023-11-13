<template>
<div class="article wrap">
    <div class="breadcrumb">
        <i class="ic i-home"></i> 
        <span><a href="/">首页</a></span>
        <i class="ic i-angle-right"></i> 
        <span class="current">
            <a href="/categories/%E4%BB%A3%E7%A0%81%E6%9D%82%E8%B0%88/" title="分类于 代码杂谈">
                <span itemprop="name">代码杂谈</span>
            </a>
            <meta content="1">
        </span>
    </div>
    <article class="post block">
        <link href="http://blog.murphyspolaris.icu/Alice%20Bot%E7%9A%84%E9%87%8D%E5%86%99%E6%97%A5%E8%AE%B0/">
        <span hidden="" >
            <meta itemprop="image" content="/images/avatar.png">
            <meta itemprop="name" content="Aki Polaris">
            <meta itemprop="description" content="Aki的日记本, 这里是Aki的个人日记本">
        </span>
        <span hidden="">
            <meta itemprop="name" content="Polaris">
        </span>
        <div class="body md" itemprop="articleBody">
          <hr />
<h2>a: 1</h2>
<p>a | b</p>
<ul>
<li>| -<br />
1 | 2</li>
</ul>
<p>A footnote <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep" />
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>some details <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
            
            <div class="tags">
                <a href="/tags/%E8%AE%B0%E5%BD%95-python/" rel="tag" data-pjax-state="" class="warning">
                    <i class="ic i-tag"></i> 记录,python
                </a>
            </div>
        </div>
        <footer>
            <div class="meta">
                <span class="item">
                    <span class="icon">
                        <i class="ic i-calendar-check"></i> 
                    </span>
                    <span class="text">更新于</span> 
                    <time title="修改时间：2023-10-23 08:38:03">2023-10-23</time>
                </span>
            </div>
            <div class="reward">
                <button><i class="ic i-heartbeat"></i> 赞赏</button><p>请我喝[茶]~(￣▽￣)~*</p>
                <div id="qr">
                    <div>
                        <img data-src="/images/wechatpay.png" alt="Aki Polaris 微信支付">
                        <p>微信支付</p></div><div><img data-src="/images/alipay.png" alt="Aki Polaris 支付宝"><p>支付宝</p>
                    </div>
                    <div>
                        <img data-src="/images/paypal.png" alt="Aki Polaris 贝宝"><p>贝宝</p>
                    </div>
                </div>
            </div>
        <div id="copyright">
            <ul>
                <li class="author"><strong>本文作者： </strong>Aki Polaris <i class="ic i-at"><em>@</em></i>Polaris</li><li class="link"><strong>本文链接：</strong> <a href="http://blog.murphyspolaris.icu/Alice%20Bot%E7%9A%84%E9%87%8D%E5%86%99%E6%97%A5%E8%AE%B0/" title="Alice Bot的重写日记" data-pjax-state="">http://blog.murphyspolaris.icu/Alice Bot的重写日记/</a></li><li class="license"><strong>版权声明： </strong>本站所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" rel="noopener external nofollow noreferrer" target="_blank" class="exturl" title="(CC)BY-NC-SA"><i class="ic i-creative-commons"><em>(CC)</em></i>BY-NC-SA</a> 许可协议。转载请注明出处！</li>
            </ul>
        </div>
    </footer>
</article>
</div>
</template>
<style lang="stylus">
@import '../styles/main.styl';
    
.breadcrumb {
  display: inline-flex;
  font-size: $font-size-smaller;
  align-items: center;
  margin: 1.25rem 0;
  flex-wrap: wrap;

  .ic {
    margin: 0 .125rem;
    color: var(--grey-4);

    &:nth-child(1) {
      margin-left: 0rem;
      margin-right: .3125rem;
    }
  }

  span {
    white-space: pre;
  }

  span.current {
    background-color: var(--color-red-a1);
    border-radius: .625rem;
    padding: 0 .625rem;
    the-transition();

    span {
      white-space: normal;
    }
    a {
      color: var(--primary-color);
    }

    &:hover {
      background-color: var(--color-red-a3);
    }
  }
}


.reward {
  margin: 1.25rem auto;
  padding: .625rem 0;
  text-align: center;

  button {
    background: var(--primary-color);
    border: 0;
    border-radius: .3125rem;
    color: var(--grey-0);
    cursor: pointer;
    line-height: 2;
    outline: 0;
    padding: 0 .9375rem;
    vertical-align: text-top;

    &:hover {
      background: var(--primary-color);
    }

    i {
      margin-right: .3125rem;
    }
  }

  p {
    font-size: $font-size-smaller;
    color: var(--grey-5);
    margin: 0;
  }
}

#qr {
  padding-top: 1.25rem;
  display: none;

  a {
    border: 0;
  }

  img {
    display: inline-block;
    max-width: 100%;
  }

  p {
    text-align: center;
  }

}
#copyright {
  background: var(--grey-2);
  padding: 1rem 2rem;
  position: relative;
  font-size: $font-size-smallest;
  border-radius: .625rem;
  color: var(--grey-6);

  li {
    &::before {
      font-family-icons()
      color: var(--grey-5);
      margin-right: .3125rem;
      font-size: 1.1rem;
      line-height: .75rem;
      vertical-align: -.0667rem;
    }
  }

  .author::before {
    @extend .i-person:before;
  }

  .link::before {
    @extend .i-link-circle:before;
  }

  .license::before {
    @extend .i-share:before;
  }
  // &::before {
  //   content: "";
  //   position: absolute;
  //   width: .3125rem;
  //   height: 100%;
  //   left: -.3125rem;
  //   top: 0rem;
  //   background: var(--primary-color);
  //   border-radius: .375rem;
  // }
}

@keyframes rainbow {
  to {
    background-position: -2000vw;
  }
}

.md {
  p,
  table,
  pre,
  blockquote,
  img,
  .tabs,
  .links {

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul, dd, ol {
    ul, ol {
      margin-top: 0;
    }
  }

  a {
    color: var(--primary-color); //原始链接颜色

    &:hover {
      color: var(--color-blue); //鼠标经过颜色
    }
  }

  for headline in (1 .. 6) {
    h{headline} {
      font-size: $font-size-headings-base - $font-size-headings-step * headline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    padding-top: .625rem;

    &:hover .anchor {
      &::before, &::after {
        color: var(--primary-color);
      }
    }
  }

  h1::after {
    content: "";
    display: block;
    box-sizing: unset;
    width: 100%;
    height: .0625rem;
    background: var(--grey-3);
    padding-right: 1.25rem;
    margin-left: -1.25rem;
    margin-top: .3125rem;
  }

  .anchor {
    border-bottom-style: none;
    color: var(--grey-4);
    float: right;
    margin-left: .625rem;

    &:hover {
      color: inherit;
    }
  }

  .anchor::before,
  .anchor::after {
    color: var(--grey-4);
    position: absolute;
    font-weight: normal;
    the-transition(, ease-out);
  }

  .active .anchor::before,
  .active .anchor::after {
    color: var(--primary-color);
  }

  p {
    margin: 0 0 .8rem;
  }

  blockquote {
    font-size: 90%;
    background-color: var(--grey-2);
    margin: 1.25rem 0;
    border-radius: .1875rem;

    ul {
      margin: .625rem 0 !important;
    }

    ul > li::before {
      width: .375rem !important;
      height: .375rem !important;
      top: .6875rem !important;
    }

    p, ol, ul {
      &:last-child {
        margin-bottom: 0!important;
      }
    }
  }

  >blockquote {
    border-left-color: var(--primary-color);
  }

  iframe {
    margin-bottom: 1.25rem;
  }

  .image-info {
    display: block;
    text-align: center;
    font-size: $font-size-smaller;
    color: var(--grey-4);
  }

  .video-container {
    height: 0;
    margin-bottom: 1.25rem;
    overflow: hidden;
    padding-top: 75%;
    position: relative;
    width: 100%;

    iframe,
    object,
    embed {
      height: 100%;
      left: 0;
      margin: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .kbd, kbd {
    background-color: var(--grey-1);
    background-image: linear-gradient(var(--grey-2), var(--grey-0), var(--grey-2));
    border: .0625rem solid var(--grey-4);
    border-radius: .2rem;
    box-shadow: .1rem .1rem .2rem var(--grey-9-a1);
    font-family: inherit;
    padding: .1rem .3rem;
    white-space: nowrap;
  }

  mark {
    background-color: #dbfdad;
  }

  ins {
    --line-color: var(--note-hover, var(--primary-color));
    text-decoration: none;
    border-bottom: .125rem solid var(--line-color);

    &.wavy {
      text-decoration-style: wavy;
      text-decoration-line: underline;
      text-decoration-color: var(--line-color);
      border-bottom: none;
    }

    &.dot {
      border-bottom: .2rem dotted var(--line-color);
    }
  }

  s {
    color: var(--grey-5);
    text-decoration-color: var(--note-hover, var(--grey-5));
  }

  ruby {
    padding: 0 .3125rem;
  }

  .katex-display {
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .spoiler:not(.bulr) {
    background-color: var(--text-color);
    color: var(--text-color);
    text-shadow: none;
    transition: color .3s;
    padding:0 .1875rem;

    &:hover {
      color: #FFF;
    }
  }

  .bulr {
    text-shadow: rgba(0, 0, 0, .7) 0rem 0rem .625rem;
    color: transparent;
  }

  .rainbow {
    background-image: linear-gradient( to left, orangered, orange, gold, lightgreen, cyan, dodgerblue, mediumpurple, hotpink, orangered);
    background-size: 110vw;
    background-clip: text;
    color: transparent;
    animation: rainbow 60s linear infinite;
  }
}


.article .md {

  .anchor::before,
  .anchor::after {
    content: "H";
    font-family: $font-family-posts;
    left: -1.875rem;
    top: 1rem;
    width: 1.25rem;
    height: 1.5625rem;
    text-align: right;
    visibility: visible;
    font-size: 80%;

    +mobile-small() {
      left: -.625rem;
    }
  }

  .anchor::after {
    font-size: 50%;
    left: -1.375rem;
    line-height: 3;

    +mobile-small() {
      left: -.1875rem;
    }
  }

  for headline in (1 .. 6) {
    h{headline} .anchor::after {
      content: \"headline\";
    }
  }
}

.post footer {
  &::before {
    content: "";
    width: 100%;
    height: .0625rem;
    background: var(--grey-3);
    display: block;
    margin: 1.25rem auto 0rem;
  }

}
.post header {
  font-size: $font-size-large;
  margin-bottom: .625rem;


  .title {
    font-size: $font-size-largest;
    margin: initial;
    text-align: center;
    word-wrap();
    padding-bottom: .625rem;
  }


  .link {
    display: inline-block;
    position: relative;
    vertical-align: top;

    .i-link-alt {
      font-size: $font-size-small;
      margin-left: .3125rem;
    }
  }

  .meta {
    text-align: center;
    border-top: .0625rem dashed var(--grey-9-a1);
    font-family: $font-family-posts;
  }

}


.post .meta {
    color: var(--grey-5);
    font-size: $font-size-smallest;
    text-align: right;

    .item {
      //border-radius: .625rem;
      //padding: 0 .625rem;
      display: inline-block;
      //margin-bottom: .3125rem;
      margin-right: .625rem;
      //the-transition();
    }

    /*.item:nth-child(1) {
      background-color: var(--color-red-a1);
      color: var(--color-red);
      &:hover {
        background-color: var(--color-red-a3);
      }
    }
    .item:nth-child(2) {
      background-color: alpha($blue,.15);
      color: $blue;
      &:hover {
        background-color: alpha($blue,.3);
      }
    }
    .item:nth-child(3) {
      background-color: alpha($orange,.15);
      color: $orange;
      &:hover {
        background-color: alpha($orange ,.3);
      }
    }*/

    .icon {
      margin-right: .1875rem;

      +tablet-mobile() {
        display: inline-block;
      }
    }

  }
  .post-nav {
  display: flex;
  margin-bottom: 2.5rem;

  +mobile() {
    flex-direction: column;
  }

  .item {
    width: 50%;
    +mobile() {
      width: 100%;
    }

    

    span {
      font-size: $font-size-smaller;
    }

    &.left {
      span, h3 {
        align-self: flex-start;
      }
      a {
        display: flex;
        flex-direction: column;
        height: 100%;
        color: var(--header-text-color);
        padding: 1.25rem 2.5rem;
        background-size: cover;
        position: relative;
        border-radius: 15px 0 0 15px;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg,#434343,#000);
          opacity: .5;
          the-transition();
          z-index: -1;
          top: 0;
          left: 0;
          border-radius: 15px 0 0 15px;
        }

        &:hover {
          &::before {
            opacity: .4;
          }
        }
      }
    }

    &.right {
      span, h3 {
        align-self: flex-end;
        text-align: right;
      }
      a {
        display: flex;
        flex-direction: column;
        height: 100%;
        color: var(--header-text-color);
        padding: 1.25rem 2.5rem;
        background-size: cover;
        position: relative;
        border-radius: 0 15px 15px 0;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg,#434343,#000);
          opacity: .5;
          the-transition();
          z-index: -1;
          top: 0;
          left: 0;
          border-radius: 0 15px 15px 0;
        }

        &:hover {
          &::before {
            opacity: .4;
          }
        }
      }
    }

  }

}
.post.block {
  padding: 0 2rem;
}

.md {
  font-family: $font-family-posts;
  word-wrap();

  .exturl .ic {
    font-size: $font-size-small;
    margin-left: .25rem;
  }

  .button {
    margin-top: 2.5rem;
    text-align: center;
  }
}
.rtl {
  &.body {
    p, a, h1, h2, h3, h4, h5, h6, li, ul, ol {
      direction: rtl;
      font-family: UKIJ Ekran;
    }
  }

  &.title {
    font-family: UKIJ Ekran;
  }
}
.post .tags {
  text-align: left;
  margin-top: .625rem;
  font-size: $font-size-smallest;

  a {
    display: inline-block;
    position: relative;
    padding: 0rem .3125rem;
    border-radius: .3125rem;
    background: var(--note-bg);
    color: var(--note-text);

    &:not(:last-child) {
      margin-right: .625rem;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 100%;
      width: 0;
      right: 0;
      background: var(--color-red-a1);
      border-radius: .25rem;
      the-transition();
    }

    &:hover {
      color: var(--primary-color);

      &:before {
        width: 104%;
        left: -2%;
      }
    }
  }
}

</style>