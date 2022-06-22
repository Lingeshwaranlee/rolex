import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Footer } from "./Footer";

export function Rolex() {
  const history = useHistory();
  
  return (
  <div>
    <div>
  <img style={{width:"100%",height:"700px",objectFit:"cover"}} src="https://content.rolex.com/dam/watches/watch-on-time-v3/m226659-0002/landscape_big.jpg" alt="profile"></img>
  <div className="centered">ROLEX WATCHES</div>
  <div className="centered1"><Button variant="contained" style={{backgroundColor:'black'}} onClick={() => history.push("/watches")}>THE COLLECTIONS</Button></div>
   
    </div>
    <h2 style={{padding:"30px",backgroundColor:"black",color:"white",textAlign:"center"}}>Rolex offers a wide range of models ranging from professional to classic watches to suit any wrist.</h2>
    <Button variant="contained" style={{backgroundColor:"white", color:"green",marginLeft:"200px",margin:"50px"}} onClick={() => history.push("/watches")}>Watch finder </Button>
    <div className="rolex-list1">
   <div className='zoom'>
    <img className='poster-modal2' src='https://i.insider.com/5b96e4c52badb935f14723a4?width=750&format=jpeg&auto=webp'onClick={() => history.push("/men")} ></img>
    <p style={{textAlign:"center"}}>MEN'S WATCHES</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal2' src="https://h8v2x9r6.rocketcdn.me/wp-content/uploads/2021/07/4a72b6c9a957bbf2e554245be663fdad-1024x1024.png"onClick={() => history.push("/women")} ></img>
    <p style={{textAlign:"center"}}>WOMEN'S WATCHES</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal2' src="https://www.berrysjewellers.co.uk/images/iwc-schaffhausen-pilots-watch-chronograph-edition-le-petit-prince-p7684-35581_image.jpg"onClick={() => history.push("/steel")} ></img>
    <p style={{textAlign:"center"}}>STEEL WATCHES</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal2' src="https://www.mikaeldan.com/35666-superlarge_default/rolex-datejust-gold-stainless-steel-watch-circa-2010.jpg"onClick={() => history.push("/gs")} ></img>
    <p style={{textAlign:"center"}}>STEEL & GOLD</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal2' src="https://i.pinimg.com/736x/7b/93/31/7b93312cd3d6e3503179edc8f88570ae.jpg" onClick={() => history.push("/gold")} ></img>
    <p style={{textAlign:"center"}}> GOLD WATCHES</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal2' src="https://amsterdamvintagewatches.com/wp-content/uploads/2020/01/AVW-Rolex-Daytona-116588TBR-Eye-of-tiger-8-extra.jpg" onClick={() => history.push("/gem")} ></img>
    <p style={{textAlign:"center"}}>GEM SET WATCHES</p>
    </div>
    </div>
    <div>
        <Footer />
      </div>
    </div>
    );
}


