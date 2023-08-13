import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
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
            text: 'Based in the France'
        },
        {
            emoji: "💼",
            text: "Front End Developer since 2023"
        },
        {
            emoji: "📧",
            text: "lucaspichollet@hotmail.com"
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
    bio: "Hi, I'm Lucas, a budding junior web developer who has embarked on an exciting journey in the world of coding. With a fresh perspective and a determination to learn, I have chosen to forge a path in web development, fueled by curiosity and creativity. Armed with a passion for technology and a hunger for growth, I am ready to dive into the dynamic realm of web development and make my mark.",
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
                short: "This project consisted in developing the front end of a web application for a real estate agency by using React. A designer had previously taken care of the mockup with Figma.",
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
    ]
}