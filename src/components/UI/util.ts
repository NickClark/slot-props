import type { FunctionComponent, QwikIntrinsicElements } from "@builder.io/qwik";

export interface OverridableClassProps {
  class?: QwikIntrinsicElements[string]["class"];
}
export interface AsElementProps extends OverridableClassProps {
  as?: FunctionComponent | string;
}