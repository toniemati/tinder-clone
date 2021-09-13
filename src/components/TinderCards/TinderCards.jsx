import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import db from '../../firebase';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection('people').onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    });
  }, []);
  
  console.log(people);

  return (
    <div className="tinderCards">
      <h1>tinder cards</h1>

      <div className="tinderCard__cardContainer">
        {people.map((person) => (
          <TinderCard className="tinderCard__swipe" key={person?.id} preventSwipe={['up', 'down']}>
            <div style={{ backgroundImage: `url(${person.url})` }} className="tinderCard__card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
