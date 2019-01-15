import server from '.'

const port = 3000
server.listen(process.env.PORT || port, () => console.log(`Palindrome-detector is running`))
