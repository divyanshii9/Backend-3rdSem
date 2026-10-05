const http = require('http');


const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });

  
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .sign_up-box { max-width: 400px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
                .input-group { margin-bottom: 15px; }
                label { display: block; margin-bottom: 5px; font-weight: bold; }
                input { width: 100%; padding: 8px; border: 1px solid #aaa; border-radius: 4px; }
            </style>
        </head>
        <body>
            <div class="circle circle-one"></div>
            <div class="circle circle-two"></div>
            <div class="sign_up-box">
                <h2>Create Account</h2>
                <p class="subtitle">Sign up to get started with your account</p>
                <div class="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name">
                </div>
                <div class="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email address">
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password">
                </div>
                <div class="input-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password">
                </div>
            </div>
        </body>
        </html>
    `);
});


server.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});