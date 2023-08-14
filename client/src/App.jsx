import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import abi from "./contractJson/chai.json"
import './App.css'
import { ethers } from 'ethers'
import Memos from "./components/Memos"
import Buy from "./components/Buy"
import './App.css'
import chai from "./chai.png"

function App() {
  const[state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  });
  const [account,setAccount]=useState("Not Connected");

  useEffect(()=>{
    const template=async()=>{
      const contractAddress="0xe3B58a081fc6142E82550a578EF0aB9Ba14e0434";
      const contractABI=abi.abi;

      //metamask part helps to
      //1.Do transaction 
      //2. infura api helps to connect to blockchains

      //const {matics}=window;
      try{
        const {ethereum}=window;

        const account= await ethereum.request({
          method:"eth_requestAccounts"
        })
        window.ethereum.on("accounsChanged",()=>{
          window.location.reload();
        })
        setAccount(account);
        const provider=new ethers.providers.Web3Provider(ethereum);//read the blockchain
        const signer=provider.getSigner();//write the blockchain

        const contract =new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        console.log(contract);
      setState({provider,signer,contract});
      }catch(error){
        alert(error);
      }
      
    }
    template()
  },[])
  return (
    <div className='container' >
      <div className='center-image'>
      <img src={chai} className="img-fluid" alt=".." width="50%" height="150%"  />
      </div>
    <p style={{ marginTop: "10px", marginLeft: "5px",textAlign:"center" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App
