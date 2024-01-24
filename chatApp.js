const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3015;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Display login form
app.get('/login', (req, res) => {
    // Read the existing usernames from the text file
    const usernames = fs.readFileSync('message.txt', 'utf-8').split('\n').filter(Boolean);

    // Render the login form with existing usernames
    res.send(`
        <h1>Login</h1>
        <form action="/login" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" required>
            <button type="submit">Login</button>
        </form>
        <h2>Existing Usernames:</h2>
        <ul>${usernames.map(username => `<li>${username}</li>`).join('')}</ul>
    `);
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username } = req.body;

    // Append the new username to the text file
    fs.appendFileSync('message.txt', `${username}\n`);

    // Redirect back to the login page
    res.redirect('/login');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});