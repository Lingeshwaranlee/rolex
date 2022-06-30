import { BiRupee } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Menwatches() {
  const history = useHistory();
  return (
    <div>
      
      <div style={{ margin: "30px" }}>
        <img
          style={{ width: "70%", marginLeft: "250px", borderRadius: "12px" }}
          src="https://content.rolex.com/dam/2022/bg/showcase-overlay-landscape.png?impolicy=v6-model-showcase&c1path=/dam/2022/showcase/m126900-0001.jpg&sc1=0.498&imwidth=1080"
        ></img>
        <div className="centered2">CONTACT AN OFFICIAL ROLEX DEALER</div>
        <div className="centered3">
          The Rolex Collection features both Classic and Professional Watches
          available in a variety of material,dials,bracelets and sizes to suit
          all wrists and styles
        </div>
      </div>
      <h4 style={{ fontSize: "40px", padding: "20px", textAlign: "center" }}>
        YOU MAY ALSO LIKE
      </h4>
      <div className="rolex-list">
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126711chnr-0002.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>GMT-MASTER 11</h5>
          <p>
            oyster,41 mm ,oystersteel <br></br>and Everose gold
          </p>
          <p>
            <BiRupee />
            92,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126900-0001.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>AIR-KING</h5>
          <p>
            oyster,40 mm ,oystersteel<br></br>,NEW MODEL 2022
          </p>
          <p>
            <BiRupee />
            78,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m226658-0001.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>YACHT-MASTER 42</h5>
          <p>oysTer,40 mm ,oystersteel<br></br> and gold</p>
          <p>
            <BiRupee />
            77,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126233-0039.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>DATEJUST 36</h5>
          <p>
            oyster,36 mm ,oystersteel
          </p>
          <p>
            <BiRupee />
            75,500
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m116519ln-0038.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>COSMOGRAPH DAYTONA</h5>
          <p>oyser,42 mm ,white gold</p>
          <p>
            <BiRupee />
            79,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m326238-0009.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>SKY DWELLER</h5>
          <p>oyser,42 mm ,Yellow gold</p>
          <p>
            <BiRupee />
            82,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m50535-0002.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>MILGAUSS</h5>
          <p>oyser,40 mm ,oystersteel</p>
          <p>
            <BiRupee />
            82,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m116400gv-0002.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>CELLINI MOONPHASE</h5>
          <p>oyser,39 mm ,Everosegold</p>
          <p>
            <BiRupee />
            82,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
        <div className="zoom" style={{ textAlign: "center" }}>
          <img
            className="poster-modal1"
            src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m226570-0001.png?impolicy=v6-upright&imwidth=420"
          ></img>
          <h5>EXPLORER 11</h5>
          <p>oyser,41 mm ,oystersteel</p>
          <p>
            <BiRupee />
            82,000
          </p>
          <Button variant="contained" style={{color:"white",backgroundColor:"crimson"}}  onClick={() => history.push("/book")}>AddToCart</Button>
        </div>
      </div>
      <div style={{marginLeft:"40px"}}>
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
    </div>
  );
}
