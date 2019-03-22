<template>
    <div class="looks">
    <div>
        <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top: 20px">
        <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top: 20px">
        <el-radio-group v-model="radio6" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    </div>
</template>
<style>
.looks{
    margin: 20px;
}
</style>
<script>
    export default {
        name:"RadioLook",
        data () {
            return {
                radio3: '上海',
                radio4: '上海',
                radio5: '上海',
                radio6: '上海'
            };
        }
    }
</script>