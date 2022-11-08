import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import JobsResultsView from "@/views/JobsResultsView";
import JobView from "@/views/JobView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobsResults",
    component: JobsResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
