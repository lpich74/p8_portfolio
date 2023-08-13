import React from "react"
import Style from './Mylogos.module.scss';
import htmlLogo from "../img/html5-logo.png"
import cssLogo from "../img/css3-logo.png"
import javascriptLogo from "../img/javascript-logo.png"
import reactLogo from "../img/react-logo.png"
import gitLogo from "../img/git-logo.png"
import githubLogo from "../img/github-logo.png"
import figmaLogo from "../img/figma-logo.png"
import trelloLogo from "../img/trello-logo.png"
import nodejsLogo from "../img/nodejs-logo.png"
import expressjsLogo from "../img/expressjs-logo.png"
import mongoDBLogo from "../img/mongoDB-logo.png"
import lighthouseLogo from "../img/lighthouse-logo.png"

export const logos = [
    <React.Fragment >
        <div className={Style.lineOfLogos}>
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={htmlLogo} alt="htmlLogo" width={50} height={50} />
                <span>html5</span>
            </div>
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={cssLogo} alt="cssLogo" width={50} height={50} />
                <span>css3</span>
            </div>
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={javascriptLogo} alt="javascriptLogo" width={50} height={50} />
                <span>javascript</span>
            </div>
        </div>
    </React.Fragment>,
    <React.Fragment >
        <div className={Style.logoAndName}>
            <img className={Style.logo} src={reactLogo} alt="reactLogo" width={50} height={50} />
            <span>react</span>
        </div>
    </React.Fragment>,
    <React.Fragment >
        <div className={Style.lineOfLogos}>
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={gitLogo} alt="gitLogo" width={50} height={50} />
                <span>git</span>
            </div>
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={githubLogo} alt="githubLogo" width={50} height={50} />
                <span>github</span>
            </div>
        </div>
    </React.Fragment>,
    <React.Fragment >
        <div className={`${Style.logoAndName} ${Style.logoAndNameFigma}`}>
            <img className={Style.logoFigma} src={figmaLogo} alt="figmaLogo" width='auto' height={50} />
            <span>figma/reading mockups</span>
        </div>
    </React.Fragment>,
    <React.Fragment >
        <div className={Style.logoAndName}>
            <img className={Style.logo} src={trelloLogo} alt="trelloLogo" width={50} height={50} />
            <span>trello/scrum methodology</span>
        </div>
    </React.Fragment>,
    <React.Fragment >
          <div className={Style.lineOfLogos}>    
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={nodejsLogo} alt="nodejsLogo" width={50} height={50} />
                <span>node.js</span>
            </div>
            <div className={Style.logoAndName}>
                <img className={Style.logo} src={expressjsLogo} alt="expressjsLogo" width={50} height={50} />
                <span>express.js</span>
            </div>
        </div>  
    </React.Fragment>, 
    <React.Fragment >    
        <div className={Style.logoAndName}>
            <img className={Style.logo} src={mongoDBLogo} alt="mongoDBLogo" width={50} height={50} />
            <span>mongoDB</span>
        </div>
    </React.Fragment>,
    <React.Fragment >    
    <div className={Style.logoAndName}>
        <img className={Style.logo} src={lighthouseLogo} alt="lighthouseLogo" width={50} height={50} />
        <span>SEO: lighthouse, schema.org</span>
    </div>
    </React.Fragment>
]