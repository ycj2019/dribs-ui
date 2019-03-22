<template>
  <div class="cssys">
    <div class="cssys title">

    </div>
    <div class="cssys content">
      <div  class="if-nav">
        <div class="if-nav-o">
        <!--<iframe src="http://192.168.191.1:8081"></iframe>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "module-nav"
    }
</script>

<style scoped>
.if-nav{
  background: url("../../../../static/imgs/001.png") no-repeat;
  background-size: 100% 100%;
  width: 205px;
  height: 442px;
  border: none;
  position: fixed;
  right: 50px;
  top: 100px;
}
  .if-nav-o{
    width: 100%;
    height: 460px;
    margin-top: 72px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  iframe{
    height: 92%;
  }
</style>
