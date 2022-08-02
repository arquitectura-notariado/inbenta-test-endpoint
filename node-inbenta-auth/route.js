const http = require('http')
const url = require('url')

const axios = require('axios')

module.exports = http.createServer( async (req, res) => {

    const reqUrl = url.parse(req.url, true)
    if(reqUrl.path === '/chatbot-access-token/inbenta-auth') {
        
        const body = {"secret":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwcm9qZWN0IjoiYW5jZXJfY2hhdGJvdF9lcyIsInNhbHQiOiJCYlBydmh5bXluQlJwM1J4QnJhWEtBPT0ifQ.rMnZ--0EKYsUmSMTfO6nYFNqAvfbxqOSQZvfGwTnuB0jehSDaxTmz-0_KhMjgJXkqQuBjQ7CrDYTnwzvst3SQQ"}
        axios({
            method: 'post',
            url: 'https://api.inbenta.io/v1/auth',
            headers: { 
                'Content-Type': 'application/json', 
                'x-inbenta-key' : 'BbPrvhyVmqY/FgcLqJhuDLfS2xksGxEtym904jRe4P0='
            },
            data: body
        }).then(resp => {
            console.log(resp.data)
            res.writeHead(200, {"Contet-Type": "application/json"})
            res.write(JSON.stringify(resp.data))
            res.end()
        }).catch(err => console.log(err));
        
    } else {
        res.writeHead(200, {"Contet-Type": "text/plain"})
        res.write('El aplicativo solo responde a /chatbot-access-token/inbenta-auth')
        res.end()
    }
})