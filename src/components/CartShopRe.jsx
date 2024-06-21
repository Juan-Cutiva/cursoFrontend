import { Fragment } from 'react';

const navigation = [
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
		price: '$ 220,00',
		name: 'Various Things',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE',
		price: '$ 20,00',
		name: 'Cup of Coffee',
		alt: 'CartProduct',
		srcButton: '../../added.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so',
		price: '$ 1020,00',
		name: 'MacBook',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
		price: '$ 60,00',
		name: 'High Heels',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI',
		price: '$ 2000,00',
		name: 'School Setup',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM',
		price: '$ 120,00',
		name: 'PlayStation Controller',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU',
		price: '$ 1300,00',
		name: 'MacBook and Mouse',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU',
		price: '$ 2200,00',
		name: 'Old Camera',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E',
		price: '$ 1400,00',
		name: 'Two old Cars',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/146/5000/3333.jpg?hmac=xdlFnzoavokA3U-bzo35Vk4jTBKx8C9fqH5IuCPXj2U',
		price: '$ 80,00',
		name: 'Tricycle',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs',
		price: '$ 40,00',
		name: 'Clock',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/34/3872/2592.jpg?hmac=4o5QGDd7eVRX8_ISsc5ZzGrHsFYDoanmcsz7kyu8A9A',
		price: '$ 15,00',
		name: 'Bucket',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/157/5000/3914.jpg?hmac=A23PziOOpi_DIdiPRI30m9_1A8keOtMF3a6Vb-D7dRA',
		price: '$ 200,00',
		name: 'Skateboard',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/183/2316/1544.jpg?hmac=908ZBWKqGdL9kio38tCq2ViwMm3DjLUtkjU_6SWNa9k',
		price: '$ 3000,00',
		name: 'Old Van',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	},
	{
		href: '#',
		src: 'https://fastly.picsum.photos/id/211/1920/1280.jpg?hmac=5feWJpfa59_r1yi4NCuTxY9IWrNWZqEUDIAwrtKId9s',
		price: '$ 5000,00',
		name: 'Boat',
		alt: 'CartProduct',
		srcButton: '../../add.svg',
		altButton: 'ButtonAdd'
	}
];

export default function Example() {
	return (
		<>
			<div className="mt-6 flex flex-wrap items-center justify-center">
				{navigation.map((item) => (
					<div className="mx-1 my-2 flex items-center justify-center sm:mx-3">
						<a
							href={item.href}
							rel="noopener noreferrer"
							aria-current={item.current ? 'page' : undefined}
						>
							<div className="flex items-center justify-center">
								<img
									className="max-h-60 min-h-60 min-w-[23rem] max-w-[23rem] rounded-3xl drop-shadow-lg sm:max-h-40 sm:min-h-40 sm:min-w-56 sm:max-w-48"
									src={item.src}
									alt={item.alt}
								/>
							</div>
							<div className="mt-2 flex flex-row justify-between">
								<article className="mr-4 flex flex-col">
									<p className="font-bold">{item.price}</p>
									<p className="font-medium">{item.name}</p>
								</article>
								<div>
									<a>
										<img src={item.srcButton} alt={item.altButton} className="drop-shadow-md" />
									</a>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</>
	);
}
