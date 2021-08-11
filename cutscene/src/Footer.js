import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import instagram_icon from './instagram_icon.png';
import twitter_icon from './twitter_icon.png';
import discord_icon from './discord_icon.png';

function Footer() {

  return (
<div className="position-bottom">
  <Navbar bg="light" variant="light" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
  <a href="https://www.instagram.com/cutscene.gg/" target="_blank"><Image src={instagram_icon} alt="instagram_icon" width="25px" height="25px" style={{marginRight:"25px"}}/></a>
  <a href="https://twitter.com/cutscene_gg" target="_blank"><Image src={twitter_icon} alt="twitter_icon" width="25px" height="25px" style={{marginRight:"25px"}}/></a>
  <a href="https://discord.gg/prZKptb8VB" target="_blank"><Image src={discord_icon} alt="discord_icon" width="25px" height="25px"/></a>
  </Navbar>
</div>
);
}

export default Footer;
