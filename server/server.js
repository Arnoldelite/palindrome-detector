import server, { port } from '.'

server.listen(process.env.PORT || port, () => console.log(`Palindrome-detector is running on port: ${port}`))
