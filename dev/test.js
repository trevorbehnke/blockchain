const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
// ########################
// ######################## testing new blocks and transactions

// bitcoin.createNewBlock(4523452, "324134wfefvddcas", "fdcfas4y5h6srdfa");

// bitcoin.createNewTransaction(100, "ALEX45yhgbvz4", "JENfsdags4faw3w3");

// bitcoin.createNewBlock(35473456, "vsbdf7kg6d5ye", "gkdf75364taew4fs");

// bitcoin.createNewTransaction(245, "ALEX45yhgbvz4", "JENfsdags4faw3w3");
// bitcoin.createNewTransaction(567, "ALEX45yhgbvz4", "JENfsdags4faw3w3");
// bitcoin.createNewTransaction(78, "ALEX45yhgbvz4", "JENfsdags4faw3w3");

// bitcoin.createNewBlock(78467, "bfne6r5tesg44", "hjdgmusdfk6d4");

// console.log(bitcoin);
// console.log(bitcoin.chain[2]);

// ########################
// ######################## testing hashing

// const previousBlockHash = "sfjiw734yfq837yaw93ry48fwg4haiufe";
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: "4gafrgasfsafrsaee",
//     recipient: "543twegrdsgesdfr",
//   },
//   {
//     amount: 30,
//     sender: "fsa4fgse6rjs5r",
//     recipient: "5h6j7tmjsm6r5",
//   },
//   {
//     amount: 200,
//     sender: "hjfsdk7jr5hseh",
//     recipient: "fjdk7dj5rseh54",
//   },
// ];

// const nonce = 100;

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// ########################
// ######################## testing proof of work

// const previousBlockHash = "sfjiw734yfq837yaw93ry48fwg4haiufe";
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: "4gafrgasfsafrsaee",
//     recipient: "543twegrdsgesdfr",
//   },
//   {
//     amount: 30,
//     sender: "fsa4fgse6rjs5r",
//     recipient: "5h6j7tmjsm6r5",
//   },
//   {
//     amount: 200,
//     sender: "hjfsdk7jr5hseh",
//     recipient: "fjdk7dj5rseh54",
//   },
// ];

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
// // console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 5269));

// ########################
// ######################## testing genesis block

console.log(bitcoin);
