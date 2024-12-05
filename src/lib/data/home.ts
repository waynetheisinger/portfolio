import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Wayne';

export const lastName = 'Theisinger';

export const description =
	'Welcome! I’m a versatile web developer with a knack for solving challenges across frontend, backend, and DevOps. Passionate about crafting clean, scalable solutions, I’ve helped modernise systems, optimise workflows, and deliver impactful projects. Let’s create something great together!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/waynetheisinger' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/wayne-theisinger-a589a212/'
	},
	{
		platform: Platform.BlueSky,
		link: 'https://bsky.app/profile/waynetheisinger.bsky.social'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/1463486/wayne-theisinger'
	},
	{
		platform: Platform.Email,
		link: 'wayne@orchid-interactive.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@waynetheisinger2607'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
