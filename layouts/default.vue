<script setup lang="ts">

</script>

<template>
<slot />
</template>

<style lang="scss">
@use '../node_modules/@matteusan/sentro' with ($prefix: 'gdsc', $context: 'theme');
@use '../assets/tools';

@function _color-module($token, $ink) {
  @return (
    100: sentro.token-get('#{$token}-100'),
    200: sentro.token-get('#{$token}-200'),
    300: sentro.token-get('#{$token}-300'),
    400: sentro.token-get('#{$token}-400'),
    500: sentro.token-get('#{$token}-500'),
    600: sentro.token-get('#{$token}-600'),
    700: sentro.token-get('#{$token}-700'),
    ink: sentro.token-get($ink),
  );
}

:root {
  @include sentro.token-config((
    // Primitive
    'cardinal': (
      'black': (
        100: #bbb2b2,
        200: #a49c9c,
        300: #7a7373,
        400: #595454,
        500: #444141,
        600: #252323,
        700: #1B1716,
      ),
      'white': (
        100: #FFFBF6,
        200: #e0d8d2,
        300: #b2a8a1,
        400: #9f978d,
        500: #7c746b,
        600: #484138,
        700: #3f362a,
      ),
      'amber': (
        100: #FFF7EC,
        200: #FFE0B2,
        300: #FFC671,
        400: #FFAD33,
        500: #E2941F,
        600: #BC750C,
        700: #784800,
      ),
      'red': (
        100: #FFE9E7,
        200: #FFB9B1,
        300: #F36C5E,
        400: #DA4131,
        500: #C13527,
        600: #942014,
        700: #51110A,
      )
    ),
  ));
  @include sentro.token-config((
    'font-adjustment-factor': 10vw,
    'display': (
      'adjustment-factor': 10vw,
      'size': (
        'lg': clamp(57px, var(--gdsc-theme-display-adjustment-factor), 64px),
        'md': clamp(45px, var(--gdsc-theme-display-adjustment-factor), 52px),
        'sm': clamp(36px, var(--gdsc-theme-display-adjustment-factor), 44px),
      ),
      'weight': 900,
      'line-height': 1.25,
    ),
    'headline': (
      'adjustment-factor': 9vw,
      'size': (
        'lg': clamp(32px, var(--gdsc-theme-headline-adjustment-factor), 40px),
        'md': clamp(28px, var(--gdsc-theme-headline-adjustment-factor), 36px),
        'sm': clamp(24px, var(--gdsc-theme-headline-adjustment-factor), 32px),
      ),
      'weight': 700,
      'line-height': 1.25,
    ),
    'title': (
      'adjustment-factor': 8vw,
      'size': (
        'lg': clamp(22px, var(--gdsc-theme-title-adjustment-factor), 28px),
        'md': clamp(16px, var(--gdsc-theme-title-adjustment-factor), 24px),
        'sm': clamp(14px, var(--gdsc-theme-title-adjustment-factor), 20px),
      ),
      'weight': 700,
      'line-height': 1.25,
    ),
    'body': (
      'adjustment-factor': 6vw,
      'size': (
        'lg': clamp(16px, var(--gdsc-theme-body-adjustment-factor), 24px),
        'md': clamp(15px, var(--gdsc-theme-body-adjustment-factor), 20px),
        'sm': clamp(14px, var(--gdsc-theme-body-adjustment-factor), 16px),
      ),
      'weight': 400,
      'line-height': 1.5,
    ),
    'transition-time': 0.2s
  ));
  font-family: 'Inter', sans-serif;

  @include tools.light-mode {
    @include sentro.token-config((
      'primary': _color-module('cardinal-white', 'cardinal-black-700'),
      'accent': _color-module('cardinal-red', 'cardinal-amber-400'),
      'error': _color-module('cardinal-red', 'cardinal-white-200')
    ));
  }

  @include tools.dark-mode {
    @include sentro.token-config((
      'primary': _color-module('cardinal-black', 'cardinal-white-200'),
      'accent': _color-module('cardinal-red', 'cardinal-amber-300'),
      'error': _color-module('cardinal-red', 'cardinal-white-200')
    ));
  }
}

*,
:before,
:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  color: inherit;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

:where(.quiapo),
%quiapo {
  font-family: 'Quiapo', serif;
  font-weight: 400 !important;
}

:where(.dangwa),
%dangwa {
  font-family: 'Dangwa', serif;
  font-weight: 400 !important;
}

:where(.cubao),
%cubao {
  font-family: 'Cubao', sans-serif;
  font-weight: 400 !important;

  &:where(.is-condensed) {
    font-family: 'Cubao', sans-serif;
    font-stretch: condensed;
  }
}

:where(.display) {
  @include sentro.key-bind('default-adjustment-factor', sentro.token-get('display-adjustment-factor'));
  --default-adjustment-factor: var(--gdsc-theme-display-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-display-line-height, 1.25);

  &:where(.is-lg) {
    font-size: sentro.token-get('display-size-lg');
    font-weight: sentro.token-get('display-weight');
    letter-spacing: -0.25;
    line-height: var(--default-line-height);
  }

  &:where(.is-md) {
    font-size: sentro.token-get('display-size-md');
    font-weight: sentro.token-get('display-weight');
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &:where(.is-sm) {
    font-size: sentro.token-get('display-size-sm');
    font-weight: sentro.token-get('display-weight');
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }
}

:where(.headline) {
  --default-adjustment-factor: var(--gdsc-theme-headline-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-headline-line-height, 1.25);

  &:where(.is-lg) {
    font-size: sentro.token-get('headline-size-lg');
    font-weight: sentro.token-get('headline-weight');
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &:where(.is-md) {
    font-size: sentro.token-get('headline-size-md');
    font-weight: sentro.token-get('headline-weight');
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &:where(.is-sm) {
    font-size: sentro.token-get('headline-size-sm');
    font-weight: sentro.token-get('headline-weight');
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }
}

:where(.title) {
  --default-adjustment-factor: var(--gdsc-theme-title-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-title-line-height, 1.25);

  &:where(.is-lg) {
    font-size: sentro.token-get('title-size-lg');
    font-weight: sentro.token-get('title-weight');
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &:where(.is-md) {
    font-size: sentro.token-get('title-size-md');
    font-weight: sentro.token-get('title-weight');
    letter-spacing: 0.15;
    line-height: var(--default-line-height);
  }

  &:where(.is-sm) {
    font-size: sentro.token-get('title-size-sm');
    font-weight: sentro.token-get('title-weight');
    letter-spacing: 0.1;
    line-height: var(--default-line-height);
  }
}

:where(.body),
%body {
  --default-adjustment-factor: var(--gdsc-theme-body-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-body-line-height, 1.5);

  &:where(.is-lg) {
    font-size: sentro.token-get('body-size-lg');
    font-weight: sentro.token-get('body-weight');
    letter-spacing: 0.5;
    line-height: var(--default-line-height);
  }

  &:where(.is-md) {
    font-size: sentro.token-get('body-size-md');
    font-weight: sentro.token-get('body-weight');
    letter-spacing: 0.25;
    line-height: var(--default-line-height);
  }

  &:where(.is-sm) {
    font-size: sentro.token-get('body-size-sm');
    font-weight: sentro.token-get('body-weight');
    letter-spacing: 0.4;
    line-height: var(--default-line-height);
  }
}

p {
  @extend %body;
}

body {
  background: sentro.token-get('primary-200');
  color: sentro.token-get('primary-ink');

  @include tools.dark-mode {
    background: sentro.token-get('primary-700');
  }
}
</style>