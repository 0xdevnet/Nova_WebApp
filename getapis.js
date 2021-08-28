export default function (app) {

    app.get('/api/chartdata', (req, res) => {
        res.send(chartData)
    })
    
    app.get('/api/getloginstatus', (req, res) => { //sends userstatus to react on api call
        req.user === undefined? res.json("nologin"): res.send(req.user)
    })
}