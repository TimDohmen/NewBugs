<template>
  <div class="NoteComponent">
    <span>{{noteProp.content}}</span>
    <button class="btn btn-danger" @click="removeNote()">remove</button>
  </div>
</template>


<script>
export default {
  name: "NoteComponent",
  data() {
    return {};
  },
  computed: {},
  methods: {
    removeNote() {
      this.$store.dispatch("removeNote", {
        noteId: this.noteProp._id,
        bugId: this.$route.params.id
      });
    }
  },
  components: {},
  props: ["noteProp"]
};
</script>


<style scoped>
</style>