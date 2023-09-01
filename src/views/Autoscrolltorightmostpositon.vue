<template>
  <div class="grid-container" ref="gridContainer">
    <div class="grid-item" v-for="item in items" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  { id: 13, name: 'Item 12' },
  { id: 12, name: 'Item 13' },
  { id: 14, name: 'Item 14' },
  { id: 15, name: 'Item 15' },
]);

const gridContainer = ref(null);

// Watch for changes in items and scroll to the rightmost position
watchEffect(() => {
  if (gridContainer.value && items.value.length > 0) { // Check if gridContainer ref is not null and there are grid items
   const maxScrollLeft = gridContainer.value.scrollWidth - gridContainer.value.clientWidth;
    //const maxScrollLeft = gridContainer.value.scrollWidth
    gridContainer.value.scrollTo({
      left: maxScrollLeft,
      behavior: 'smooth'
    });
  }
});
</script>

<style>
.grid-container {
  display: grid;
grid-gap: 16px;
padding: 16px;
grid-template-columns: repeat(auto-fill,minmax(500px,1fr));
grid-auto-flow: column;
grid-auto-columns: minmax(500px,1fr);
overflow-x: auto;
white-space: nowrap;
height: 500px;

}

.grid-item {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  display: inline-block;
}
</style>
