
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function Header() {
  // navigation button attributes
  const navigation = [
    {
      name: "Home",
      href: "/",
      current: false,
    },
  ];

  // set filters for what is displayed
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  // return a dynamic navbar that has a mobile view (Disclosure button) when below specific pixel count
  return (
    <>
      <Disclosure as="nav" aria-label="navigation bar" className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        {({ open }) => {
          return (
            <>
              <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "Navbutton-selected"
                                : "Navbutton-unselected",
                              " rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                    <div className="flex space-x-4">
                      <Link
                        className="Navbutton-unselected rounded-full text-black bg-white hover:text-white focus:outline-none"
                        type="button"
                        href="/guide"
                      >
                        <span className="sr-only">Questions and Help</span>
                        <QuestionMarkCircleIcon
                          className="h-8 w-8"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map(
                    (item) =>
                      (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          );
        }}
      </Disclosure>
      <Divider />
    </>
  );
}
