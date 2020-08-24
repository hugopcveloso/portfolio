const workData = [
	{
		id: 1,
		name: 'Alt-Solutions',
		url: 'http://www.altsolutions.net/',
		localimage: 'altsolutions-screen.jpg',
		description:
			'Desenvolvi o website da AltSolutions em Ruby on Rails, pois vão ser desenvolvidos mais features no futuro.\
			Também fiz alguns serviços de scraping de informações em páginas dinâmicas que seriam do interesse da Alt Solutions.\
			É importante notar que as decisões relativamente ao Design foram tomadas lado-a-lado com o cliente.',
		description_eng:
			"I developed the website for Alt Solutions in Ruby on Rails, it's \
		 important to note that both the design and UX were \
			decided by the client in the side-by-side prototyping phase. \
			I also scraped databases that were in the interest of Alt Solutions.",
		technologies: 'Ruby, Ruby on Rails, Javascript, HTML, CSS, Capybara for scraping in Dynamic pages, Figma.'
	},
	{
		id: 2,
		name: 'Host-Roulette',
		url: 'http://www.host-roulette.com/',
		localimage: 'hostroulette-screen.jpg',
		description:
			'A aplicação Host-Roulette foi desenvolvida em 2 semanas por uma equipa de 4 pessoas como parte do projecto final do Le Wagon Coding Bootcamp.\
			Host-Roulette é um site para facilitar eventos entre amigos, ao escolher um anfitrião entre membros do grupos. \
			O anfitrião escolhido tem depois acesso a ferramentas para criar o melhor evento possível como fazer perguntas aos seus amigos, ver estatísticas e publicar os detalhes do evento.\
			Neste projecto escolhi ficar principalmente no back-end e no desenvolvimento de features como estatísticas, notificações, gráficos, etc...',
		description_eng:
			'Developed Host-Roulette in 2 weeks with a team of 3 other people, as\
		the final project in Le Wagon Coding Bootcamp. Host-Roulette is a\
		website where groups of friends can pick a host for their gatherings,\
		after the host is picked he has access to an event dashboard where he can ask the group\
		questions and see their stats.\
		I focused mainly on the back-end, since I had more experience in\
		design and wanted to learn as much as I could.',
		technologies: 'Ruby, Ruby on Rails, Javascript, HTML, CSS, Bootstrap, PostgreSQL, GitHub, Figma'
	},
	{
		id: 3,
		name: 'Efeito Contexto',
		url: 'https://efeitocontexto.com/',
		localimage: 'efeito-contexto-screen.jpg',
		description:
			'Efeito Contexto é um blog acerca de como os humanos tendem a interagir com informação, baseando o seu conteúdo em psicologia cognitiva e filosofia\
			É um site criado por mim com a ajuda de alguns amigos, neste projecto tive a oportunidade de desenvolver todo o website, branding e design',
		description_eng:
			'Efeito Contexto is a blog about how humans tend to interact with information basing its content on cognitive\
		psychology and philosophy.\
		Created by me and some friends, in this project I had the opportunity to develop all of the website, branding\
		and design.',
		technologies: 'Wordpress, Illustrator, Photoshop.'
	},
	{
		id: 4,
		name: 'Comporta App',
		url: 'https://www.comportaapp.com/',
		localimage: 'screen-comportaapp.png',
		description:
			'Comporta App é um PWA, um site para ser utilizado em mobile, parte de um programa Europeu para desenvolver a região.\
			 A agência que trabalhou no projecto antes de mim utilizou a plataforma GoodBarber o que dificultou a integração de novos features\
			 As minhas responsabilidades foram principalmente desenvolver novas soluções apesar das limitações da plataforma \
			 Por exemplo para criar um sistema de reserva de actividades, criei um sistema de pagamentos fora do Goodbarber e automatizei emails entre clientes e fornecedores\
			 de forma a passar no email da empresa, desta forma tornava-se possível acompanhar as reservas',
		description_eng:
			'Comporta App is a PWA that was part of an European programme to develop the region.\
			There was an agency working on the project before me that setup the project in CMS called Goodbarber.\
			I also setup a payment system outside of Goodbarber, created bookings section, and a tour section.',
		technologies: 'Goodbarber, Stripe, automate.io (great alternative to Zapier/IFTT)'
	}
];

export default workData;
