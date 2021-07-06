<template>
  <div>
      <div class="container d-flex justify-content-center align-items-center">
  <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
</div>
    <PostList />
  </div>
</template>
<style scoped>
</style>
<script>
import PostList from "@/components/post/PostList";
export default {
    layout: "admin",
  components: {
    PostList,
  },
};
</script>
