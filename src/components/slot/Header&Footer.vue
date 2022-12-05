<template>
  <header>
    <slot name="header" />
  </header>

  <footer>
    <slot name="footer" />
  </footer>
</template>

<style scoped>
header {
  min-width: 100%;
  background: skyblue;
}

footer {
  min-width: 100%;
  background: rgb(255, 205, 97);
}
</style>
