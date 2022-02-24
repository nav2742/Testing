const http = require('http')
const server = http.createServer((req,res)=>{
    // console.log(req)
    // res.write(`<h1>Naveen is trying something new today\
    // and what you are thinking</h1>`)
    // res.end()
    
    if(req.url ==='/'){
        res.write('Welcome to home page')
        res.end()
    }
    if(req.url === '/about'){
        res.write('Happy to help you')
        res.end()
    }
    res.end(`<h1>OOPS!!!</h1>
    <p>We are sorry please go back to the main page</p>
    <a href='/'>back home</a>`)
    
})
server.listen(80)