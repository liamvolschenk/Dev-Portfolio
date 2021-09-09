import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Head from 'next/head'

//this is the page that displays my portfolio, it includes links to the project github repos aswell as some heroku links
function Portfolio() {
	return (
		<div>
			<Head>
				<title>Portfolio</title>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			</Head>

			<Navbar />

			<Social />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full p-text-wrapper">
						<h1 className="title">Portfolio</h1>
						<p className="description">
							Some projects I have developed
						</p>

						<div className="portfolio-wrapper">
							<div className="portfolio-item">
								<img src="/weather-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Weather App</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/Open-Weather-API-React-App">GitHub Repo</a></div>
								<div className="portfolio-category"><a target="blank" href="https://enigmatic-badlands-18658.herokuapp.com/">Demo</a></div>
							</div>
							<div className="portfolio-item">
								<img src="/istore-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">i-Store search API</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/iStore-API">GitHub Repo</a></div>
								<div className="portfolio-category"><a target="blank" href="https://istore-api-capstone.herokuapp.com/">Demo</a></div>
							</div>
						</div>
						<div className="portfolio-wrapper">
							<div className="portfolio-item">
								<img src="/tarot-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Tarot Card Game</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/Tarot-Memory-Game">GitHub Repo</a></div>
								<div className="portfolio-category"><a target="blank" href="https://tranquil-castle-26278.herokuapp.com/">Demo</a></div>
							</div>
							<div className="portfolio-item">
								<img src="/to-do-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Reminder App (MERN & JWT)</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/MERN-Reminder-with-JWT">GitHub Repo</a></div>
							</div>
						</div>
						<div className="portfolio-wrapper">
							<div className="portfolio-item">
								<img src="/shop.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">e-Commerce Front-end</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/Online-Store-Capstone">GitHub Repo</a></div>
							</div>
							<div className="portfolio-item">
								<img src="/cards-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Currency Converter & Three Card Monte</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/Currency-and-Cards">GitHub Repo</a></div>
								<div className="portfolio-category"><a target="blank" href="https://frozen-tor-38615.herokuapp.com/">Demo</a></div>
							</div>
						</div>
						<div className="portfolio-wrapper">
							<div className="portfolio-item">
								<img src="/swapi-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Star Wars API</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/Star-Wars-API-Next.js-app">GitHub Repo</a></div>
								<div className="portfolio-category"><a target="blank" href="https://star-wars-api-next-js-app.vercel.app/">Demo</a></div>
							</div>
							<div className="portfolio-item">
								<img src="/insurance-web.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Life-insurance application</h4>
								<div className="portfolio-category"><a target="blank" href="https://github.com/liamvolschenk/MERN-life-insurance">GitHub Repo</a></div>
							</div>
						</div>
						<div className="portfolio-wrapper next-wrap">
							<div className="portfolio-item">
								<img src="/next-web.jpg" className="portfolio-image next-img" />

								<h4 className="portfolio-name">Your next Website?</h4>
								<div className="portfolio-category"><p>Interested in working together?</p></div>
								<div className="portfolio-category contact"><a target="blank" href="/contact">Contact me</a></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>
				{`
				
				.portfolio-wrapper {
					display: flex;
					flex-wrap: wrap;
					margin-left: -10px;
					margin-right: -10px;
					margin-bottom: 20px;
				}
				
				.portfolio-wrapper .portfolio-item {
					width: calc(50% - 20px);
					padding-left: 10px;
					padding-right: 10px;
					text-align: center;
				}

				@media screen and (max-width: 600px) {
					.portfolio-wrapper .portfolio-item { 
						width: 100%;
						padding-bottom: 20px;
					 }
				}
				
				.portfolio-wrapper .portfolio-item .portfolio-image {
					max-width: 100%;
				}
				
				.portfolio-wrapper .portfolio-item .portfolio-name {
					font-size: 24px;
					margin-top: 10px;
					margin-bottom: 10px;
				}
				
				.portfolio-wrapper .portfolio-item .portfolio-category {
					color: #999;
				}
				`}
			</style>
		</div>
	);
}

export default Portfolio;