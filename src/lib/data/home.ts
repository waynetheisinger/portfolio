import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Wayne';

export const lastName = 'Theisinger';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

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
