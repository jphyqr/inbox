const assert = require('assert');
const ganache = require('ganache-cli');

//constructor function 
const Web3 = require('web3');

//ganace creates unlocked accounts for us to test with.. can only deploy a contract with an account
const web3 = new Web3(ganache.provider());
//to deploy contract need access to contraacts byte code
const { interface, bytecode } = require('../compile');


let accounts;
let inbox;
//make async because it uses await 
 beforeEach(async () =>{
 	//Get a list of all accounts

  
   //already have instnace.  web3 has lots of modules, using eth
   //all web3 functions are ASYC. returns a promise
   //in order to execute need to write one test

   // web3.eth.getAccounts()
   // 		.then(fetchedAccounts=> {
   // 			console.log(fetchedAccounts);
   // 		});


   		//insted of then, use await, cleaner
   		//whenever use await, need to make function async
   accounts = await web3.eth.getAccounts();




 	// use one of those accounts to deploy
 	//the contract
 	inbox = await new web3.eth.Contract(JSON.parse(interface))
 		.deploy({data: bytecode, arguments: ['Hi there!']})
 		.send({from: accounts[0], gas: '1000000'})
 });

 //write describe statement so that our before each runs 

 describe('Inbox', () =>{
 	it('deploy a contract', () => {
      console.log(inbox);
 	});
 });