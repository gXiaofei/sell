/*
 * @Author: gXiaofei
 * @Date: 2018-10-13 15:42:17
 * @Last Modified by: gXiaofei
 * @Last Modified time: 2018-10-15 10:19:08
 */
import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/goods/Goods';
import Ratings from '@/components/ratings/Ratings';
import Seller from '@/components/seller/Seller';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/goods'
        }, {
            path: '/goods',
            name: 'Goods',
            component: Goods
        }, {
            path: '/ratings',
            name: 'Ratings',
            component: Ratings
        }, {
            path: '/seller',
            name: 'Seller',
            component: Seller
        }
    ]
});
