const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js AWS Deployment</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f7fb;
                    color: #1f2937;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                }

                .container {
                    background: white;
                    padding: 50px;
                    border-radius: 12px;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                }

                h1 {
                    margin-bottom: 15px;
                }

                p {
                    font-size: 18px;
                }

                .badge {
                    display: inline-block;
                    margin-top: 15px;
                    padding: 10px 18px;
                    background: #e8f1ff;
                    border-radius: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>AWS Node.js Deployment Demo</h1>
                <p>This application is running on an AWS EC2 Ubuntu server.</p>
                <span class="badge">Node.js • Express • PM2 • Nginx</span>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Application running on http://0.0.0.0:${PORT}`);
});
