<template>
  <div class="email-app">
    <!-- Header Section -->
    <header class="header">
      <h1>Email Dashboard</h1>
    </header>

    <!-- Search and Sort Section -->
    <div class="search-sort">
      <button class="compose-btn">Compose</button>
      <input
        class="inpfield"
        type="text"
        v-model="searchQuery"
        placeholder="Search emails..."
      />
      <select class="sortby" v-model="sortOption">
        <option value="date">Sort by Date</option>
        <option value="sender">Sort by Sender</option>
        <option value="subject">Sort by Subject</option>
      </select>
    </div>

    <!-- Email List Section -->
    <div class="email-list">
      <div
        v-for="email in sortedAndFilteredEmails"
        :key="email.id"
        class="email-item"
      >
        <p>
          <strong>{{ email.sender }}</strong>
        </p>
        <p>{{ email.subject }}</p>
        <p>{{ email.date }}</p>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="footer">
      <button @click="goToDashboard" class="dashboard-btn">
        Go to Dashboard
      </button>
    </footer>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const searchQuery = ref('')
    const sortOption = ref('date')
    const emails = ref([
      {
        id: 1,
        sender: 'John Doe',
        subject: 'Meeting Tomorrow',
        date: '2024-10-12',
      },
      {
        id: 2,
        sender: 'Jane Smith',
        subject: 'Project Update',
        date: '2024-10-11',
      },
      {
        id: 3,
        sender: 'David Brown',
        subject: 'Holiday Plans',
        date: '2024-10-10',
      },
    ])

    const sortedAndFilteredEmails = computed(() => {
      let filteredEmails = emails.value.filter(
        email =>
          email.sender
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase()) ||
          email.subject.toLowerCase().includes(searchQuery.value.toLowerCase()),
      )

      if (sortOption.value === 'date') {
        return filteredEmails.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        )
      } else if (sortOption.value === 'sender') {
        return filteredEmails.sort((a, b) => a.sender.localeCompare(b.sender))
      } else if (sortOption.value === 'subject') {
        return filteredEmails.sort((a, b) => a.subject.localeCompare(b.subject))
      }

      return filteredEmails
    })

    const goToDashboard = () => {
      alert('Navigating to Dashboard')
    }

    return {
      searchQuery,
      sortOption,
      sortedAndFilteredEmails,
      goToDashboard,
    }
  },
}
</script>

<style scoped>
.email-app {
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
}

.compose-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-right: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.inpfield {
  margin-right: 40px;
  margin-left: 340px;
}

.sortby {
  margin-right: 150px;
}

.search-sort {
  display: flex;
  /* justify-content: space-between; */
  padding: 10px;
  background-color: #f9f9f9;
}

.search-sort input {
  width: 70%;
  padding: 8px;
}

.search-sort select {
  width: 25%;
  padding: 8px;
}

.email-list {
  background-color: white;
  padding: 10px;
  border: 1px solid #ddd;
}

.email-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.email-item p {
  margin: 5px 0;
}

.footer {
  padding: 20px;
  text-align: center;
}

.dashboard-btn {
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
