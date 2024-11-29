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
		 'PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.',
		logo: Assets.Php,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a popular programming language that is used to create interactive effects within web browsers. It is widely used in web development and is an essential part of creating dynamic websites. JavaScript is a versatile language that can be used to create a wide range of applications, from simple web pages to complex web applications.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
		  'TypeScript is a superset of JavaScript that adds static types to the language. It is designed for the development of large applications and transcompiles to JavaScript. TypeScript is developed and maintained by Microsoft and has gained popularity in recent years due to its ability to catch errors at compile time and improve code quality.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description:
			'C# is a general-purpose, multi-paradigm programming language developed by Microsoft. It is widely used for developing desktop applications, web applications, and games. C# is known for its simplicity, power, and flexibility, making it a popular choice for many developers and organizations.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'golang',
		color: 'blue',
		description:
		  'Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software. It is designed for ease of use and productivity, and is known for its speed and performance. Go is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description:
			'MySQL is an open-source relational database management system. It is a popular choice for web applications and is used by many websites and applications to store and manage data. MySQL is known for its speed, reliability, and ease of use. It is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Mysql,
		name: 'MySQL',
		category: 'db'
	}),
	//defineSkill MongoDB
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'MongoDB is a popular NoSQL database that is known for its flexibility, scalability, and performance. It is a document-oriented database that stores data in JSON-like documents. MongoDB is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	//defineSkill elasticSearch
	defineSkill({
		slug: 'elasticsearch',
		color: 'green',
		description:
			'Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected.',
		logo: Assets.Elasticsearch,
		name: 'ElasticSearch',
		category: 'db'
	}),
	//defineSkill Redis
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
			'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries, and streams.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	// defineSkill Laravel Eloquent in ORM
	defineSkill({
		slug: 'eloquent',
		color: 'red',
		description:
			'Eloquent is the default ORM that ships with Laravel. It provides a simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table. Eloquent makes it easy to perform common database operations without writing SQL queries.',
		logo: Assets.Laravel,
		name: 'Eloquent',
		category: 'orm'
	}),
	// defineSkill Magento ORM
	defineSkill({
		slug: 'magento-orm',
		color: 'blue',
		description:
			'Magento ORM is an object-relational mapping (ORM) system that allows you to interact with the Magento database using PHP objects. It provides a simple and intuitive way to work with the database, making it easier to perform common database operations without writing SQL queries.',
		logo: Assets.Magento,
		name: 'Magento ORM',
		category: 'orm'
	}),
	//defineSkill Prisma ORM
	defineSkill({
		slug: 'prisma',
		color: 'green',
		description:
			'Prisma is an open-source database toolkit that simplifies database access for application developers. It provides a type-safe and auto-generated query builder that is tailored to your database schema. Prisma is designed to work with modern databases and is a popular choice for many developers and organizations.',
		logo: Assets.Prisma,
		name: 'Prisma',
		category: 'orm'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
		  'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is used to style web pages and user interfaces written in HTML and XHTML. It is widely used in web development and is an essential part of creating visually appealing websites.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML is the standard markup language for creating web pages and web applications. It is used to describe the structure of web pages using markup. HTML elements are the building blocks of HTML pages and are represented by tags. HTML tags label pieces of content such as "heading", "paragraph", "table", and so on. Browsers do not display the HTML tags, but use them to render the content of the page.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'laravel-blade',
		color: 'red',
		description:
			'Laravel Blade is a powerful templating engine that is included with the Laravel framework. It allows you to write clean, readable, and reusable code in your views. Blade templates are compiled into plain PHP code and cached until they are modified, meaning that Blade adds essentially zero overhead to your application.',
		logo: Assets.Blade,
		name: 'Laravel Blade',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'shopify-liquid',
		color: 'green',
		description:
			'Shopify Liquid is a templating language used to build Shopify themes. It is a simple and intuitive language that allows you to create dynamic content for your online store. Liquid is used to load dynamic content on your store pages, such as product information, collections, and blog posts. It is a powerful tool that allows you to customize your store and create a unique shopping experience for your customers.',
		logo: Assets.Shopify,
		name: 'Shopify Liquid',
		category: 'markup-style',
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. It provides mechanisms such as variables, nesting, and mixins, making it easier to create and maintain CSS stylesheets. Sass is widely used in web development and is an essential part of creating visually appealing websites.',
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
			'Tailwind CSS is a utility-first CSS framework that is used to build custom designs without writing any CSS. It provides a set of utility classes that can be used to style your web pages. Tailwind CSS is highly customizable and allows you to create unique designs by combining utility classes. It is widely used in web development and is an essential part of creating visually appealing websites.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'postcss',
		color: 'blue',
		description:
			'PostCSS is a tool for transforming CSS with JavaScript plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.',
		logo: Assets.Postcss,
		name: 'PostCss',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
		 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React.js is a JavaScript library used for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. It is used to handle the view layer for web and mobile apps. React also allows us to create reusable UI components.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description:
			'Vue.js is a progressive JavaScript framework used to build interactive web interfaces. It is one of the famous frameworks used to simplify web development. Vue.js is known for its fast performance and the ability to handle complex applications. It is a versatile framework that can be used to build single-page applications and large-scale applications.',
		logo: Assets.VueJs,
		name: 'Vue Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Svelte is a modern JavaScript framework used to build fast and interactive web applications. Unlike traditional frameworks, Svelte shifts most of the burden from the browser to the compile step, resulting in highly optimized, vanilla JavaScript code. It offers a truly reactive experience and is known for its simplicity, allowing developers to write less code and achieve better results.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	// defineSkill Nuxt
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description:
			'Nuxt.js is a free and open-source web application framework based on Vue.js, Node.js, Webpack, and Babel.js. The framework is advertised as a "meta-framework for universal applications". It is a higher-level framework that builds on top of Vue.js and simplifies the development of server-side rendered (SSR) applications.',
		logo: Assets.Nuxt,
		name: 'Nuxt Js',
		category: 'framework'
	}),
	// defineSkill NextJs
	defineSkill({
		slug: 'nextjs',
		color: 'blue',
		description:
			'Next.js is a free and open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It is a production-ready framework that allows developers to build static websites and server-side rendered applications using React.',
		logo: Assets.Next,
		name: 'Next Js',
		category: 'framework'
	}),
	// defineSkill Laravel
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description:
			'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	// defineSkill express in frameworks
	defineSkill({
		slug: 'express',
		color: 'green',
		description:
			'Express.js is a free and open-source web application framework for Node.js. It is designed for building web applications and APIs. It is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.ExpressJs,
		name: 'Express Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It is an open-source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.',
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'runtimes'
	}),
	// defineSkill Shopify
	defineSkill({
		slug: 'shopify',
		color: 'green',
		description:
			'Shopify is a popular e-commerce platform that allows you to set up an online store to sell your products. It provides you with a variety of tools and features to help you build and manage your online store. With Shopify, you can create a professional-looking online store without any technical skills or coding knowledge.',
		logo: Assets.Shopify,
		name: 'Shopify',
		category: 'ecommerce'
	}),
	// defineSkill Magento
	defineSkill({
		slug: 'magento',
		color: 'blue',
		description:
			'Magento is an open-source e-commerce platform that allows you to create a fully customized online store. It provides you with a variety of tools and features to help you build and manage your online store. With Magento, you can create a professional-looking online store that is tailored to your specific needs.',
		logo: Assets.Magento,
		name: 'Magento',
		category: 'ecommerce'
	}),
	// defineSkill vite in devtools
	defineSkill({
		slug: 'vite',
		color: 'blue',
		description:
			'Vite is a build tool that aims to provide a faster and more efficient development experience for modern web projects. It is designed to be fast and lightweight, and is optimized for building web applications using modern JavaScript frameworks and libraries. Vite is widely used in web development and is a popular choice for many developers and organizations.',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	// defineSkill codacy in devtools
	defineSkill({
		slug: 'codacy',
		color: 'green',
		description:
			'Codacy is an automated code review tool that helps developers to save time in code reviews and to tackle technical debt efficiently. It is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Codacy,
		name: 'Codacy',
		category: 'devtools'
	}),
	// defineSkill selenium in testing
	defineSkill({
		slug: 'selenium',
		color: 'blue',
		description:
			'Selenium is a popular open-source tool for automating web browsers. It provides a set of tools and APIs for automating web applications for testing purposes. Selenium is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'test'
	}),
	// defineSkill phpunit in testing
	defineSkill({
		slug: 'phpunit',
		color: 'blue',
		description:
			'PHPUnit is a popular testing framework for PHP. It provides a set of tools and APIs for writing and running tests for PHP applications. PHPUnit is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Phpunit,
		name: 'PHPUnit',
		category: 'test'
	}),
	// defineSkill pest in testing
	defineSkill({
		slug: 'pest',
		color: 'green',
		description:
			'Pest is a delightful PHP Testing Framework with a focus on simplicity. It was carefully crafted to bring the joy of testing to PHP. Pest is a community-driven project that is maintained by Nuno Maduro and a group of contributors.',
		logo: Assets.Pest,
		name: 'Pest',
		category: 'test'
	}),
	// defineSkill behat in testing
	defineSkill({
		slug: 'behat',
		color: 'blue',
		description:
			'Behat is a popular behavior-driven development (BDD) framework for PHP. It provides a set of tools and APIs for writing and running tests in a human-readable format. Behat is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Behat,
		name: 'Behat',
		category: 'test'
	}),
	// defineSkill nginx in devops
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description:
			'Nginx is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server. Nginx is known for its high performance, stability, rich feature set, simple configuration, and low resource consumption.',
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	// defineSkill apache in devops
	defineSkill({
		slug: 'apache',
		color: 'green',
		description:
			'Apache HTTP Server is a free and open-source cross-platform web server software. It is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Apache,
		name: 'Apache',
		category: 'devops'
	}),
	// defineSkill kubernetes in devops
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description:
			'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is designed to work with Docker and other container runtimes, and provides a set of tools and APIs for managing containerized applications in a clustered environment.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	// defineSkill docker in devops
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Docker is an open-source platform for building, shipping, and running applications in containers. It allows you to package your application and its dependencies into a standardized unit for software development. Docker containers are lightweight, portable, and self-sufficient, making them an ideal solution for deploying applications in a consistent and repeatable way.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	// defineSkill travisci in devops
	defineSkill({
		slug: 'travis-ci',
		color: 'green',
		description:
			'Travis CI is a continuous integration service used to build and test software projects hosted at GitHub and Bitbucket. It is widely used in the industry and is a popular choice for many developers and organizations.',
		logo: Assets.Travis,
		name: 'Travis CI',
		category: 'devops'
	}),
	// defineSkill github-actions in devops
	defineSkill({
		slug: 'github-actions',
		color: 'green',
		description:
			'GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.',
		logo: Assets.GithubActions,
		name: 'GitHub Actions',
		category: 'devops'
	}),
	// defineSkill terraform in devops
	defineSkill({
		slug: 'terraform',
		color: 'green',
		description:
			'Terraform is an open-source infrastructure as code software tool created by HashiCorp. It enables users to define and provision data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language, or optionally JSON.',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'devops'
	}),
	// defineSkill packer in devops
	defineSkill({
		slug: 'packer',
		color: 'green',
		description:
			'Packer is an open-source tool for creating identical machine images for multiple platforms from a single source configuration. Packer is lightweight, runs on every major operating system, and is highly performant, creating machine images for multiple platforms in parallel.',
		logo: Assets.Packer,
		name: 'Packer',
		category: 'devops'
	}),
	// defineSkill ansible in devops
	defineSkill({
		slug: 'ansible',
		color: 'blue',
		description:
			'Ansible is an open-source software provisioning, configuration management, and application-deployment tool. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows.',
		logo: Assets.Ansible,
		name: 'Ansible',
		category: 'devops'
	}),
	// defineSkill ovh in platforms
	defineSkill({
		slug: 'ovh',
		color: 'green',
		description:
			'OVHcloud is a global cloud provider that specializes in delivering industry-leading performance and cost-effective solutions to better manage, secure, and scale data. OVHcloud provides a smarter alternative for web hosting, emails, bare metal servers, hosted private cloud, hybrid and public cloud solutions.',
		logo: Assets.Ovh,
		name: 'OVH',
		category: 'platforms'
	}),
	// defineSkill DigitalOcean in platforms
	defineSkill({
		slug: 'digitalocean',
		color: 'blue',
		description:
			'DigitalOcean is a cloud infrastructure provider that offers cloud services to help deploy modern apps. DigitalOcean provides developers with cloud services that help to deploy and scale applications that run simultaneously on multiple computers.',
		logo: Assets.DigitalOcean,
		name: 'DigitalOcean',
		category: 'platforms'
	}),
	// defineSkill AWS in platforms
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description:
			'Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'platforms'
	}),
	// defineSkill GCP in platforms
	defineSkill({
		slug: 'gcp',
		color: 'blue',
		description:
			'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.',
		logo: Assets.GCP,
		name: 'GCP',
		category: 'platforms'
	}),
] as const;

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
