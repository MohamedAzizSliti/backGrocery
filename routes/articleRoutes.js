const Article = require("../models/Article");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

/* add Article */
router.post("/add/", async (req, res) => {
    const newArticle = new Article({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        type:req.body.type,
    });
    try {
        const savedArticle = await newArticle.save();
        res.status(200).json(savedArticle);
    } catch (err) {
        res.status(500).json(err)
    }
});
/* update Article */
router.put("edit/:id", async (req, res) => {

    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedArticle);
    } catch (err) {
        res.status(500).json(err);
    }
})
/* DELTE Article */
router.delete("delete/:id", async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id)
        res.status(200).json('Article has been deleted...')
    } catch (err) {
        res.status(500).json(err)
    }
});
/* GET Article By ID */

router.get("/find/:id", async (req, res) => {
    try {
        const Article = await Article.findById(req.params.id);
        const { password, ...others } = Article._doc;

        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err);
    }
});
/* GET All Article */

router.get("/", async (req, res) => {
    try {
        const Articles = await Article.find()
        res.status(200).json(Articles);
    } catch (err) {
        res.status(500).json(err)
    }
});

/* GET All Article */

router.get("/:type", async (req, res) => {
    try {
        const {type} = req.params;


        const Articles = await Article.find({
            type
        })
        res.status(200).json(Articles);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router