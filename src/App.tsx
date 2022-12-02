import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product"
import { useAxious } from "./hooks/useAxious";

function App() {
  const {products, error, loading} = useAxious()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      { products.map(product => <Product product={product} key={product.id} />)}
    <Modal />
    </div>
  )
  
}

export default App;
