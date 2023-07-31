import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";

const PORT = 50051;
const PROTO_FILE = "./proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const client= new grpcObj.randomPackage.Random(
    `127.0.0.1:${PORT}`, grpc.credentials.createInsecure()
)

const deadline=new Date();
deadline.setSeconds(deadline.getSeconds()+20);
client.waitForReady(deadline,(err)=>{
    if(err)
    {
        console.error(err);
        return;
    }
    onClientReady()
})

function onClientReady(){
    client.PingPong({message:"hello from pingpong service"},(err,res)=>{
       if(err){
        console.error(err);
        return;
       }
       else{
        console.log(res);
       }
    })
}