import cod from './cod.jpg'
import pp from './pp.jpg'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';


function BrowsePage() {
  return (
      <div>
        <br/>
        <br/>
        <Card onClick={console.log('Click happened')} style={{width: '15rem', cursor: "pointer"}}>
            <Card.Img variant="top" src={cod} />
            <Card.Body>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Card.Title>Crazzzyy Run</Card.Title>
                $45
                </div>
                <div className="mb-1 text-muted" style={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
                <Image src={pp} roundedCircle style={{maxWidth:"20px", maxHeight:"20px"}}/>
                <Card.Subtitle>
                @frez9
                </Card.Subtitle>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Card.Text>
                Call of Duty
                </Card.Text>
                {abbreviateNumber(174672, 1)} views
                </div>
            </Card.Body>
        </Card>
    </div>
  );
  }

export default BrowsePage;
