<template>
    <div v-highlight class="wrap">
        <div class="square middle"></div>
        <pre>
            <code class="css">
.square {
    width: 100px;
    height: 100px;
    background-color: red;
}
            </code>
        </pre>

    </div>
</template>

<script>
    export default {
        name: "Square"
    }
</script>

<style scoped lang="scss">
    .square {
        width: 100px;
        height: 100px;
        background-color: red;
    }
    .wrap {
        display: flex;
        flex-direction: column;
        .middle {
            margin: 0 auto;
        }
    }

</style>
