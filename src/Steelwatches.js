import { BiRupee } from 'react-icons/bi';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { textAlign } from '@mui/system';
export function Steelwatches() {
  const history = useHistory();
  return(
    <div>
<div style={{margin:"30px"}}>
  <img style={{width:"65%",height:"430px",marginLeft:"250px",borderRadius:"12px",objectFit:"cover"}} src="https://wallpaper.dog/large/20486862.jpg"></img>
  
  </div>
  <h4 style={{fontSize:"40px",padding:"20px",textAlign:'center'}}>YOU MAY ALSO LIKE</h4>
  <div className="rolex-list">
    <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124060-0001.png?imwidth=380-"></img>
    <h5>SUBMARINER</h5>
   <p>oyser,41 mm ,oystersteel</p> 
   <p><BiRupee/>92,000</p>
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
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126720vtnr-0001.png?imwidth=380"></img>
    <h5>GMT-MASTER 11</h5>
   <p>oyser,40 mm ,oystersteel</p>
   <p><BiRupee/>77,000</p> 
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m116400gv-0001.png?imwidth=380"></img>
    <h5>MILAUSS</h5>
   <p>oyser,40 mm ,oystersteel</p>
   <p><BiRupee/>75,500</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button> 
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m226570-0002.png?imwidth=380"></img>
    <h5>EXPLORER 11</h5>
   <p>oyser,42 mm ,oystersteel</p> 
   <p><BiRupee/>79,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  <div className='zoom' style={{textAlign:"center"}}>
    <img className='poster-modal1' src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124270-0001.png?imwidth=380"></img>
    <h5>EXPLORER</h5>
   <p>oyser,41 mm ,oystersteel</p> 
   <p><BiRupee/>82,000</p>
   <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
  </div>
  </div>
  </div>
  ) 
} 
