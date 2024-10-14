<script setup>
const messages = ref([])
const suggestions = ref(['This is so cool 💥', 'Hello everyone 👋', 'Hi! How you doing?  🫡', 'Nice to meet you ✨'])
const userInput = ref('')

const handleSubmit = (e) => {
  e.preventDefault()
  if (userInput.value.length) {
    messages.value.push(userInput.value)
    userInput.value = ''
    updateMessages()
  }
}
const handleSuggestionClick = (msg) => {
  messages.value.push(msg)
  updateMessages()

}


const updateMessages = () => {
  localStorage.setItem("chatDb", JSON.stringify(messages.value));
  console.log(JSON.parse(localStorage.getItem("chatDb")))
}

onMounted(() => {
  if (localStorage.getItem("chatDb")) {
    messages.value = JSON.parse(localStorage.getItem("chatDb"));
  } else {
    localStorage.setItem("chatDb", JSON.stringify(messages.value));
  }

})
</script>

<template>
  <Card class="chatbot">
    <div class="chatbot__wrapper">
      <div class="chatbot__messages">
        <div v-for="message in messages" class="chatbot__message">{{message}}</div>
      </div>
      <div class="chatbot__input">
        <div class="chatbot__form">
          <form @submit.prevent="handleSubmit">
            <div class="chatbot__form__wrapper">
              <input type="text" v-model="userInput" placeholder="Add a comment" >
              <button @click="handleSubmit">Send</button>
            </div>
          </form>
        </div>
        <div>
        <div class="chatbot__submissions">
          <div v-for="suggestion in suggestions" class="chatbot__submission" @click="handleSuggestionClick(suggestion)">{{suggestion}}</div>
        </div>
        </div>
        <div @click="getCoords">
          COORDS
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>

</style>