import { getShoppingCart } from "./fakedb";


const jobLoader=async()=>{
    const loadedProducts = await fetch("/featured data.json");
    const products = await loadedProducts.json();
    const storeCart = getShoppingCart();
    
    let savedCart = [];
    for (const id in storeCart) {
      const matchingId = products.find(product => product.id == id);
      if (matchingId) {
        const quantity = storeCart[id];
        matchingId.quantity = quantity;
        savedCart.push(matchingId);
      }
    }
    return savedCart;
}
export default jobLoader;
