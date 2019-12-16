<template>
  <tr class="BugComponent" @click="selectBug(bugProp._id)">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td>{{this.status}}</td>
    <td>{{bugProp.updatedAt}}</td>
  </tr>
</template>


<script>
import router from "../router";
export default {
  name: "BugComponent",
  data() {
    return {
      status: this.bugProp.closed ? "closed" : "open"
    };
  },
  computed: {},
  methods: {
    selectBug(payload) {
      router.push({ path: `/bug/` + payload });
    }
  },
  components: {},
  props: ["bugProp"]
};
</script>


<style scoped>
</style>