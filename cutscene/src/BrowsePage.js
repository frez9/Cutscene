import cod from './cod.jpg'
import pp from './pp.jpg'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

const list = [
      {"id": 1,"name": "Crazzzyy Run", "image":cod, "price":45, "user":"frez9", "userImg":pp, "game":"Call of Duty", "views":174672},
      {"id": 2,"name": "Fifa Tricks", "image":cod, "price":45, "user":"frez9", "userImg":pp, "game":"FIFA", "views":172},
      {"id": 3,"name": "Finish Him", "image":cod, "price":45, "user":"frez9", "userImg":pp, "game":"Mortal Kombat", "views":4672},
      {"id": 4,"name": "Casual Flex", "image":cod, "price":45, "user":"frez9", "userImg":pp, "game":"Fortnite", "views":17672},
      {"id": 5,"name": "LMAO", "image":cod, "price":45, "user":"frez9", "userImg":pp, "game":"Call of Duty", "views":74672},
      {"id": 6,"name": "Done With this Game", "image":cod, "price":45, "user":"frez9", "userImg":pp, "game":"APEX", "views":174602}
    ]
function BrowsePage() {
  let history = useHistory();
  const [cardList, SetCardList] = useState([]);
  

  useEffect(() => {
    //Backend function here to populate the list. For test purposes using dummy data
    
    SetCardList(list)
  })
  const HandleClick = (id) => {
    let path = `/works/`+ id;
    
    history.push(path);
  }
  return (
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        <br/>
      <br />
      {cardList.map((card) => {
        return (
      
        <Card onClick={() => HandleClick(card.id)} style={{ margin: "3%", width: '15rem', cursor: "pointer" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Card.Title>{card.name}</Card.Title>
              ${card.price}
            </div>
            <div className="mb-1 text-muted" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image src={card.userImg} roundedCircle style={{ maxWidth: "20px", maxHeight: "20px" }} />
              <Card.Subtitle>
                @{card.user}
              </Card.Subtitle>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Card.Text>
                {card.game}
              </Card.Text>
              {abbreviateNumber(card.views, 1)} views
            </div>
          </Card.Body>
            </Card>

          )
      })
      }
    </div>
  );
  }

export default withRouter(BrowsePage);
