import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {
         characters.map((character)=> {
            return  <Card 
               key = {character.id}
               name = {character.name}
               species = {character.species}
               gender = {character.gender}
               image = {character.image}
               origin = {character.origin.name}
               status = {character.status}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         } )
      }
   </div>
)}
