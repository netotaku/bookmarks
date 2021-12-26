<template>
  <header>
    <h1>H!</h1>
  </header>
  <menu id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </menu>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
html{
  font-family: monospace;
  font-size: 1em;
}
</style>
