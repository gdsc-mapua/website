<script setup lang="ts">

</script>

<template>
  <div id="coming-soon">
    <h1 class="display is-lg dangwa highlighted">This MF is coming soon!</h1>
    <h3 class="title is-lg quiapo">Y'all better get your asses ready.</h3>
    <gdsc-button type="large" link="#">Join The Waitlist</gdsc-button>
    <gdsc-button type="large outlined" link="#">Join The Waitlist</gdsc-button>
    <gdsc-button type="large filled" link="#">Join The Waitlist</gdsc-button>
  </div>
</template>

<style lang="scss" scoped>
@use '../node_modules/@matteusan/sentro' with (
  $prefix: 'gdsc',
  $context: 'theme',
  $token-validation: false
);

#coming-soon {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 100svh;
}

.highlighted {
  &::after {
    content: '';
    width: 100%;
    height: 0.2rem;
    display: block;
    position: relative;
    top: -1rem;
    left: 0.5rem;
    background: sentro.token-get('accent-ink');
    box-shadow: -0.5rem var(--y-distance, 0.4rem) 0 sentro.token-get('cardinal-amber-400');
    border-radius: 5000px;
    transform: rotate(-1deg);
    transition: all var(--gdsc-theme-transition-time) ease;
  }

  &:hover {
    --y-distance: 0.6rem;
  }
}
</style>