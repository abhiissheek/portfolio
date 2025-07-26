import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import exp from './exp.png';
import aws_icon from './icons8-aws-48.png';
import docker_icon from './icons8-docker-logo-50.png';
import github_icon from './icons8-github-24.png';
import kubernetes_icon from './icons8-kubernetes-48.png';
import linux_icon from './icons8-linux-48.png';
import mysql_icon from './icons8-mysql-50.png';
import huggingface_icon from './hf-logo.png';
import typescript_icon from './icons8-typescript-50.png';
import nextjs_icon from './icons8-nextjs-48.png';
import fastapi_icon from './FastAPI.png';
import pytorch_icon from './icons8-pytorch-48.png';
import tensorflow_icon from './icons8-tensorflow-48.png';
import flask_icon from './icons8-flask-50.png';
import nodejs_icon from './icons8-node-js-48.png';
import react_icon from './icons8-react-native-48.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    exp,
    aws_icon,
docker_icon,
github_icon,
kubernetes_icon,
linux_icon,
mysql_icon,
huggingface_icon, 
typescript_icon, 
nextjs_icon, 
fastapi_icon, 
pytorch_icon, 
tensorflow_icon, 
flask_icon, 
nodejs_icon, 
react_icon
};



// export const serviceData = [
//     {  title: 'MediLink', description: 'MediLink AI is an intelligent healthcare platform that uses an AI chatbot (MediBot) for real-time symptom analysis and streamlines doctor appointment booking. It includes an admin dashboard with live clinic locations. This platform enhances healthcare accessibility and efficiency by connecting patients with providers for informed, accessible care.', link: '' },
//     { title: 'SpeechIQ', description: 'SpeechIQ is a real-time Speech Intent Recognition system. It uses Wave2Vec2 for accurate speech-to-text transcription and a lightweight NLP model to classify user intent from spoken audio. It accepts .wav recordings, returning transcripts and predicted intents via a REST API. The system boasts 95% accuracy on the Fluent Speech Command dataset, enhancing human-computer interaction.', link: 'https://v0-next-js-dashboard-beta-ochre.vercel.app/' },
//     {  title: 'SkillSync', description: 'Skill-Sync is an AI-powered platform that analyzes resumes against job descriptions, providing job seekers instant insights into skill alignment. It offers personalized recommendations to optimize resumes, significantly increasing interview chances. The platform empowers users to understand their fit for roles and improve their application materials.', link: '' },
   
// ]

export const serviceData = [
  {
    title: 'MediLink AI',
    description: 'An intelligent healthcare platform leveraging AI for real-time symptom analysis via a smart chatbot (MediBot), enabling seamless doctor appointment booking, and providing an admin dashboard with live clinic locations. MediLink AI enhances healthcare accessibility and efficiency for both patients and providers.',
    link: 'https://medilinkaidashboard-ps2agyub3-keshavgogias-projects.vercel.app/',
    
    techStack: ['react_icon', 'nodejs_icon', 'flask_icon', 'mongodb', 'tensorflow_icon', 'pytorch_icon'], 
    githubLink: 'https://github.com/abhiissheek/MediLink',
  },
  {
    title: 'SpeechIQ',
    description: 'SpeechIQ is a real-time Speech Intent Recognition system. It uses Wave2Vec2 for accurate speech-to-text transcription and a lightweight NLP model to classify user intent from spoken audio. It accepts .wav recordings, returning transcripts and predicted intents via a REST API. The system boasts 95% accuracy on the Fluent Speech Command dataset, enhancing human-computer interaction.',
    link: 'https://v0-next-js-dashboard-beta-ochre.vercel.app/',
    techStack: ['fastapi_icon', 'nextjs_icon', 'typescript_icon', 'huggingface_icon'],
    githubLink: 'https://github.com/abhiissheek/SpeechIQ',
  },
  {
    title: 'SkillSync',
    description: 'A comprehensive platform designed to connect individuals with skill development opportunities and facilitate project collaboration. SkillSync empowers users to showcase their expertise, find mentors, and join project teams, fostering a vibrant community for learning and professional growth.',
    link: 'https://skill-sync-abhis-projects-059091ef.vercel.app/',
    techStack: ['nextjs_icon', 'nodejs_icon', 'mongodb', 'aws_icon', 'docker_icon'], 
    githubLink: 'https://github.com/abhiissheek/skill-sync',
  },
  
  
];



export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages,Frameworks & Libraries', description: 'C, C++, JavaScript, Python, HTML, CSS,Node.js, Express.js, TensorFlow, Pandas, Numpy, Scikit-learn, NLTK' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BE in Computer Engineering, Thapar Institute of Engineering and Technology, Patiala (India) (2022–26)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: 'AIESEC Member Organized and executed international leadership and cultural exchange programs with a global team. Managed outreach, marketing, and partnership initiatives to expand AIESEC’s impact.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git,assets.aws_icon, assets.docker_icon, assets.github_icon, assets.kubernetes_icon, assets.linux_icon, assets.mysql_icon
];