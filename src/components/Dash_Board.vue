<template>
  <div class="dashboard">
    <button @click="logout" class="logout-btn">Logout</button>
    <div class="buttons">
      <button>Email</button>
      <button>Calendar</button>
      <button>Task</button>
      <button>Contact</button>
    </div>
  </div>
</template>

<script setup>
const logout = () => {
  console.log('Logging out...')
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

.logout-btn {
  align-self: flex-end;
  margin-bottom: 20px;
  background-color: #ff4c4c;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  background-color: #0078d4;
  color: white;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #005a9e;
}
</style>
