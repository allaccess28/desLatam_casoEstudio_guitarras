

export const home = (req, res) => {
    res.render("inicio", {title: "Home Page"});
}

export const about = (req, res) => {
    res.render("about", {title: "About Page"});
}

export const contact = (req, res) => {
    res.render("contact", {title: "Contact Page"});
}

export const guitars = (req, res) => {
    res.render("guitars", {title: "Guitars Page"});
}