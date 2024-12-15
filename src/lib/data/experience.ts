import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'it-jonction',
		company: 'IT Jonction Lab (Sàrl)',
		description: `
- Led a team of 5 developers, providing technical leadership and mentoring to drive project success.
- Developed and maintained a range of web applications, e-commerce stores, and mobile solutions for clients in various industries.
- Optimized system performance and scalability, reducing load times by 40% and improving user experience.
- Conducted code reviews and implemented best practices, ensuring code quality and maintainability.
- Managed client relationships, gathering requirements, providing technical guidance, and delivering solutions that met their needs.
- Collaborated with stakeholders to define project scope, timelines, and deliverables, ensuring successful project completion.
- Conducted training sessions for team members, sharing knowledge and best practices to improve skills and performance.
- Implemented agile methodologies, including Scrum and Kanban, to improve project management and delivery.
- Developed and maintained CI/CD pipelines, automating deployment processes and ensuring consistent delivery.
- Established the company’s first-ever DevOps pipeline, moving from zero version control to fully automated CI/CD pipelines using GitHub Actions and Kubernetes.
- Containerized applications with Docker, driving consistency across environments and reducing deployment issues.
- Leveraged Terraform for infrastructure as code, accelerating deployment times and improving system reliability.
- Implemented monitoring solutions with New Relic, Blackfire.io, and the ELK stack, ensuring 24/7 system uptime and rapid issue detection.`,
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2019,8), to: new Date() },
		skills: getSkills(
			'php','js','ts','golang','mysql','mongodb',
			'elasticsearch','redis','eloquent','magento-orm',
			'prisma','css','html','laravel-blade','shopify-liquid',
			'sass','xml','markdown','tailwind','postcss','bootstrap',
			'reactjs','vuejs','svelte','nuxt','nextjs','laravel','express',
			'nodejs','shopify','magento','vite',
			'phpunit','pest','nginx','apache','kubernetes',
			'docker','github-actions','terraform','packer',
			'ansible','cloudflare','cloudinary','blackfire','ovh',
			'digitalocean','elk','kibana','logstash',
			'newrelic','prometheus','grafana'
		),
		name: 'DevOps Technical Lead',
		color: 'red',
		links: [{
			to: 'https://www.it-jonction-lab.io/',
			label: 'IT Jonction Lab',
			newTab: true,
		},{
			to: 'https://www.swap-europe.com/',
			label: 'Swap-Europe',
			newTab: true,
		},{
			to: 'https://www.buddl.io/',
			label: 'Buddl',
			newTab: true,
		}],
		logo: Assets.Itjonction,
		shortDescription: 'IT JONCTION LAB is a Parisien digital agency specialising in the creation of digital products, websites, web design, e-commerce and mobile solutions.'
	},
	{
		slug: 'mowdirect',
		company: 'MowDirect.co.uk',
		description: `
- Modernized the technology stack, transitioning from an outdated Perl-based shopping cart to Magento 1 and later to Magento 2, enhancing scalability and improving customer experience.
- Spearheaded the digital transformation by introducing Git-based version control and containerized deployment, revolutionizing legacy processes.
- Developed and led the creation of the company’s first automated deployment pipeline, improving release frequency and stability.
- Worked with NetSuite and Salesforce partners to implement their systems into our workflows.
`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Norwich, United Kingdom',
		period: { from: new Date(2009,3) , to: new Date(2018,10) },
		skills: getSkills('magento','php','css','html','js','ts','mysql','sass','xml',
			'markdown','bootstrap','apache','docker','kubernetes',
			'docker','github-actions','cloudinary','newrelic',
			'codacy','selenium','behat','travis-ci','aws','gcp'),
		name: 'Chief Technology Officer',
		color: 'blue',
		links: [{
			to: 'https://www.mowdirect.co.uk/',
			label: 'Mowdirect',
			newTab: true,
		}],
		logo: Assets.Mowdirect,
		shortDescription: 'Ecommerce Garden Machinery Retailer.'
	},
	{
		slug: 'orchid',
		company: 'Managing Director',
		description: `
- Co-owned and operated a web development company, pioneering early web technologies and delivering websites across various industries.`,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Sawbridgeworth, United Kingdom',
		period: { from: new Date(1999, 6, 1), to: new Date(2009, 11, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Managing Director',
		color: 'green',
		links: [],
		logo: Assets.Orchid,
		shortDescription: 'Co-owned and operated a web development company, pioneering early web technologies.'
	}
];

export const title = 'Experience';
