//this is the about page for the site
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Head from 'next/head'

//a basic about page to share some information about myself. I have included the navbar component. there are also some jsx styles below
function About() {
	return (
		<div className="about-page">
			<Head>
				<title>About</title>
			</Head>

			<Navbar />

			<Social />

			<section className="hero about">
				<div className="container a-container">
					<div className="text-wrapper w-full about-text-wrapper">
						<div className="about-text">
							<h1 className="title about-title">About</h1>
							<p className="description">
								Hello, my name is Liam Volschenk, I am an aspiring web developer with a passion for photography, design, technology and problem
								solving.
								<br />
								<br />
								I specialize in the MERN stack (MongoDB, Express, React.js and Node.js). However, I am a fast learner and I enjoy learning and
								adapting to any technologies or stack.
								<br />
								<br />
								I hope to use my work as a means of growing our economy fairly and safe guarding our environment for all future generations to
								enjoy.
							</p>
						</div>
					</div>
					<div className="about-image">
						<img src="/environment.png" alt="" />
					</div>
				</div>
			</section>
			<div className="skillsntools">
				<section>
					<div className="container">
						<h1 className="title skills-title">Skills</h1>
						<div className="skills text-wrapper w-full">
							<div className="row">
								<div className="column">
									<div><span>Front-end</span><img src="/frontend.png" alt="frontend" style={{ width: "150px" }} />
									</div>
									<div><span>Back-end</span><img src="/backend.png" alt="frontend" style={{ width: "150px" }} />
									</div>
									<div><span>Marketing</span><img src="/branding.png" alt="frontend" style={{ width: "150px" }} />
									</div>
									<div><span>Design</span><img src="/design.png" alt="frontend" style={{ width: "150px" }} /></div>
									<div><span>Photography</span><img src="/photography.png" alt="frontend"
										style={{ width: "150px" }} /></div>
									<div><span>UI/UX</span><img src="/ux.png" alt="frontend" style={{ width: "150px" }} /></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container">
						<h1 className="skills-title title">Tools &amp; Technologies</h1>
						<div className="skills text-wrapper w-full">
							<div className="row-tools">
								<div className="column">
									<div><span>HTML</span><img src="/html.svg" alt="html" style={{ width: "87px" }} /></div>
									<div><span>CSS</span><img src="/css.svg" alt="css" style={{ width: "87px" }} /></div>
									<div><span>JavaScript</span><img src="/javascript.svg" alt="JS" style={{ width: "100px" }} /></div>
									<div><span>jQuery</span><img src="/jquery.png" alt="jquery" style={{ width: "100px" }} /></div>
									<div><span>React</span><img src="/react.svg" alt="react" style={{ width: "100px" }} /></div>
									<div><span>Next.js</span><img src="/next.png" alt="next" style={{ width: "100px" }} /></div>
									<div><span>Express</span><img src="/express.png" alt="express" style={{ width: "105px" }} /></div>
									<div><span>Node.js</span><img src="/node.png" alt="node" style={{ width: "100px" }} /></div>
									<div><span>MongoDB</span><img src="/mongo.png" alt="mongo" style={{ width: "100px" }} /></div>
									<div><span>Bootstrap</span><img src="/bootstrap.svg" alt="bootstrap" style={{ width: "100px" }} /></div>
									<div><span>Git</span><img src="/git.svg" alt="git" style={{ width: "100px" }} /></div>
									<div><span>Figma</span><img src="/figma.svg" alt="figma" style={{ width: "80px" }} /></div>
									<div><span>Photoshop</span><img src="/photoshop.png" alt="photoshop" style={{ width: "100px" }} /></div>
									<div><span>inDesign</span><img src="/indesign.png" alt="indesign" style={{ width: "100px" }} /></div>
									<div><span>ProCreate</span><img src="/procreate.png" alt="procreate" style={{ width: "100px" }} /></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<style jsx>
				{`
				.about-text {
					bottom: 40px;
					width: calc(100% - 500px);
				}

				@media screen and (max-width: 950px){
					.about-text {
						width: 100%;
					}
				}
				
				.about-image {
					position: absolute;
					right: 0px;
					top: 160px;
					z-index: -1;
				}

				@media screen and (max-width: 950px){
					.about-image {
						position: unset;
					}
				}
				`}
			</style>
		</div>
	);
}

export default About;
