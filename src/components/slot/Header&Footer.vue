<template>
  <header>
    <slot name="header" />
  </header>

  <footer>
    <slot name="footer" />
  </footer>
</template>

<style scoped>
header,
footer {
  min-width: 100%;
  background: hsl(41, 100%, 70%);
}
</style>
