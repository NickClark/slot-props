import {
  component$,
  createContextId,
  Fragment,
  type FunctionComponent,
  type QwikIntrinsicElements,
  type Signal,
  Slot,
  useContextProvider,
  useSignal,
  useContext,
} from "@builder.io/qwik";
import type { AsElementProps } from "./util";


interface DisclosureRootProps extends AsElementProps {
  open?: Signal<boolean>;
}

interface DisclosureContext {
  open: Signal<boolean>;
}

const DisclosureContext = createContextId<DisclosureContext>("DisclosureContext");

const DisclosureRoot = component$<DisclosureRootProps>((props) => {
  const { as, open = useSignal(false), ...rest } = props;

 const Tag = as ?? Fragment;

  useContextProvider(DisclosureContext, {
    open: open,
  });

  return (
    <Tag {...rest}>
      <Slot />
    </Tag>
  );
});

interface ButtonProps {
  as?: FunctionComponent | string;
  class?: QwikIntrinsicElements[string]["class"];
  href?: string;
}

const Button = component$<ButtonProps>((props) => {
  const {open} = useContext(DisclosureContext);
  const Tag = props.as ?? "button";
  return (
    <Tag onClick$={() => open.value = !open.value} class={props.class}>
      <Slot />
    </Tag>
  );
});

interface PanelProps {
  as?: FunctionComponent | string;
  class?: QwikIntrinsicElements[string]["class"];
}

const Panel = component$<PanelProps>((props) => {
  const {as: pAs, ...rest} = props;
  const {open} = useContext(DisclosureContext);
  const Tag = pAs ?? "div";

  return (
    <>{open.value &&
      <Tag {...rest}>
        <Slot />
      </Tag>
    }</>
  );
});

export const Disclosure = Object.assign(DisclosureRoot, { Button, Panel });
