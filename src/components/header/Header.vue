/*
 * @Author: gXiaofei
 * @Date: 2018-10-13 14:11:02
 * @Last Modified by: gXiaofei
 * @Last Modified time: 2018-11-13 15:17:32
 */
<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          :src="seller.avatar"
          width="64px"
          height="64px"
          alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"/>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
        <div
          v-if="seller.supports"
          class="support">
          <span
            :class="classMap[seller.supports[0].type]"
            class="icon"/>
          <span class="text">
            {{ seller.supports[0].description }}
          </span>
        </div>
      </div>
      <div
        v-if="seller.supports"
        class="support-count"
        @click="detailShow = true">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"/>
      </div>
    </div>
    <div
      class="bulletin-wrapper"
      @click="detailShow = true">
      <span class="bulletin-title"/><span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"/>
    </div>
    <div class="background">
      <img :src="seller.avatar" >
    </div>
    <div
      v-show="detailShow"
      class="detail"
      @click="detailShow = false">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <p>{{ seller.bulletin }}</p>
          <p>{{ seller.bulletin }}</p>
        </div>
      </div>
      <div class="detail-close"><i class="icon-close"/></div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            sellerData: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data () {
            return {
                seller: {},
                classMap: [],
                detailShow: false
            };
        },
        watch: {
            sellerData: function (val) {
                this.seller = JSON.parse(JSON.stringify(val.seller));
                console.log(this.seller);
            }
        },
        created () {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        methods: {
        }
    };
</script>

<style scoped lang='less'>
  .header{
    color: #fff;
    position: relative;
    overflow: hidden;
    background: rgba(7,17,27,0.5);
    .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-size: 0;
      position: relative;
      .avatar, .content{
        font-size: 14px;
        display: inline-block;
      }
      .avatar{
        vertical-align: top;
        img{
          border-radius: 2px;
        }
      }
      .content{
        margin-left: 16px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            background-image: url('./brand@2x.png');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description{
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support{
          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            vertical-align: top;
          }
          .decrease{
            background-image: url('./decrease_1@2x.png')
          }
          .discount{
            background-image: url('./discount_1@2x.png')
          }
          .guarantee{
            background-image: url('./guarantee_1@2x.png')
          }
          .invoice{
            background-image: url('./invoice_1@2x.png')
          }
          .special{
            background-image: url('./special_1@2x.png')
          }
          .text{
            line-height: 12px;
            font-size: 10px;
          }
        }
      }
      .support-count{
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0,0,0,0.2);
        text-align: center;
        .count{
          font-size: 10px;
          vertical-align: top;
          margin-left: 2px;
        }
        >i{
          line-height: 24px;
          font-size: 10px;
        }
      }

    }
    .bulletin-wrapper{
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 24px 0 12px;
      background: rgba(7,17,27,0.2);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .bulletin-title{
        display: inline-block;
        vertical-align: top;
        width: 22px;
        height: 12px;
        background: url(./bulletin@2x.png) no-repeat;
        background-size: 22px 12px;
        margin-top: 8px;
      }
      .bulletin-text{
        vertical-align: top;
        font-size: 10px;
        font-weight: 200;
        line-height: 28px;
        margin-left: 4px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        right: 8px;
        line-height: 28px;
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      img{
        width: 100%;
        filter: blur(10px);
      }
    }
    .detail{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background: rgba(7,17,27,0.8);
      overflow: auto;
      .detail-wrapper{
        min-height: 100%;
        .detail-main{
          margin-top: 64px;
          padding-bottom: 64px;
        }
      }
      .detail-close{
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        font-size: 32px;
        color: rgba(255,255,255,0.5);
        clear: both;
      }
    }
  }
</style>
