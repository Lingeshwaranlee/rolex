import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BiRupee } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Datejust() {
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
        <h2 style={{ textAlign: "center", fontSize: "70px" }}>DAY-DATE</h2>
        <h5 style={{ textAlign: "center" }}>THE ULTIMATE WATCH OF PRESTIGE</h5>
      </div>
      
      <div className="list">
      {open.map((user)=><Key name={user.name} profile={user.profile} />)}
      
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
          <h1 style={{ color: "crimson" }}>DATE-JUST
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
              <span style={{ color: "crimson" }}>DATE-JUST</span>
            </h2>
          </h4>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "440px", objectFit: "cover" }}
            src="https://content.rolex.com/dam/watches/family-pages/day-date/video/classic_watches_day-date_tbt_poster_0001_1920x1080.jpg"
          ></img>
        </div>
      </div>
      </div>

      <div className="rolex-list">
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126200-0020.png?imwidth=420"
          ></img>
          <h5>DATE-JUST 40</h5>
          <p>oyser,41 mm ,oystersteel</p>
          <p>
            <BiRupee />
            92,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m278288rbr-0038.png?imwidth=420"
          ></img>
          <h5>DATE-JUST 40</h5>
          <p>oyser,40 mm ,oystergold</p>
          <p>
            <BiRupee />
            78,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m278381rbr-0032.png?imwidth=420"
          ></img>
          <h5>DATE-JUST 40</h5>
          <p>oyser,40 mm ,oystersteel</p>
          <p>
            <BiRupee />
            77,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128238-0069.png?imwidth=420"
          ></img>
          <h5>DATE-JUST 40</h5>
          <p>oyser,40 mm ,oystergold</p>
          <p>
            <BiRupee />
            75,500
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m128239-0023.png?imwidth=420"
          ></img>
          <h5>DATE-JUST 40</h5>
          <p>oyser,42 mm ,oystersteel</p>
          <p>
            <BiRupee />
            79,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124270-0001.png?imwidth=380"
          ></img>
          <h5>DATE-JUST 40</h5>
          <p>oyser,41 mm ,oystersteel</p>
          <p>
            <BiRupee />
            82,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
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

   