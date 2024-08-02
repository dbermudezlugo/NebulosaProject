const ItemListContainer = ({greeting}) => {
    return (
      <div className="container mx-auto mt-4 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-xl text-gray-800">{greeting}</h2>
      </div>
    );
  };
  
  export default ItemListContainer;