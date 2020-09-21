<template>
    <footer class='footer_guide border-1px'>
        <router-link to="/msite" tag="div" active-class="myactive">
            <div class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-waimai"></i>
                </span>
                <span>首页</span>
          </div>
        </router-link>
        <router-link to="/search" tag="div" active-class="myactive">
           <div class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-search"></i>
                </span>
                <span>搜索</span>
           </div>
        </router-link>
        <router-link to="/order" tag="div" active-class="myactive">
            <div class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-dingdan"></i>
                </span>
                <span>订单</span>
            </div>
        </router-link>
        <router-link to="/profile" tag="div" active-class="myactive">
            <div class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-geren"></i>
                </span>
                <span>我的</span>
            </div>
        </router-link>
    </footer>
</template>
<style lang="scss" scoped>
.myactive{
    color: rgb(17, 21, 236);
}
  .footer_guide {
    position: relative;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#987fdd;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content:space-around;
    .guide_item {
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        span {
            font-size: 12px;
            margin-top: 2px;
            margin-bottom: 2px;
            .iconfont {
               font-size: 22px;
            }
        }
    }
}
</style>
