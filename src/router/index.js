import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView";
// import JobsResultsView from "@/views/JobsResultsView";
// import JobView from "@/views/JobView";
const HomeView = () => import("@/views/HomeView");
const JobsResultsView = () =>
  import(/* webpackChunkName:"jobs"*/ "@/views/JobsResultsView");
const JobView = () => import(/* webpackChunkName:"jobs"*/ "@/views/JobView");

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
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
