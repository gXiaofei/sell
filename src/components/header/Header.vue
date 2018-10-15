/*
 * @Author: gXiaofei
 * @Date: 2018-10-13 14:11:02
 * @Last Modified by: gXiaofei
 * @Last Modified time: 2018-10-15 16:57:43
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
        class="support-count">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"/>
      </div>
    </div>
    <div class="bulletin-wrapper">1</div>
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
                classMap: []
            };
        },
        watch: {
            sellerData: function (val) {
                this.seller = JSON.parse(JSON.stringify(val.seller));
            }
        },
        created () {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        }
    };
</script>

<style scoped lang='less'>
  .header{
    color: #fff;
    background: #999;
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
  }
</style>
