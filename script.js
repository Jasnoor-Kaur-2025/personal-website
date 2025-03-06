let typingInterval; // Declare interval outside function

function changeText(lang) {
    const messages = {
        'Python': 'print("Hello, I am Jasnoor Kaur")',
        'Java': 'System.out.println("Hello, I am Jasnoor Kaur");',
        'C': 'printf("Hello, I am Jasnoor Kaur");',
        'C++': 'std::cout << "Hello, I am Jasnoor Kaur" << std::endl;',
        'JavaScript': 'console.log("Hello, I am Jasnoor Kaur");',
        'php': 'echo "Hello, I am Jasnoor Kaur";'
    };

    let text = messages[lang];
    let codeTextDiv = document.querySelector(".code-text");
    let mainTextDiv = document.querySelector(".main-text");

    if (!codeTextDiv || !mainTextDiv) return; // Prevent errors

    clearInterval(typingInterval); // Stop any existing typing effect
    codeTextDiv.textContent = ""; // Clear previous text
    mainTextDiv.classList.add("hidden"); // Hide terminal before typing starts

    let i = 0;
    typingInterval = setInterval(() => {
        if (i < text.length) {
            codeTextDiv.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval); // Stop interval once typing is done
            mainTextDiv.classList.remove("hidden"); // Show terminal after typing
        }
    }, 50);
}



// Attach event listeners to language selection
document.querySelectorAll('.lang').forEach(lang => {
    lang.addEventListener('click', function () {
        changeText(this.querySelector("p").textContent.trim());
    });
});

document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function () {
        showSkillDescription(this.dataset.skill);
    });

    skill.addEventListener('mouseleave', function () {
        hideSkillDescription();
    });

    skill.addEventListener('click', function () {
        console.log("clicked");
        showSkillDescription(this.dataset.skill);
    });
});

function showSkillDescription(skillName) {
    const skillData = {
        'Python': {
            description: 'The Swiss Army knife of programming—great for automation, AI, web development, and everything in between.',
            image: 'python.png',
            since: 'Since 2019'
        },
        'C': {
            description: 'The OG of programming languages—fast, powerful, and the reason your OS even works.',
            image: 'c.png',
            since: 'Since 2024'
        },
        'C++': {
            description: 'C’s overachieving sibling—brings speed, object-oriented magic, and game development potential.',
            image: 'cpp.png',
            since: 'Since 2024'
        },
        'JavaScript': {
            description: 'The heartbeat of the web—makes pages interactive, dynamic, and sometimes a little chaotic.',
            image: 'js.png',
            since: 'Since 2024'
        },
        'HTML': {
            description: 'The skeleton of the internet—if a website was a house, HTML would be the bricks and walls.',
            image: 'html.png',
            since: 'Since 2023'
        },
        'CSS': {
            description: 'Because plain HTML is boring—CSS brings the style, animations, and that pixel-perfect magic.',
            image: 'css.png',
            since: 'Since 2023'
        },
        'MySQL': {
            description: 'The brain of your applications—because data needs to live somewhere safe and organized.',
            image: 'mysql.png',
            since: 'Since 2022'
        },
        'React': {
            description: 'The wizard of front-end—builds slick, dynamic UIs with reusable components.',
            image: 'react.png',
            since: 'Since 2025'
        },
        'VSCode': {
            description: 'The ultimate coding sidekick—lightweight, customizable, and packed with powerful features.',
            image: 'vscode.png',
            since: 'Since 2020'
        },
        'GitHub': {
            description: 'The social network for code—host projects, collaborate with others, and contribute to open source.',
            image: 'git.png',
            since: 'Since 2025'
        }
    };



    const skillCard = document.querySelector('.skillCard');
    skillCard.innerHTML = `
        <div class="title">${skillName}</div>
        <img src="${skillData[skillName].image}" alt="${skillName}" class="skillImage">
        <div class="description">${skillData[skillName].description}</div>
        <div class="since">${skillData[skillName].since}</div>
    `;

    skillCard.classList.add('active');
}

function hideSkillDescription() {
    const skillCard = document.querySelector('.skillCard');
    skillCard.classList.remove('active');
}

