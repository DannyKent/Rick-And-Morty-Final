export default function SearchBar(props) {
   return (
      <div className="">
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
