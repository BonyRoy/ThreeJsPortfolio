import jio from '../assets/images/jio.png'
import np from '../assets/images/np.png'
import python from '../assets/icons/python.svg'
import sql from '../assets/icons/sql.svg'
import {
    car,
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "NP Infoserve",
        icon: np,
        iconBg: "#accbe1",
        date: "January 2022",
        points: [
            'Completed a dynamic web development internship at NP Infoserve Private Limited. During this enriching experience, I actively engaged in utilizing my skills in JavaScript and React to contribute to various projects and enhance my proficiency in the field.'
        ],
    },
    {
        title: "Jr Assistant Manager",
        company_name: "Jio",
        icon: jio,
        iconBg: "#fbc3bc",
        date: "December 2023",
        points: [
            "As an Assistant Manager at Jio, I initially started my journey with the company in the capacity of a Graduate Engineer Trainee through the Jio Ignite program.",
            
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/BonyRoy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/siddhant-roy-6b2448246/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Credit Score Prediction',
        description: 'A website that allows users to check credit scores and financial institutes to analyse risk associated with credits provided.',
        link: 'https://github.com/wolbek/Credit-Score-Prediction-Website',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'My Portfolio',
        description: 'I built a portfolio using .js, React.js, and Three.js for a dynamic and visually appealing representation of my work.',
        link: 'https://github.com/BonyRoy/ThreeJsPortfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Easy Guitar',
        description: 'A website developed where you can learn to play guitar and also to learn some interesting bollywood guitar tabs and chords. (ReactJS, CSS and BootStrap)',
        link: 'https://github.com/BonyRoy/MyGuitarWebsite',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'SR Turbo',
        description: 'Indian Cars Comparison --> Desktop Application to compare Indian cars. (Python, TKinter, MYSQL)',
        link: 'https://github.com/BonyRoy/SR-Turbo',
    }
];