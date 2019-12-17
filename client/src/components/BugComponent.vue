<template>
  <tr class="BugComponent" @click="selectBug(bugProp._id)">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td>{{this.status}}</td>
    <td>{{this.newDate}}</td>
  </tr>
</template>


<script>
import moment from "moment";
import router from "../router";
export default {
  name: "BugComponent",
  data() {
    return {
      status: this.bugProp.closed ? "closed" : "open",
      newDate: this.bugProp.updatedAt
        .substring(0, this.bugProp.updatedAt.length - 8)
        .toString()
        .split("T")
        .join(" "),
      date: moment(this.newDate, "YYYY-MM-DD HH:mm")
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