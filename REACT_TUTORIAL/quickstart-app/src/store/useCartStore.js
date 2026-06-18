import { create } from 'zustand';  
import { persist } from 'zustand/middleware';  
  
export const useCartStore = create(  
  persist(  
    (set, get) => ({  
      cartItems: [],  
  
      // action: adds a product, or increases quantity if it already exists  
      addToCart: (product) => {  
        const existing = get().cartItems.find((item) => item.id === product.id);  
  
        if (existing) {  
          set({  
            cartItems: get().cartItems.map((item) =>  
              item.id === product.id  
                ? { ...item, quantity: item.quantity + 1 }  
                : item  
            ),  
          });  
        } else {  
          set({ cartItems: [...get().cartItems, { ...product, quantity: 1 }] });  
        }  
      },  
  
      // action: removes a product entirely  
      removeFromCart: (productId) => {  
        set({  
          cartItems: get().cartItems.filter((item) => item.id !== productId),  
        });  
      },  
  
      // action: empties the cart after checkout  
      clearCart: () => set({ cartItems: [] }),  
    }),  
    {  
      name: 'quickkart-cart', // the localStorage key — this is what makes it persist  
    }  
  )  
);  