function showContent(page) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (page) {
        case 'home':
            content = `
                <h2>Home</h2>
                <div class="home-content">
                    <div class="text-description">
                    <p> <br>Hello! My name is Johnny Nguyen. I'm currently a senior at the University Of Missouri-Kansas City pursuing my Bachelors Of Computer Science. I'm expected to graduate in May 2024. I'm currently searching for an internship/ job experience so that I can further my knowledge, education, and experience to further develop my career in the technology field. Recently, I've created a mock application for an energy company where the user can insert data that is held within a local table where the user can interact with a dashboard, create an invoice, manage personal information, etc for a customer. My goals are to further my education within the technological field, develop strong connections with others in the field, and work towards my ideal future where I'm always learning about and exploring the ever-evolving technological advancements in our society.</p>
                    </div>
                    <div class="photo">
                        <img src="gradpicture.jpg" alt="Your Photo">
                    </div>
                </div>
                `;
            break;
        case 'resume':
            content = `
                <h2>Resume</h2>
                <p> <br> Download my resume<b>:</b></p>
                <a href="Johnny_Nguyen_Resume.pdf" target="_blank">Click here to download my resume! (PDF)</a>
            `;
            break;
        case 'education':
            content = `
                <h2>Education Background</h2>
                <p><br>I started taking college-level courses at Winnetonka High School in my Sophomore year for credit in 2018. </br>
                <br>I graduated from Winnetonka in 2020, where I was qualified and was granted the A+ Scholarship, which I then began attending Metropolitan Community College using the scholarship. I worked towards getting my Associate's In Computer Science so that I could transfer to a university to get a Bachelor's.</br>
                <br> I then graduated with my Associate in Computer Science in May of 2022 and then proceeded to transfer to the University of Missouri, Kansas City to begin working towards my Bachelor of Science in Computer Science. </br>
                <br> I'm currently in my Senior semester of college, where I'm expected to graduate in May 2024 with my Bachelor's </br>
                </p>
                <h3> Courses Taken </h3>
                <p>
                    Precalculus Algebra (MATH 110)<br>
                    Trigonometry (MATH 125)<br>
                    Analytic Geometry (MATH 180)<br>
                    Analytic Geometry & Cal II (MATH 190)<br>
                    Linear Algebra I (MATH 300)<br>
                    Elementary Statistics (STAT 235)<br>
                    Composition & Reading I (ENGL 101)<br>
                    Composition & Reading II (ENGL 102)<br>
                    Fundamentals of Speech (COMM 100)<br>
                    Music Appreciation (MUSI 108)<br>
                    Intro to Philosophy (Phil 100)<br>
                    American History II (HIST 121)<br>
                    Modern Western Civ (HIST 134)<br>
                    General Biology (BIOL 101)<br>
                    Intro to U.S. National Politics (POLS 136)<br>
                    Macroeconomics (ECON 210) <br>
                    Engineering Physics I (PHYS 220)<br>
                    Object-Orient Programming (CSIS 223)<br>
                    Assembler Programming (CSIS 250)<br>
                    Discrete Structures II (COMP-SCI 291)<br>
                    Data Structures (COMP-SCI 303)<br>
                    Ethics & Professionalism (COMP-SCI 304WI)<br>
                    Data Communications and Networking (COMP-SCI 320)<br>
                    Java Program Application (COMP-SCI 349)<br>
                    Applied Probability (COMP-SCI 394R)<br>
                    Intro to Algorithms & Complex (COMP-SCI 404)<br>
                    Intro Operating Systems (COMP-SCI 431)<br>
                    Foundations of Software Engineering (COMP-SCI 449)<br>
                    Human Computer Interface (COMP-SCI 456)<br>
                    Intro Artificial Intelligence (COMP-SCI 461)<br>
                    Intro Database Management Systems (COMP-SCI 470)<br>
                </p>
            `;
            break;
        case 'skills':
            content = `
                <h2>Skills</h2>
                <p><br>Java
                <br>C++
                <br> Python
                <br>HTML
                <br>CSS
                <br>JavaScript
                <br>SQL
                <br>Networking
                <br>Troubleshooting
                <br>Familiar with:
                <br>Assembly
                <br>
                </p>
            `;
            break;
        case 'projects':
            content = `
                <h2>Projects</h2>
                <p><br> <b> KC Energy Project </b> <br>
                <br>Coded a java program that allowed users to enter 
                in data about a customer and allowed the user to 
                access and manipulate the saved data that was entered. 
                <br>The program included multiple functions that allowed the user to check 
                the customer’s bills, payments, creating an 
                invoice, and has a dashboard to be able to access everything from a main page.

                <br> <br> <b> SOS Game </b> <br>
                <br> Recreated the SOS Game using Java, including ability to play against a bot opponent that has their own randomized moves, ability to save the move history of each game to a text file for viewing game history, and an option to choose a simpe or general game 
                </p>
            `;
            break;
        case 'work':
            content = `
                <h2>Work Experience</h2>
                <p><br> <br><b>Midwest Home Health Care</b> <br>
                <br> <b> Caregiver (2020-present) </b>
                <br> Provided caregiving services to client on a daily basis including: 
                <br> Changing linens
                <br> Cleaning bath
                <br> Cleaning floors
                <br> Assistance with dressing
                <br> Essential Transportation
                <br> Laundry
                <br> Making bed
                <br> Meal prep
                <br> Medication assistance
                <br> Garbage disposal
                <br> Washing dishes
                </p>
            `;
            break;
        case 'contact':
            content = `
                <h2>Contact Information</h2>
                <p><br> Email address: johnnynguyen@email.com
                <br> Phone number: 816-699-0319

                </p>
            `;
            break;
        default:
            content = `
                <h2>Error</h2>
                <p>Page not found.</p>
            `;
            break;
    }

    contentDiv.innerHTML = content;
}
