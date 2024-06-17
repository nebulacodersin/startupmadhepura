// Array of startup ideas
const startupIdeas = [
    {
        title: "Cottage Match Industry and Manufacture of Fireworks and agarbattis",
        description: "Develop an idea which can help us to bring wood,flower bud,essential oil, charcoal, bamboo industry in a startup."
    },
    {
        title: "Cement Blocking and Manufacturing of Cement pillar,gamala,nad industry",
        description: "Find a way that can help us to bring this industry online."
    },
    {
        title: "Tailoring and preparation of Readymade garments",
        description: "Design tools and platforms that improve productivity and communication for remote teams."
    },
    {
        title: "Dhabas Business (Not serving Liquor)",
        description: "Invent smart home devices that enhance security, convenience, and energy efficiency."
    },
    {
        title: "Power Atta/Besan/Sattu Chakki Udyog",
        description: "Develop interactive and engaging online learning platforms for students of all ages."
    },
    {
        title: "Sweet making",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Immitation Jewellary (Bangles) Making Business",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Ghani Oil Industry",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Poha Making Unit/Popcorn/Chura Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Electronic, Computer,Mobile Repairing/Assembling Center",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Masala Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Vermicompost Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Wood Works Furniture Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Bamboo Basket Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Polutary Feed Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Paper Cup/Plate Industry",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Brick Making Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Mandap Decoration",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Automobile Workshops",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Household Almirah,Utensils,Trunk Box Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Vermicompost Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Photo and Video Digital studio Business",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Printing Press (Flex, Screen) Business",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Cable TV, Network Computer Internet Cafe",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Herbal Beauty Parlour",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Bakery and Cake Pastry Manufacturing Business",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Detergent and washing powder Manufacturing",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Book Binding Udyog",
        description: "Think how these can be converted to successful startups"
    },
    {
        title: "Sofa Repair Works",
        description: "Think how these can be converted to successful startups"
    }
];

// Function to display startup ideas
function displayIdeas(ideas) {
    const ideasContainer = document.getElementById('ideas-container');
    ideasContainer.innerHTML = ''; // Clear previous results
    
    ideas.forEach(idea => {
        const ideaDiv = document.createElement('div');
        ideaDiv.classList.add('idea');
        
        const ideaTitle = document.createElement('h2');
        ideaTitle.textContent = idea.title;
        
        const ideaDescription = document.createElement('p');
        ideaDescription.textContent = idea.description;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Pick This Idea!';
        saveButton.onclick = () => saveIdea(idea.title);

        ideaDiv.appendChild(ideaTitle);
        ideaDiv.appendChild(ideaDescription);
        ideaDiv.appendChild(saveButton);

        ideasContainer.appendChild(ideaDiv);
    });
}

// Function to save idea title to local storage
function saveIdea(title) {
    localStorage.removeItem('savedIdeas');
    let savedIdeas = localStorage.getItem('savedIdeas');
    if (savedIdeas) {
        savedIdeas = JSON.parse(savedIdeas);
    } else {
        savedIdeas = [];
    }
    savedIdeas.push(title);
    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    window.location.href = 'pickaidea.html';
}

// Function to filter ideas based on search input
function filterIdeas() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredIdeas = startupIdeas.filter(idea =>
        idea.title.toLowerCase().includes(searchTerm) || 
        idea.description.toLowerCase().includes(searchTerm)
    );
    displayIdeas(filteredIdeas);
}

// Event listener for search bar input
document.getElementById('search-bar').addEventListener('input', filterIdeas);

// Call the function to display ideas when the page loads
window.onload = () => displayIdeas(startupIdeas);
