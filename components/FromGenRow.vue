<template>
    <div>
        <b-form-row class="text-left">
            <b-col>
                <h3 class="mt-5 text-primary">批量生成 {{ ChainName }} 钱包</h3>
                <b-icon-broadcast-pin></b-icon-broadcast-pin>&nbsp;&nbsp;<span
                    class="text-warning">钱包生成过程均在本地电脑完成，我们无法获取到您的助记词及私钥！</span>
            </b-col>
        </b-form-row>
        <b-form-row>
            <b-col>
                <b-form-input placeholder="输入需要生成的钱包地址个数" :type="'number'" v-model="CreateNum"></b-form-input>
            </b-col>
            <b-col sm="auto">
                <b-button block variant="outline-primary" @click="genData">立即生成</b-button>
            </b-col>
        </b-form-row>
    </div>
</template>
<script>
export default {
    props: {
        // 当前链的名称
        ChainName: {
            type: String,
            required: true
        },
        // genRowshow:{
        //     type: Boolean,
        // }
    },
    data() {
        return {
            CreateNum: null,   // 创建的地址数量
        };
    },
    methods: {
        // 像父组件传递要创建的数量
        genData() {
            var createNum = parseInt(this.CreateNum)
            this.$emit("changeGenNumber", createNum);
        },
    }
}
</script>
