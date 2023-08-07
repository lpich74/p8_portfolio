import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { logos } from "../logos/Logos"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,66,1705)", "rgb(254,199,0)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Lucas",
    lastName: "Pichollet",
    initials: "LP", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front-end Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    baseColor2: "rgb(210,21,196)",
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
            text: "Junior Front-end Developer"
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
            proficientWith: [logos[0], logos[1], logos[2], logos[3], logos[4], logos[5], logos[6], logos[7]],
            exposedTo: [logos[8], logos[9], logos[10]]
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}