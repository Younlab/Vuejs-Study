<template>
  <div>
    <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a :href="job.url">{{job.title}}</a>
      <small>
        <time>{{job.time_ago}}</time>
        {{job.domain}}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style>
</style>
