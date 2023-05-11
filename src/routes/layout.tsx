import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return <main
    class= "h-screen flex flex-col overflow-hidden bg-gradient-to-br from-fuchsia-500 to-fuchsia-800">
    <Slot />
  </main>
});
