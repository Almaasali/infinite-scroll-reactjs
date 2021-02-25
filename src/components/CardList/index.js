
import Card from "./Card";
import { ShowInnerCard } from "./ShowInnerCard";



const CardList = ({ cards }) => {
  return (
      <ShowInnerCard>
        {cards ? cards.map((c) => <Card key={c.id} card={c}></Card>) : null}
      </ShowInnerCard>
  );
};

export default CardList;
