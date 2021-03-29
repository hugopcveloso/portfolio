const workData = [
	{
		id: 1,
		name: "Nature-Expeditions",
		url: "https://nature-expeditions.herokuapp.com/",
		urlGit: "https://github.com/hugopcveloso/natours-app",
		gitAvailable: true,
		localimage: "nature-expeditions.jpg",
		description:
			"Nature expeditions é uma aplicação full-stack em NodeJs, que desenvolvi no âmbito de um curso de Nodejs\
		É uma aplicação de reservas de tours, com diferentes tipos de utilizador (admin, lead-guides, guides, users) com diferentes permissões, \
		Mapbox, Nodemailer com emails de boas-vindas e relacionados com password, JWT para autenticação, pagamentos Stripe, \
		uploads de ficheiros/fotos com Multer e para o front-end utilizei Pug templating.",
		description_eng:
			"Nature expeditions is a full-stack Nodejs API I developed while learning Nodejs,\
		It's a tour booking app, with different user roles (admin, lead-guides, guides, users), with different permissions, \
		MongoDB for the database, Mapbox, Nodemailer with welcome and password reset emails, JWT for authentication, \
		Stripe for payments, Pug templating engine for the front-end, Photo uploads with Multer",
		technologies:
			"Nodejs, Javascript, Express, Pug, MongoDB, Nodemailer, Multer, Stripe, JWT Auth",
	},
	{
		id: 2,
		name: "Media I watched",
		url: "https://hugo-veloso.vercel.app/",
		urlGit: "https://github.com/hugopcveloso/movie-blog",
		gitAvailable: true,
		localimage: "mediaiwatched.jpg",
		description:
			"Media I watched é uma aplicação full-stack em NextJS para o front-end e NodeJS utilizando o Strapi, um headless CMS\
			Para a database utilizei PostgreSQL e Cloudinary para upload de fotografias.\
			O propósito deste projecto foi aprender Strapi que é um Headless CMS e aprender mais a fundo NextJS.",
		description_eng:
			"Media I watched is a full-stack website, with NextJS for the front-end and NodeJS using Strapi for the backend. \
			For the database I used PostgreSQL and Cloudinary for photo uploads because I was lookint to deploy to Heroku for free\
			The purpose of this project was to learn more in-depth Strapi which is Headless CMS\
			and NextJS server side rendering possibilities. \
      I developed this project in around a week while learning NextJS",
		technologies: "NextJS, Javascript, Strapi, PostgreSQL, Cloudinary, Emotion",
	},
	{
		id: 3,
		name: "Duarte&Duarte imobiliários",
		url: "https://duarteduarte.vercel.app/",
		urlGit: "https://github.com/hugopcveloso/duarteduarte",
		gitAvailable: true,
		localimage: "duarteeduarte.jpg",
		description:
			"Duarte&Duarte é um site em NextJS/React para uma equipa de agentes imobiliários, com um guia da cidade, testemunhos e o portfolio,\
		Eu desenvolvi o website em React quando estava a aprender React, e mais recentemente traduzi-o para NextJS",
		description_eng:
			"Duarte&Duarte is a NextJS/React Landing Page Website for a team of real-estate agents, with a city guide, testimonials and their current portfolio.\
			I actually developed the website in React a while ago, and then translated it into NextJS",
		technologies: "NextJS, React, ",
	},
	{
		id: 4,
		name: "Alt-Solutions",
		url: "http://www.altsolutions.net/",
		urlGit: "",
		gitAvailable: false,
		localimage: "altsolutions-screen.jpg",
		type: "",
		description:
			"Desenvolvi o website da AltSolutions em Ruby on Rails, pois vão ser desenvolvidos mais features no futuro.\
			Também fiz alguns serviços de scraping de informações em páginas dinâmicas que seriam do interesse da Alt Solutions.\
			É importante notar que as decisões relativamente ao Design foram tomadas lado-a-lado com o cliente.",
		description_eng:
			"I developed the website for Alt Solutions in Ruby on Rails but because of a change of plans\
			I then translated it into Wordpress, it's important to note that both the design and UX were \
			decided by the client in the side-by-side prototyping phase. \
			I also scraped databases that were in the interest of Alt Solutions.",
		technologies:
			"Ruby, Ruby on Rails, Javascript, HTML, CSS, Capybara for scraping in Dynamic pages, Figma.",
	},
	{
		id: 5,
		name: "Antena Quarentena",
		url: "https://antena-quarentena.herokuapp.com/",
		urlGit: "https://github.com/hugopcveloso/antena_quarentena",
		gitAvailable: true,
		localimage: "antena-quarentena.jpg",
		type: "",
		description: "",
		description_eng:
			"Antena Quarentena was a pet-project that I started right after the Coding Bootcamp\
			In this project I tried to create a platform similar to Reddit, communities, posts, nested comment threads,\
			the user can also create and subscribe to communities and it's possible to upvote/downvote both comments and posts.\
			The project was just a way to practice Ruby on Rails, eventually I realized some of the limitations of Ruby and Vanilla Javascript,\
			I used StimulusJS for some interactivity and eventually stopped working on this project to focus mainly on Javascript.",
		technologies: "Ruby, Ruby on Rails, Javascript, Stimulus",
	},
	{
		id: 6,
		name: "Host-Roulette",
		url: "http://www.host-roulette.com/",
		urlGit: "https://github.com/petah-sama/host-roulette",
		gitAvailable: true,
		localimage: "hostroulette-screen.jpg",
		description:
			"A aplicação Host-Roulette foi desenvolvida em 2 semanas por uma equipa de 4 pessoas como parte do projecto final do Le Wagon Coding Bootcamp.\
			Host-Roulette é um site para facilitar eventos entre amigos, ao escolher um anfitrião entre membros do grupos. \
			O anfitrião escolhido tem depois acesso a ferramentas para criar o melhor evento possível como fazer perguntas aos seus amigos, ver estatísticas e publicar os detalhes do evento.\
			Neste projecto escolhi ficar principalmente no back-end e no desenvolvimento de features como estatísticas, notificações, gráficos, etc...",
		description_eng:
			"Developed Host-Roulette in 2 weeks with a team of 3 other people, as\
		the final project in Le Wagon Coding Bootcamp. Host-Roulette is a\
		website where groups of friends can pick a host for their gatherings,\
		after the host is picked he has access to an event dashboard where he can ask the group\
		questions and see their stats.\
		I focused mainly on the back-end, since I had more experience in\
		design and wanted to learn as much as I could.",
		technologies:
			"Ruby, Ruby on Rails, Javascript, HTML, CSS, Bootstrap, PostgreSQL, GitHub, Figma",
	},
	// {
	// 	id: 7,
	// 	name: "Efeito Contexto",
	// 	url: "https://efeitocontexto.com/",
	// 	urlGit: "https://github.com/hugopcveloso",
	// 	gitAvailable: false,
	// 	localimage: "efeito-contexto-screen.jpg",
	// 	description:
	// 		"Efeito Contexto é um blog acerca de como os humanos tendem a interagir com informação, baseando o seu conteúdo em psicologia cognitiva e filosofia\
	// 		É um site criado por mim com a ajuda de alguns amigos, neste projecto tive a oportunidade de desenvolver todo o website, branding e design",
	// 	description_eng:
	// 		"Efeito Contexto is a blog about how humans tend to interact with information basing its content on cognitive\
	// 	psychology and philosophy.\
	// 	Created by me and some friends, in this project I had the opportunity to develop all of the website, branding\
	// 	and design.",
	// 	technologies: "Wordpress, Illustrator, Photoshop.",
	// },
	{
		id: 7,
		name: "Comporta App",
		url: "https://www.comportaapp.com/",
		urlGit: "https://github.com/hugopcveloso",
		gitAvailable: false,
		localimage: "screen-comportaapp.png",
		description:
			"Comporta App é um PWA, um site para ser utilizado em mobile, parte de um programa Europeu para desenvolver a região.\
			 A agência que trabalhou no projecto antes de mim utilizou a plataforma GoodBarber o que dificultou a integração de novos features\
			 As minhas responsabilidades foram principalmente desenvolver novas soluções de monetização apesar das limitações da plataforma",
		description_eng:
			"Comporta App is a PWA that was part of an European programme to develop the region.\
			There was an agency working on the project before me that setup the project in CMS called Goodbarber.\
			I also setup a payment system outside of Goodbarber, created bookings section, and a tour section.",
		technologies:
			"Goodbarber, Stripe, automate.io (great alternative to Zapier/IFTT)",
	},
];

export default workData;
