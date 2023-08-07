<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">focus on name</button>
  <br />
  <button @click="showModal = !showModal">Toggle modal</button>
  <button @click="showModal2 = !showModal2">Toggle second modal</button>
  <teleport to="#modals" v-if="showModal">
    <ModalComponent themeClass="sale" @close="showModal = !showModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
      <h1>Modal title</h1>
      <p>Modal text</p>
    </ModalComponent>
  </teleport>
  <teleport to="#modals" v-if="showModal2">
    <ModalComponent @close="showModal2 = !showModal2">
      <h1>Another modal component</h1>
      <p>abababbababab</p>
    </ModalComponent>
  </teleport>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ModalComponent from "./ModalComponent.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    ModalComponent,
  },
  data() {
    return {
      title: "Vue app",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  title!: string;
  handleClick!: () => void;
  showModal!: boolean;
  showModal2!: boolean;
}
</script>

<style lang="scss">
h1 {
  margin-top: 10px;
}
</style>
