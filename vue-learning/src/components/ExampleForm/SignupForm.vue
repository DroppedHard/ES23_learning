<template>
  <form @submit="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />

    <label>Password</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordComment" class="pwd-error">
      {{ passwordComment }}
    </div>

    <label>Role</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>

    <!-- <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="alice" v-model="names" />
      <label>Alice</label>
    </div>
    <div>
      <input type="checkbox" value="yoshi" v-model="names" />
      <label>Yoshi</label>
    </div> -->

    <label>Skills (will be added after a coma)</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" class="skill">
      <span @click="skills.splice(skills.indexOf(skill), 1)">
        {{ skill }}
      </span>
    </div>

    <div class="submit">
      <button>Create an account</button>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <!-- <p>Array: {{ names }}</p> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      // names: [],
      tempSkill: "",
      skills: [] as string[],
      passwordComment: "",
    };
  },
  methods: {
    addSkill(e: KeyboardEvent) {
      if (e.key === "," && this.tempSkill) {
        this.tempSkill = this.tempSkill.substring(0, this.tempSkill.length - 1);
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    handleSubmit(e: Event) {
      e.preventDefault();
      // password check
      this.passwordComment =
        this.password.length > 5
          ? ""
          : "Password must have at least characters";
      if (!this.passwordComment) {
        console.log(
          this.email,
          this.password,
          this.role,
          this.skills,
          this.terms
        );
      }
    },
  },
});
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.skill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}
</style>
