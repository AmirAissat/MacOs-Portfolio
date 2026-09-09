const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "public/icons/wifi.svg",
    },
    {
        id: 2,
        img: "public/icons/search.svg",
    },
    {
        id: 3,
        img: "public/icons/user.svg",
    },
    {
        id: 4,
        img: "public/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Hobbies", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: true,
    },
];

const hobbies = [
    {
        id: 1,
        title: "Soccer",
        description: [
            "I've played soccer since I was a kid, and it's still one of my favorite things to do. Doesn't matter if it's a real game or just messing around with friends, I'm always down.",
            "I played all four years on my high school team, and it taught me a lot about working with a group toward one goal. That mindset carries over pretty well into team projects now too, you're relying on other people and they're relying on you.",
            "I've always liked the challenge side of it too, trying to get better technically or seeing how far I can push myself physically. That's pretty much how I am about most things, once I care about something I want to get as good at it as I actually can.",
            "It's also just a good way to clear my head. If I've been stuck on the same bug for hours, going out to play for a bit usually helps way more than staring at the screen for another hour would.",
        ],
        media: [
            { id: 1, type: "img", src: "public/images/soccer-1.jpg" },
            { id: 2, type: "img", src: "public/images/soccer-2.jpg" },
            { id: 3, type: "img", src: "public/images/soccer-3.jpg" },
        ],
    },
    {
        id: 2,
        title: "Drawing",
        description: [
            "I like sketching in my free time, usually anime style stuff. Just pencil, paper, and however long it takes to get the shading right.",
            "What I like most about it is starting with a completely blank piece of paper. At that point it could turn into literally anything, and what it actually becomes usually just depends on whatever I'm feeling or focused on that day. It's a way of putting whatever's on my mind down onto paper without really planning it out first.",
            "I've been drawing on and off since middle school, but I got a lot more into it the past couple years. A lot of it started from just watching tutorials and copying panels from manga I liked, then slowly figuring out my own style from there.",
            "I mostly draw dynamic poses with heavy shading. It's kind of like coding in a way, you start with basically nothing on the page and slowly build it into something.",
        ],
        media: [
            { id: 1, type: "img", src: "public/images/drawing1.jpg" },
            { id: 2, type: "img", src: "public/images/drawing2.jpg" },
            { id: 3, type: "img", src: "public/images/drawing3.jpg" },
            { id: 4, type: "img", src: "public/images/drawing4.jpg" },
        ],
    },
    {
        id: 3,
        title: "Piano/Guitar",
        description: [
            "I actually started with piano before guitar. I taught myself by learning songs I actually wanted to play, stuff like Kingdom Hearts and Undertale soundtracks, some Naruto openings, and Chopin pieces I really wanted to be able to get through.",
            "Learning piano made me really curious about music in general, which is what got me into guitar next. That's pretty much how I am with most things I get into, once I care about something I want to learn as much of it as I can and see how far I can actually take it.",
            "It's all self-taught, mostly YouTube tutorials and a lot of trial and error, until I can actually get through a song without messing it up.",
        ],
        media: [{ id: 1, type: "img", src: "public/images/piano-guitar-1.jpg" }],
    },
    {
        id: 4,
        title: "Game Development",
        description: [
            "This is where the engineering side of me meets the creative side. DeepCatch started as a random weekend project messing around with Minecraft modding, and it turned into one of my favorite ways to learn new stuff outside of class.",
            "A big part of it is modeling. I use Blockbench to make everything from fishing rods and knives to a fully animated boss, then set up the JSON files so all of it actually works in the game.",
            "I've also made models for other mods and a couple of commissions, like the boss and the scythe you can see below. Same process every time, block out the shape in Blockbench, rig it, then texture and animate it.",
            "The commission work has been pretty different since I'm building to someone else's idea instead of my own. It forces me to problem solve in ways I probably wouldn't think of on my own, since I have to figure out how to actually make what someone else is picturing in their head.",
            "It's a good break from regular coding but still scratches the same problem solving itch, just with a lot more room to be creative with how something looks and moves.",
        ],
        media: [
            { id: 1, type: "img", src: "public/images/deepcatch.png" },
            { id: 2, type: "img", src: "public/images/gamedev-boss-1.png" },
            { id: 3, type: "img", src: "public/images/gamedev-boss-2.png" },
            { id: 4, type: "img", src: "public/images/gamedev-weapon-1.png" },
            { id: 5, type: "img", src: "public/images/gamedev-weapon-2.png" },
            { id: 6, type: "img", src: "public/images/gamedev-weapon-3.png" },
            { id: 7, type: "img", src: "public/images/gamedev-weapon-4.png" },
        ],
    },
];

const techStack = [
    {
        category: "Languages",
        items: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
        category: "Frameworks & Libraries",
        items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Puter.js", "Next.js", "Three.js", "Angular.js"],
    },
    {
        category: "Databases",
        items: ["MySQL", "Supabase"],
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Docker", "GitHub", "Microsoft Office Suite", "Visual Studio", "IntelliJ", "PyCharm", "WebStorm"],
    },

];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "public/icons/github.svg",
        bg: "#333333",
        link: "https://github.com/AmirAissat",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "public/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/amiraissat/",
    },
];

const PORTRAIT_IMAGES = [
    { id: 1, img: "public/images/me.jpeg" },
    { id: 2, img: "public/images/casual-me.jpeg" },
    { id: 3, img: "public/images/conference-me.png" },
];

const SOCCER_IMAGES = [
    { id: 1, img: "public/images/soccer-1.jpg" },
    { id: 2, img: "public/images/soccer-2.jpg" },
    { id: 3, img: "public/images/soccer-3.jpg" },
];

