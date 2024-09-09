<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<style>
.app-button {
  padding: 10px 20px;
  font-size: 0.9em;
  border: none;
  background-color: var(--red);
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.app-button:hover {
  transform: scale(0.97);
}
</style>
