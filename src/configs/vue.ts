import vueA11yPlugin from "eslint-plugin-vuejs-accessibility";
import type { BaseConfig } from "../types.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export function vueConfigs<const TConfig extends BaseConfig = BaseConfig>() {
  return [
    ...vueA11yPlugin.configs["flat/recommended"],
    {
      name: "danielwaltz/vue",
      files: ["**/*.vue"],
      rules: {
        // Base
        "vue/block-lang": ["error", { script: { lang: ["ts", "tsx"] } }],
        "vue/block-order": [
          "error",
          { order: ["script", "template", "style"] },
        ],
        "vue/block-tag-newline": "error",
        "vue/component-api-style": ["error", ["script-setup"]],
        "vue/component-name-in-template-casing": "error",
        "vue/component-options-name-casing": "error",
        "vue/custom-event-name-casing": "error",
        "vue/define-emits-declaration": ["error", "type-based"],
        "vue/define-macros-order": [
          "error",
          {
            order: [
              "definePageMeta",
              "defineOptions",
              "defineModal",
              "defineProps",
              "defineEmits",
              "defineSlots",
            ],
            defineExposeLast: true,
          },
        ],
        "vue/define-props-declaration": ["error", "type-based"],
        // "vue/define-props-destructuring": "error",
        "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
        "vue/html-button-has-type": "error",
        "vue/html-comment-content-newline": "error",
        "vue/html-comment-content-spacing": "error",
        "vue/html-comment-indent": "error",
        "vue/match-component-file-name": [
          "error",
          { extensions: ["vue", "tsx"] },
        ],
        "vue/match-component-import-name": "error",
        "vue/next-tick-style": ["error", "promise"],
        "vue/no-boolean-default": "error",
        "vue/no-duplicate-attr-inheritance": "error",
        "vue/no-empty-component-block": "error",
        "vue/no-import-compiler-macros": "error",
        "vue/no-multiple-objects-in-class": "error",
        "vue/no-ref-object-reactivity-loss": "error",
        "vue/no-required-prop-with-default": ["error", { autofix: true }],
        "vue/no-reserved-component-names": "error",
        "vue/no-root-v-if": "error",
        "vue/no-template-target-blank": "error",
        "vue/no-unsupported-features": ["error", { version: "^3.5.0" }],
        "vue/no-unused-emit-declarations": "error",
        "vue/no-unused-properties": "error",
        "vue/no-unused-refs": "error",
        "vue/no-use-v-else-with-v-for": "error",
        "vue/no-useless-mustaches": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-text": "error",
        "vue/padding-line-between-blocks": "error",
        "vue/prefer-define-options": "error",
        "vue/prefer-prop-type-boolean-first": "error",
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-true-attribute-shorthand": "error",
        "vue/prefer-use-template-ref": "error",
        "vue/require-direct-export": "error",
        "vue/require-macro-variable-name": "error",
        "vue/require-name-property": "error",
        "vue/require-typed-ref": "error",
        "vue/slot-name-casing": "error",
        "vue/v-bind-style": [
          "error",
          "shorthand",
          { sameNameShorthand: "always" },
        ],
        "vue/v-for-delimiter-style": "error",
        // "vue/v-on-handler-style": ["error", ["method", "inline"]],

        // Accessibility
        "vuejs-accessibility/alt-text": [
          "error",
          { img: ["AppImg", "BaseImg", "NuxtImg"] },
        ],
        "vuejs-accessibility/anchor-has-content": [
          "error",
          { components: ["AppLink", "BaseLink", "NuxtLink"] },
        ],
      },
    },
  ] as const satisfies ResolvableFlatConfig<TConfig>;
}
