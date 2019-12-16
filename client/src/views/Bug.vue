<template>
  <div class="Bug">
    Title
    {{oneBug.title}}
    <hr />
    {{oneBug.description}}
    status
    {{oneBug.closed}}
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