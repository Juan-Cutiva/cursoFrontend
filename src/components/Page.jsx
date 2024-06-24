import { Fragment } from 'react';

import Prueba from './texto.json';

// const Result = Prueba.filter((item) => item.key == 1);
const Result2 = Prueba[17]
// console.log(Result);
console.log(Result2)

export default function Example() {
	return (
		<>
			<div className="mx-1 my-2 flex items-center justify-center sm:mx-3">
						<a
							key={Result2.key}
							href={Result2.href}
							rel="noopener noreferrer"
							aria-current={Result2.current ? 'page' : undefined}
						>
							<div className="flex items-center justify-center">
								<img
									className="max-h-60 min-h-60 min-w-[23rem] max-w-[23rem] rounded-3xl drop-shadow-lg sm:max-h-40 sm:min-h-40 sm:min-w-56 sm:max-w-48"
									src={Result2.src}
									alt={Result2.alt}
								/>
							</div>
							<div className="mt-2 flex flex-row justify-between">
								<article className="mr-4 flex flex-col">
									<p className="font-bold">{Result2.price}</p>
									<p className="font-medium">{Result2.name}</p>
								</article>
								<div>
									<a>
										<img src={Result2.srcButton} alt={Result2.altButton} className="drop-shadow-md" />
									</a>
								</div>
							</div>
						</a>
					</div>
		</>
	);
}