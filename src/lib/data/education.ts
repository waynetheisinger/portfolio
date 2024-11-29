import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'degree Communication Media',
		description: 'Grade: 2:1 BA (Hons)',
		location: 'Maidstone, United Kingdom',
		logo: Assets.Uca,
		name: '',
		organization: 'University for the Creative Arts (formerly Kent Institute of Art & Design)',
		period: { from: new Date(1991, 8, 1), to: new Date(1994, 6, 1) },
		shortDescription: '',
		slug: 'kiad',
		subjects: ['Graphic Design', 'Computer Aided Design','Desktop Publishing', 'CASS', 'Photography' ]
	},
];

export const title = 'Education';
