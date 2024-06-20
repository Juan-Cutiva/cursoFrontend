import { Fragment } from 'react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-[#ffffff]">
			{({ open }) => (
				<>
					<div className="sm:absolute inset-y-0 right-0 flex items-center justify-center pr-2 static sm:inset-auto sm:pr-0">
						{/* Profile dropdown */}
						<Menu as="div" className="relative sm:ml-[-5rem]">
							<div>
								<MenuButton className="relative flex rounded-full text-sm">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">Open user menu</span>
									<div class="flex">
										<h1 class="mr-1 font-bold text-base">Order:</h1><h2 class="mr-2 text-base">Most recent</h2><img class="rotate-90" className="h-8 w-8 rounded-full" src="\flechita_2.svg" alt="Flecha" />
									</div>
								</MenuButton>
							</div>
							<Transition
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<MenuItems className="absolute right-0 z-10 mt-2  w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<MenuItem>
										{({ focus }) => (
											<a
												href="#"
												className={classNames(
													focus ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Price: Low to High
											</a>
										)}
									</MenuItem>
									<MenuItem>
										{({ focus }) => (
											<a
												href="#"
												className={classNames(
													focus ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Price: High to Low
											</a>
										)}
									</MenuItem>
                                    <MenuItem>
										{({ focus }) => (
											<a
												href="#"
												className={classNames(
													focus ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Newest Arrivals
											</a>
										)}
									</MenuItem>
                                    <MenuItem>
										{({ focus }) => (
											<a
												href="#"
												className={classNames(
													focus ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Best Sellers
											</a>
										)}
									</MenuItem>
                                    <MenuItem>
										{({ focus }) => (
											<a
												href="#"
												className={classNames(
													focus ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Popularity
											</a>
										)}
									</MenuItem>
								</MenuItems>
							</Transition>
						</Menu>
					</div>
				</>
			)}
		</Disclosure>
	);
}
