// Reference and converted from https://headlessui.com/react/menu

import { Fragment, QwikIntrinsicElements, component$, useSignal } from "@builder.io/qwik"
import { Menu } from "~/components/UI/Menu"
import { Transition } from "~/components/UI/Transition";

export default component$(() => {
  // This obviously is too global.
  // We need to figure out how to make this scoped to the menu items
  const active = useSignal(false);

  return (
    <div class="fixed top-16 w-56 text-right">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <Menu.Button class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <svg
              class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="px-1 py-1 ">
              <Menu.Item>
                {/* {({ active }) => ( */}
                  <button
                  class={{
                    "b-violet-500 text-white": active.value,
                    "text-gray-900": !active.value,
                    "group flex w-full items-center rounded-md px-2 py-2 text-sm": true
                  }}
                  >
                    {active ? (
                      <EditActiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                {/* )} */}
              </Menu.Item>
              <Menu.Item>
                {/* {({ active }) => ( */}
                  <button
                  class={{
                    "b-violet-500 text-white": active.value,
                    "text-gray-900": !active.value,
                    "group flex w-full items-center rounded-md px-2 py-2 text-sm": true
                  }}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                // )}
              </Menu.Item>
            </div>
            <div class="px-1 py-1">
              <Menu.Item>
                {/* {({ active }) => ( */}
                  <button
                  class={{
                    "b-violet-500 text-white": active.value,
                    "text-gray-900": !active.value,
                    "group flex w-full items-center rounded-md px-2 py-2 text-sm": true
                  }}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                // )}
              </Menu.Item>
              <Menu.Item>
                {/* {({ active }) => ( */}
                  <button
                  class={{
                    "b-violet-500 text-white": active.value,
                    "text-gray-900": !active.value,
                    "group flex w-full items-center rounded-md px-2 py-2 text-sm": true
                  }}
                  >
                    {active ? (
                      <MoveActiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                {/* )} */}
              </Menu.Item>
            </div>
            <div class="px-1 py-1">
              <Menu.Item>
                {/* {({ active }) => ( */}
                  <button
                  class={{
                    "b-violet-500 text-white": active.value,
                    "text-gray-900": !active.value,
                    "group flex w-full items-center rounded-md px-2 py-2 text-sm": true
                  }}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                {/* )} */}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
});

function EditInactiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

function EditActiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

function DuplicateInactiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

function DuplicateActiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

function ArchiveInactiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

function ArchiveActiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

function MoveInactiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

function MoveActiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }

function DeleteInactiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

function DeleteActiveIcon(props: QwikIntrinsicElements['svg']) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }
