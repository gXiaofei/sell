/*
 * @Author: gXiaofei
 * @Date: 2018-10-12 23:23:07
 * @Last Modified by: gXiaofei
 * @Last Modified time: 2018-10-15 13:20:38
 */

<template>
  <div id="app">
    <v-header :seller-data="sellerData"/>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

    import header from '@/components/header/Header';
    export default {
        name: 'App',
        components: {
            vHeader: header
        },
        data () {
            return {
                sellerData: {}
            };
        },
        created () {
            /* 获取头部信息 */
            this.getSeller();
        },
        methods: {
            getSeller () {
                this.$axios.get('/seller').then(res => {
                    if (res.data.errno === 0) {
                        this.sellerData = res.data.data;
                    }
                });
            }
        }
    };
</script>

<style scoped lang='less'>
#app {
  .border-1px{
 // 移动端处理1px border
    position: relative;
    border:none;
     &:after{
      content: '';
      position: absolute;
      bottom: 0;
      background: rgba(7, 17, 27, 0.1);
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .tab-item{
      flex: 1;
      text-align: center;
      a{
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
      }
      .router-link-active{
        color: rgb(240, 20, 20)
      }
    }
  }
}
</style>
