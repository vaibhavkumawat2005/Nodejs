<h1>🎥 MovieFlix - README</h1>
<p><strong>MovieFlix</strong> is a full-stack movie management application built using <strong>Node.js, Express, MongoDB, EJS, and TailwindCSS</strong>.  
It allows users to register, log in, add, edit, delete, and view movies, along with uploading poster images.</p>

<hr>

<h1>Screenshots</h1>

<img width="1919" height="971" alt="Screenshot 2025-08-12 113527" src="https://github.com/user-attachments/assets/a399f1cc-98b7-427a-aa46-4ffde5cb828b" />
<img width="1919" height="969" alt="Screenshot 2025-08-12 113535" src="https://github.com/user-attachments/assets/56192f47-b07a-48a3-bdbe-aae9fe698cd2" />
<img width="1898" height="969" alt="Screenshot 2025-08-12 113552" src="https://github.com/user-attachments/assets/9eecb58e-e9a4-4555-87c0-5bad0de3d9dc" />
<img width="1919" height="966" alt="Screenshot 2025-08-12 113602" src="https://github.com/user-attachments/assets/9696ebbc-bc18-4f69-ad6c-2ad25a3b4618" />
<img width="1919" height="968" alt="Screenshot 2025-08-12 113615" src="https://github.com/user-attachments/assets/9d77ccd7-536b-4be9-96cc-f358c431ae53" />


<h2>📂 Project Structure</h2>
<pre>
/MovieFlix
│── /config           # Database configuration
│── /controller       # Controller logic for movies & authentication
│── /middleware       # Multer upload configuration
│── /model            # Mongoose models (User, Movie)
│── /public           # Static files (CSS, uploads, images)
│── /Routes           # Express route definitions
│── /views            # EJS templates
│── server.js         # Main application entry point
</pre>

<hr>

<h2>⚙️ Features</h2>
<ul>
    <li>User Authentication (Sign Up, Login, Logout)</li>
    <li>Password encryption using <code>bcrypt</code></li>
    <li>Session-based authentication with <code>express-session</code></li>
    <li>Add, Edit, and Delete Movies</li>
    <li>Upload poster images using <code>multer</code></li>
    <li>Responsive and modern UI with TailwindCSS</li>
</ul>

<hr>

<h2>🛠️ Technologies Used</h2>
<ul>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB with Mongoose</li>
    <li><strong>Frontend:</strong> EJS Templates, TailwindCSS</li>
    <li><strong>Authentication:</strong> express-session, bcrypt</li>
    <li><strong>File Upload:</strong> multer</li>
</ul>

<hr>

<h2>🚀 Installation & Setup</h2>
<ol>
    <li>Clone the repository:
        <pre>git clone https://github.com/your-username/movieflix.git</pre>
    </li>
    <li>Navigate into the project folder:
        <pre>cd movieflix</pre>
    </li>
    <li>Install dependencies:
        <pre>npm install</pre>
    </li>
    <li>Configure MongoDB connection in <code>config/db.js</code></li>
    <li>Run the application:
        <pre>npm start</pre>
    </li>
    <li>Open in browser:
        <pre>http://localhost:3000</pre>
    </li>
</ol>

<hr>

<h2>🔑 Routes</h2>
<h3>Authentication</h3>
<ul>
    <li><code>GET /auth/signup</code> → Sign-up page</li>
    <li><code>POST /auth/signup</code> → Register new user</li>
    <li><code>GET /auth/login</code> → Login page</li>
    <li><code>POST /auth/login</code> → Authenticate user</li>
    <li><code>GET /auth/logout</code> → Logout user</li>
</ul>

<h3>Movies</h3>
<ul>
    <li><code>GET /movies</code> → View all movies</li>
    <li><code>GET /movies/add</code> → Add movie form</li>
    <li><code>POST /movies/add</code> → Add new movie</li>
    <li><code>GET /movies/edit/:id</code> → Edit movie form</li>
    <li><code>POST /movies/edit/:id</code> → Update movie</li>
    <li><code>POST /movies/delete/:id</code> → Delete movie</li>
</ul>

<hr>

<h2>📷 Screenshots</h2>
<ul>
    <li>🎬 Movie List Page</li>
    <li>📝 Add/Edit Movie</li>
    <li>🔐 Login & Sign Up</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>
<p>Developed by <strong>Your Name</strong> 💛</p>
