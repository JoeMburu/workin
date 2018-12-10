const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const jobs = [
    {
    company: "Nordax Bank Plc",
    address: "Pihkatie 12, 65320, Vaasa",
    Phone: "06-123-1234",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    moreInfo: "Ipsum is simply dummy text of the printing and typesetting ",
    date: new Date().getTime(),
    expiryDate: new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)),
    logoPath: "https://en.wikipedia.org/wiki/Logo_TV#/media/File:Logo_TV_2015.svg"
  },
  {
    company: "Jack & Jack",
    address: "Virtakatu 41, 65320, Vaasa",
    Phone: "06-123-6565",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    moreInfo: "Ipsum is simply dummy text of the printing and typesetting ",
    date: new Date().getTime(),
    expiryDate: new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)),
    logoPath: "https://en.wikipedia.org/wiki/Logo_TV#/media/File:Logo_TV_2015.svg"
  },
  {
    company: "ABB",
    address: "Strömbery Park, 65320, Vaasa",
    Phone: "06-123-5455",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    moreInfo: "Ipsum is simply dummy text of the printing and typesetting ",
    date: new Date().getTime(),
    expiryDate: new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)),
    logoPath: "https://en.wikipedia.org/wiki/Logo_TV#/media/File:Logo_TV_2015.svg"
  }
];
res.status(200).json({
    message: "retrieved successfully",
    jobs: jobs
  });
  
});

module.exports = router;
