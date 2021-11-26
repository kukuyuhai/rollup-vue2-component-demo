<template>
  <div class="loginBox form">
    <div class="form-item">
      <label for="username">用户名：</label>
      <input name="username" v-model="user.username" :autocomplete="false" />
    </div>
    <div class="form-item">
      <label for="password">用户名：</label>
      <input name="password" v-model="user.password" :autocomplete="false" />
    </div>
    <div class="form-item">
      <button @click="onSubmit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!!");
    },
  },
};
</script>
