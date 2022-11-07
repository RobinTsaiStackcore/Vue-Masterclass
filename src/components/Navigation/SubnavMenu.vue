<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobsResultsPage">
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="mr-3"
        />
        <span>
          1653
          <span class="text-brand-green-1">jobs matched</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubnavMenu",
  data() {
    return {
      onJobsResultsPage: true,
    };
  },
};
</script>
