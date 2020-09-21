<template>
    <div class="msite">
       <!-- 首页头部 -->
       <Header title="江西科技师范大学(学生公寓18栋)">
           <router-link to="/search" tag="a" class="header_search" slot="search">
                <i class="iconfont icon-sousuo"></i>
           </router-link>
           <router-link to="/login" tag="a" class="header_login" slot="login">
               <span class="header_login_text">登录|注册</span>
           </router-link>
       </Header>
       <!-- 首页导航 -->
       <nav class="msite_nav border-1px">
           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide">
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/1.jpg'>
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/2.jpg'>
                           </div>
                           <span>商超便利</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/3.jpg'>
                           </div>
                           <span>美食</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/4.jpg'>
                           </div>
                           <span>简餐</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/5.jpg'>
                           </div>
                           <span>新店特惠</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/6.jpg'>
                           </div>
                           <span>准时达</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/7.jpg'>
                           </div>
                           <span>预订早餐</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/8.jpg'>
                           </div>
                           <span>土豪推荐</span>
                       </a>
                   </div>
                   <div class="swiper-slide">
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/9.jpg'>
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/10.jpg'>
                           </div>
                           <span>商超便利</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/11.jpg'>
                           </div>
                           <span>美食</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/12.jpg'>
                           </div>
                           <span>简餐</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/13.jpg'>
                           </div>
                           <span>新店特惠</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/14.jpg'>
                           </div>
                           <span>准时达</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/1.jpg'>
                           </div>
                           <span>预订早餐</span>
                       </a>
                       <a href="javascript:" class="link_to_food">
                           <div class="food_containter">
                               <img src='./images/nav/2.jpg'>
                           </div>
                           <span>土豪推荐</span>
                       </a>
                   </div>
               </div>
               <!-- Add Pagination -->
               <div class="swiper-pagination"></div>
           </div>
       </nav>
       <!-- 首页附近商家 -->
       <div class="msite_shop_list">
           <div class="shop_header">
               <i class="iconfont icon-xuanxiang"></i>
               <span class="shop_header_text">附近商家</span>
           </div>
           <Shoplist></Shoplist>
       </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Shoplist from '@/components/Shoplist/Shoplist'
export default {
  data () {
    return {

    }
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  components: {
    Header,
    Shoplist
  }
}
</script>
<style lang="scss" scoped>
.msite{
    width: 100%;
}
.header_search {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 10%;
        height: 50%;
        .iconfont {
            font-size: 22px;
            color: #fff;
        }
}
.header_login {
        font-size: 14px;
        color: #fff;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        .header_login_text {
            color: #fff;
        }
}
.msite_nav {
    margin-top: 45px;
    height: 200px;
    background: #fff;
    .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
            .swiper-slide {
                display: flex;
                justify-content:space-between;
                flex-wrap: wrap;
                .link_to_food {
                    display: flex;
                    justify-content:space-between;
                    flex-direction: column;
                    align-items: center;
                    width: 25%;
                    height: 50%;
                    .food_containter {
                        margin-top: 10px;
                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }
                    span {
                        width: 100%;
                        text-align: center;
                        font-size: 13px;
                        color: #666;
                        margin-bottom: 20px;
                    }
                }
            }
        }
        .swiper-pagination{
           background: #02a774;
        }
    }
}
.msite_shop_list {
  margin-top: 10px;
  background: #fff;
  .shop_header {
    padding: 10px 10px 0;
    i {
        margin-left: 5px;
        margin-right: 5px;
        color: #999;
    }
    .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
    }
  }
}
</style>
