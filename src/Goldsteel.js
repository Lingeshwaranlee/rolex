import { BiRupee } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Goldsteel() {
  const history = useHistory();
  return (
  <div>
    <div style={{margin:"30px"}}>
  <img style={{width:"65%",height:"430px",marginLeft:"250px",borderRadius:"12px",objectFit:"cover"}} src="https://content.rolex.com//dam/media/wallpapers/sea-dweller/m126603-0001_1280x768.jpg"></img>
  </div>
  <h4 style={{fontSize:"40px",padding:"20px",textAlign:"center"}}>YOU MAY ALSO LIKE</h4>
  <div className="rolex-list">
    <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m116508-0015.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>COSMOGRAPH DAYTONA</h5>
   <p>oyster,40 mm ,yellowgold</p> 
   <p><BiRupee/>5,92,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m116500ln-0002.png?imwidth=380"></img>
    <h5>COSMOGRAPH DAYTONA</h5>
   <p>oyser,40 mm ,oystersteel</p> 
   <p><BiRupee/>78,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128238-0076.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 36</h5>
   <p>oyster,36 mm ,yellowgold</p> 
   <p><BiRupee/>3,78,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
 
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126720vtnr-0001.png?imwidth=380"></img>
    <h5>GMT-MASTER 11</h5>
   <p>oyser,40 mm ,oystersteel</p>
   <p><BiRupee/>77,000</p> 
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m279458rbr-0001.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>LADY-DATEJUST</h5>
   <p>oyster,40 mm ,yellowgold</p>
   <p><BiRupee/>4,75,500</p> 
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124060-0001.png?imwidth=380-"></img>
    <h5>SUBMARINER</h5>
   <p>oyser,41 mm ,oystersteel</p> 
   <p><BiRupee/>92,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  </div>
    </div>
  );
}
