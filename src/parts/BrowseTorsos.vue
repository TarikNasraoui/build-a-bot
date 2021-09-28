<template>
    <div>
        <h2></h2>
        <p>The arms are how your robot will interact with the world.
        They come in a variety of shapes and functions</p>
        <div v-for="(torso, index) in parts.torsos" :key="index">
            <h4>{{torso.title}}</h4>
            <p>{{torso.description}}</p>
        </div>
    </div>
</template>
<script>
import getPartsMixins from "./get-part-mixins";

export default {
  name: "BrowseTorsos",
  mixins: [getPartsMixins]
};
</script>
