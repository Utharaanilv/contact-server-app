// import json-server

const jsonServer=require('json-server')

// craeate json-Server application

const server= jsonServer.create()

// setup routes for db.json

const router= jsonServer.router('db.json')

// return a middleware used by json-server

const middleware= jsonServer.defaults()

// setup a port number for server app

const port=process.env.port||3000

// use middleware and router in server app

server.use (middleware)
server.use (router)

// To listen the app in port

server.listen(port,()=>{
    console.log('contact server app started at port',port);
})


