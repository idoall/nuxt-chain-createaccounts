<template>
    <div>
        <b-form-row>
            <div class="text-left">
                <b-col>
                    <nuxt-link :to="{ name: 'ETH' }"
                        :class="ChainName == 'ETH' ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'">ETH
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'BSC' }"
                        :class="ChainName == 'BSC' ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'">BSC
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'MATIC' }"
                        :class="ChainName == 'MATIC' ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'">MATIC
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'FAMTOM' }"
                        :class="ChainName == 'FAMTOM' ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'">FAMTOM
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'SOL' }"
                        :class="ChainName == 'SOL' ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'">SOL
                    </nuxt-link>

                </b-col>
            </div>
        </b-form-row>
    </div>
</template>
<script>
export default {
    name: "PageTabButtonGroup",
    props: {
        ChainName: {
            type: String,
            required: true
        },
    },
};
</script>