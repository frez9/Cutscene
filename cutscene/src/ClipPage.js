import 'bootstrap/dist/css/bootstrap.css';
import pp from './pp.jpg'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { abbreviateNumber } from 'js-abbreviation-number';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import react, { useState, useEffect } from 'react';
 

const list = [
      {"id": 1,"name": "Crazzzyy Run", "url":'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', "price":45, "user":"frez9", "userImg":pp, "game":"Call of Duty", "views":174672, "description":"Insane galaclactic warzone run!!Defintiely a world record!!"},
      {"id": 2,"name": "Fifa Tricks", "url":'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', "price":45, "user":"frez9", "userImg":pp, "game":"FIFA", "views":172, "description": "Long Range Golazo"},
      {"id": 3,"name": "Finish Him", "url":'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', "price":45, "user":"frez9", "userImg":pp, "game":"Mortal Kombat", "views":4672, "description": "Shubzero Domination"},
      {"id": 4,"name": "Casual Flex", "url":'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', "price":45, "user":"frez9", "userImg":pp, "game":"Fortnite", "views":17672, "description": "Overhead Kill"},
      {"id": 5,"name": "LMAO", "url":'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', "price":45, "user":"frez9", "userImg":pp, "game":"Call of Duty", "views":74672, "description": "no death"},
      {"id": 6,"name": "Done With this Game", "url":'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', "price":45, "user":"frez9", "userImg":pp, "game":"APEX", "views":174602, "description": "fuck if I know"}
    ]
function ClipPage() {
  let { clipId } = useParams();
  const [clip, SetClip] = useState({});
  

  useEffect(() => {
    //Backend function here to populate the list. 
    //For test purposes using dummy data this will mostlikely be easier with backend code
    //but for now lets get it to run
    let result = list.filter(a => a.id == clipId)
    SetClip(result[0])
  })


  return (
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:"75vh"}}>
      <ReactPlayer url={clip.url} playing="true" loop="true" controls="true" />
      <div style={{maxWidth:"450px", minWidth:"450px"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <h3>{clip.name}</h3>
          <h3>${clip.price }</h3>
      </div>
      <div className="mb-1 text-muted" style={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
      <Image src={clip.userImg} roundedCircle style={{maxWidth:"35px", maxHeight:"35px"}}/>
          <h5>@{ clip.user}</h5>
      </div>
      <br />
      <br />
        <h6 className="mb-1 text-muted"><b>{ clip.game}</b></h6>
      <br />
        <h6>{ clip.description}</h6>
      <br />
      <h6><b>{abbreviateNumber(clip.views, 1)} clip views</b></h6>
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
