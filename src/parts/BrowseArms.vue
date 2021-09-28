<template>
    <div>
        <h2></h2>
        <p>The arms are how your robot will interact with the world.
        They come in a variety of shapes and functions.</p>
        <div v-for="(arm, index) in parts.arms" :key="index">
            <h4>{{arm.title}}</h4>
            <p>{{arm.description}}</p>
        </div>
    </div>
</template>
<script>

import getPartsMixins from "./get-part-mixins";

export default {
  name: "BrowseArms",
  mixins: [getPartsMixins]
};
</script>
