const express = require('express')
const con = require("./config");
const { result } = require('lodash');
const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    /* resp.send("route done"); */
    con.query("select * from students", (err, result) => {
        if (err) {
            resp.send("Error in api")
        } else {
            resp.send(result)
        }
    })
})

app.post('/', (req, resp) => {
    const data = req.body;
    con.query('INSERT INTO students SET ?', data, (error, result, fields) => {
        if (error) error
        resp.send(data)
    })
})

app.put('/', (req, resp) => {
    const data = [req.body.first_name, req.body.last_name, req.params.id]
    con.query("UPDATE students SET first_name= ?, last_name= ? where id= ?", data, (error, result, fields) => {

        if (error) throw error
        resp.send(result)
    })

})

app.delete('/:id', (req,resp) =>{
    con.query("DELETE from students where id =" + req.params.id,(error,result,fields)=>{
        if(error) throw error
        resp.send(result)
    })
// resp.send(req.param.id)
})

app.listen(2028)