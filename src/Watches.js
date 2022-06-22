import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Watches() {
  const history = useHistory();
  
  return(
     <div>
     <img style={{width:"100%",height:"450px",objectFit:"cover"}} src="https://www.baselworld.com/-/media/mch/baselworld/portal/images/content/news/m226659-0002_1901ac_009_1_header9487.jpg?la=fr&vs=1&hash=4FE20CA94C2A5344826C30AB21D0C73E"></img>
      <div className="text">
      <h2 style={{fontSize:"40px",backgroundColor:"black",color:"white"}}>Explore the Rolex collection of prestigious, high-precision timepieces.</h2>
      <br></br>
      <h4 style={{paddingleft:"90px"}}>CLASSIC WATCHES</h4>
      <div className="rolex-list">
      <div className='zoom'>
    <img className='poster-modal' src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9sZXh8ZW58MHx8MHx8&w=1000&q=80'onClick={() => history.push("/DAY-DATE")} ></img>
    <p>DATE-JUST</p>
    </div>
    <div className='zoom'>
    <img className='poster-modal' src="https://manofmany.com/wp-content/uploads/2022/04/1-Rolex-Day-Date-40-Platinum.jpg"onClick={() => history.push("/DATE-JUST")} ></img>
    <p>DAY-DATE</p>
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
     <img style={{width:"100%",height:"350px",objectFit:"cover"}} src='https://content.rolex.com/dam/homepage/hss/watches/professional-watches/explorer/m124273-0001/homepage-explorer-m124273-0001-posterframe.jpg?imwidth=1920'></img>
      <p  style={{fontSize:"25px"}} >Rolex offers a wide assortment of Oyster Perpetual and Cellini watches to suit any wrist.<br></br> Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.</p>
      </div>
      </div>
  );
}


