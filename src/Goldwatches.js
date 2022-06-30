import { BiRupee } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Goldwatches() {
  const history = useHistory();
  return (
  <div>
    <div style={{margin:"30px"}}>
  <img style={{width:"65%",height:"430px",marginLeft:"250px",borderRadius:"12px",objectFit:"cover"}} src="https://wallpaperaccess.com/full/1751490.jpg"></img>
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
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128238-0076.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 36</h5>
   <p>oyster,36 mm ,yellowgold</p> 
   <p><BiRupee/>3,78,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128345rbr-0052.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>DAY-DATE 36</h5>
   <p>oyster,40 mm ,Everose gold</p>
   <p><BiRupee/>4,77,000</p> 
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
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m50535-0002.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>CELLINI MOONPHASE</h5>
   <p>oyster,42 mm ,yellowgold</p> 
   <p><BiRupee/>4,79,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m326238-0009.png?impolicy=v6-upright&imwidth=420"></img>
    <h5>SKY-DWELLWER</h5>
   <p>oyster,41 mm ,yellowgold</p> 
   <p><BiRupee/>4,82,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  </div>
  </div>
  );
}
