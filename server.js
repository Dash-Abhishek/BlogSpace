const express = require('express')
var cors = require('cors')

const app = express();

app.use(cors());


app.get("/landingPage", (req, res) => {

    let blog = {
        "id": "",
        "title": "bla bla",
        "subTitle": "foo bar foo bar",
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
    categories.push('Moto', 'Tech', 'Livestyle', 'Social', 'Legal');

    console.log(req.hostname);
    res.send(categories);

})



app.listen(3030, () => {

    console.log("svc is up and running port 3030");
})


