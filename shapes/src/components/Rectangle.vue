<template>
    <div v-highlight class="wrap">
        <div class="rectangle middle" @click="test"></div>
        <pre>
            <code class="css">
.rectangle {
  width: 200px;
  height: 100px;
  background: red;
}
            </code>
        </pre>

    </div>
</template>

<script>
    export default {
        name: "Rectangle",
        methods: {
            test(){
                
            }
        },
    }
</script>

<style scoped lang="scss">
    .rectangle {
        width: 200px;
        height: 100px;
        background: red;
    }
    .wrap {
        display: flex;
        flex-direction: column;
        .middle {
            margin: 0 auto;
        }
    }

</style>
