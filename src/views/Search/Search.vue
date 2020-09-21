<template>
    <section class="search">
        <Header title="搜索">
        </Header>
        <form class="search_form" action="#">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
            <input type="submit" class="search_submit" value="搜索">
        </form>
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
.search {
  width: 100%;
    .search_form {
        *zoom: 1;
        margin-top: 45px;
        background-color: #fff;
        padding: 12px 8px;
        input {
            height: 35px;
            padding: 0 4px;
            border-radius: 2px;
            font-weight: bold;
            outline: none;
        }
        .search_input {
            float: left;
            width: 79%;
            border: 4px solid #f2f2f2;
            font-size: 13px;
            color: #333;
            background-color: #f2f2f2;
            border-radius: 10px;
        }
        .search_submit {
            float: right;
            width: 18%;
            border: 4px solid #188edd;
            font-size: 16px;
            color: #fff;
            background-color: #188edd;
            border-radius: 5px;
        }
    }
    .search_form::after {
        content: '';
        display: block;
        clear: both;
    }
}
</style>
