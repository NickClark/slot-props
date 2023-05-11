import { component$ } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <Link href="/disclosure"
        class="m-8 my-3 w-60 h-20 flex items-center justify-center rounded-lg bg-white"
      >Disclosure Example</Link>
      <Link href="/menu"
        class="m-8 my-3 w-60 h-20 flex items-center justify-center rounded-lg bg-white"
      >Menu Example</Link>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Slot Props',
  meta: [
    {
      name: 'description',
      content: 'Slot Prop Issues',
    },
  ],
};
