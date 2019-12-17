<template>
  <div class="Bug">
    Title
    {{oneBug.title}}
    <hr />
    {{oneBug.description}}
    status
    {{oneBug.closed}}
    <button @click="closeBug()">Close Bug</button>
    NOTES:
    <hr />

    <NoteComponent v-for="note in notes" :key="note._id" :noteProp="note" />

    <form @submit.prevent="createNote()">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Reported By..."
          v-model="newNote.reportedBy"
        />
      </div>
      <div class="form-group">
        <label for="location">Comment</label>
        <input
          type="text"
          class="form-control"
          id="comment"
          placeholder="Content"
          v-model="newNote.content"
        />
      </div>
      <button type="submit">Create Note</button>
    </form>
  </div>
</template>


<script>
import NoteComponent from "../components/NoteComponent";
export default {
  name: "Bug",
  data() {
    return { newNote: {} };
  },
  computed: {
    oneBug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    getBugById() {
      this.$store.dispatch("getBugById", this.$route.params.id);
    },
    closeBug() {
      this.$store.dispatch("closeBug", this.$route.params.id);
    },
    getNotes() {
      this.$store.dispatch("getNotes", this.$route.params.id);
    },
    createNote() {
      this.$store.dispatch("createNote", {
        reportedBy: this.newNote.reportedBy,
        content: this.newNote.content,
        bug: this.$route.params.id
      });
    }
  },
  components: { NoteComponent },
  mounted() {
    this.getBugById();
    this.getNotes();
  }
};
</script>


<style scoped>
</style>