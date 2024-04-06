<template>
  <div id="app">
    <div class="login-container">
      <h1>{{ $t('Добро пожаловать') }}</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button type="submit">{{ $t('login') }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Logging in...');
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-container {
  text-align: center;
}

input, button {
  margin: 10px;
  padding: 8px;
  font-size: 16px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>