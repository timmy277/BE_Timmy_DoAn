const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3001

app.get('/products', (req, res) => {
    const data = [
        {
            url: 'acx',
            name: 'ACX',
            description: 'aaaa'
        },{
            url: 'acxq',
            name: 'wACX',
            description: 'tttaaaa'
        }
    ]
    res.send({code: 200, message: 'Fetch success', data: data})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  