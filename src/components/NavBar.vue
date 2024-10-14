<template>
  <nav>
    <ul>
      <img src="../kalsoft.jpg" />
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
img {
  height: 50px;
  width: 150px;
  margin-left: 0px;
}

li a {
  text-decoration: none;
  color: red;
}

nav {
  background-color: #333;
  padding: 0px;
  height: 70px;
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  gap: 5em;
  align-items: center;
}

li {
  color: rgb(0, 0, 0);
}
</style>
