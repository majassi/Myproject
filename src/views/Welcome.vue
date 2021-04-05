<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Log ind</h2>
      <LoginForm @login="enterChat" />
      <p>Har du ikke en konto? <span @click="showLogin = false">opret</span> en.</p>
    </div>
    <div v-else>
      <h2>Opret</h2>
      <SignupForm @signup="enterChat" />
      <p>Har du allerede en bruger? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 100px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #fdce35ad;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
