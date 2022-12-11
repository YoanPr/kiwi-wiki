<template>
  <md-editor v-model="text" @onChange="onChange" @onSave="onSave" @onUploadImg="onUploadImg" language="en-US"/>
</template>

<script>
import { defineComponent } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default defineComponent({
  name: "Edition",
  components: {
    MdEditor,
  },
  data() {
    return {
      text: "# Editer votre page"
    };
  },
  methods: {
    onChange(val) {},
    onUploadImg(files) {
      console.log(Array.from(files));
    },
    onSave : (v, h) => {
      console.log(v);
      h.then((html) => {
        console.log(html);
      });
    },
  },
});
</script>
