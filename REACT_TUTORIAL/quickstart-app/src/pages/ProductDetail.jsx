import { useParams, useNavigate } from 'react-router-dom';  
import { useState, useCallback } from 'react';  
import { products } from '../data/products';  
import { useCartStore } from '../store/useCartStore';  
import Button from '../components/Button';  
import Toast from '../components/Toast';  
  
export default function ProductDetail() {  
  const { id } = useParams(); // reads the :id from the URL  
  const navigate = useNavigate();  
  const product = products.find((p) => p.id === Number(id));  
  const addToCart = useCartStore((state) => state.addToCart);  
  const [showToast, setShowToast] = useState(false);  
  
  // useCallback: keeps the same function reference across re-renders,  
  // useful here because it's passed down to a child (Button) as a prop  
  const handleAddToCart = useCallback(() => {  
    addToCart(product);  
    setShowToast(true);  
  }, [product, addToCart]);  
  
  if (!product) {  
    return <p className="page">Product not found.</p>; // conditional rendering  
  }  
  
  return (  
    <div className="page">  
      <h2>{product.name}</h2>  
      <p className="card-meta">Sold by {product.seller} in {product.city}</p>  
      <p className="card-price">₹{product.price}</p>  
  
      <div className="btn-group">  
        <Button onClick={handleAddToCart}>Add to Cart</Button>  
        <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>  
      </div>  
  
      <Toast  
        message={`${product.name} added to cart!`}  
        show={showToast}  
        onHide={() => setShowToast(false)}  
      />  
    </div>  
  );  
}  