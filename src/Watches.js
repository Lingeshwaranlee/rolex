import { useHistory } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export function Watches() {
  const history = useHistory();
  
  return(
     <div>
       <div >
      <div className="hover">
        <div>
          <img
            style={{ width: "800px", height: "440px", objectFit: "cover" }}
            src="https://www.wallpaperflare.com/static/59/592/881/rolex-submariner-116610-watches-classic-wallpaper.jpg"
          ></img>
        </div>
        <div
          style={{
            background: "black",
            color: "white",
            paddingTop: "50px",
            paddingLeft: "100px",
            height: "440px",
            width:"100%",
          }}
        >
          <h1 style={{ color: "crimson" }}>ROLEX ANALOG</h1>
          <h4 className="test" style={{ lineHeight: "30px", color: "white" }}>
          Rolex offers a wide range of models ranging from professional to classic watches to suit any wrist.Explore the Rolex collection by selecting your favourite models, materials, bezels, dials and bracelets to find the watch that was made for you.
            <br></br>
            <h2>
              More About
              <IconButton style={{ marginTop: "1px", color: " white" }}>
                <ArrowForwardIcon />
              </IconButton>
              <span style={{ color: "crimson" }}>ROLEX</span>
            </h2>
          </h4>
        </div>
      </div>
      </div>
    
      <div className="text">
      <h4 style={{paddingleft:"90px"}}>CLASSIC WATCHES</h4>
      <div className="rolex-list">
      <div className='zoom'>
    <img className='poster-modal' src='https://manofmany.com/wp-content/uploads/2022/04/1-Rolex-Day-Date-40-Platinum.jpg'onClick={() => history.push("/DAY-DATE")} ></img>
    <p>DAY-DATE</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal' src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9sZXh8ZW58MHx8MHx8&w=1000&q=80"onClick={() => history.push("/DATE-JUST")} ></img>
    <p>DATE-JUST</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal' src="https://content.rolex.com//dam/new-watches-2022/media/wallpapers/datejust/m126233-0039_1280x768.jpg"onClick={() => history.push("/OYSTER-PERPETUAL")} ></img>
    <p>OYSTER PERPETUAL</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal' src="https://content.rolex.com//dam/media/wallpapers/lady-datejust/m279138rbr-0015_1280x768.jpg"onClick={() => history.push("/LADY-DATEJUST")} ></img>
    <p>LADY-DATEJUST</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal' src="https://monochrome-watches.com/wp-content/uploads/2017/05/Rolex-Sky-Dweller-Steel-326934-5.jpg" onClick={() => history.push("/SKY-DWELLER")} ></img>
    <p> SKY-DWELLER</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal' src="https://c8.alamy.com/comp/2BX1F2Y/rolex-cellini-moon-phase-mens-wrist-watch-wit-brown-strap-2BX1F2Y.jpg" onClick={() => history.push("/CELLINI")} ></img>
    <p>CELLINI</p>
     </div>
     </div>
     <div style={{marginLeft:"120px"}}>
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
          <h1 style={{ color: "crimson" }}>YACH-MASTER II</h1>
          <h4 className="test" style={{ lineHeight: "30px", color: " white" }}>
          THE OYSTER PERPETUAL GMT-MASTER II IN 18 CT WHITE GOLD WITH AN OYSTER BRACELET.This model features a meteorite dial and a two-colour Cerachrom bezel insert in red and blue ceramic. Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master II has come to be recognized for its robustness and versatile appearance.
            <br></br>
            <br></br>
            <h2>
              More About{" "}
              <IconButton style={{ marginTop: "1px", color: " white" }}>
                <ArrowForwardIcon />
              </IconButton>
              <span style={{ color: "crimson" }}>YACH-MASTER</span>{" "}
            </h2>
          </h4>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "440px", objectFit: "cover" }}
            src="https://monochrome-watches.com/wp-content/uploads/2017/05/Rolex-Yacht-Master-II-116680-2017-Version-5.jpg"
          ></img>
        </div>
      </div>
      </div>


     <div className="fog">
        <div style={{ paddingLeft: "150px" }}>
          <img
            style={{ width: "600px", height: "400px", objectFit: "cover",borderRadius:"12px" }}
            src="https://wallpapercave.com/wp/wp8818755.jpg"
          ></img>
        
        </div>
        <div>
          <img
            style={{ width: "600px", height: "400px", objectFit: "cover",borderRadius:"12px"  }}
            src="https://c0.wallpaperflare.com/preview/132/387/717/rolex-gmt-master-blnr.jpg"
          ></img>
        
        </div>
      </div>
    <div>
      <img style={{width:"100%",height:"500px",objectFit:"cover"}} src='https://content.rolex.com/dam/new-watches-2022/family-pages/sea-dweller/family-page-sea-dweller-deepsea-beauty_m136660_0003.jpg?imwidth=1920'></img>
    </div>
      </div>
      </div>
  );
}


