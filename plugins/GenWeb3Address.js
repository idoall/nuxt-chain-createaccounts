// 全局方法
import Vue from 'vue'
import Web3 from 'web3'
import * as Bip39 from "bip39";
import * as bs58 from "bs58";
const solanaWeb3 = require('@solana/web3.js');

let SOLWeb3Address = {
  install(Vue) {
    Vue.prototype.$genSolAddress = function (createNum) {
      var accountArray = []
      //   var rpcUrl = "https://api.devnet.solana.com";
      //   var connection = new solanaWeb3.Connection(rpcUrl, 'confirmed');
      for (var i = 0; i < createNum; i++) {
        const generatedMnemonic = Bip39.generateMnemonic();
        //   console.log("generatedMnemonic助记词:", generatedMnemonic); // 助记词
        const seed = Bip39.mnemonicToSeedSync(generatedMnemonic).slice(0, 32);
        //   console.log("seed用于创建秘钥的种子（截取后）:", seed)
        // let keypair = web3.Keypair.generate();
        // let payer = web3.Keypair.generate();
        // let connection = new web3.Connection(web3.clusterApiUrl('testnet'));

        // let airdropSignature = await connection.requestAirdrop(
        //   payer.publicKey,
        //   web3.LAMPORTS_PER_SOL,
        // 从助记词中创建
        let keyPair = solanaWeb3.Keypair.fromSeed(seed);
        //   console.log("keyPair根据秘钥创建的KeyPair对象:", keyPair)

        //   const bytes = Uint8Array.from(keyPair.secretKey)
        //   console.log("keyPair:", bs58.encode(bytes))
        // 随机生成
        // const keyPair = solanaWeb3.Keypair.generate();
        //   console.log("Public Key/钱包地址:", keyPair.publicKey.toString()); // 钱包地址
        //   console.log("Secret Key Base58/bs58格式私钥，也可用于导入:", bs58.encode(Uint8Array.from(keyPair.secretKey))); //  bs58格式私钥，也可用于导入
        //   console.log("Secret Key/私钥:", keyPair.secretKey) // 私钥

        //   const feePayer = solanaWeb3.Keypair.fromSecretKey(bs58.decode(bs58.encode(Uint8Array.from(keyPair.secretKey))));
        //   console.log("feePayer:",feePayer)

        //   // let tokenAccount1Pubkey = new PublicKey(keyPair.publicKey.toString());
        //   // let tokenAccount = await getAccount(connection, keyPair.secretKey);
        //   // console.log("tokenAccount", tokenAccount);

        //   let keypair = solanaWeb3.Keypair.fromSecretKey(keyPair.secretKey);
        //   let airdropSignature = await connection.requestAirdrop(
        //     keypair.publicKey,
        //       solanaWeb3.LAMPORTS_PER_SOL,
        //   );
        //   await connection.confirmTransaction(airdropSignature);
        //   let balance = await connection.getBalance(keypair.publicKey);
        //   console.log(`balance: ${balance}`);

        accountArray.push({
          mnemonic: generatedMnemonic,
          bs58: bs58.encode(Uint8Array.from(keyPair.secretKey)),
          address: keyPair.publicKey.toString(),
          privateKey: new String(keyPair.secretKey)
        })
      }
      return accountArray;
    };
    

    // 生成以太坊地址
    Vue.prototype.$genEthAddress = function (createNum) {
      var accWeb3 = new Web3()
      var accountArray = []
      for (var i = 0; i < createNum; i++) {
        accountArray.push(accWeb3.eth.accounts.create(accWeb3.utils.randomHex(32)))
      }
      return accountArray;
    };
    Vue.prototype.$she = 'lijianhua'
  }
}
Vue.use(SOLWeb3Address);
