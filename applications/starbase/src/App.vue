<template>
  <div id="app">
    <h3>{{title}}</h3>
    <button class="btn btn-primary" @click="fetchCharacter">
      Test Fetch Character
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team'
    }
  },
  methods: {
    fetchCharacter() {
      // Use this Chrome Extension to solve CORS problem
      // https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
      fetch('https://swapi.co/api/people/1', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => console.log(json))
    }
  }
}
</script>

