'use strict';


module.exports = function (app) {

    app.route('/')
        .get(function (req, res) {
            res.sendFile(__dirname + '/index.html');
        });
      
    app.route('/:time')
        .get(function(req, res) {
            let time = req.params.time;
            let date;
            if (isNaN(Number(time))) {
                if (!isNaN(Date.parse(time))) {
                    date = new Date(time);
                } else {
                    res.json({
                        unix: null,
                        natural: null
                    });
                }
            } else {
                date = new Date(Number(time) * 1000);
            } 
            let obj = {
                unix: date.getTime() / 1000,
                natural: `${date.toLocaleString("en-us", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`
            };
            res.json(obj);
      });
};
