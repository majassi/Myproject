<template>
  <nav v-if="user">
    <div>
      <p>Hej {{ user.displayName }}</p>
      <p class="email">Logget ind som {{ user.email }}</p>
    </div>
    <button @click="handleClick">Log ud</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
    }

    return { handleClick, user }
  }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>