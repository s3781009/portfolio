import './App.css';
import background from './assets/background.jpg';
import location from './assets/location.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import resume from './assets/resume.svg';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import weatherapp from './assets/weatherapp.png';
import scrabble from './assets/scrabblepic.png';
import githubBlue from './assets/github-blue.svg';
import {Card} from "@mui/material";
import {Link} from 'react-router';
import {useEffect, useState} from "react";

function App() {
    const animationSlideIn = useAnimation();
    const {inView, entry, ref} = useInView();
    const [projectHovered, setProjectHovered] = useState(false);

    let num = 0;

    if (inView) {
        animationSlideIn.start({
            x: 0,
        }).then(r => num += 1);
    }
    const animationExpand = useAnimation();
    const {inView1, entry1, ref1} = useInView();

    if (inView1) {
        animationExpand.start({
            width: "80%",
        }).then(r => console.log(r));
    }

    let time = new Date().toLocaleTimeString();
    let [ctime, setCTime] = useState();
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);
    useEffect(() => {
        console.log("changed")
    }, [projectHovered]);

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
                                <motion.img whileHover={{y: -15}} className="location-icon" src={location} alt={""}/>
                                <motion.div initial={{opacity: 0}} transition={{delay: 1, duration: 1}}
                                            animate={{opacity: 1}} className="location"> Melbourne, VIC, Australia
                                </motion.div>
                                <div>{ctime}</div>
                            </div>
                            <div className="row-center">
                                <motion.div whileHover={{y: -10}} className="link-col">
                                    <a href="https://github.com/s3781009">
                                        <motion.img initial={{y: -10000}}
                                                    transition={{delay: 1, type: 'tween', duration: 1}} animate={{y: 0}}
                                                    whileHover={{y: -15}} className="icon" src={github} alt={""}/>
                                    </a>
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
                            <motion.div whileHover={{scale: 1.2, color: "#00a7ff"}}>
                                <motion.div initial={{x: -1000}} transition={{delay: 0.5, type: "tween"}}
                                            animate={animationSlideIn}>Who am I?
                                </motion.div>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.2, color: "#00a3ff"}}>
                                <motion.div initial={{x: -1000}} transition={{delay: 1, type: "tween"}}
                                            animate={animationSlideIn}>Skills/ experience
                                </motion.div>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.2, color: "#00a7ff"}}>
                                <motion.div initial={{x: -1000}}
                                            transition={{delay: 1.5, type: "tween"}}
                                            animate={animationSlideIn}>Interests
                                    and Hobbies
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="about-me-body">
                        <div className="about-me-body-inner">
                            <br/>
                            Hi I'm Ryan Le-Nguyen, a software engineering student with a passion for learning and
                            improving. Being results oriented and data driven I strive to always better my skills as a
                            developer through personal projects in addition to my formal education at the Royal
                            Melbourne Institute of Technology.
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            I am interested in a broad range of software engineering disciplines including
                            web development (front end and backend), mobile, games and embedded systems.
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-section">
                <div className=" f-col">
                    <div ref={ref1} className="projects-title">
                        My Projects
                    </div>
                    <motion.div transition={{delay: 1}} animate={{width: "80%"}}
                                className="horizontal-separator"></motion.div>
                </div>
            </div>
            <div className="project-row">

                <motion.div transition={{duration: 0.2}} whileHover={{scale: 1.1, borderColor: "#ffb340"}}
                            className="project-item-container">
                    <div onMouseLeave={() => setProjectHovered(false)} onMouseOver={() => setProjectHovered(true)}
                         className="project-heading">Weather Dashboard
                    </div>
                    <motion.button onHover={{backgroundColor: 'orange'}} className="project-button">LEARN MORE
                    </motion.button>
                    {!projectHovered ?
                        <motion.img whileHover={{opacity: 0}} className="project-image" src={weatherapp}/> : null}
                    <div className="readmore">
                        {/*<motion.div whileHover={{textDecoration: "underline"}}>Source Code</motion.div>*/}
                        {/*<motion.div whileHover={{textDecoration: "underline"}}>Live preview</motion.div>*/}
                        {/*<motion.div whileHover={{textDecoration: "underline"}}>Read more</motion.div>*/}
                    </div>
                </motion.div>
                <motion.div transition={{duration: 0.2}} whileHover={{scale: 1.1, borderColor: "#ffb340"}}
                            className="project-item-container">
                    <div onMouseLeave={() => setProjectHovered(false)} onMouseOver={() => setProjectHovered(true)}
                         className="project-heading">Scrabble Multiplayer
                    </div>
                    <motion.button onHover={{backgroundColor: 'orange'}} className="project-button">LEARN MORE
                    </motion.button>
                        <motion.img whileHover={{opacity: 0}} className="project-image" src={scrabble}/>
                    <div className="readmore">
                        {/*<motion.div whileHover={{textDecoration: "underline"}}>Source Code</motion.div>*/}
                        {/*<motion.div whileHover={{textDecoration: "underline"}}>Live preview</motion.div>*/}
                        {/*<motion.div whileHover={{textDecoration: "underline"}}>Read more</motion.div>*/}
                    </div>
                </motion.div>
            </div>
            <div className="footer">
                <div className="project-heading">Contact</div>
                <div>ryanlenguyen2001@gmail.com</div>
            </div>
        </div>
    );
}

export default App;
