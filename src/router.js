import { createWebHistory, createRouter } from "vue-router";

import index from "./components/index";
import Resume from "./components/Intro/Resume";
import SelfIntro from "./components/Intro/SelfIntro";

import Hdiary from "./components/Project/Hdiary";
import Keyard from "./components/Project/Keyard";
import Witty from "./components/Project/Witty";

import DeepLearning from "./components/Career/DeepLearning";
import Mstc from "./components/Career/Mstc";
import Wooa from "./components/Career/Wooa";

import Ability from "./components/Vision/Ability";
import Field from "./components/Vision/Field";
import Ssafy from "./components/Vision/Ssafy";

const routes = [
    {
        path: "/",
        component: index,
    },
    {
        path: "/resume",
        component: Resume,
    },
    {
        path: "/selfintro",
        component: SelfIntro,
    },
    {
        path: "/Hdiary",
        component: Hdiary,
    },
    {
        path: "/Keyard",
        component: Keyard,
    },
    {
        path: "/Witty",
        component: Witty,
    },

    {
        path: "/DeepLearning",
        component: DeepLearning,
    },
    {
        path: "/Mstc",
        component: Mstc,
    },
    {
        path: "/Wooa",
        component: Wooa,
    },
    {
        path: "/Ability",
        component: Ability,
    },
    {
        path: "/Field",
        component: Field,
    },
    {
        path: "/Ssafy",
        component: Ssafy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