const projects = [
    {
        title: "Swift Tunes",
        desc: "A sleek, minimalistic music player dedicated to Taylor Swift’s songs. Features smooth transitions, playlist support, and an elegant interface for an immersive listening experience.",
        langs: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/Jasnoor-Kaur-2025/swift-tunes",
        status: "Completed",
        image: "swifttunes.png"
    },
    {
        title: "Currency Converter",
        desc: "A fast, real-time currency converter with a simple UI for quick multi-currency conversions. Fetches live exchange rates, ensuring accurate calculations for travelers finance enthusiasts.",
        langs: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/Jasnoor-Kaur-2025/currency-converter",
        status: "Completed",
        image: "currency.png"
    },
    {
        title: "Quiz App",
        desc: "An interactive quiz app with real-time scoring and instant feedback. Features multiple-choice coding questions to help users test and improve their programming knowledge.",
        langs: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/Jasnoor-Kaur-2025/quiz-app",
        status: "Completed",
        image: "quiz.png"
    },
    {
        title: "Day Night Toggle",
        desc: "A smooth, responsive toggle switch that transitions between light and dark themes. Built with React for seamless state management and a visually engaging UI.",
        langs: ["React", "CSS", "JavaScript"],
        link: "https://github.com/Jasnoor-Kaur-2025/day-night-toggle",
        status: "Completed",
        image: "toggle.png"
    },
    {
        title: "Text Editor",
        desc: "A browser-based text editor with customizable styling, intuitive controls, and real-time text formatting. Ideal for quick notes, coding snippets, or markdown writing.",
        langs: ["React", "CSS", "JavaScript"],
        link: "https://github.com/Jasnoor-Kaur-2025/text-editor",
        status: "Completed",
        image: "texted.png"
    },
    {
        title: "Match Master: A Card Game",
        desc: "An interactive memory card-matching game with smooth animations and a scoring system. Built with React for an engaging and dynamic gameplay experience.",
        langs: ["React", "CSS", "JavaScript"],
        link: "https://github.com/Jasnoor-Kaur-2025/card-game",
        status: "Completed",
        image: "cards.png"
    },
    {
        title: "My Tasks: A To-Do Application",
        desc: "A simple yet powerful task manager. Users can add, delete, mark tasks as completed, and even email them to themselves for reminders.",
        langs: ["React", "CSS", "JavaScript"],
        link: "https://github.com/Jasnoor-Kaur-2025/To-Do-Application",
        status: "Completed",
        image: "todo.png"
    },
    {
        title: "Sample E-commerce Website: Bizarre Bazaar",
        desc: "A basic e-commerce prototype featuring product listings, order placement, and checkout functionality. Integrates EmailJS for order confirmations and customer inquiries.",
        langs: ["JavaScript", "HTML", "CSS", "EmailJS"],
        link: "https://github.com/Jasnoor-Kaur-2025/E-Commerce-Application-Basic",
        status: "Completed",
        image: "ecommerce.png"
    },
    {
        title: "Algorithm Simulator",
        desc: "A visual learning tool for sorting algorithms like Bubble Sort, Merge Sort, and Insertion Sort. Provides step-by-step animations to help users grasp algorithm behavior.",
        langs: ["React", "CSS", "JavaScript"],
        link: "#",
        status: "Under Construction",
        image: "algoSim.png"
    },
    {
        title: "Shadows of Hoptown: A Mystery Game",
        desc: "An immersive murder mystery puzzle game where players gather clues, interrogate suspects, and solve a crime. Features dynamic decision-making and an engaging storyline.",
        langs: ["React", "CSS", "JavaScript"],
        link: "#",
        status: "Under Construction",
        image: "mystery.png"
    }
];


const carousel = document.querySelector(".carousel");
function renderProjects() {
    carousel.innerHTML = "";
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project");
        projectCard.innerHTML = `
                    <div class = "ProjectCont">
                    <div class = "projectTop">
                    <img src="${project.image}" alt="${project.title}">
                    <div class = "ProjectTopCont">
                    <h3>${project.title}</h3>
                    <p>${project.langs}</p>
                    </div>
                    </div>
                    <div class = "projectBottom">
                    <h5>${project.desc}</h5>
                    <div class = "BottomLeft">
                    <h4>Status: ${project.status}</h4>
                    <a href = "${project.link}">View Project</a>
                    </div>
                    </div>

                `;
        carousel.appendChild(projectCard);
    });
}

renderProjects();

const slidesContainer = document.querySelector(".carousel");
const project = document.querySelector(".project");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = project.clientWidth;
  carousel.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = project.clientWidth;
  carousel.scrollLeft -= slideWidth;
});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("D0DJlRxj_EMacbbLd"); // Your Public Key
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_tzff5qa", "template_g0wd8ye", this)
        .then(() => {
            document.getElementById("form-status").textContent = "Message sent successfully!";
            document.getElementById("contact-form").reset(); // Clear form after successful send
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            document.getElementById("form-status").textContent = "Failed to send message. Try again.";
        });
});
