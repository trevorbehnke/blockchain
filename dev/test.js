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
// ######################## testing chainIsValid method
const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1677007791912,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1677007817130,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1677007858601,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "1cbaca80b21e11eda58193ac21dc9806",
          transactionId: "2bc4bc70b21e11eda58193ac21dc9806",
        },
        {
          amount: 10,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "3bd7e100b21e11eda58193ac21dc9806",
        },
        {
          amount: 20,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "3e76f5e0b21e11eda58193ac21dc9806",
        },
        {
          amount: 30,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "409fc950b21e11eda58193ac21dc9806",
        },
      ],
      nonce: 135627,
      hash: "00001da56d69b66e6579f76b554f94ae766a9391495e2b5de4bfe1ad2a8dc4e5",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1677007889646,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "1cbaca80b21e11eda58193ac21dc9806",
          transactionId: "447b55d0b21e11eda58193ac21dc9806",
        },
        {
          amount: 40,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "4e005100b21e11eda58193ac21dc9806",
        },
        {
          amount: 50,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "500807e0b21e11eda58193ac21dc9806",
        },
        {
          amount: 60,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "51b91340b21e11eda58193ac21dc9806",
        },
        {
          amount: 70,
          sender: "sfgjai5e7yg8ae75ghea",
          recipient: "246ty59ew8tyae8sf7ihsua",
          transactionId: "53a998a0b21e11eda58193ac21dc9806",
        },
      ],
      nonce: 18244,
      hash: "00001f3eb2ad4bc8325684991317a9de941a91fa84567310be79b818c1930d04",
      previousBlockHash:
        "00001da56d69b66e6579f76b554f94ae766a9391495e2b5de4bfe1ad2a8dc4e5",
    },
    {
      index: 5,
      timestamp: 1677007909310,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "1cbaca80b21e11eda58193ac21dc9806",
          transactionId: "56fc1f00b21e11eda58193ac21dc9806",
        },
      ],
      nonce: 19634,
      hash: "0000ea0535ebbf1b4a158164a4ccbe43cd17c9c7d8ce47583b0c9457089e7d52",
      previousBlockHash:
        "00001f3eb2ad4bc8325684991317a9de941a91fa84567310be79b818c1930d04",
    },
    {
      index: 6,
      timestamp: 1677007915325,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "1cbaca80b21e11eda58193ac21dc9806",
          transactionId: "62b49c00b21e11eda58193ac21dc9806",
        },
      ],
      nonce: 16852,
      hash: "00006c1781a5f148c7c86bed15dcd106ee8e592287488a88b9de6d1856b4d543",
      previousBlockHash:
        "0000ea0535ebbf1b4a158164a4ccbe43cd17c9c7d8ce47583b0c9457089e7d52",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "1cbaca80b21e11eda58193ac21dc9806",
      transactionId: "664a6cf0b21e11eda58193ac21dc9806",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));

// console.log(bitcoin);
