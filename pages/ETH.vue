<template>
  <div>
    <PageTabButtonGroup :ChainName="ChainName"></PageTabButtonGroup>
    <FromGenRow :ChainName="ChainName" v-on:changeGenNumber="changeGenNumberClick"></FromGenRow>
    <FromDataRow :AccountArray="AccountArray"></FromDataRow>
  </div>
</template>

<script>
export default {
  name: 'ETH',
  layout: 'layoutWeb3Address',
  head() {
    return {
      title: '在线生成' + this.ChainName + '钱包(https://mshk.top)'
    }
  },
  data() {
    return {
      ChainName: this.$options.name,
      AccountArray: []
    }
  },
  methods: {
    changeGenNumberClick(e) {  // 点击按钮生成地址回调事件
      // 调用公共地址创建钱包
      this.AccountArray = this.$genEthAddress(e)
    },
  },
  mounted() {
    // let accountArray = ths.$genEthAddress()
  }
}
</script>
