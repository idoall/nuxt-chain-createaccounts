<template>
    <div>
        <b-form-row>
            <div class="text-left">
                <b-col>
                    <nuxt-link :to="{ name: 'ETH' }"
                        :class="ChainName == 'ETH' ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-primary btn-sm'">ETH
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'BSC' }"
                        :class="ChainName == 'BSC' ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-primary btn-sm'">BSC
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'MATIC' }"
                        :class="ChainName == 'MATIC' ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-primary btn-sm'">MATIC
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'FAMTOM' }"
                        :class="ChainName == 'FAMTOM' ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-primary btn-sm'">FAMTOM
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'SOL' }"
                        :class="ChainName == 'SOL' ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-primary btn-sm'">SOL
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