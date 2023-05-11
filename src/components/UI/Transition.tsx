import { Slot, component$ } from "@builder.io/qwik";

export const Transition = component$((props) => {
    const { as: pAs, ...rest } = props;
    const Tag = pAs ?? "div";
    return <Tag {...rest}>
      <Slot />
    </Tag>;
});