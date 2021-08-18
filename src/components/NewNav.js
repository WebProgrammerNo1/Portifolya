import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  CursorClickIcon,
  MenuIcon,
  XIcon,
  CurrencyDollarIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";

const solutions = [
  {
    name: "Features",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Pricing",
    href: "#",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Resources",
    href: "#",
    icon: CubeTransparentIcon,
  },
];

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start  ">
            <h1>
              <Link to="#" className="logo font-bold text-2xl">
                Shortly
              </Link>
            </h1>
          </div>
          {/* Mobile hamburger menu */}
          <div className="mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* Mobile hamburger menu */}
          {/* Dekstop nav items */}
          <Popover.Group as="nav" className="hidden md:flex  space-x-10">
            <Link
              to="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              to="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Resources
            </Link>
          </Popover.Group>
          {/* Dekstop nav items */}
          {/* Dekstop nav sign buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              to="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-cyan hover:bg-lightCyan"
            >
              Sign up
            </Link>
          </div>
          {/* Dekstop nav sign buttons */}
        </div>
      </div>

      {/* Mobile popover menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 right-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-darkViolet divide-y divide-gray-500 px-5">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <h1>
                  <Link to="#" className="logo font-bold text-2xl text-white">
                    Shortly
                  </Link>
                </h1>
                <div className="-mr-2">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 ">
                  {solutions.map((item) => (
                    <Link
                      to={item.href}
                      key={item.name}
                      className="-m-3 p-3 flex items-center rounded-3xl hover:bg-cyan group"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-cyan group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-white pointer-events-none group-hover:text-white ">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link
                  to="#"
                  className="w-full rounded-3xl flex items-center justify-center px-4 py-2 border border-transparent  shadow-sm text-base font-medium text-white bg-cyan hover:bg-lightCyan"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link to="#" className="text-cyan hover:text-lightCyan">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* Mobile popover menu */}
    </Popover>
  );
}
