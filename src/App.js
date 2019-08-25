import React from 'react';
import './stylesheet.css'

function App() {
    return (
        <div className="App">
            <div>
                <nav id="nav" className="navbar">
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <section className="home" id="home">
                    <h1 className="tracking-in-expand">Hey, I'm Clayton</h1>
                    <p className="focus-in-contract-bck">a software developer</p>
                </section>
                <section className="about" id="about">
                    <h1>
                        About Me
                    </h1>
                    <div className="row">
                        <div className="side">
                            <p>
                                My name is Clayton Davidson and I am from Campbellsville, Kentucky. I am currently
                                attending Western
                                Kentucky University. I have a desire to utilize my problem-solving skills to further
                                develop my
                                abilities in the field of computer science. I am currently seeking internships in the
                                software
                                development field. I want to increase my knowledge of both imperative and logic-oriented
                                programming
                                languages. My goal is to become an expert in these studies and create my own projects
                                someday.
                                In my free time, I enjoy programming, playing games, reading, making videos, hiking, and
                                experiencing
                                new adventures.
                            </p>
                        </div>
                        <div className="main">
                            <img src={require("./res/cover.jpg")} alt="picture of clayton receiving an award"
                                 className="responsive"/>
                        </div>
                    </div>
                </section>
                <section className="education" id="education">
                    <h1>
                        Education
                    </h1>
                    <div className="row-fluid">
                        <div className="span2">
                            <img
                                src="https://claytondavidson.000webhostapp.com/wp-content/uploads/2019/03/fall-hero-1024x555.jpg"
                                alt="picture of western kentucky university" width={700} length={650}/>
                        </div>
                        <div className="span10">
                            <p>I am currently attending college at Western Kentucky University in Bowling Green,
                                Kentucky. I am pursuing a Bachelors of Science in Computer Information Technology. I
                                have also attended Carson-Newman University in Jefferson City, Tennessee where I pursued
                                a Bachelors in Computer Science.
                                These educational opportunities have been a chance for me to learn more about myself and
                                the way that I think. I intend to apply for internships so that I will be able to get
                                into the field of computer science more easily. I would like to use my abilities to make
                                something unique and useful.</p>
                        </div>
                    </div>
                </section>
                <section className="projects" id="projects">
                    <h1>
                        Projects
                    </h1>
                </section>
                <section className="contact" id="contact">
                    <h1>
                        Contact Me
                    </h1>
                </section>
                <footer className="footer">
                    <ul className="social-icons">
                        <li><a href="https://github.com/rageflre"><img src={require("./res/Github.png")} alt="Github"/></a>
                        </li>
                        <li><a href="https://twitter.com/GreensPride"><img src={require("./res/Twitter.png")}
                                                                           alt="Twitter"/></a></li>
                        <li><a href="https://www.youtube.com/user/MrKOBOTHERS"><img src={require("./res/YouTube.png")}
                                                                                    alt="Youtube"/></a></li>
                        <li><a href="https://www.linkedin.com/in/clayton-davidson-a331a0183/"><img
                            src={require("./res/Linkedin.png")} alt="Linkedin"/></a></li>
                    </ul>
                </footer>
            </div>
            });
        </div>
    );
}

export default App;
