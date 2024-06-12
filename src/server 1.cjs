const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');
const expressIP = require('express-ip'); // Import the express-ip middleware
const geoip = require('geoip-lite'); // Import the geoip-lite package
require('dotenv').config();

const { sendEmail } = require('./emailService');

const app = express();
const httpServer = require('http').createServer(app);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(expressIP().getIpInfoMiddleware); // Use express-ip middleware

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
});

con.connect(function (err) {
  if (err) {
    console.log('Error in Connection');
  } else {
    console.log('Connected');
  }
});

const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

const corsOptions = {
  origin: 'http://localhost:3000',
};

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors(corsOptions));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', async (data) => {
    console.log('Received message from client:', data);

    try {
      const response = await openai.completions.create({
        prompt: data.text,
        max_tokens: 50, // Adjust as needed
        model: 'text-davinci-002', // Specify the desired model
      });

      const botResponse = response.choices[0].text;

      // Send the chatbot's response back to the client
      socket.emit('message', botResponse);

      // Log the response in the server console
      console.log('Response to client:', botResponse);
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      // Handle errors here and send an appropriate response if needed
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

httpServer.listen(8081, () => {
  console.log('WebSocket server is running on port 8081');
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.completions.create({
      prompt: message,
      max_tokens: 50, // Adjust as needed
      model: 'text-davinci-002', // Specify the desired model
    });

    const botResponse = response.choices[0].text;
    res.json({ message: botResponse });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  //console.log(req.body);

  // Get client's IP address using express-ip middleware
  const clientIp = req.ipInfo;
  //console.log('Client IP:', clientIp);

  // Get approximate location information based on the IP address
  const locationInfo = geoip.lookup(clientIp);
  //console.log('Location Info:', locationInfo);

  const sql = 'SELECT * FROM user Where email = ? AND  password = ?';
  con.query(sql, [req.body.email, req.body.password], async (err, result) => {
    if (err) return res.json({ Status: 'Error', Error: 'Error in running query' });
    //console.log(result);
    if (result.length > 0) {
      // Generate a 4-digit OTP
      const otp = Math.floor(1000 + Math.random() * 9000);


      const emailSubject = 'One Time Password for logging in to checkHIV';

      // Send the email with OTP using the sendEmail function
      sendEmail(req.body.email, emailSubject, ` Your OTP: ${otp}\nlogin detected from ${req.headers['user-agent']} in ${locationInfo}`, (error, response) => {
        if (error) {
          console.error('Error sending OTP email:', error);
          return res.json({ Status: 'Error', Error: 'Error sending OTP email' });
        } else {
          return res.json({ Status: 'Success', id: result[0].id, Message: 'OTP sent to your email',OTP: otp });
        }
      });
    } else {
      return res.json({ Status: 'Error', Error: 'Wrong username or Password' });
    }
  });
});

app.post('/validate-otp', (req, res) => {
  const { enteredotp } = req.body;

  console.log('otp2:'+ enteredotp);
  console.log('otp1:'+otp);

  // Check if the OTP sent by the user matches the stored OTP
  if (enteredotp === otp) { // Replace 'generatedOTP' with the actual variable where you store the OTP in the /login route
    // If the OTP matches, clear the stored OTP
    otp = null; // Set the generatedOTP to null

    return res.json({ Status: 'Success', Message: 'OTP is valid' });
  } else {
    return res.json({ Status: 'Error', Error: 'Invalid OTP' });
  }
});



app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM user where id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: 'Get user error in SQL' });
    return res.json({ Status: 'Success', Result: result });
  });
});



app.post('/create', (req, res) => {
  // Check if the email already exists in the database
  const checkEmailSql = 'SELECT * FROM user WHERE email = ?';
  con.query(checkEmailSql, [req.body.email], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking email existence:', checkErr);
      return res.status(500).json({ Error: 'Error checking email existence' });
    }

    if (checkResult.length > 0) {
      // Email already exists, send an error message
      return res.json({ Status: 'Error', Error: 'Email already exists' });
    }

    // Email does not exist, proceed with account creation
    const createAccountSql =
      'INSERT INTO user (`password`, `firstname`, `lastname`, `phonenumber`, `email`) VALUES (?)';
    const values = [
      req.body.password,
      req.body.firstname,
      req.body.lastname,
      req.body.phonenumber,
      req.body.email,
    ];

    con.query(createAccountSql, [values], (err, result) => {
      if (err) {
        console.error('Error creating account:', err);
        return res.status(500).json({ Error: 'Error creating account' });
      }
      return res.json({ Status: 'Success' });
    });
  });
});


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
