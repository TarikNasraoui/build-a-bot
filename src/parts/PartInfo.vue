<template>
    <div>
        <h1>{{part.title}}</h1>
        <div>
            {{part.description}}
        </div>
    </div>
</template>
<script>
// import availableParts from '../data/parts';
import getPartsMixins from "./get-part-mixins";

export default {
  name: 'PartInfo.vue',
  mixins: [getPartsMixins],
  props: {
    type: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
      const { type, id } = this;
      return this.parts[type].find(part => part.id === +id);
    }
  }
};
</script>
