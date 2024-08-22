import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: "Grocery Mart Website",
        description: "The Grocery Mart Website project was developed as part of the 'Front End Web Development II' course at Lambton College-Mississauga. The project aims to provide users with a seamless online grocery shopping experience. It includes features like an immersive main page with carousel effects showcasing store promotions, a product details page, shopping cart functionality, and an order history page with automatic deletion of old orders. The website is fully responsive, ensuring a consistent experience across devices.",
        tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Photoshop", "Visual Studio", "GitHub", "Google Chrome"],
        role: "Frontend Developer",
        team_members: ["Jaivik Patel", "Meet Patel", "Shiv Mistry", "Mit Kotak"],
        instructor: "Alexandre Gorelenko",
        code: "https://github.com/shivmistry223/groceriesMart",
        demo: "https://shivmistry223.github.io/groceriesMart/index.html",
        image: "grocery-mart"
    },
    {
        id: 2,
        name: "To-Do List",
        description: "This project involves developing a user-friendly website that allows users to manage their tasks efficiently. It includes features such as creating, reading, updating, and deleting (CRUD) tasks, marking tasks as completed, organizing tasks into categories, and maintaining the list even after the user revisits the site. The project is implemented using Java for backend development, MySQL for database management, and HTML, CSS, JavaScript for the frontend. Additional frameworks like Spring Boot, JSP, and Bootstrap are used to enhance the functionality and design.",
        tools: ["Java", "MySQL", "Spring Boot", "JSP", "HTML", "CSS", "JavaScript", "Bootstrap"],
        role: "Full-Stack Developer",
        code: "",
        demo: "",
        image: "todo-list"
    },
    {
        id: 3,
        name: "Create My Sign App",
        description: "The Create My Sign application is designed to allow users to create and manage digital signs and signatures through a user-friendly interface. It features customizable text input, a color picker, a drawing canvas, and the ability to save and download personalized signs. Users can create accounts, log in, and store their signs in a MongoDB database. The application is built using Python with Tkinter for the GUI and MongoDB for database management.",
        tools: ["Python", "Tkinter", "PIL", "pymongo", "MongoDB"],
        role: "Lead Developer",
        "team_members": ["Jaivik Patel", "Meet Patel", "Piyushkumar Vaghasiya", "Varshil Suhagiya", "Anikeat Thakur"],
        instructor: "Mr. Darcy Gratton",
        code: "https://github.com/meet000/CreateMySignApp",
        demo: "",
        image: "create-my-sign"
    },
    {
        id: 4,
        name: "Transportation Management System",
        description: "The Transportation Management System (TMS) is designed to streamline and manage various aspects of transportation operations. It addresses the challenges of paper-based systems by organizing data into a centralized database. This includes client registrations, driver details, vehicle information, booking records, shipment details, tracking information, route details, and maintenance records. The system aims to improve efficiency, reduce errors, and facilitate easy access to important data for transportation companies.",
        tools: ["MySQL","Oracle", "PHP", "JavaScript", "HTML/CSS"],
        role: "Back-end Developer",
        team_members: ["Jaivik Patel", "Meet Patel"],
        instructor: "Mr. Sagara Samarawickrama",
        code: "https://github.com/meet000/TransportationManagementSystem",
        demo: "",
        image: "transportation-management-system"
    }
];
