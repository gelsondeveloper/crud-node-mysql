const pool = require("../database/index")

const postsController =  {
    // Here is implementation to get All Object
    getAll: async (req, res) => {
        try {
            const [rows , fields] = await pool.query("select * FROM posts")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    // Here is implementation to find object by id 
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows , fields] = await pool.query("select * FROM posts where id= ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    // Here is implementation to Create object 
    create: async (req, res) => {
        try {
           const { title, content } = req.body
           const sql = "insert into posts (title, content) values (?, ?)"
           const [rows, fields] = await pool.query(sql, [title, content])
           res.json({
            data: rows
           })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    // Here is implementation update object 
    update: async (req, res) => {
        try {
           const { title, content } = req.body
           const { id } = req.params
           const sql = "update posts set title = ?, content = ? where id = ?"
           const [rows, fields] = await pool.query(sql, [title, content, id])
           res.json({
            data: rows
           })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    },
    // Here is implementation Delete object 
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows , fields] = await pool.query("delete from posts where id= ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = postsController