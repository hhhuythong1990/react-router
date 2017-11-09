const express = require("express");
const app = express();
const jsonParser = require ("body-parser").json();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
    session({
        secret: "123345665454",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 2
        }
    })
)

app.use(express.static('public'));

app.get("/try", (req, res) => {
    res.send("Hellllo");
});

app.post("/axios", jsonParser, (req, res)=>{
    res.send(req.body);
});

app.post("/signIn", jsonParser, (req, res)=>{    
    let { username, password } = req.body;
    if(username === "thong" && password === "1234"){
        req.session.username = username;    
        return res.send("DANG_NHAP_THANH_CONG");
    }
    res.send("DANG_NHAP_THAT_BAI");    
});

app.get('/getInfo', (req, res) => {
    if(req.session.username){
        return res.send(req.session.username);
    }
    res.send("CHUA_DANG_NHAP");
});

app.get('/logout', (req, res) => {
    req.session.username = undefined;
    res.send("DA_DANG_XUAT");
});

app.use("/", require("./controller/HomeController"));


app.listen(3000, () => {
    console.log("Server listen");
});

