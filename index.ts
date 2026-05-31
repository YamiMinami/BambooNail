import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.get("/", (req, res) => {
    res.render("index", {
        title: "Bamboo Nail",
    })
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about",
    })
});

app.get("/catalog", (req, res) => {
    res.render("catalog", {
        title: "catalog",
    })
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "contact",
    })
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});