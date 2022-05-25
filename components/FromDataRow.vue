<template>
    <div id="paenl" v-show="AccountArray.length!==0">
          <b-form-row>
            <b-col class="text-left">
              <h5 class="mt-5">Created: {{ AccountArray.length }}</h5>
            </b-col>
          </b-form-row>
          <b-form-row class="border-top border-primary" v-for="(item, index) in AccountArray" :key="item.address">
              <b-form inline class="w-100 mt-1">
                <b-col cols="1">
                  <label for="inline-form-input-name">地址{{ index+1 }}</label>
                </b-col>
                <b-col cols="9">
                  <b-form-input
                    id="inline-form-input-name"
                    class="w-100 border-0"
                    readonly
                    :value="item.address"
                  ></b-form-input>
                </b-col>
                <b-col cols="2">
                  <b-button variant="primary" @click="doCopy(item.address)">复制</b-button>
                </b-col>
              </b-form>
              <b-form inline class="w-100 mt-1 mb-1">
                <b-col cols="1" >
                  <label for="inline-form-input-name">私钥{{ index+1 }}</label>
                </b-col>
                <b-col cols="9">
                  <b-form-input
                    id="inline-form-input-name"
                    class="w-100 border-0"
                    readonly
                    :value="item.privateKey"
                  ></b-form-input>
                </b-col>
                <b-col cols="2">
                  <b-button variant="primary" @click="doCopy(item.privateKey)">复制</b-button>
                </b-col>
              </b-form>
          </b-form-row>
        </div>
</template>
<script>
export default {
   props: {
        AccountArray:{
            type: Array,
            // required: true
        },
    },
  methods: {
    // 开始复制
    doCopy: function (s) {
      this.$copyText(s).then(function (e) {
        console.log(e)
      }, function (e) {
        console.log(e)
      })
    },
  }
}
</script>
