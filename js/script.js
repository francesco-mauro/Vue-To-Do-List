const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { id: 1, text: "Recruiting blog post", done: true },
        { id: 2, text: "Mobile app launch", done: true },
        { id: 3, text: "Interview John H.", done: false },
        { id: 4, text: "Summit update to mobile storefronts", done: true }
      ]
    };
  }
}).mount('#app');
