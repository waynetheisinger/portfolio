import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'blockcache',
		color: '#4CAF50',
		description:
			'BlockCache is a PHP library that provides a simple and efficient way to cache data using various backends like Redis or Memcached. It offers a straightforward API to store, retrieve, and manage cached data, helping to improve application performance by reducing the need to repeatedly fetch or compute data.',
		shortDescription:
			'PHP library for efficient data caching with support for multiple backends.',
		links: [
			{
				to: 'https://github.com/waynetheisinger/blockcache',
				label: 'GitHub Repository',
				newTab: true
			}
		],
		logo: Assets.Laravel,
		name: 'BlockCache PHP Library',
		period: { from: new Date('7 July 2024'), to: new Date('30 August 2024') },
		skills: getSkills('php', 'redis', 'laravel'),
		type: 'Library',
		screenshots: []
	},
	{
		slug: 'worker-poc',
		color: '#FF5722',
		description:
			'WorkerPOC is a proof-of-concept Node.js application demonstrating the use of worker threads for handling asynchronous tasks. It showcases how to offload time-consuming operations to background workers, enhancing application responsiveness and scalability.',
		shortDescription:
			'Proof-of-concept Node.js app demonstrating asynchronous task handling with worker threads.',
		links: [
			{
				to: 'https://github.com/waynetheisinger/workerpoc',
				label: 'GitHub Repository',
				newTab: true
			}
		],
		logo: Assets.NodeJs,
		name: 'WorkerPOC Node.js',
		period: { from: new Date('28 September 2023'), to: new Date('8 December 2023') },
		skills: getSkills('nodejs', 'redis'),
		type: 'Application',
		screenshots: []
	},
	{
		slug: 'beatify',
		color: '#00BCD4',
		description:
			'Beatify is a command-line tool that automates the creation of heartbeats for monitoring cron tasks using the BetterUptime service. It reads the user\'s crontab, presents each cron task for approval to create a heartbeat, calls the BetterUptime API to create the approved heartbeats, and updates the crontab to append a curl request to each approved cron task.',
		shortDescription:
			'CLI tool for automating heartbeat creation for cron task monitoring with BetterUptime.',
		links: [
			{
				to: 'https://github.com/waynetheisinger/beatify',
				label: 'GitHub Repository',
				newTab: true
			},
			{
				to: 'https://betteruptime.com/',
				label: 'BetterUptime',
				newTab: true
			}
		],
		logo: Assets.Go,
		name: 'Beatify CLI Tool',
		period: { from: new Date('6 June 2023'), to: new Date('14 June 2023') },
		skills: getSkills('golang'),
		type: 'Tool',
		screenshots: [
			{
				label: 'Beatify CLI',
				src: '/projects/go.png'
			}
		]
	},
	{
		slug: 'kube-microservices',
		color: '#5e95e3',
		description:
			'Implementation and maintenance of a robust microservices architecture deployed on Kubernetes. The infrastructure leverages CI/CD pipelines built using GitHub Actions to ensure automated testing, deployment, and streamlined workflow. Monitoring is established using the ELK Stack (Elasticsearch, Logstash, and Kibana) for real-time logging, analytics, and system health tracking.',
		shortDescription:
			'Implementation of Kubernetes-based microservices with CI/CD and ELK Stack for monitoring.',
		links: [],
		logo: Assets.Kubernetes,
		name: 'Kubernetes Microservices',
		period: { from: new Date('Sept 2022'), to: new Date('Dec 2022') },
		skills: getSkills(
			'kubernetes',
			'php',
			'laravel',
			'mysql',
			'redis',
			'rabbitmq',
			'docker',
			'elk',
			'nodejs',
			'nestjs',
			'ts',
			'js'
		),
		type: 'Infrastructure',
		screenshots: [
			{
				label: 'screen 1',
				src: '/projects/kube-micro.webp'
			}
		]
	},
	{
		slug: "blackfire-labeler",
		color: "#000000",
		description: "A utility for labeling transactions with Blackfire and managing associated data in Redis. It includes a task runner, a Blackfire labeler, and a Redis configuration class, designed to operate in isolation to prevent conflicts when invoked from an auto_prepend file.",
		shortDescription: "Utility for labeling transactions with Blackfire and managing data in Redis.",
		links: [
			{
				to: "https://github.com/waynetheisinger/blackfire-labeler",
				label: "GitHub Repository",
				newTab: true
			},
			{
				to: "https://blackfire.io/",
				label: "Blackfire",
				newTab: true
			}
		],
		logo: Assets.Blackfire,
		name: "Blackfire Labeler",
		period: {
			from: new Date("3 September 2024"), to: new Date("4 September 2024"),
		},
		skills: getSkills('php', 'redis', 'blackfire'),
		type: "DevOps",
		screenshots: []
	},
	{
		slug: 'server-provisioning',
		color: '#ff3e00',
		description:
			'Automated provisioning of servers using Ansible, Packer, and Terraform. The infrastructure is deployed on DigitalOcean and includes a LAMP stack (Linux, Apache, MySQL, PHP) for web hosting. The setup is secured with SSL certificates and firewall rules to ensure data integrity and system security.',
		shortDescription:
			'Automated server provisioning with Ansible, Packer, and Terraform on DigitalOcean.',
		links: [],
		logo: Assets.Terraform,
		name: 'Server Provisioning',
		period: { from: new Date('Dec 2022'), to: new Date('March 2023') },
		skills: getSkills('packer', 'terraform', 'ansible', 'bash', 'digitalocean', 'mysql', 'apache'),
		type: 'Infrastructure',
		screenshots: [
			{
				label: 'Terraform',
				src: '/projects/terraform.png'
			},
			{
				label: 'Packer',
				src: '/projects/packer.png'
			},
			{
				label: 'DigitalOcean',
				src: '/projects/digitalocean.png'
			}
		]
	},
	{
		slug: 'mage2mage',
		color: '#ff6600',
		description:
			'Migration of Magento 1 to Magento 2 with a focus on data integrity, performance optimization, and feature enhancement. The project includes a complete overhaul of the frontend and backend architecture to ensure a seamless transition and improved user experience. The migration is performed in a phased approach to minimize downtime and ensure a smooth transition.',
		shortDescription:
			'Migration of Magento 1 to Magento 2 with a focus on data integrity, performance optimization, and feature enhancement.',
		links: [],
		logo: Assets.Magento,
		name: 'Magento 1 to Magento 2 Migration',
		period: { from: new Date('Aug 2021'), to: new Date('Nov 2021') },
		skills: getSkills('magento', 'nginx', 'elasticsearch', 'mysql', 'html', 'css', 'js'),
		type: 'Infrastructure',
		screenshots: [
			{
				label: 'Magento 1 to Magento 2',
				src: '/projects/mage2mage.svg'
			},
			{
				label: 'Magento 1',
				src: '/projects/mage1.png'
			},
			{
				label: 'Magento 2',
				src: '/projects/mage2.png'
			}
		]
	},
	{
		slug: 'strangler-fig',
		color: '#ff6600',
		description:
			'Migration of a legacy PHP application to Laravel with a focus on code refactoring, performance optimization, and feature enhancement. The project includes a complete overhaul of the frontend and backend architecture to ensure a seamless transition and improved user experience. The migration is performed in a phased approach to minimize downtime and ensure a smooth transition.',
		shortDescription:
			'Migration of a legacy PHP application to Laravel with a focus on code refactoring, performance optimization, and feature enhancement.',
		links: [],
		logo: Assets.Laravel,
		name: 'Refactor using Strangler Fig: Vanilla PHP to Laravel',
		period: { from: new Date('Jan 2024') },
		skills: getSkills('laravel', 'php', 'laravel-blade', 'mysql', 'html', 'css', 'js'),
		type: 'Full Stack',
		screenshots: [
			{
				label: 'Laravel',
				src: '/projects/laravel1.png'
			},
			{
				label: 'Laravel',
				src: '/projects/laravel2.png'
			}
		]
	},
	{
		slug: 'laravel-demo-data',
		color: '#ff6600',
		description:
			'Development of a full set of demo data for a Laravel-based SaaS product, an electronic Point of Sale (ePOS) system. Leveraging Laravel Factories, Models, and Seeders, the demo data accurately simulates the operations of three example companies: a pub, a greengrocer, and a street food outlet. Each dataset includes products, categories, sales transactions, customers, and staff information tailored to the specific business type, showcasing the flexibility and capabilities of the ePOS system.',
		shortDescription:
			'Demo data creation for a Laravel-based ePOS system, simulating diverse businesses: a pub, greengrocer, and street food outlet.',
		links: [],
		logo: Assets.Laravel,
		name: 'Full set of demo-data for Laravel SaaS application',
		period: { from: new Date('Feb 2024'), to: new Date('16 Feb 2024') },
		skills: getSkills('laravel', 'php', 'mysql'),
		type: 'Backend',
		screenshots: [
			{
				label: 'Laravel',
				src: '/projects/laravel1.png'
			},
			{
				label: 'Laravel',
				src: '/projects/laravel2.png'
			}
		]
	},
	{
		slug: 'docker-dev',
		color: '#0077ff',
		description:
			'Setup of a Docker-based developer environment and an automated CI/CD pipeline for seamless deployments using Deployer PHP. The development environment includes multiple services such as NGINX, Apache, PHP, and MySQL for easy onboarding and consistent workflows across teams. The CI/CD pipeline integrates with version control systems, automates testing, and deploys updates to staging or production environments, ensuring minimal downtime and streamlined delivery.',
		shortDescription:
			'Docker-based development environment setup with a CI/CD pipeline for automated deployment using Deployer PHP.',
		links: [],
		logo: Assets.Docker,
		name: 'Docker-based Developer Environment with CI/CD Pipeline',
		period: { from: new Date('Sept 2022'), to: new Date('Jan 2023') },
		skills: getSkills('docker', 'php', 'mysql', 'nginx', 'apache', 'redis'),
		type: 'DevOps',
		screenshots: []
	},
	{
		slug: 'do-app',
		color: '#0077ff',
		description:
			'Implementation of a CI/CD pipeline for a Node.js application deployed on DigitalOcean App Platform. The pipeline automates testing, builds, and deployments, ensuring a streamlined workflow and consistent delivery. The application leverages MongoDB for data storage, Redis for caching, and NGINX for reverse proxying, providing a scalable and performant solution for web applications.',
		shortDescription:
			 'CI/CD Pipeline for a Node.js application deployed on DigitalOcean App Platform.',
		links: [
			{
				to: 'https://www.buddl.io/',
				label: 'Buddl.io',
				newTab: true
			},
			{
				to: 'https://www.digitalocean.com/products/app-platform',
				label: 'DigitalOcean App Platform',
				newTab: true
			}
		],
		logo: Assets.DigitalOcean,
		name: 'CI/CD Pipeline with DigitalOcean App Platform',
		period: { from: new Date('Sept 2022'), to: new Date('Jan 2023') },
		skills: getSkills('docker', 'node', 'mongodb', 'nginx', 'redis'),
		type: 'DevOps',
		screenshots: [
			{
				label: 'Buddl.io',
				src: '/projects/buddl.avif'
			},
			{
				label: 'DigitalOcean App Platform',
				src: '/projects/doapps.png'
			}
		]
	},{
		slug: 'buddl-staging',
		color: '#00aaff',
		description:
			'Creation of a staging environment for the Buddl application in a Kubernetes cluster to reduce costs for non-production usage. The project leverages Kubernetes resources, including namespaces, deployments, services, and ingress rules. By utilizing resource quotas and scaling strategies, the staging environment ensures optimal resource usage and minimal costs while maintaining a production-like testing setup.',
		shortDescription:
			'Staging environment for the Buddl application in Kubernetes to optimize costs for non-production usage.',
		links: [
			{
				to: 'https://www.buddl.io/',
				label: 'Buddl.io',
				newTab: true
			},
			{
				to: 'https://www.digitalocean.com/products/kubernetes',
				label: 'DigitalOcean Kubernetes',
				newTab: true
			}
		],
		logo: Assets.Kubernetes,
		name: 'Staging Environment for Buddl in Kubernetes',
		period: { from: new Date('March 2023') },
		skills: getSkills('kubernetes', 'docker', 'nginx', 'node', 'mongodb', 'redis'),
		type: 'DevOps',
		screenshots: [
			{
				label: 'Kubernetes Resources',
				src: '/projects/kube-buddl.png'
			},
			{
				label: 'Buddl Staging',
				src: '/projects/buddl.avif'
			}
		]
	},
	{
		slug: 'stock_module',
		color: '#FF9800',
		description:
			'A Magento module that extends uDropship to receive stock updates via email. It integrates with the Gmail API using OAuth for secure access, allowing automated stock level updates from email data.',
		shortDescription:
			'Magento module extending uDropship to receive stock updates via email.',
		links: [
			{
				to: 'https://github.com/waynetheisinger/stock_module',
				label: 'GitHub Repository',
				newTab: true
			}
		],
		logo: Assets.Magento,
		name: 'uDropship Stock Module for Magento',
		period: { from: new Date('31 July 2019'), to: new Date('23 September 2019') },
		skills: getSkills('magento', 'php', 'mysql'),
		type: 'Module',
		screenshots: []
	},
	{
		slug: 'mariadb-docker-image',
		color: '#003545',
		description:
			'A Docker image extending the official MariaDB image to support running SQL scripts on startup, even when the database volume already exists. It includes features like automated backups to a remote server via cron jobs, health check pings to healthcheck.io for monitoring cron executions, and integration with Filebeat for log forwarding to Logstash in the ELK stack.',
		shortDescription:
			'Enhanced MariaDB Docker image with startup SQL script execution, remote backups, and monitoring integrations.',
		links: [
			{
				to: 'https://github.com/waynetheisinger/mariadb',
				label: 'GitHub Repository',
				newTab: true
			},
			{
				to: 'https://hub.docker.com/_/mariadb',
				label: 'Official MariaDB Docker Image',
				newTab: true
			}
		],
		logo: Assets.Docker,
		name: 'Enhanced MariaDB Docker Image',
		period: { from: new Date('7 January 2019'), to: new Date('24 April 2019') },
		skills: getSkills('docker', 'mysql', 'cron', 'logstash', 'elk'),
		type: 'DevOps',
		screenshots: []
	},{
		slug: 'paymentsense-magento',
		color: '#4CAF50',
		description:
			'A fork of the official Paymentsense Magento 1 module that resolves critical bugs and addresses a module conflict issue. This improved version ensures seamless integration of Paymentsense payment services with Magento 1, enhancing reliability and compatibility.',
		shortDescription:
			'Fork of Paymentsense Magento 1 module fixing bugs and module conflicts.',
		links: [
			{
				to: 'https://github.com/waynetheisinger/Paymentsense_Magento',
				label: 'GitHub Repository',
				newTab: true
			},
			{
				to: 'https://www.paymentsense.com/',
				label: 'Paymentsense',
				newTab: true
			}
		],
		logo: Assets.Magento,
		name: 'Paymentsense Module for Magento 1',
		period: { from: new Date('30 June 2018'), to: new Date('14 May 2018') },
		skills: getSkills('magento', 'paymentsense', 'bug-fixing', 'module-compatibility'),
		type: 'Module',
		screenshots: []
	}
];

export const title = 'Projects';
