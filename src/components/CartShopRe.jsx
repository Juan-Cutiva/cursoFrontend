import { Fragment } from 'react';

import Prueba from './texto.json';


export default function Example() {
	return (
		<>
			<div className="mt-6 flex flex-wrap items-center justify-center">
				{Prueba.map((item) => (
					<div className="mx-1 my-2 flex items-center justify-center sm:mx-3">
						<a
							key={item.key}
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
