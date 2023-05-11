// Reference and converted from https://headlessui.com/react/disclosure

import { component$, useSignal } from '@builder.io/qwik';
import { Disclosure } from "~/components/UI/Disclosure";

export default component$(() => {
  const open1 = useSignal(true);
  const open2 = useSignal(true);

  return (
    <div class="w-full px-4 pt-16">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure open={open1}>
          <Disclosure.Button class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>What is a disclosure?</span>
              <svg
                class={{
                  'rotate-180 transform': open1.value,
                  'h-5 w-5 text-purple-500': true,
                }}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
          </Disclosure.Button>
          <Disclosure.Panel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            It's a simple, accessible foundation for building custom UIs that show and hide content,
            like togglable accordion panels.
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure open={open2} as="div" class="mt-2">
            <Disclosure.Button class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What's the problem?</span>
              <svg
                class={{
                  'rotate-180 transform': open2.value,
                  'h-5 w-5 text-purple-500': true,
                }}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            While this example does work, I shouldn't have to make a new signal for every disclosure.
            In Svelte or React, I could just use a slot prop or a render prop, and that would provide
            a variable for each context. In Qwik, I have to make a new signal for each context. This
            is even more evident when I have an array of components. See the Menu example.
            </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  )
});