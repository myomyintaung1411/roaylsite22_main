<template>
  <div>
    <div class="py-10" v-for="post in posts" :key="post.id">{{ post.title }}</div>
    <InfiniteLoading @infinite="loadMore" :distance="50" :spinner="spinner" v-if="hasMore" />
    <div v-else>No more posts</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';

const posts = ref([]);
let page = 1;
let loaded = false;
let hasMore = true;
const spinner = 'spiral';

const loadPosts = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
  const data = response.data;
  posts.value = posts.value.concat(data);
  page++;
  hasMore = data.length > 0;
};

const loadMore = async () => {
  if (loaded || posts.value.length < 10 || !hasMore) {
    return;
  }
  await loadPosts();
  if (posts.value.length >= 10) {
    loaded = true;
  }
};

onMounted(async () => {
  await loadPosts();
  if (posts.value.length >= 10) {
    loaded = true;
  }
});
</script>
