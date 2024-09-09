<template>
  <div class="about-page">
    <h2 class="about-title">About This Application</h2>
    <app-button class="toggle-button" @click="toggleLanguage">
      {{ isEnglish ? 'Switch to Russian' : 'Show in English' }}
    </app-button>
    <div class="about-content">
      <p v-if="isEnglish">
        This application was developed using a modern web development stack, including:
        <ul>
            <li><strong>Vue.js 3:</strong> A progressive JavaScript framework for building user interfaces.</li>
            <li><strong>Vue Router:</strong> The official router for Vue.js, enabling single-page application (SPA) navigation.</li>
            <li><strong>Axios:</strong> A promise-based HTTP client for the browser to handle API requests.</li>
            <li><strong>CSS Flexbox:</strong> A layout model that provides an easier and more efficient way to design responsive layouts.</li>
        </ul>
        The project showcases the integration of these technologies to create a dynamic, responsive, and user-friendly recipe book application.
      </p>

      <p v-else>
        Это приложение было разработано с использованием современного стека веб-разработки, включающего:
        <ul>
          <li><strong>Vue.js 3:</strong> Прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов.</li>
          <li><strong>Vue Router:</strong> Официальный маршрутизатор для Vue.js, обеспечивающий навигацию в одностраничных приложениях (SPA).</li>
          <li><strong>Axios:</strong> HTTP-клиент на основе промисов для браузера для обработки API-запросов.</li>
          <li><strong>CSS Flexbox:</strong> Модель макета, которая обеспечивает более простой и эффективный способ создания адаптивных макетов.</li>
        </ul>
        Проект демонстрирует интеграцию этих технологий для создания динамичного, адаптивного и удобного в использовании веб-приложения кулинарной книги.
      </p>
    </div>    

    <div class="contact-info" >
      <p v-if="isEnglish">If you have any questions, feel free to contact me:</p>
      <p v-else>Если у вас есть вопросы, пожалуйста, свяжитесь со мной:</p>      
        <a href="mailto:bina22work@gmail.com" target="_blank" rel="noopener noreferrer">Email: bina22work@gmail.com</a>,
        <a href="https://hh.ru/resume/a2167a08ff035872230039ed1f524d36594d56" target="_blank" rel="noopener noreferrer">hh.ru</a>,
        <a href="https://t.me/bina22work" target="_blank" rel="noopener noreferrer">Telegram</a>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {
      isEnglish: true,
      email: "bina22work@gmail.com",
      jobBoardUrl:
        "https://hh.ru/resume/a2167a08ff035872230039ed1f524d36594d56",
    };
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
    },
  },
};
</script>

<style scoped>
.about-page {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.about-content {
  margin-bottom: 20px;
  text-align: left;
}

ul {
  margin: 10px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}

.toggle-button {
  margin-bottom: 20px;
}

.contact-info {
  text-align: center;
}

.contact-info a {
  color: var(--dark-pink);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>