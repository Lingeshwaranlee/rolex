import { BiRupee } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Gemset() {
  const history = useHistory();
  return(
  <div>
  <div style={{margin:"30px"}}>
<img style={{width:"65%",height:"430px",marginLeft:"250px",borderRadius:"12px",objectFit:"cover"}} src="https://i1.wp.com/www.luxuschrono.com/wp-content/uploads/2021/12/m116519ln-0038_1280x768.jpeg?fit=1280%2C768&ssl=1"></img>
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
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m228398tbr-0036.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 40</h5>
   <p>oyster,40 mm ,yellowgold</p> 
   <p><BiRupee/>5,78,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128345rbr-0052.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 36</h5>
   <p>oyster,40 mm ,Everose gold</p>
   <p><BiRupee/>6,77,000</p> 
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m279458rbr-0001.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>LADY-DATEJUST</h5>
   <p>oyster,40 mm ,yellowgold</p>
   <p><BiRupee/>7,75,500</p> 
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m228345rbr-0016.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 40</h5>
   <p>oyster,42 mm ,Everose gold</p> 
   <p><BiRupee/>4,79,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128348rbr-0037.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 36</h5>
   <p>oyster,42 mm ,yellow gold</p> 
   <p><BiRupee/>5,82,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  </div>
</div>
);
}

