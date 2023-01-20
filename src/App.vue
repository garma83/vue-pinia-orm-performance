<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRepo } from 'pinia-orm'
import Location from './models/location'

const inserted = ref(0);
const queried = ref(0);
const dataset_length = 400;
const object_length = 30

const locationRepo = useRepo(Location)
const locations = computed(() => {
  const start = performance.now();
  let res = locationRepo.query().get()
  queried.value = performance.now() - start;

  return res;
})

onMounted(() => {
  const start = performance.now();

  // inserting
  for (let x = 0; x < dataset_length; x++) {

    let data: { [key: string]: string } = {}
    for (let a = 1; a <= object_length; a++) {
      data['a' + a] = x + '-' + a
    }
    locationRepo.insert(data)
  }

  inserted.value = performance.now() - start;

})

</script>

<template>
  <header>

    <div class="wrapper">
      testing with object length {{ object_length }}, inserting {{ dataset_length }} objects.. {{ locations.length }} done
    </div>
    <div class="wrapper">
      inserted after {{ inserted }}, queried after {{ queried }}
    </div>
  </header>
</template>
