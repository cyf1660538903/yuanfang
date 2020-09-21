<template>
    <section class="order">
        <Header title="订单列表">
        </Header>
        <section class="order_no_login border-1px">
            <img src="./images/person.png">
            <h3>登录后查看外卖订单</h3>
            <router-link to="/login" tag="button">立即登录</router-link>
        </section>
    </section>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
.order {
  width: 100%;
  .order_no_login {
        padding-top: 140px;
        width: 60%;
        margin: 0 auto;
        text-align: center;
        img {
            display: block;
            width: 100%;
            height: 30%;
        }
        h3 {
            padding: 10px 0;
            font-size: 17px;
            color: #6a6a6a;
        }
        button {
            display: inline-block;
            background: #736dc5;
            font-size: 14px;
            color: #fff;
            border: 0;
            outline: none;
            border-radius: 5px;
            padding: 10px 20px;
        }
    }
}
.border-1px{
    border-bottom: #ccc solid 1px;
}
</style>
