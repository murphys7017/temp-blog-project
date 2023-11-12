<script lang="ts" setup>
import { baseInfoStore } from '@/stores/BaseInfo';
const baseInfo = baseInfoStore()
</script>
<template>
    <div class="author" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <img class="image" :src="baseInfo.avatar">
        <p class="name" itemprop="name">{{ baseInfo.name }}</p>
        <div class="description" itemprop="description">{{ baseInfo.userDescription }}</div>
    </div>

    <nav class="state">
        <div class="item posts">
            <a href="">
                <span class="count">{{ baseInfo.postInfo.number.post }}</span>
                <span class="name">文章</span>
            </a>
        </div>
        <div class="item categories">
            <a href="">
                <span class="count">{{ baseInfo.postInfo.number.category }}</span>
                <span class="name">分类</span>
            </a>
        </div>
        <div class="item tags">
            <a href="">
                <span class="count">{{ baseInfo.postInfo.number.tag }}</span>
                <span class="name">标签</span>
            </a>
        </div>
    </nav>

    <div class="social">
        <a v-for="item in baseInfo.socials" :key="item.link" :href="item.link">
            <i :class="'ic i-'+item.icon"></i>
        </a>
    </div>

    <ul class="menu">
    
    </ul>

</template>