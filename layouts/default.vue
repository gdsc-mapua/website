<script setup lang="ts">

</script>

<template>
<slot />
</template>

<style lang="scss">
@use '../node_modules/@matteusan/sentro' with ($prefix: 'gdsc', $context: 'theme');

:root {
  @include sentro.token-config((
    'cardinal': (
      'black': #1B1716,
      'white': #FFFBF6,
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
    'font-adjustment-factor': 10vw,
    'display-adjustment-factor': 10vw,
    'display-line-height': 1.25,
    'headline-adjustment-factor': 9vw,
    'headline-line-height': 1.25,
    'title-adjustment-factor': 8vw,
    'title-line-height': 1.25,
    'body-adjustment-factor': 6vw,
    'body-line-height': 1.5,
  ));
  font-family: 'Inter', sans-serif;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  &.quiapo {
    font-family: 'Quiapo', serif;
  }

  &.dangwa {
    font-family: 'Dangwa', serif;
  }

  &.cubao {
      font-family: 'Cubao', sans-serif;

    &.is-condensed {
      font-family: 'Cubao', sans-serif;
      font-stretch: condensed;
    }
  }
}

.display {
  --default-adjustment-factor: var(--gdsc-theme-display-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-display-line-height, 1.25);

  &.is-lg {
    font-size: clamp(#{sentro.to-rem(57px)}, var(--default-adjustment-factor), #{sentro.to-rem(64px)});
    font-weight: 900;
    letter-spacing: -0.25;
    line-height: var(--default-line-height);
  }

  &.is-md {
    font-size: clamp(#{sentro.to-rem(45px)}, var(--default-adjustment-factor), #{sentro.to-rem(52px)});
    font-weight: 900;
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &.is-sm {
    font-size: clamp(#{sentro.to-rem(36px)}, var(--default-adjustment-factor), #{sentro.to-rem(44px)});
    font-weight: 900;
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }
}

.headline {
  --default-adjustment-factor: var(--gdsc-theme-headline-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-headline-line-height, 1.25);

  &.is-lg {
    font-size: clamp(#{sentro.to-rem(32px)}, var(--gdsc-theme-headline-adjustment-factor), #{sentro.to-rem(40px)});
    font-weight: 700;
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &.is-md {
    font-size: clamp(#{sentro.to-rem(28px)}, var(--gdsc-theme-headline-adjustment-factor), #{sentro.to-rem(36px)});
    font-weight: 700;
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &.is-sm {
    font-size: clamp(#{sentro.to-rem(24px)}, var(--gdsc-theme-headline-adjustment-factor), #{sentro.to-rem(32px)});
    font-weight: 700;
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }
}

.title {
  --default-adjustment-factor: var(--gdsc-theme-title-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-title-line-height, 1.25);

  &.is-lg {
    font-size: clamp(#{sentro.to-rem(22px)}, var(--gdsc-theme-title-adjustment-factor), #{sentro.to-rem(28px)});
    font-weight: 700;
    letter-spacing: 0;
    line-height: var(--default-line-height);
  }

  &.is-md {
    font-size: clamp(#{sentro.to-rem(16px)}, var(--gdsc-theme-title-adjustment-factor), #{sentro.to-rem(24px)});
    font-weight: 700;
    letter-spacing: 0.15;
    line-height: var(--default-line-height);
  }

  &.is-sm {
    font-size: clamp(#{sentro.to-rem(14px)}, var(--gdsc-theme-title-adjustment-factor), #{sentro.to-rem(20px)});
    font-weight: 700;
    letter-spacing: 0.1;
    line-height: var(--default-line-height);
  }
}

.body,
%body {
  --default-adjustment-factor: var(--gdsc-theme-body-adjustment-factor, var(--gdsc-theme-font-adjustment-factor));
  --default-line-height: var(--gdsc-theme-body-line-height, 1.5);

  &.is-lg {
    font-size: clamp(#{sentro.to-rem(16px)}, var(--gdsc-theme-body-adjustment-factor), #{sentro.to-rem(24px)});
    font-weight: 400;
    letter-spacing: 0.5;
    line-height: var(--default-line-height);
  }

  &.is-md {
    font-size: clamp(#{sentro.to-rem(14px)}, var(--gdsc-theme-body-adjustment-factor), #{sentro.to-rem(20px)});
    font-weight: 400;
    letter-spacing: 0.25;
    line-height: var(--default-line-height);
  }

  &.is-sm {
    font-size: clamp(#{sentro.to-rem(12px)}, var(--gdsc-theme-body-adjustment-factor), #{sentro.to-rem(16px)});
    font-weight: 400;
    letter-spacing: 0.4;
    line-height: var(--default-line-height);
  }
}

p {
  @extend %body;
}
</style>