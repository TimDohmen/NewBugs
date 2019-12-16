<template>
  <div class="Bug">
    Title
    {{oneBug.title}}
    <hr />
    {{oneBug.description}}
    status
    {{oneBug.closed}}
    <button @click="closeBug()">Close Bug</button>
  </div>
</template>


<script>
export default {
  name: "Bug",
  data() {
    return {};
  },
  computed: {
    oneBug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    getBugById() {
      this.$store.dispatch("getBugById", this.$route.params.id);
    },
    closeBug() {
      this.$store.dispatch("closeBug", this.$route.params.id);
    }
  },
  components: {},
  mounted() {
    this.getBugById();
  }
};
</script>


<style scoped>
</style>