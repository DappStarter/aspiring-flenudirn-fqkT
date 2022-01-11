require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain snow grace inhale flip spoil'; 
let testAccounts = [
"0x95a3927d249c2607bbb760a2a511c150193883ac69ebb8bbed6787008991f0b9",
"0x53813ad0dc67c650dcb70471d15cbe13b6de64a02720227a3e9125c99cdef60b",
"0xb1baf66ac58d7d5807e59c9f07e712048a8dda70ce3317cc5e7184f8db9c00bb",
"0x52ede329d83bc99e3f41890539819e03c5c67a07b2a29deac2e1c7db4beb1645",
"0x46feef5b12750c77ebeb6ea1530ae0090baa580559bbff817477cf7d9cf50526",
"0x33cf9637ef506bfb36d4c4c1c81fe81bdee360e9fdb427e2608800a7609cc547",
"0x4e173602e652f1128840db13e033da742f5e59734ccf71b6837eb14503f1b930",
"0xa987d778318c41894b00ae608b3d9a21f5b6a9086fac155297b8c8a67d39f7cb",
"0x9fd3b6d6cb53c7e67009ee367135f3a7491b498f391a5eb62eb62e627f7f54e0",
"0xa4fdbb49b5cdd6daed48c3d76723e14c054d48f882f2b8626b453e9894a53a53"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


