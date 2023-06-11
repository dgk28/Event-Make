import express from "express";
import path from "path";

const PORT = 5000
const USERS = [];
const EVENTS = [];
const app = express();

app.use(express.static(path.join(path.resolve(), "/public")));
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.get('/login', (req,res)=>{
    res.render("login");
});
app.get('/', (req,res)=>{
    res.render("login");
});

app.post('/login', (req,res)=>{
    const { email, password } = req.body;
  
    // Check if user exists in USERS array
    const user = USERS.find(user => user.email === email);
  
    if (!user) {
        // alert("Invalid Credentials!!");
        return res.status(400).send('Invalid Email!!');
    }
  
    // Check if password is correct
    if (user.password !== password) {
        // alert("Invalid Password!!");
        return res.status(400).send('Invalid Password!!');
    }
  
    // Authentication successful, redirect to "/events" route
    res.redirect('/events');
});

app.get('/register', (req,res)=>{
    res.render("register");
});
app.post('/register', (req,res)=>{
    const { email, password, rePassword } = req.body;
  
    // check if passwords match
    console.log(password);
    console.log(rePassword);
    if (password !== rePassword) {
      return res.status(400).send('Passwords do not match');
    }
  
    // check if user already exists
    if (USERS.find(user => user.email === email)) {
      return res.status(400).send('User already exists');
    }
  
    // add user to array
    USERS.push(req.body);
  
    // redirect to login page
    res.redirect('/login');
    USERS.push(req.body);

    res.send(req.body);
});

app.get('/post', (req,res)=>{
    res.render("post");
});
app.post('/post', (req,res)=>{
    EVENTS.push(req.body);
    res.render('events', { EVENTS });
});
app.get('/events', (req,res)=>{
    console.log(EVENTS);
    res.render('events', { EVENTS });
});

app.listen(PORT, ()=>{
    console.log(`on port: ${PORT}`);
});
