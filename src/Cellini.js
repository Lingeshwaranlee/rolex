import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BiRupee } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Cellini() {
  const open = [
    {
      profile:
        "https://content.rolex.com/dam/watches/find-your-rolex/quick-filters/diameter-36.jpg",
      name: "36mm",
    },
    {
      profile:
        "https://content.rolex.com/dam/watches/find-your-rolex/quick-filters/diameter-40.jpg",
      name: "40mm",
    },
    {
      profile:
        "https://content.rolex.com/dam/watches/find-your-rolex/quick-filters/alt-18-ct-yellow-gold.jpg",
      name: "Yellow Gold",
    },
    {
      profile:
        "https://content.rolex.com/dam/watches/find-your-rolex/quick-filters/alt-18-ct-pink-gold.jpg",
      name: "Pink Gold",
    },
    {
      profile:
        "https://content.rolex.com/dam/watches/find-your-rolex/quick-filters/alt-18-ct-white-gold.jpg",
      name: "White Gold",
    },
    {
      profile:
        "https://content.rolex.com/dam/watches/find-your-rolex/quick-filters/alt-platinum.jpg",
      name: "Platinum",
    },
  ];
  const history = useHistory();
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", fontSize: "70px" }}>CELLINI</h2>
        <h5 style={{ textAlign: "center" }}>THE ULTIMATE WATCH OF PRESTIGE</h5>
      </div>
      
      <div className="list">
      {open.map((user)=><Key name={user.name} profile={user.profile} />)}
      
    </div>

    <div style={{marginLeft:"110px"}}>
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
          <h1 style={{ color: "crimson" }}>CELLINI
          </h1>
          <h4 className="test" style={{ lineHeight: "30px", color: " white" }}>
          THE OYSTER PERPETUAL GMT-MASTER II IN 18 CT WHITE GOLD WITH AN OYSTER BRACELET.This model features a meteorite dial and a two-colour Cerachrom bezel insert in red and blue ceramic. Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master II has come to be recognized for its robustness and versatile appearance.
            <br></br>
            <br></br>
            <h2>
              More About
              <IconButton style={{ marginTop: "1px", color: " white" }}>
                <ArrowForwardIcon />
              </IconButton>
              <span style={{ color: "crimson" }}>CELLINI</span>
            </h2>
          </h4>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "440px", objectFit: "cover" }}
            src="https://wallpaperaccess.com/full/800447.jpg"
          ></img>
        </div>
      </div>
      </div>

      <div className="rolex-list">
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m50535-0002.png?imwidth=420"
          ></img>
          <h5>CELLINI MOONPHASE</h5>
          <p>oyser,39mm ,Everrose gold</p>
          <p>
            <BiRupee />
            92,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
       </div>
       <div style={{ margin: "30px" }}>
        <img
          style={{ width: "70%", marginLeft: "250px", borderRadius: "12px" }}
          src="https://content.rolex.com/dam/2022/bg/showcase-overlay-landscape.png?impolicy=v6-model-showcase&c1path=/dam/2022/showcase/m50535-0002.jpg&sc1=0.498&imwidth=1080"
        ></img>
        <div className="centered9">CONTACT AN OFFICIAL ROLEX DEALER</div>
        <div className="centered10">
          The Rolex Collection features both Classic and Professional Watches
          available in a variety of material,dials,bracelets and sizes to suit
          all wrists and styles
        </div>
      </div>
      <h4 style={{ fontSize: "40px", padding: "20px", textAlign: "center" }}>
        YOU MAY ALSO LIKE
      </h4>
      <div className='fog' >
  <div style={{paddingLeft:"150px"}}>
    <img style={{width:"600px",height:"400px",objectFit:"cover",borderRadius:"12px"}} src='https://content.rolex.com/dam/model-page/gallery/m50535-0002/model-page-cellini-m50535-0002_1712jva_001_r_large_1.jpg?imwidth=2880'></img>
  
  </div>
  <div><img style={{width:"600px",height:"400px",objectFit:"cover",borderRadius:"12px"}}  src='https://content.rolex.com/dam/model-page/gallery/m50535-0002/model-page-cellini-m50535-0002_1701ac_007_large_3.jpg?imwidth=2880'></img></div>
  
  
</div>
    </div>
  );
}
function Key({ profile, name }) {
  return (
    <div className="zoom1">
      <img    className="poster-modal3"src={profile}></img>
      <h4>{name}</h4>
    </div>
  );
}

   