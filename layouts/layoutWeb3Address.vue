<template>
    <div>
        <!-- <div class="mshk">Test</div> -->
         <b-container class="text-center">
             <b-img-lazy src="https://mshk.top/wp-content/uploads/2017/08/logo_248248.png" width="100" height="100"></b-img-lazy>
             <b-jumbotron header="" lead="" bg-variant="white" class="pt-1">
                 <h3>在线生成链上钱包</h3>
                 <b-link href="https://mshk.top">https://mshk.top</b-link>
                 <Nuxt />
             </b-jumbotron>
         </b-container>
    </div>
</template>
<script>
export default {
    name: 'layoutWeb3Address',
}
</script>