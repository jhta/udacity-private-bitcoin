const { Block } = require("./src/block");
const { Blockchain } = require("./src/blockchain");

const block = new Block("block 2");
const block2 = new Block("block 3");
const block3 = new Block("block 4");

// console.log(block);

const blockChain = new Blockchain();
// console.log("blockChain", blockChain);
// console.log("blocks", blockChain.chain);

// blockChain._addBlock(block).then((res) => {
//   console.log("response", res);
//   console.log("updated blocks", blockChain.chain);
// });

(async function init() {
  try {
    await blockChain._addBlock(block);
    await blockChain._addBlock(block2);
    await blockChain._addBlock(block3);

    // console.log("blockchain", blockChain.chain);

    const withError = await blockChain.validateChain();
    console.log("blocks with errors", withError);

    blockChain.chain[1].body = "123456";

    const withError2 = await blockChain.validateChain();

    console.log("blocks with errors", withError2);
  } catch (err) {
    console.log("erropr", err);
  }
})();

// init().then((res) => {
//   console.log("res", res);
// });

// block
//   .validate()
//   .then((res) => {
//     console.log("block validation", res);
//   })
//   .catch((err) => console.log(err));

// block.getBData().then((res) => {
//   console.log("res", res);
// });
