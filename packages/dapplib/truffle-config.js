require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy reward stereo clump install person equal gather'; 
let testAccounts = [
"0xe67d6b51909b79ac0c28e2c3ee278e73dab68b1c56087408d4a9c0bcb9c37d72",
"0x83fff7c77f6abb65f17e37b11e75d57dd3c15f0a9289e397fab8dcc38157c79a",
"0xfa23581ad3a137445908189cce4c4f13a46405779b6ed027c98326ea02da2cf8",
"0xe8bf6ceddc5e4bf221dd399e912700a69e709f04117c02015b476f044b4e7696",
"0xd262638db34d114745b1108ede05bda99ccb760521b6abd460e2af9131d96d8b",
"0xcd8cd6da94427ee177f89716e0bb832e8ca1495203aaca9ed30a9d4dcc8016e3",
"0xd452cf5d4da5cb54cf53c56243adbe2e8316a2c503cbe0a81ceee0621fa364ac",
"0x1c102810b4dda348b4ab9da5b63655882f0a1b896ce1a35fc2069c1b50c6d895",
"0x5adaa9d9b06aff1611366fb8a5ec928e7da7fca01f019c52cfd86f5ee130fda0",
"0x7317e916230d22cfd330ee7526bc53a5689df73bcdf5e785b520e0b3c6e49539"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
