<template>
    <el-table
            :data="tableData2"
            style="width: 100%"
            :row-class-name="tableRowClassName">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

<script>
    export default {
        name:"TableLook",
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                tableData2: [{
                    date: '2016-05-02',
                    name: '小黑',
                    address: '镇魂街234号',
                }, {
                    date: '2016-05-04',
                    name: '小白',
                    address: '镇魂街235号'
                }, {
                    date: '2016-05-01',
                    name: '小蓝',
                    address: '镇魂街236号',
                }, {
                    date: '2016-05-03',
                    name: '小黄',
                    address: '镇魂街237号'
                }]
            }
        }
    }
</script>