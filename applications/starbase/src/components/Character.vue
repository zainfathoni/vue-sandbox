<template>
  <div @click="switchCharacter">
    {{character}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      // Use this Chrome Extension to solve CORS problem
      // https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
      fetch(`https://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => (this.character = json))
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1
      this.fetchCharacter(random_id)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>
