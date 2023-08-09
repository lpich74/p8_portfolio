import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
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
    position: "a Front End Developer",
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
            proficientWith: [...logos.slice(0, 8)],
            exposedTo: [...logos.slice(8, 11)]
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
            live: "https://lpich74.github.io/p6_kasa/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/lpich74/p6_kasa.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            description: [
                {   
                    short: "This project consisted in developing the front end of a web application for a real estate agency by using React. A designer had previously taken care of the mockup with Figma.",
                    issues: "At first, I had troubles understanding how the props work and also the different hooks. Also, I had to make sure I didn't mix up JS with JSX coding. Practising and seeking explanations through docs and experienced developers were the best ways to deal with these issues.",
                    developedSkills: [
                        "• Setting up navigation between the pages of the application using React Router",
                        "• Initializing an application with Create React App",
                        "• Developing elements of a website's interface using React components",
                        "• Implementing CSS animations"
                    ]
                }
            ]
        },
        {
            title: "Project 2",
            live: "https://lpich74.github.io/p3s_bluel/",
            source: "https://github.com/lpich74/p3s_bluel.git",
            image: mock2,
            description: [
                {   
                    short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla libero non ex blandit malesuada. Integer interdum massa quis justo venenatis, a pulvinar tellus bibendum. Sed nec tortor at metus rhoncus ultrices. Vivamus a fermentum est. Fusce posuere, eros ut facilisis malesuada, risus ligula faucibus elit, a dignissim nulla velit eu mauris. Fusce tristique est vitae felis eleifend, id ullamcorper libero rhoncus. Aliquam erat volutpat. In luctus ipsum nec risus imperdiet sodales. Nunc in ligula eget risus aliquam iaculis. Fusce id purus id libero varius venenatis. Etiam lacinia, libero eget elementum tincidunt, odio lectus dignissim lorem, quis posuere ligula massa et augue. Praesent laoreet orci eu felis vestibulum, quis accumsan ligula luctus. Curabitur ut tellus a nunc lacinia mattis et vel ligula. Pellentesque pharetra consequat enim, nec volutpat velit posuere eget. Nullam varius dui nec dui sollicitudin euismod. Nullam vestibulum, quam eu aliquet dignissim, elit arcu laoreet risus, eu cursus mi ligula ut leo. Suspendisse potenti. Fusce nec ex fringilla, lacinia metus vel, viverra nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget condimentum purus. Sed tincidunt, odio nec ullamcorper rhoncus, metus turpis congue libero, at vestibulum elit mi nec elit. Nam laoreet ligula id erat aliquet cursus. Vivamus tincidunt nisi vel nisi volutpat, vel aliquam quam vehicula. Maecenas pharetra arcu id libero congue, id fringilla felis tristique. Praesent eu ex a est fermentum pharetra. Suspendisse potenti. Suspendisse id mi nec erat ultricies tincidunt. Nullam ac malesuada dolor, id congue ex. Cras eu mi nec arcu fringilla varius. Vestibulum sagittis ante in tincidunt lacinia.",
                    issues: "Challenging",
                    developedSkills: [
                        "• Retrieve user data in JavaScript through forms",
                        "• Manipulate DOM elements with JavaScript",
                        "• Handle user events with JavaScript",
                    ]
                }
            ]
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3,
            description: [
                {   
                    short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla libero non ex blandit malesuada. Integer interdum massa quis justo venenatis, a pulvinar tellus bibendum. Sed nec tortor at metus rhoncus ultrices. Vivamus a fermentum est. Fusce posuere, eros ut facilisis malesuada, risus ligula faucibus elit, a dignissim nulla velit eu mauris. Fusce tristique est vitae felis eleifend, id ullamcorper libero rhoncus. Aliquam erat volutpat. In luctus ipsum nec risus imperdiet sodales. Nunc in ligula eget risus aliquam iaculis. Fusce id purus id libero varius venenatis. Etiam lacinia, libero eget elementum tincidunt, odio lectus dignissim lorem, quis posuere ligula massa et augue. Praesent laoreet orci eu felis vestibulum, quis accumsan ligula luctus. Curabitur ut tellus a nunc lacinia mattis et vel ligula. Pellentesque pharetra consequat enim, nec volutpat velit posuere eget. Nullam varius dui nec dui sollicitudin euismod. Nullam vestibulum, quam eu aliquet dignissim, elit arcu laoreet risus, eu cursus mi ligula ut leo. Suspendisse potenti. Fusce nec ex fringilla, lacinia metus vel, viverra nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce eget condimentum purus. Sed tincidunt, odio nec ullamcorper rhoncus, metus turpis congue libero, at vestibulum elit mi nec elit. Nam laoreet ligula id erat aliquet cursus. Vivamus tincidunt nisi vel nisi volutpat, vel aliquam quam vehicula. Maecenas pharetra arcu id libero congue, id fringilla felis tristique. Praesent eu ex a est fermentum pharetra. Suspendisse potenti. Suspendisse id mi nec erat ultricies tincidunt. Nullam ac malesuada dolor, id congue ex. Cras eu mi nec arcu fringilla varius. Vestibulum sagittis ante in tincidunt lacinia.",
                    issues: "faFF",
                    developedSkills: [
                        "• Set up navigation between the pages of the application using React Router",
                        "• Initialize an application with Create React App",
                        "• Develop elements of a website's interface using React components",
                        "• Implement CSS animations"
                    ]
                }
            ]
        },
    ]
}