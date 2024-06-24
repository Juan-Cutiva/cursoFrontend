import { Fragment } from 'react';

import Prueba from './texto.json';

// const Result = Prueba.filter((item) => item.key == 1);
const Result2 = Prueba[1]
// console.log(Result);
console.log(Result2)

export default function Example() {
	return (
		<>
			<div className="mt-6 flex flex-col items-center justify-center">
					<a className="mx-1 border border-black">{Result2.key}</a>
					<a className="mx-1 border border-black">{Result2.href}</a>
					<a className="mx-1 border border-black">{Result2.src}</a>
					<a className="mx-1 border border-black">{Result2.price}</a>
					<a className="mx-1 border border-black">{Result2.name}</a>
					<a className="mx-1 border border-black">{Result2.alt}</a>
					<a className="mx-1 border border-black">{Result2.srcButton}</a>
					<a className="mx-1 border border-black">{Result2.altButton}</a>
					<a className="mx-1 border border-black">{Result2.text}</a>
			</div>
		</>
	);
}