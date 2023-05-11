import { component$ } from '@builder.io/qwik';
import type { AsElementProps } from "./util"

interface MenuRootProps extends AsElementProps {
}

const MenuRoot = component$<MenuRootProps>((props) => {
  const {as: pAs, ...rest} = props;
  const Tag = pAs ?? "div";
  return <Tag { ...rest }>Hello Qwik!</Tag>
});

const Button = component$<AsElementProps>((props) => {
  const {as: pAs, ...rest} = props;
  const Tag = pAs ?? "div";
  return <Tag { ...rest }>Hello Qwik!</Tag>
});

const Items = component$<AsElementProps>((props) => {
  const {as: pAs, ...rest} = props;
  const Tag = pAs ?? "div";
  return <Tag { ...rest }>Hello Qwik!</Tag>
});

const Item = component$<AsElementProps>((props) => {
  const {as: pAs, ...rest} = props;
  const Tag = pAs ?? "div";
  return <Tag { ...rest }>Hello Qwik!</Tag>
});

export const Menu = Object.assign(MenuRoot, { Button, Item, Items });