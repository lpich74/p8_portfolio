import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { logos } from "../mylogos/Mylogos"

export let colors = ["rgb(0,66,1705)", "rgb(254,199,0)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Lucas",
    lastName: "Pichollet",
    initials: "LP",
    position: "a Front End Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[1],
    baseColor2: "rgb(210,21,196)",
    miniBio: [
        {
            emoji: '👨‍🍳',
            text: 'Fueled by French and Italian cuisine'
        },
        {
            emoji: '🎸',
            text: 'Guitar player'
        },
        {
            emoji: '🌎',
            text: 'Based in France'
        },
        {
            emoji: "💼",
            text: "Front End Developer since 2023"
        },
        {
            emoji: "📧",
            text: <a href="mailto:lucaspichollet@hotmail.com">lucaspichollet@hotmail.com</a>
        }
    ],
    socials: [
        {
            link: "https://github.com/lpich74",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/lucas-pichollet-721332222/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "👋 Hello, I'm Lucas, a passionate web developer with 2 years of experience in the coding world. Always on the lookout for new challenges to deepen my skills, I strive to create effective and elegant technological solutions that meet user needs. I'm open to exciting opportunities in the web development field where I can bring my dedication, creativity, and technical expertise.",
    skills:
        {
            frontEnd: [logos[0], logos[1]],
            backEnd: [logos[5], logos[6]],
            other: [logos[2], logos[4], logos[7], logos[3]]
        }
    ,
    hobbies: [
        {
            label: 'travels',
            emoji: '🚅'
        },
        {
            label: 'foreign languages',
            emoji: '🌍'
        },
        {
            label: 'music',
            emoji: '🎸'
        },
        {
            label: 'sports',
            emoji: '🏊'
        },
        {
            label: 'literature',
            emoji: '📖'
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://lpich74.github.io/p6_kasa/",
            source: "https://github.com/lpich74/p6_kasa.git",
            image: mock1,
            description: {   
                short: "This project consisted in developing the front end of a web application for a real estate agency using React. A designer had previously taken care of the mockup with Figma.",
                issues: "At first, I had troubles understanding how the props work and also the different hooks. Also, I had to make sure I didn't mix up JS with JSX coding. Practising and seeking explanations through docs and experienced developers were the best ways to deal with these issues.",
                developedSkills: [
                    "• Setting up navigation between the pages of the application using React Router",
                    "• Initializing an application with Create React App",
                    "• Developing elements of a website's interface using React components",
                    "• Implementing CSS animations"
                ]
            }
        },
        {
            title: "Project 2",
            live : null,
            source: "https://github.com/lpich74/p3s_bluel.git",
            image: mock2,
            description: {   
                short: "The goal of this project was to create a dynamic webpage with JavaScript. I had to use the existing back end code to call the different routes of an API.",
                issues: "Understanding how JavaScript and APIs worked was a real challenge since it was my first expericence with this language. A few hours and exercises using JS were necessary to finally complete this project.",
                developedSkills: [
                    "• Retrieving user data in JavaScript through forms",
                    "• Manipulating DOM elements with JavaScript",
                    "• Managing user events with JavaScript"
                ]
            }
        },
        {
            title: "Project 3",
            live : "https://lpich74.github.io/p2booki/",
            source: "https://github.com/lpich74/p2booki",
            image: mock3,
            description: {   
                short: "This project was my first task ever in my Web Developer course. I had to create the static home page for a travel agency using HTML and CSS. This page also had to be responsive.",
                issues: "As my very first project, I encountered some issues, particularly with CSS. For instance, I faced problems with margins and paddings as some elements overlapped each other. After learning when to correctly use pixels and percentages, as well as mastering positioning properties, my work improved significantly.",
                developedSkills: [
                    "• Implementing a responsive interface with HTML and CSS",
                    "• Version controlling a project with Git and GitHub",
                    "• Integrating content according to a mockup with HTML and CSS",
                    "• Setting up a front end development environment"
                ]
            }
        },
        {
            title: "Project 4",
            live : null,
            source: "https://github.com/lpich74/p7_vieux_grimoire",
            image: mock4,
            description: {   
                short: "This project marked my introduction to back end development. While the front end code was pre-existing, my task was to develop a RESTful API using Node/Express.js and MongoDB. The primary goal was to enable authenticated users to perform CRUD (create, read, update, delete) operations on book data.",
                issues: "At the outset, back end development appeared challenging, especially for someone primarily focused on front end work. To my pleasant surprise, I discovered it was not as daunting as it seemed, and I even found it enjoyable. I quickly grasped the concept of building middlewares, although my main challenge was ensuring their correct sequencing for flawless functionality.",
                developedSkills: [
                    "• Implementing a data model in compliance with regulations",
                    "• Securing data storage on MongoDB",
                    "• Implementing CRUD operations securely"
                ]
            }
        },
        {
            title: "Project 5",
            live : "https://lpich74.github.io/p5n_carducci/",
            source: "https://github.com/lpich74/p5n_carducci",
            image: mock5,
            description: {   
                short: "This project was slightly different, combining two distinct tasks into one. Initially, I tackled debugging an existing website. Then, I employed SEO tools like Google Lighthouse and Schema.org to optimize its performance.",
                issues: "Not particularly difficult, this project actually was very educational. Optimizing a website for improved search engine rankings was a valuable learning experience. My main hurdle was optimizing images using 'srcset', as it seemed they were never quite optimized enough. However, I ultimately achieved a full-green report on Google Lighthouse for both the desktop and mobile versions.",
                developedSkills: [
                    "• Optimizing the performance of a website",
                    "• Debugging a website using Chrome DevTools",
                    "• Writing a test plan for a website"
                ]
            }
        },
    ]
}