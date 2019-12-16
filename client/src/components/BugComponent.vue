<template>
  <tr class="BugComponent">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td>{{bugProp.closed}}</td>
    <td>{{bugProp.updatedAt}}</td>
  </tr>
</template>


<script>
export default {
  name: "BugComponent",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["bugProp"]
};
</script>


<style scoped>
</style>