const DRAWING_IMAGES = [
    { id: 1, img: "public/images/drawing1.jpg" },
    { id: 2, img: "public/images/drawing2.jpg" },
    { id: 3, img: "public/images/drawing3.jpg" },
    { id: 4, img: "public/images/drawing4.jpg" },
];

const FAVORITE_IMAGES = [
    { id: 1, img: "public/images/me.jpeg" },
    { id: 2, img: "public/images/soccer-1.jpg" },
    { id: 3, img: "public/images/drawing4.jpg" },
];

const photosLinks = [
    {
        id: 1,
        icon: "public/icons/gicon1.svg",
        title: "Library",
        images: [...PORTRAIT_IMAGES, ...SOCCER_IMAGES, ...DRAWING_IMAGES],
    },
    {
        id: 2,
        icon: "public/icons/gicon2.svg",
        title: "Memories",
        images: DRAWING_IMAGES,
    },
    {
        id: 3,
        icon: "public/icons/file.svg",
        title: "Places",
        images: SOCCER_IMAGES,
    },
    {
        id: 4,
        icon: "public/icons/gicon4.svg",
        title: "People",
        images: PORTRAIT_IMAGES,
    },
    {
        id: 5,
        icon: "public/icons/gicon5.svg",
        title: "Favorites",
        images: FAVORITE_IMAGES,
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    hobbies,
    techStack,
    socials,
    photosLinks,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Projects",
    icon: "public/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "E-Commerce Website",
            icon: "public/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "E-Commerce Website.txt",
                    icon: "public/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A full-stack e-commerce web app I led a team of 5 developers to design and build using Flask and SQLite.",
                        "As team leader, I coordinated tasks through GitHub, managing version control and keeping feature integration smooth across the team.",
                        "The app covers the full shopping experience—user authentication, product management, a shopping cart, and order processing—all backed by a database I helped design from scratch.",
                        "It's containerized with Docker for consistent deployment and testing, and building it strengthened both my leadership and full-stack development skills.",
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo",
                    icon: "public/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/codyhahn/swe-3313-fall-2025-team-02",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "ecommerce.png",
                    icon: "public/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "public/images/ecommerce.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "AI-Powered Applicant Tracking System",
            icon: "public/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AI Applicant Tracking System.txt",
                    icon: "public/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A full-stack web app that automates resume screening by using AI to analyze and score candidate resumes against job descriptions.",
                        "I built a responsive React frontend with dynamic components for creating job postings, drag-and-drop resume uploads, and visualizing AI-generated feedback and match scores.",
                        "Puter.js powers the backend, handling user authentication, secure file storage, and serverless API endpoints for PDF processing and AI analysis.",
                        "The whole thing is deployed to production end-to-end, from frontend to backend, as a project I own solo.",
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo",
                    icon: "public/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/AmirAissat/ai-resume-analyzer",
                    position: "top-20 left-20",
                },
                {
                    id: 3,
                    name: "ai-ats.png",
                    icon: "public/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "public/images/project-2.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "DeepCatch - Minecraft Mod",
            icon: "public/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "DeepCatch.txt",
                    icon: "public/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "DeepCatch is a fishing-overhaul mod for Minecraft 1.21.1 that I designed and shipped solo, now sitting at 40+ downloads on CurseForge.",
                        "I used OOP design to build extensible item hierarchies—11 biome-gated fish, 4 tiered rods, 5 knives, and a scale-infusion system that modifies armor and tool stats.",
                        "It also includes custom blocks with interactive UIs and a boss entity I modeled in Blockbench, plus the full JSON pipeline for models, textures, recipes, and localization.",
                    ],
                },
                {
                    id: 2,
                    name: "CurseForge Page",
                    icon: "public/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://www.curseforge.com/minecraft/mc-mods/deepcatch",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "deepcatch.png",
                    icon: "public/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "public/images/deepcatch.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "public/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "public/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "public/images/me.jpeg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "public/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "public/images/casual-me.jpeg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "public/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "public/images/conference-me.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "public/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "public/images/me.jpeg",
            description: [
                "Hey! I'm Amir 👋, a Computer Science student at Kennesaw State University concentrating in AI, and I love turning ideas into things people can actually click on.",
                "I've built everything from a full-stack e-commerce platform I led as team lead, to an AI-powered resume analyzer, to a solo Minecraft mod with 40+ downloads on CurseForge.",
                "I'm comfortable across the stack—React, Next.js, Python, Java—and I like the parts of dev work where design and logic meet: clean UI, solid architecture, and code that doesn't need a search party to debug.",
                "Outside of school and code, you'll find me sketching, gaming, or picking apart some new tool just so I can figure out how to build something with it.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "public/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "public/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "archive",
    name: "Archive",
    icon: "public/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Easel.txt",
            icon: "public/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 left-10",
            image: "public/images/easel.png",
            description: [
                "Easel is a project I work on every now and then, built for artists and people who commission art. It's part OC tracker, part OC creator, all in one place.",
                "The idea is you build your character out in the tool, then export it as a clean OC sheet you can hand off to an artist. It basically automates going from a rough character idea to something actually usable when commissioning someone.",
                "It also makes things easier on the artist's side, since they get a clear sheet with all the details laid out instead of having to dig through scattered notes or ask a bunch of follow up questions.",
            ],
        },
        {
            id: 2,
            name: "my cat.txt",
            icon: "public/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-40 left-80",
            image: "public/images/cat-1.jpg",
            description: [
                "just my cat lol",
            ],
        },
        {
            id: 3,
            name: "cat-2.jpg",
            icon: "public/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-60 left-40",
            imageUrl: "public/images/cat-2.jpg",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };