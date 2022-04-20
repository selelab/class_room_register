import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Club_data from "@/views/Club_data.vue";
import Schedule from "@/views/Schedule.vue";
// import Send from "../views/Send.vue";

const routes = [
  {
    path: "/",
    name: "club_data",
    component: Club_data,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: Schedule,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
