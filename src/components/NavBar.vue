<template>
  <nav>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/Accounts">Accounts</router-link></li>
      <li><router-link to="/Calendar">Calendar</router-link></li>
      <li><router-link to="/Emails">Emails</router-link></li>
      <li><router-link to="/Tasks">Tasks</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 1em;
}
ul {
  list-style: none;
  display: flex;
  gap: 1em;
}
li {
  color: white;
}
</style>
