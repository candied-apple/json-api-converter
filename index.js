const express = require("express");
const axios = require("axios");
const app = express();

// url - http://localhost:2410/
app.get("/", async (req, res) => {
  try {
    console.log("Making axios call default");
    const response = await axios.get('https://api.night-api.com/images/nsfw', { headers: {authorization: "8nhKEUTnmp-eTWpJh3Qcrtqq1CLmhxk-BmsvL18jl7",
          'accept-encoding': '*'}
  })
    res.status(200).json({ link: response.data.content.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something bad has occurred." });
  }
});

// url - http://localhost:2410/1
app.get("/pussy", async (req, res) => {
  try {
    console.log("Making axios call with post pussy");
    const response = await axios.get('https://api.night-api.com/images/nsfw' + "/" + "pussy", { headers: {authorization: "8nhKEUTnmp-eTWpJh3Qcrtqq1CLmhxk-BmsvL18jl7",
    'accept-encoding': '*'}
});
    res.status(200).json({ link: response.data.content.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something bad has occurred." });
  }
});

app.get("/boobs", async (req, res) => {
  try {
    console.log("Making axios call with post boobs");
    const response = await axios.get('https://api.night-api.com/images/nsfw' + "/" + "boobs", { headers: {authorization: "8nhKEUTnmp-eTWpJh3Qcrtqq1CLmhxk-BmsvL18jl7",
    'accept-encoding': '*'}
});
    res.status(200).json({ link: response.data.content.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something bad has occurred." });
  }
});

app.get("/ass", async (req, res) => {
  try {
    console.log("Making axios call with post boobs");
    const response = await axios.get('https://api.night-api.com/images/nsfw' + "/" + "ass", { headers: {authorization: "8nhKEUTnmp-eTWpJh3Qcrtqq1CLmhxk-BmsvL18jl7",
    'accept-encoding': '*'}
});
    res.status(200).json({ link: response.data.content.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something bad has occurred." });
  }
});

app.get("/pgif", async (req, res) => {
  try {
    console.log("Making axios call with post boobs");
    const response = await axios.get('https://api.night-api.com/images/nsfw' + "/" + "pgif", { headers: {authorization: "8nhKEUTnmp-eTWpJh3Qcrtqq1CLmhxk-BmsvL18jl7",
    'accept-encoding': '*'}
});
    res.status(200).json({ link: response.data.content.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something bad has occurred." });
  }
});
// driver code
const port = 2410;
app.listen(port, () =>
  console.log(`app is listening on : http://localhost:${port}`)
);


