const express = require('express')
var cors = require('cors')

const app = express();

app.use(cors());


app.get("/landingPage", (req, res) => {

    let blog = {
        "id": "",
        "title": "Blog Title",
        "subTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum",
        "author": "jhon doe",
        "img": "https://www.vuelio.com/uk/wp-content/uploads/2020/01/Top-10-Vlog-ranking-feature-image.png"
    }

    let trendingBlogs = [];
    trendingBlogs.push(blog, blog, blog, blog, blog, blog);

    const landingPage = {
        promotionalBlog: blog,
        trendingBlogs: trendingBlogs,
        topViewedBlog: blog

    }

    console.log(req.hostname);
    res.send(landingPage);

})


app.get("/categories", (req, res) => {

    let categories = [];
    categories.push('moto', 'tech', 'lifestyle', 'social', 'legal');

    console.log(req.hostname);
    res.send(categories);

});


app.post('/login', (req, res) => {
    const userDetails = {
        firstname: 'Sanketh',
        lastname: 'Mandapati',
        email: 'mandapatisanketh@gmail.com',
        token: 'randon jwt',
        id: 1
    };
    res.send(userDetails);
});

app.post('/register', (req, res) => {
    const userDetails = {
        ...req.body,
        id: 1
    };
    res.send(userDetails);
});

app.get('/authenticate', (req, res) => {
    const userDetails = {
        firstname: 'Sanketh',
        lastname: 'Mandapati',
        email: 'mandapatisanketh@gmail.com',
        token: 'randon jwt',
        id: 1
    };
    res.send(userDetails);
});



app.listen(3030, () => {

    console.log("svc is up and running port 3030");
})


