<script setup lang="ts">
import { handleURLTarget, handleVariants } from '~/lib/helpers';

const props = defineProps<{
  type?: string;
  nativeType?: 'reset'|'submit'|'button';
  link?: string;
  a11tyLabel?: string;
}>();
</script>

<template>
<button v-if="!link" :class="`gdsc-button cubao${ type ? ' ' + handleVariants(type) : '' }`" v-bind="$attrs" :aria-label="a11tyLabel" :type="nativeType">
  <i v-if="$slots['icon-trailing']" class="gdsc-button__icon"><slot name="icon-trailing" /></i>
  <span v-if="$slots.default" class="gdsc-button__label"><slot /></span>
  <i v-if="$slots['icon-leading']" class="gdsc-button__icon"><slot name="icon-leading" /></i>
</button>
<NuxtLink v-else :class="`gdsc-button cubao${ type ? ' ' + handleVariants(type) : '' }`" :target="handleURLTarget(link)" v-bind="$attrs" :to="link" :aria-label="a11tyLabel">
  <i v-if="$slots['icon-trailing']" class="gdsc-button__icon"><slot name="icon-trailing" /></i>
  <span v-if="$slots.default" class="gdsc-button__label"><slot /></span>
  <i v-if="$slots['icon-leading']" class="gdsc-button__icon"><slot name="icon-leading" /></i>
</NuxtLink>
</template>

<style lang="scss" scoped>
@use '../node_modules/@matteusan/sentro' with (
  $prefix: 'gdsc',
  $context: 'theme',
  $token-validation: false
);
@use '../assets/tools';

.gdsc-button {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  user-select: none;
  overflow: visible;
  vertical-align: middle;

  cursor: pointer;
  outline: sentro.key-create('button-outline', none);

  -webkit-appearance: caret;
  @include sentro.prefix(transition, all #{sentro.token-get('transition-time')} ease);

  // border-radius: sentro.key-create('button-radius', 0.3rem);
  padding: sentro.key-create('button-padding', (0.5rem 0.7rem));

  font-size: sentro.key-create('button-size', sentro.token-get('body-size-sm'));
  font-weight: 700;

  @include tools.light-mode {
    background: sentro.key-create('button-fill', transparent);
    color: sentro.key-create('button-ink', sentro.token-get('accent-400'));
    border: 1px solid sentro.key-create('button-border', transparent);

    &:hover,
    &:focus {
      @include sentro.key-bind('button-fill', sentro.token-get('accent-500'));
      @include sentro.key-bind('button-ink', sentro.token-get('accent-ink'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-700'));
    }

    &:active {
      @include sentro.key-bind('button-fill', sentro.token-get('accent-600'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-700'));
    }
  }

  @include tools.dark-mode {
    background: sentro.key-create('button-fill', transparent);
    color: sentro.key-create('button-ink', sentro.token-get('accent-ink'));
    border: 1px solid sentro.key-create('button-border', transparent);

    &:hover,
    &:focus {
      @include sentro.key-bind('button-fill', sentro.token-get('accent-400'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-300'));
    }

    &:active {
      @include sentro.key-bind('button-fill', sentro.token-get('accent-500'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-200'));
    }
  }

  &.is-outlined {
    @include tools.light-mode {
      @include sentro.key-bind('button-fill', transparent);
      @include sentro.key-bind('button-border', sentro.token-get('accent-500'));

      &:hover,
      &:focus {
        @include sentro.key-bind('button-fill', sentro.token-get('accent-500'));
        @include sentro.key-bind('button-ink', sentro.token-get('accent-ink'));
        @include sentro.key-bind('button-border', sentro.token-get('accent-700'));
      }

      &:active {
        @include sentro.key-bind('button-fill', sentro.token-get('accent-600'));
        @include sentro.key-bind('button-border', sentro.token-get('accent-700'));
      }
    }

    @include tools.dark-mode {
      @include sentro.key-bind('button-fill', transparent);
      @include sentro.key-bind('button-ink', sentro.token-get('accent-ink'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-400'));

      &:hover,
      &:focus {
        @include sentro.key-bind('button-fill', sentro.token-get('accent-400'));
        @include sentro.key-bind('button-border', sentro.token-get('accent-300'));
      }

      &:active {
        @include sentro.key-bind('button-fill', sentro.token-get('accent-500'));
        @include sentro.key-bind('button-border', sentro.token-get('accent-200'));
      }
    }
  }

  &.is-filled {
    @include tools.light-mode {
      @include sentro.key-bind('button-fill', sentro.token-get('accent-500'));
      @include sentro.key-bind('button-ink', sentro.token-get('accent-ink'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-500'));

      &:hover,
      &:focus {
        @include sentro.key-bind('button-border', sentro.token-get('accent-700'));
      }

      &:active {
        @include sentro.key-bind('button-fill', sentro.token-get('accent-600'));
        @include sentro.key-bind('button-border', sentro.token-get('accent-700'));
      }
    }

    @include tools.dark-mode {
      @include sentro.key-bind('button-fill', sentro.token-get('accent-400'));
      @include sentro.key-bind('button-ink', sentro.token-get('accent-ink'));
      @include sentro.key-bind('button-border', sentro.token-get('accent-300'));

      &:hover,
      &:focus {
        @include sentro.key-bind('button-border', sentro.token-get('accent-200'));
      }

      &:active {
        @include sentro.key-bind('button-fill', sentro.token-get('accent-500'));
        @include sentro.key-bind('button-border', sentro.token-get('accent-200'));
      }
    }
  }

  &.is-large {
    font-size: sentro.key-create('button-size', sentro.token-get('body-size-lg'));
    padding: sentro.key-create('button-padding', (0.7rem 1.2rem));
  }

  /// TODO: Fix button icon not rendering width.
  .gdsc-button__icon {
    display: inline-block;
    position: relative;
    color: sentro.key-create('button-icon-ink', inherit);
    font-size: sentro.key-create('button-icon-size', 16px);
    /* @fallback */
    width: sentro.key-create('button-icon-size', 16px);
    max-width: max-content;
    height: sentro.key-create('button-icon-size', 16px);

    > * {
      position: relative;
      color: sentro.key-create('button-icon-ink', inherit);
      font-size: sentro.key-create('button-icon-size', 16px);
      /* @fallback */
      width: sentro.key-create('button-icon-size', 16px);
      max-width: max-content;
      height: sentro.key-create('button-icon-size', 16px);
    }
  }

  .gdsc-button__label {
    color: sentro.key-create('button-label-ink', inherit);
    font-family: sentro.key-create('button-label-family', inherit);
    font-size: sentro.key-create('button-label-size', inherit);
    font-weight: sentro.key-create('button-label-weight', inherit);
    line-height: sentro.key-create('button-label-line-height', inherit);
    text-align: center;
  }
}
</style>