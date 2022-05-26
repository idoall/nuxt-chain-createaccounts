<template>
  <div>
    <b-overlay :show="genRowloading" :variant="'transparent'" @shown="loadingOnShown" rounded="sm">
    <PageTabButtonGroup :ChainName="ChainName"></PageTabButtonGroup>
    <FromGenRow :ChainName="ChainName" v-on:changeGenNumber="changeGenNumberClick"></FromGenRow>
    <FromDataRowSOL :AccountArray="AccountArray"></FromDataRowSOL>
      <template #overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
        </div>
      </template>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'SOL',
  layout: 'layoutWeb3Address',
  head() {
    return {
      title: '在线生成' + this.ChainName + '钱包(https://mshk.top)'
    }
  },
  data() {
    return {
      ChainName: this.$options.name,
      genNum:0,
      AccountArray: [],
      genRowloading: false,
    }
  },
  methods: {
    loadingOnShown() {
      // 调用公共地址创建钱包
      this.AccountArray = this.$genSolAddress(this.genNum)
      this.genRowloading = false
    },
    changeGenNumberClick(e) {  // 点击按钮生成地址回调事件
      this.genRowloading = true
      this.genNum = e
    },
  },
  mounted() {
  }
}
</script>
