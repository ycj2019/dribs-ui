<template>
    <div class="bj">
        <div class="containerT">
            <h1>diandian-用户登录</h1>
            <form class="form" id="entry_form">
                <input type="text" placeholder="用户名" id="entry_name" value="admin">
                <input type="password" placeholder="密码" id="entry_password" value="admin">
                <!--<router-link to="" ></router-link>-->
                <button type="button" id="entry_btn">登录</button>
                <div id="prompt" class="prompt"></div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "login",
        mounted(){
            console.log("dada")
            $("#entry_name").focus();
            $(document).keydown(function(event){
                if(event.keyCode==13){

                }
            });
            $("#entry_btn").click(()=>{
                console.log("sasa")
                location.href = "http://localhost:8080/"
            });
        }
    }
</script>

<style>
    @import "../../../static/syxg/css/login.css";
    body{
        background-image: url("../../../static/syxg/img/1.jpg");
    }
</style>