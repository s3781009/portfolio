import './App.css';
import background from './assets/background.jpg';
import location from './assets/location.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import resume from './assets/resume.svg';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import weatherapp from './assets/weatherapp.png';
import githubBlue from './assets/github-blue.svg';

function App() {
    const animationSlideIn = useAnimation();
    const {inView, entry, ref} = useInView();
    let num = 0;

    if (inView) {
        animationSlideIn.start({
            x: 0,
        }).then(r => num += 1);
    }

    return (
        <div className="App">
            <div className="col">
                <header className="App-header">
                    <img src={background} className="header-image" alt={""}/>
                    <div className="name-container">
                        <div className="name">Ryan</div>
                        <div className="lastname">Le-Nguyen</div>
                    </div>
                    <div className="righttop-container">
                        <motion.div whileHover={{textDecoration: "underline"}}>Projects</motion.div>
                        <motion.div whileHover={{textDecoration: "underline"}}>Contact</motion.div>
                    </div>

                    <div className="stacked-text">
                        <motion.div initial={{opacity: 0}} transition={{duration: 1}} animate={{opacity: 1}}
                                    className="title">Software Engineer
                        </motion.div>
                        <div>
                            <div className="row">
                                <motion.img whileHover={{y:-15}} className="location-icon" src={location} alt={""}/>
                                <motion.div initial={{opacity: 0}} transition={{delay: 1, duration: 1}}
                                            animate={{opacity: 1}} className="location"> Melbourne, VIC, Australia
                                </motion.div>
                            </div>
                            <div className="row-center">
                                <motion.div whileHover={{y: -10}} className="link-col">
                                    <motion.img initial={{y: -10000}}
                                                transition={{delay: 1, type: 'tween', duration: 1}} animate={{y: 0}}
                                                whileHover={{y: -15}} className="icon" src={github} alt={""}/>
                                    <div>Github</div>
                                </motion.div>
                                <motion.div whileHover={{y: -15}} className="link-col">
                                    <motion.img initial={{y: -10000}}
                                                transition={{delay: 1.5, type: 'tween', duration: 1}} animate={{y: 0}}
                                                className="icon" src={linkedin} alt={""}/>
                                    <div>LinkedIn</div>
                                </motion.div>
                                <motion.div whileHover={{y: -15}} className="link-col">
                                    <motion.img initial={{y: -10000}}
                                                transition={{delay: 2, type: 'tween', duration: 1}} animate={{y: 0}}
                                                className="icon" src={resume}
                                                alt={""}/>
                                    <div>Resume</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="about-container">
                <div className="about-me-row">
                    <div className="about-col">
                        <div className="about-me-title"> About me.</div>
                        <div ref={ref} className="scroller">
                            <motion.div whileHover={{scale: 1.2, color: "#33a8e5"}}>
                                <motion.div initial={{x: -500}} transition={{delay: 0.5, type: "tween"}}
                                            animate={animationSlideIn}>Who am I?
                                </motion.div>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.2, color: "#33a8e5"}}>
                                <motion.div initial={{x: -500}} transition={{delay: 1, type: "tween"}}
                                            animate={animationSlideIn}>Skills/ experience
                                </motion.div>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.2, color: "#33a8e5"}}>
                                <motion.div initial={{x: -500}}
                                            transition={{delay: 1.5, type: "tween"}}
                                            animate={animationSlideIn}>Interests
                                    and Hobbies
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="about-me-body">
                        <div className="about-me-body-inner">
                            Hello worlLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!d
                        </div>
                    </div>
                </div>

            </div>
            {/*<div className="align-text-left">*/}
            {/*    <div className="projects-title">Projects</div>*/}
            {/*    <div className="text-body">*/}
            {/*        <Typical loop={Infinity} steps={[*/}
            {/*            "Timeline of my projects", 1000*/}
            {/*        ]}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="timeline-container">
                <div className="margin-container">
                    <div className="timeline-col">
                        <div className="timeline-circle"></div>
                        <div className="timeline-bar"></div>
                        <div className="timeline-circle"></div>
                        <div className="timeline-bar"></div>
                        <div className="timeline-circle"></div>
                        <div className="timeline-bar"></div>
                    </div>

                    <div className="projects-container">
                        <div className="project-item-container">
                            <div className="project-heading"> Weather Forecast</div>
                            <div className="flex-row">
                                <img className="project-image" src={weatherapp} alt={""}/>
                                <div>
                                    <div className="subheading"> Tech stack</div>
                                    <ul>
                                        <li>React</li>
                                        <li>Html</li>
                                        <li>Css</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-row">
                                <motion.a whileHover={{opacity: 0.3}} className="link"
                                          href={"https://s3781009.github.io/weather/"}> Live demo
                                </motion.a>
                                <motion.a whileHover={{opacity: 0.3}} href="https://github.com/s3781009/weather"
                                          className="link">Source Code
                                </motion.a>
                                <img src={githubBlue}/>
                            </div>
                            <div className="subheading">Summary</div>

                            <div> This is an application that allows users to check the weather forecast for the next
                                few hours, this app is uses the free weather API to make http requests given a city as
                                input. It also renders the additional realtime weather information such as humidity and
                                wind speed.
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default App;
