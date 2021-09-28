<template>
    <div>
        <h2></h2>
        <p>The arms are how your robot will interact with the world.
        They come in a variety of shapes and functions.</p>
        <div v-for="(head, index) in parts.heads" :key="index">
            <h4>{{head.title}}</h4>
            <p>{{head.description}}</p>
        </div>
    </div>
</template>
<script>
import getPartsMixins from "./get-part-mixins";

export default {
  name: "BrowseHeads",
  mixins: [getPartsMixins]
};
</script>
