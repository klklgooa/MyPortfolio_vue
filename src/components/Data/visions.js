// visions.js
import Ability from "../Vision/Ability.vue";
import Ssafy from "../Vision/Ssafy.vue";
import Field from "../Vision/Field.vue";

const visions = [
  {
    tab: "목표 능력치",
    content: Ability,
  },
  {
    tab: "Ssafy",
    content: Ssafy,
  },
  {
    tab: "목표 분야",
    content: Field,
  },
];

export default visions;

