import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimerHome from "../components/ReactionTimer/TimerHome.vue";
import FormHome from "@/components/ExampleForm/FormHome.vue";
import JobsPage from "@/views/Jobs/JobsPage.vue";
import JobDetails from "@/views/Jobs/JobDetails.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/reactionTimer",
    name: "reactionTimer",
    component: TimerHome,
  },
  {
    path: "/form",
    name: "ExampleForm",
    component: FormHome,
  },
  {
    path: "/jobs",
    name: "JobsPage",
    component: JobsPage,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs", // old path example
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
