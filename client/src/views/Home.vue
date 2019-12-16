<template>
  <div class="home">
    <button @click="createBug()">Report Da Bugz</button>
    <form @submit.prevent="createBug()">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Name..."
          v-model="newBug.name"
        />
      </div>
      <div class="form-group">
        <label for="location">Comment</label>
        <input
          type="text"
          class="form-control"
          id="comment"
          placeholder="Bug Comment"
          v-model="newBug.comment"
        />
      </div>
      <div class="form-group">
        <label for="location">Bug Title</label>
        <input
          type="text"
          class="form-control"
          id="comment"
          placeholder="Bug Comment"
          v-model="newBug.title"
        />
      </div>
      <button type="submit">Sendy</button>
    </form>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <table class="table">
      <tr>
        <th>Title</th>
        <th>Reported By</th>
        <th>Status</th>
        <th>Last Modified</th>
      </tr>
      <BugComponent v-for="bug in bugs" :key="bug._id" :bugProp="bug" />
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BugComponent from "@/components/BugComponent.vue";
export default {
  name: "home",
  data() {
    return {
      newBug: {}
    };
  },
  components: {
    HelloWorld,
    BugComponent
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    getBugs() {
      this.$store.dispatch("getBugs");
    },
    createBug() {
      this.$store.dispatch("createBug", {
        reportedBy: this.newBug.name,
        description: this.newBug.comment,
        title: this.newBug.title
      });
    }
  },
  mounted() {
    this.getBugs();
  }
};
</script>
