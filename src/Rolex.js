import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Footer } from "./Footer";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function Rolex() {
  const history = useHistory();
  
  return (
  <div>
    <div>
  <img style={{width:"100%",height:"700px",objectFit:"cover"}} src="https://www.hdwallpapers.in/download/gold_oyster_perpetual_gmt_master_ii_rolex_watch_hd_rolex-HD.jpg"></img>
  <div className="centered">ROLEX WATCHES</div>
  <div className="centered1"><Button variant="contained" style={{backgroundColor:'black'}} onClick={() => history.push("/watches")}>THE COLLECTIONS</Button></div>
   
    </div>
  
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
    <div style={{marginLeft:"40px"}}>
    <div className="hover1" style={{ padding: "2px" }}>
        <div
          style={{
            background: "black",
            color: " white",
            paddingTop: "50px",
            paddingLeft: "100px",
            height: "440px",
          }}
        >
          <h1 style={{ color: "crimson" }}>GMT-MASTER II</h1>
          <h4 className="test" style={{ lineHeight: "30px", color: " white" }}>
          THE OYSTER PERPETUAL GMT-MASTER II IN 18 CT WHITE GOLD WITH AN OYSTER BRACELET.This model features a meteorite dial and a two-colour Cerachrom bezel insert in red and blue ceramic. Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master II has come to be recognized for its robustness and versatile appearance.
            <br></br>
            <br></br>
            <h2>
              More About{" "}
              <IconButton style={{ marginTop: "1px", color: " white" }}>
                <ArrowForwardIcon />
              </IconButton>
              <span style={{ color: "crimson" }}>GMT MASTER</span>{" "}
            </h2>
          </h4>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "440px", objectFit: "cover" }}
            src="https://content.rolex.com/dam/watches/family-pages/gmt-master-ii/professional-watches-gmt-master-ii_m126710blro-0001_1801ac_003.jpg?imwidth=1920"
          ></img>
        </div>
      </div>
      </div>

      <div className="fog">
        <div style={{ paddingLeft: "150px" }}>
          <img
            style={{ width: "600px", height: "400px", objectFit: "cover",borderRadius:"12px" }}
            src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-m126200-0020_2103jva_002.jpg?imwidth=1920"
          ></img>
        
        </div>
        <div>
          <img
            style={{ width: "600px", height: "400px", objectFit: "cover",borderRadius:"12px"  }}
            src="https://c0.wallpaperflare.com/preview/132/387/717/rolex-gmt-master-blnr.jpg"
          ></img>
        
        </div>
      </div>
      <img style={{width:"100%",height:"450px",objectFit:"cover"}} src="https://www.baselworld.com/-/media/mch/baselworld/portal/images/content/news/m226659-0002_1901ac_009_1_header9487.jpg?la=fr&vs=1&hash=4FE20CA94C2A5344826C30AB21D0C73E"></img>
    <div>
        <Footer />
      </div>
    </div>
    );
}


