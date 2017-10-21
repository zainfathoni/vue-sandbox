<template>
  <div>
    {{character}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {}
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
        .then(json => (this.character = json))
    }
  },
  created() {
    this.fetchCharacter()
  }
}
</script>
