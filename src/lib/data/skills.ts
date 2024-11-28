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
		category: 'devtools'
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
