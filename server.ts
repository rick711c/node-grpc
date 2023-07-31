import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/random'
import { RandomHandlers } from './proto/randomPackage/Random'

const PORT = 50051
const PROTO_FILE = './proto/random.proto'
//The code first loads the Protocol Buffer file (random.proto) using protoLoader.loadSync
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
/*
Then, it creates the gRPC object (grpcObj) by loading the package definition with grpc.loadPackageDefinition. 
It casts the result to ProtoGrpcType using type assertion (as unknown as ProtoGrpcType). 
The ProtoGrpcType is generated TypeScript types that represent the gRPC service and messages defined in the Protocol Buffer file.
*/
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
/*
extracting the randomPackage from the grpcObj. randomPackage 
contains all the services and messages defined in the "random" package of the Protocol Buffer file.
*/
console.log(grpcObj);
const randomPackage = grpcObj.randomPackage

function main() {
  const server = getServer()

  server.bindAsync(`127.0.0.1:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    server.start()
  })
}

function getServer() {
  const server = new grpc.Server()
  //addService funtions takes 1st argument as the defination of the service, and the futher arguments are the implemntations (as normal services in nest)like pingpong, 
  server.addService(randomPackage.Random.service, {
    PingPong: (req, res) => {
      //console.log(req.request)
      res(null, {message: req.request.message})
    },
  } as RandomHandlers)

  return server
}

main()