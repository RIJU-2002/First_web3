import "./Buy.css";
import {ethers} from "ethers";
const Buy=({state})=>{
    const buyChai=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;
        const amount ={value:ethers.utils.parseEther("0.001")}
        const transaction=await contract.buyChai(name,message,amount)
        await transaction.wait();
        alert("Transaction is successful");
        window.location.reload();
    }
    return<>
        <div className="center">
       <h1>Thanks</h1>
        <form onSubmit={buyChai}>
          <div className="inputbox">
            <input type="text" required="required" id="name" />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="message" />
            <span>Message</span>
          </div>
          <div className="inputbox">
            <input type="submit" value="Pay"  disabled={!state.contract}/>
          </div>
        </form>
          
        </div>
    </>
}
export default Buy;