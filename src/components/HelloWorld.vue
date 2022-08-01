<template>
  <p>
    Example local translations: {{ $tc('example') }} 
  </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
}
</script>
