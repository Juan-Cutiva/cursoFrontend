import { Fragment } from 'react';

import Prueba from './texto.json';


const Result2 = Prueba[1];

console.log(Result2);

export default function Example() {
	return (
		<>
			<div className="flex items-center justify-center">
				<a
					key={Result2.key}
					href={Result2.href}
					rel="noopener noreferrer"
					aria-current={Result2.current ? 'page' : undefined}
				>
					<div className=" flex items-center justify-center">
						<img className="max-w-[full]  rounded-b-2xl sm:h-[24rem]" src={Result2.src} alt={Result2.alt} />
					</div>
					<div className="mt-10 flex flex-col justify-between">
						<article className="mr-4 mx-4 flex flex-col">
							<p className="font-bold text-xl">{Result2.price}</p>
							<p className="font-medium text-gray-600 mt-2">{Result2.name}</p>
						</article>
						<div className="w-full mt-4">
							<h1 className='mx-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur
								cupiditate at temporibus sunt molestiae perspiciatis laboriosam vitae veniam facere,
								quibusdam voluptate architecto adipisci cumque aut error. Repellendus, iusto ipsa!
							</h1>
							
						</div>
					</div>
				</a>
			</div>
		</>
	);
}
