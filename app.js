const express = require("express");
const app = express();
const ejs = require("ejs");

// 設定middleware
app.use(express.static("public")); //請手動新增一個名稱為public的資料夾，並新增style.scss檔

// 根目錄頁
// app.get("/", (req, res) => {
//     res.render("index.ejs");
// });

// 在ejs使用array，用index.ejs示範-----
app.get("/", (req, res) => {
    // 假設以下languages陣列是從一個 database 拿出的 => an array of objects
    const languages = [
        { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
        { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
        { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
        { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
        { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" }
    ];
    res.render("index.ejs", { languages });
});

// *JS Code in EJS* 使用到 respond.ejs --
// app.get("/response", (req, res) => {
//     // console.log(req.query);
//     let {fullname, age} = req.query;
//     // res.send("thanks for sending request.");
//     res.render("respond.ejs", {fullname, age});
// })
// -------------------------------------

// *form in EJS* 使用到 person.ejs ------
// app.get("/:name", (req, res) => {
//     let { name } = req.params;
//     res.render("person.ejs", { name: name }); //因property名稱與variable相同，可以直接將{ name: name }簡寫成{ name }
// });
// -------------------------------------

// 設定localhost，port為3000 -> http://localhost:3000/
app.listen(3000, () =>{
    console.log("Server is running on port 3000.");
})


