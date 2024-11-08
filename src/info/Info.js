import self from "../img/try.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Aditya",
    lastName: "Bhardwaj",
    initials: "🧑🏾‍💻", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌐',
            text: 'Interviewing for GDG'
        },
        {
            emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            text: 'based in India'
        },
        {
            emoji: "🎓",
            text: "Student at University School of Automation and Robotics"
        },
        {
            emoji: "📧",
            text: " Aditya@Bhardwaj.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Aditya. I'm a student of engineering at USAR. I am doing my engineering in AIML, I enjoy watching and Playing Football⚽ , and I also believe artificial intelligence will inevitably rule you all one day. You should hire me to get saved!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'nodejs','Tailwind',],
            exposedTo: ['figma', 'python', 'adobe illustrator','blender','react-native']
        }
    ,
    hobbies: [
        {
            label: 'Football',
            emoji: '⚽'
        },
        {
            label: 'Video Games',
            emoji: '🕹️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'History',
            emoji: '📜'
        }

    ],


    portfolio: [ 
        {
            title: "My Portfolio",
            source: "https://github.com/Aditya-hubs", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Prexam",
            source: "https://github.com/Aditya-hubs",
            image: mock2
        },
        {
            title: "Hear.oi",
            source: "https://github.com/Aditya-hubs?=repositories",
            image: mock3
        },
        {
            title: "React-blog",
            source: "https://github.com/Aditya-hubs",
            image: mock4
        },
    ]
}