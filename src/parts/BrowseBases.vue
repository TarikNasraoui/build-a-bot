<template>
    <div>
        <h2></h2>
        <p>The arms are how your robot will interact with the world.
        They come in a variety of shapes and functions.</p>
        <div v-for="(base, index) in parts.bases" :key="index">
            <h4>{{base.title}}</h4>
            <p>{{base.description}}</p>
        </div>
    </div>
</template>
<script>
import getPartsMixins from "./get-part-mixins";

export default {
  name: "BrowseBases",
  mixins: [getPartsMixins]

};
</script>
