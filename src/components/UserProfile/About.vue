<template>
  <div class="about">
    <div class="education">
      <h2>Образование:</h2>
      <hr />
      <div class="center">
        <ul>
          <li>Школа: {{ school }}</li>
          <li>ВУЗ/Коледж: {{ university }}</li>
        </ul>
      </div>
    </div>
    <div class="work">
      <h2>Работа ❘ специализация ❘ компетенция:</h2>
      <hr />
      <div class="center">
        <ul>
          <li>Работа: {{ job }}</li>
          <li>Специализация: {{ specialization }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    school: String,
    university: String,
    job: String,
    specialization: String,
  },
};
</script>

<style lang="scss" scoped>
</style>