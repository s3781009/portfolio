import './App.css';
import background from './assets/background.jpg';
import location from './assets/location.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import resume from './assets/resume.svg';
import {motion} from 'framer-motion';

function App() {
    return (
        <div className="App">
            <div className="col">
                <header className="App-header">
                    <img src={background} className="header-image" alt={""}/>
                    <div className="name-container">
                        <div className="name">Ryan</div>
                        <div className="lastname">Le-Nguyen</div>
                    </div>
                    <div className="stacked-text">
                        <motion.div initial={{opacity: 0}} transition={{duration: 1}} animate={{opacity: 1}}
                                    className="title">Software Engineer
                        </motion.div>
                        <div>
                            <div className="row">
                                <img className="location-icon" src={location} alt={""}/>
                                <motion.div initial={{opacity: 0}} transition={{delay: 1, duration: 1}}
                                            animate={{opacity: 1}} className="location"> Melbourne, VIC, Australia
                                </motion.div>
                            </div>
                            <div className="row-center">
                                <div className="link-col">
                                    <motion.img initial={{y: -10000}}
                                                transition={{delay: 1, type: 'tween', duration: 1}} animate={{y: 0}}
                                                whileHover={{y: -10}} className="icon" src={github} alt={""}/>
                                    <div>Github</div>
                                </div>
                                <div className="link-col">
                                    <motion.img initial={{y: -10000}}
                                                transition={{delay: 1.5, type: 'tween', duration: 1}} animate={{y: 0}}
                                                whileHover={{y: -10}} className="icon" src={linkedin} alt={""}/>
                                    <div>LinkedIn</div>
                                </div>
                                <div className="link-col">
                                    <motion.img initial={{y: -10000}}
                                                transition={{delay: 2, type: 'tween', duration: 1}} animate={{y: 0}}
                                                whileHover={{y: -10}} className="icon" src={resume}
                                                alt={""}/>
                                    <div>Resume</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </div>

            <div className="technologies-bar">
            </div>
            <div className="about-me"></div>
        </div>
    );
}

export default App;
