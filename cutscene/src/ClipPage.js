import 'bootstrap/dist/css/bootstrap.css';
import pp from './pp.jpg'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { abbreviateNumber } from 'js-abbreviation-number';
import ReactPlayer from 'react-player';

function ClipPage() {
  return (
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:"75vh"}}>
      <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' playing="true" loop="true" controls="true" />
      <div style={{maxWidth:"450px", minWidth:"450px"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <h3>Blastar Kill!!</h3>
      <h3>$45</h3>
      </div>
      <div className="mb-1 text-muted" style={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
      <Image src={pp} roundedCircle style={{maxWidth:"35px", maxHeight:"35px"}}/>
      <h5>@frez9</h5>
      </div>
      <br />
      <br />
      <h6 className="mb-1 text-muted"><b>Call of Duty: Warzone</b></h6>
      <br />
      <h6>Insane galaclactic warzone run!!Defintiely a world record!!</h6>
      <br />
      <h6><b>{abbreviateNumber(174672, 1)} clip views</b></h6>
      <br />
      <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
      <h6 style={{display:"inline-flex", borderRadius:"2px",backgroundColor:"#DCDCDC", color:"#008000"}}>Earnings</h6>
      <h6 className="text-muted" style={{marginLeft:"2.5px"}}><b>Comming soon!</b></h6>
      </div>
      <div className="d-grid gap-2">
      <br />
      <Button variant="primary" size="lg">Buy Now</Button>
      </div>
      </div>
      </div>
  );
}

export default ClipPage;
