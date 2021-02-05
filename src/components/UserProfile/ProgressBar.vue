<template>
  <div
    :class="{
      key20: filled >= 20,
      key40: filled >= 40,
      key60: filled >= 60,
      key80: filled >= 80,
      key100: filled >= 100,
    }"
  ></div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      filled: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  border: none;
  background: $bluish;
  height: 100%;
  width: 0%;
}

.key20 {
  width: 20%;
}

.key40 {
  width: 40%;
}

.key60 {
  width: 60%;
}

.key80 {
  width: 80%;
}

.key100 {
  width: 100%;
}
</style>