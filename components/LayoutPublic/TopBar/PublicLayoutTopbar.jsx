import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const PublicLayoutTopbar = (props) => {
    const routing = useRouter();
    return(
        <Disclosure as="header" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            {/* Logo */}
                            <div className="relative z-10 flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        width={140}
                                        height={50}
                                        className="block h-8 w-auto"
                                        src="/images/logos/primary.png"
                                        alt="Your Company"
                                    />
                                </div>
                            </div>
                            {/* Search */}
                            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <Link
                                    href="#"
                                    className="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>

                        {/* Main menu */}
                        <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
                            {props.navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        routing.asPath === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile */}
                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {props.navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        routing.asPath === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <Link
                                href="#"
                                className="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Login
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default PublicLayoutTopbar;