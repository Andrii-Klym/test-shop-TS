import { Product } from "./components/product";
import { useAxious } from "./hooks/useAxious";

function App() {
  const {products, error, loading} = useAxious()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{ error }</p>}
      { products.map(product => <Product product={product} key={product.id} />)}
    
    </div>
  )
  
}

export default App;
