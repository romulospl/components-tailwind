<script setup>
import { ref } from 'vue'
import selectField from './components/selectField.vue'

const selected = ref('')
const itens = ref([
  { id: 1, nome: 'Água' },
  { id: 2, nome: 'Terra' },
  { id: 3, nome: 'Fogo' },
  { id: 4, nome: 'Ar' },
])
</script>

<template>
  <div class="border border-black w-full">
    <label>Seleciononado: {{ selected }}</label>

    <div>
      <selectField width="700px" v-model="selected" :itens="itens" item-text="nome" label="Selecione"></selectField>
    </div>


    <div class="mt-10">
      <selectField width="700px" v-model="selected" :itens="itens" label="Selecione"></selectField>
    </div>


  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
