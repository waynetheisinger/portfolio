import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Platforms', slug: 'platforms' }),
	defineSkillCategory({ name: 'Ecommerce Platforms', slug: 'ecommerce' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Tools', slug: 'tools' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Runtimes', slug: 'runtimes' }),
	defineSkillCategory({ name: 'Monitoring', slug: 'monitoring' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'php',
		color: 'blue',
		description:
			'A versatile scripting language optimized for web development, PHP powers diverse applications, from personal blogs to enterprise-scale websites, with speed and flexibility.',
		logo: Assets.Php,
		name: 'PHP',
		category: 'pro-lang',
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a dynamic programming language enabling interactive web experiences, ranging from simple animations to complex web applications.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang',
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript enhances JavaScript with static typing, enabling better code quality, error detection, and robust large-scale application development.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang',
	}),
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description:
			'C# is a versatile language by Microsoft, excelling in desktop, web, and game development with its balance of simplicity and power.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang',
	}),
	defineSkill({
		slug: 'golang',
		color: 'blue',
		description:
			'Go is a modern, high-performance language designed for simplicity and efficiency, ideal for building scalable and reliable systems.',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang',
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description:
			'MySQL is a reliable and fast relational database management system, popular for web applications and scalable data solutions.',
		logo: Assets.Mysql,
		name: 'MySQL',
		category: 'db',
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'MongoDB is a NoSQL database known for its flexibility and scalability, storing data in JSON-like documents for modern applications.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db',
	}),
	defineSkill({
		slug: 'elasticsearch',
		color: 'green',
		description:
			'Elasticsearch is a powerful distributed search engine that enables real-time data exploration and analysis with unparalleled speed.',
		logo: Assets.Elasticsearch,
		name: 'ElasticSearch',
		category: 'db',
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
			'Redis is an in-memory data store offering ultra-fast database, caching, and message brokering solutions for high-performance systems.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db',
	}),
	defineSkill({
		slug: 'eloquent',
		color: 'red',
		description:
			'Eloquent is Laravel’s ORM, simplifying database interactions with an elegant, ActiveRecord-like syntax for rapid development.',
		logo: Assets.Laravel,
		name: 'Eloquent',
		category: 'orm',
	}),
	defineSkill({
		slug: 'magento-orm',
		color: 'blue',
		description:
			'Magento ORM simplifies database access in Magento applications, enabling intuitive PHP-based interactions without SQL.',
		logo: Assets.Magento,
		name: 'Magento ORM',
		category: 'orm',
	}),
	defineSkill({
		slug: 'prisma',
		color: 'green',
		description:
			'Prisma provides type-safe database access with a modern query builder tailored to your schema, enhancing developer productivity.',
		logo: Assets.Prisma,
		name: 'Prisma',
		category: 'orm',
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS styles the web, enabling rich, responsive designs that transform static HTML into visually engaging user interfaces.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML is the foundation of the web, structuring content with semantic tags for browsers to render interactive pages.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'laravel-blade',
		color: 'red',
		description:
			'Blade is Laravel’s powerful templating engine, streamlining dynamic content generation with clean, reusable syntax.',
		logo: Assets.Blade,
		name: 'Laravel Blade',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'shopify-liquid',
		color: 'green',
		description:
			'Shopify Liquid powers Shopify themes, enabling dynamic, customizable content for unique e-commerce storefronts.',
		logo: Assets.Shopify,
		name: 'Shopify Liquid',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass extends CSS with variables, nesting, and mixins, making stylesheet management efficient and maintainable.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'xml',
		color: 'blue',
		description:
			'XML is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. It is widely used in web development and is an essential part of creating structured documents. XML is used to store and transport data, and is commonly used in web services and data exchange formats.',
		logo: Assets.Xml,
		name: 'XML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'markdown',
		color: 'yellow',
		description:
			'Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.',
		logo: Assets.Markdown,
		name: 'Markdown',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description:
			'Tailwind CSS offers utility-first classes, enabling rapid development of custom designs without writing CSS from scratch.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'postcss',
		color: 'blue',
		description:
			'PostCSS transforms CSS using JavaScript plugins, enabling tasks like linting, variable support, and modern CSS syntax compatibility.',
		logo: Assets.Postcss,
		name: 'PostCSS',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Bootstrap is a responsive CSS framework offering ready-to-use components and design templates for building mobile-first web interfaces.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React.js is a JavaScript library for building dynamic user interfaces with reusable components and efficient state management.',
		logo: Assets.ReactJs,
		name: 'React JS',
		category: 'framework',
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description:
			'Vue.js is a progressive JavaScript framework known for simplicity and performance, ideal for creating interactive web applications.',
		logo: Assets.VueJs,
		name: 'Vue JS',
		category: 'framework',
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Svelte shifts heavy processing to the compile step, generating highly optimized JavaScript for fast, reactive web applications.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework',
	}),
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description:
			'Nuxt.js builds on Vue.js, simplifying server-side rendering and static site generation for streamlined development of universal applications.',
		logo: Assets.Nuxt,
		name: 'Nuxt JS',
		category: 'framework',
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'blue',
		description:
			'Next.js extends React with features like server-side rendering and static site generation, ideal for production-ready web applications.',
		logo: Assets.Next,
		name: 'Next JS',
		category: 'framework',
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description:
			'Laravel is a robust PHP framework that simplifies web application development with an expressive syntax and rich ecosystem.',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework',
	}),
	defineSkill({
		slug: 'express',
		color: 'green',
		description:
			'Express.js is a minimalist Node.js framework, offering robust tools for building APIs and server-side web applications efficiently.',
		logo: Assets.ExpressJs,
		name: 'Express JS',
		category: 'framework',
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Node.js enables server-side JavaScript execution with its lightweight, event-driven architecture, ideal for scalable network applications.',
		logo: Assets.NodeJs,
		name: 'Node JS',
		category: 'runtimes',
	}),
	defineSkill({
		slug: 'shopify',
		color: 'green',
		description:
			'Shopify is a leading e-commerce platform, empowering businesses to create and manage custom online stores with ease.',
		logo: Assets.Shopify,
		name: 'Shopify',
		category: 'ecommerce',
	}),
	defineSkill({
		slug: 'magento',
		color: 'blue',
		description:
			'Magento is a feature-rich e-commerce platform, offering flexibility and scalability for building fully customized online stores.',
		logo: Assets.Magento,
		name: 'Magento',
		category: 'ecommerce',
	}),
	defineSkill({
		slug: 'vite',
		color: 'blue',
		description:
			'Vite is a fast and modern build tool optimized for efficient development and production bundling of web projects.',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools',
	}),
	defineSkill({
		slug: 'codacy',
		color: 'green',
		description:
			'Codacy automates code reviews and helps manage technical debt by providing actionable insights into code quality.',
		logo: Assets.Codacy,
		name: 'Codacy',
		category: 'devtools',
	}),
	defineSkill({
		slug: 'selenium',
		color: 'blue',
		description:
			'Selenium automates browser testing, enabling developers to validate web applications across different browsers and platforms.',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'test',
	}),
	defineSkill({
		slug: 'phpunit',
		color: 'blue',
		description:
			'PHPUnit is a testing framework for PHP, streamlining the creation and execution of unit tests to ensure code reliability.',
		logo: Assets.Phpunit,
		name: 'PHPUnit',
		category: 'test',
	}),
	defineSkill({
		slug: 'pest',
		color: 'green',
		description:
			'Pest is a user-friendly PHP testing framework focused on simplicity, providing a delightful testing experience.',
		logo: Assets.Pest,
		name: 'Pest',
		category: 'test',
	}),
	defineSkill({
		slug: 'behat',
		color: 'blue',
		description:
			'Behat is a PHP framework for behavior-driven development (BDD), enabling human-readable test scenarios for validating application behavior.',
		logo: Assets.Behat,
		name: 'Behat',
		category: 'test',
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description:
			'Nginx is a high-performance web server and reverse proxy known for its efficiency, scalability, and simple configuration.',
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops',
	}),
	defineSkill({
		slug: 'apache',
		color: 'green',
		description:
			'Apache HTTP Server is a widely-used, cross-platform web server known for its flexibility and robust feature set.',
		logo: Assets.Apache,
		name: 'Apache',
		category: 'devops',
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description:
			'Kubernetes is a powerful container orchestration platform, automating deployment, scaling, and management of containerized applications.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops',
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Docker simplifies application deployment by packaging code and dependencies into lightweight, portable containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops',
	}),
	defineSkill({
		slug: 'travis-ci',
		color: 'green',
		description:
			'Travis CI automates testing and deployment for GitHub and Bitbucket projects, streamlining continuous integration workflows.',
		logo: Assets.Travis,
		name: 'Travis CI',
		category: 'devops',
	}),
	defineSkill({
		slug: 'github-actions',
		color: 'green',
		description:
			'GitHub Actions enables customizable automation of workflows directly within GitHub, including CI/CD for efficient development pipelines.',
		logo: Assets.GithubActions,
		name: 'GitHub Actions',
		category: 'devops',
	}),
	defineSkill({
		slug: 'terraform',
		color: 'green',
		description:
			'Terraform automates infrastructure provisioning using code, supporting multi-cloud and on-premises environments with a declarative syntax.',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'devops',
	}),
	defineSkill({
		slug: 'packer',
		color: 'green',
		description:
			'Packer creates machine images for multiple platforms from a single configuration, streamlining infrastructure provisioning.',
		logo: Assets.Packer,
		name: 'Packer',
		category: 'devops',
	}),
	defineSkill({
		slug: 'ansible',
		color: 'blue',
		description:
			'Ansible automates configuration management, application deployment, and provisioning with simple, agentless operation.',
		logo: Assets.Ansible,
		name: 'Ansible',
		category: 'devops',
	}),
	defineSkill({
		slug: 'cloudflare',
		color: 'green',
		description:
			'Cloudflare enhances web performance and security with CDN services, DDoS protection, and DNS management.',
		logo: Assets.Cloudflare,
		name: 'Cloudflare',
		category: 'devops',
	}),
	defineSkill({
		slug: 'cloudinary',
		color: 'blue',
		description:
			'Cloudinary simplifies image and video management, offering powerful tools for uploading, transforming, and delivering media efficiently.',
		logo: Assets.Cloudinary,
		name: 'Cloudinary',
		category: 'devops',
	}),
	defineSkill({
		slug: 'blackfire',
		color: 'green',
		description:
			'Blackfire optimizes application performance with detailed profiling and insights for faster, more efficient code.',
		logo: Assets.Blackfire,
		name: 'Blackfire',
		category: 'devtools',
	}),
	defineSkill({
		slug: 'ovh',
		color: 'green',
		description:
			'OVHcloud delivers cost-effective cloud solutions for hosting, data storage, and infrastructure scaling.',
		logo: Assets.Ovh,
		name: 'OVH',
		category: 'platforms',
	}),
	defineSkill({
		slug: 'digitalocean',
		color: 'blue',
		description:
			'DigitalOcean empowers developers with simple, scalable cloud infrastructure for deploying and managing modern applications.',
		logo: Assets.DigitalOcean,
		name: 'DigitalOcean',
		category: 'platforms',
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description:
			'AWS offers a comprehensive suite of cloud services, enabling scalable, on-demand solutions for diverse computing needs.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'platforms',
	}),
	defineSkill({
		slug: 'gcp',
		color: 'blue',
		description:
			'Google Cloud Platform provides robust cloud services, leveraging Google’s infrastructure for innovative application development.',
		logo: Assets.GCP,
		name: 'GCP',
		category: 'platforms',
	}),
	defineSkill({
		slug: 'elk',
		color: 'green',
		description:
			'The ELK Stack combines Elasticsearch, Logstash, and Kibana for centralized logging and insightful data visualization.',
		logo: Assets.Elk,
		name: 'ELK',
		category: 'monitoring',
	}),
	defineSkill({
		slug: 'kibana',
		color: 'green',
		description:
			'Kibana visualizes Elasticsearch data through interactive dashboards, enabling actionable insights from large datasets.',
		logo: Assets.Kibana,
		name: 'Kibana',
		category: 'monitoring',
	}),
	defineSkill({
		slug: 'logstash',
		color: 'green',
		description:
			'Logstash processes and transforms data from multiple sources, efficiently routing it to destinations like Elasticsearch.',
		logo: Assets.Logstash,
		name: 'Logstash',
		category: 'monitoring',
	}),
	defineSkill({
		slug: 'newrelic',
		color: 'green',
		description:
			'New Relic provides real-time performance monitoring and analytics to optimize application performance and user experiences.',
		logo: Assets.Newrelic,
		name: 'New Relic',
		category: 'monitoring',
	}),
	defineSkill({
		slug: 'prometheus',
		color: 'green',
		description:
			'Prometheus is a robust toolkit for monitoring and alerting, designed to handle diverse metrics at scale.',
		logo: Assets.Prometheus,
		name: 'Prometheus',
		category: 'monitoring',
	}),
	defineSkill({
		slug: 'grafana',
		color: 'green',
		description:
			'Grafana visualizes and analyzes metrics across multiple sources, fostering data-driven decision-making through custom dashboards.',
		logo: Assets.Grafana,
		name: 'Grafana',
		category: 'monitoring',
	}),
];

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
