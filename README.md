# zktree-vote
Anonymous voting on Ethereum blockchain using zero knowledge proof

## Usage

- Clone the repository by `git clone https://github.com/nhancv/zktree-vote.git`
- Install wget (by `apt-get install wget` on Ubuntu/Debian)
- Install the project dependencies and prepare by `yarn install` in the project directory
- Start a Hardhat node by `npx hardhat node` in the project directory to another terminal
- In another terminal deploy the smart contract by `yarn deploy`
- Start the app by `yarn start`

The app uses MetaMask to connect the blockchain, so the MetaMask extension have to be installed, and connected to the Hardhat local node. The smart contract owner is the first Hardhat account, and the second account is set as a validator by the deployment script.

For more details, please read my article on [Medium](https://thebojda.medium.com/how-i-built-an-anonymous-voting-system-on-the-ethereum-blockchain-using-zero-knowledge-proof-d5ab286228fd)

## Demo

- TREE_LEVELS = 20 => Max commitment can be added = 2 ** TREE_LEVELS = 1,048,576 items
- Click 'Registration to vote' button -> You see "your commitment" data will be generated randomly -> Click 'Copy to clipboard' -> Back
- Connect Metamask to 'Validator wallet': Default the validator is index #1
- Click 'Validator tool' -> Paste the commitment data copied above to 'commitment', you can type any unique value for 'unique hash' -> Click 'Send to blockchain' -> Confirm Metamask -> Back
- Connect Metamask to 'User wallet'
- Click 'Vote' -> Select option and 'Send to blockchain' -> Confirm Metamask
- You can try to Duplicate Vote to see the error msg

=> The demo prove that:
+ `[off-chain]` User generates a public commitment data (numbers)
+ `[on-chain]` Validator (the 2nd hardhat account index#1 as a validator) submit that user's commitment to blockchain
+ `[off-chain]` User generates nullifier hash, Merkle root and ZK Proofs by commitment data
+ `[on-chain]` User create vote transaction with generated data set (nullifier + merkle root + zk proofs) above which seem unlink anything to the public 'commitment' data
+ The `Verifier.sol` and `ZKTreeVote.sol` are seperated context, unlink data. But default `ZKTreeVote` need an instance of `Verifier` on same-chain to complete the app logic.
+ To verify a valid 'nullifier' purpose only, you can deploy `Verifier.sol` elsewhere on another chain.
