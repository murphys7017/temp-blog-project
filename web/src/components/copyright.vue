<script setup>

</script>
<template>
<div id="copyright">
<ul>
  <li class="author">
    <strong>本文作者：</strong>
     page.author or author  <i class="ic i-at"><em>@</em></i>  title
  </li>
  <li class="link">
    <strong>本文连接：</strong>
   page.permalink, page.permalink, {title: page.title}
  </li>
  <li class="license">
    <strong>版权声明：</strong>
    ccURL, ccIcon + ccText if page.copyright !== true else __("post.copyright.nocopy")
  </li>
</ul>
</div>
</template>
<style lang="stylus" scoped>
@import '../styles/main.styl';
#copyright {
  background: var(--grey-2);
  padding: 1rem 2rem;
  position: relative;
  font-size: $font-size-smallest;
  border-radius: .625rem;
  color: var(--grey-6);
  width: 90%;
  margin-left: 5%
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
</style>