const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true,  },
        image: { type: String, required: true,  },
        description: { type: String, required: true,  },
        price: { type: Number, required: true,  }, 
        type: { type: String, required: true,  }, 

    },
    
)
module.exports = mongoose.model("Article", ArticleSchema);