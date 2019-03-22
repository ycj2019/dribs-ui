<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>导航菜单</h1>
            <p>为网站提供导航功能的菜单。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <navlook></navlook>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <navx></navx>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <navapi class="navx">

                    </navapi>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Navx from "./navx";
    import Navapi from "./navapi";
    import Navlook from "./navlook";

    export default {
        name: "mo-nav",
        components: {Navlook, Navapi, Navx},
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .box {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        overflow: hidden;
    }

    .navx {
        border-left: 2px solid #ccc;
        border-right: 2px solid #ccc;
        padding: 20px 15px;
        background: #eee;
        border-radius: 10px;
        margin-bottom: 20px;
    }
</style>
