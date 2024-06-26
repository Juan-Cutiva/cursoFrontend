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

const navigation = [
	{ name: 'All', href: '/', current: true },
	{ name: 'Clothes', href: '#', current: false },
	{
		name: 'Electronics',
		href: '#',
		current: false
	},
	{
		name: 'Furniture',
		href: '#',
		current: false
	},
];
const navigationO = [
	{
		name: 'Others',
		href: '#',
		current: false
	},
];
const navigationT = [
    {
		name: 'Toys',
		href: '#',
		current: false
	},
];

const navigation2 = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Team', href: '/Team', current: false },
	{
		name: 'Repository',
		href: 'https://github.com/Juan-Cutiva/cursoFrontend',
		current: false,
		target: '_blank'
	},
	{
		name: 'PortFolio',
		href: 'https://portfoliocuti.netlify.app/',
		current: false,
		target: '_blank'
	}
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-[#f7f7f7]">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#acacac] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<a href="/">
										<img className="h-8 w-full" src="\yard_sale.svg" alt="Yard Sale" />
									</a>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												target={item.target}
												rel="noopener noreferrer"
												className={classNames(
													item.current
														? 'border-2 border-verde bg-grisClaro text-verde'
														: 'text-black hover:bg-[#acacac] hover:text-white',
													'rounded-xl px-4 py-1 text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
                                        {navigationT.map((item) => (
											<a
												key={item.name}
												href={item.href}
												target={item.target}
												rel="noopener noreferrer"
												className={classNames(
													item.current
														? 'border-2 border-verde bg-grisClaro text-verde'
														: 'text-black hover:bg-[#acacac] hover:text-white',
													'rounded-xl px-4 py-1 text-sm font-medium hidden md:flex'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
                                        {navigationO.map((item) => (
											<a
												key={item.name}
												href={item.href}
												target={item.target}
												rel="noopener noreferrer"
												className={classNames(
													item.current
														? 'border-2 border-verde bg-grisClaro text-verde'
														: 'text-black hover:bg-[#acacac] hover:text-white',
													'rounded-xl px-4 py-1 text-sm font-medium hidden lg:flex'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div class="flex items-center justify-center">
										<MenuButton className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<p class="hidden font-bold lg:flex">
												yardsale@examle.com
												<img
													className="ml-2 rotate-90 flex sm:flex"
                                                    class="h-8 w-8"
													src="\flechita_2.svg"
													alt="Flecha"
												/>
											</p>
										</MenuButton>
                                        <MenuButton className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
												<img
													className="ml-2 rotate-90 flex lg:hidden"
                                                    class="h-8 w-8"
													src="\flechita_2.svg"
													alt="Flecha"
												/>
										</MenuButton>
										<img
											className="ml-4 h-6 w-6"
											src="\Platzi Yard Sale\Platzi_YardSale_Icons\icon_shopping_cart_notification.svg"
											alt="icon_shopping_cart_notification"
										/>
									</div>
									<Transition
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem>
												{({ focus }) => (
													<a
														href="#"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm font-bold text-gray-800 lg:hidden'
														)}
													>
														yardsale@examle.com
													</a>
												)}
											</MenuItem>
                                        <hr class="ml-4 w-[10rem] my-2 flex lg:hidden" />
											<MenuItem>
												{({ focus }) => (
													<a
														href="#"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm font-bold text-gray-800'
														)}
													>
														My orders
													</a>
												)}
											</MenuItem>
											<MenuItem>
												{({ focus }) => (
													<a
														href="#"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm font-bold text-gray-800'
														)}
													>
														My account
													</a>
												)}
											</MenuItem>
											<hr class="ml-4 w-[10rem] my-2" />
											<MenuItem>
												{({ focus }) => (
													<a
														href="#"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm font-bold text-verde'
														)}
													>
														Sing Out
													</a>
												)}
											</MenuItem>
										</MenuItems>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<DisclosurePanel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation2.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? 'border-2 border-verde bg-grisClaro text-verde'
											: 'text-gray-800 hover:bg-[#acacac] hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
