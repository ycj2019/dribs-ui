<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>轮播图</h1>
            <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <banner-look></banner-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <banner-con></banner-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <banner-api></banner-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import BannerLook from "./BannerLook";
    import BannerCon from "./BannerCon";
    import BannerApi from "./BannerApi";
    export default {
        name: "Banner",
        components: {BannerApi, BannerCon, BannerLook},
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
        width: 820px;
        height: 340px;
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
