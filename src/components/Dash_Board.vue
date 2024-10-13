<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="card-container">
      <div class="card">
        <h2>Users</h2>
        <p>Total: {{ totalUsers }}</p>
      </div>
      <div class="card">
        <h2>Revenue</h2>
        <p>${{ totalRevenue }}</p>
      </div>
      <div class="card">
        <h2>Performance</h2>
        <p>{{ performance }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Composition API - Script setup syntax
import { ref } from 'vue'

// Defining reactive data
const totalUsers = ref(120)
const totalRevenue = ref(15000)
const performance = ref(85)
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  gap: 20px;
}

.card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
