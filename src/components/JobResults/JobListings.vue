<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobsResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-for="page in totalPages"
            :key="page"
            :to="{ name: 'JobsResults', query: { page: page } }"
            :class="[
              'mx-3',
              'text-sm',
              'font-semibold',
              'text-brand-blue-1',
              { underline: currentPage === page },
            ]"
            >{{ page }}</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{
              name: JobResults,
              query: {
                page: nextPage,
              },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "@/components/JobResults/JobListing";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    // 算出總頁碼跑 v-for
    totalPages() {
      const itemPerPage = 10;
      return Math.ceil(this.jobs.length / itemPerPage);
    },
    currentPage() {
      // 利用 this.$route 取得 query string 當前頁碼再 render 要顯示的內容
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      // 上一頁頁碼當前頁碼小於 1 時不顯示
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      // 下一頁頁碼大於總頁數時不顯示
      return nextPage <= this.totalPages ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const response = await axios.get(process.env.VUE_APP_API_URL);
    this.jobs = response.data;
  },
};
</script>
