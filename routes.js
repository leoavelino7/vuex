// Components
import Home from "./src/pages/Home.vue";
import About from "./src/pages/About.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/:number", component: About }
];

export default routes;

