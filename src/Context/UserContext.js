import { createContext, useState } from "react";

export const UserContext = createContext();

// TODO Context necesita un Provider el cual se encargue de poder
// guardar y retornar la informacion que guardemos en context
export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [basket,setBasket]=useState(
    JSON.parse(localStorage.getItem("basket")) ?? []
  );

  const storeUser=(dataUser)=>{
localStorage.setItem("user",JSON.stringify(dataUser));
setUser(dataUser);
  }

//Ahora vamos a guardar el obj. de cada producto:

const storeBasket =(product)=>{
  //basket será un array de objetos
  setBasket([...basket,product]);
  localStorage.setItem("basket",JSON.stringify([...basket,product]));
 };

 
  //Otra forma, a tener en cuenta:
  // if (basket === null) {
    //   const dataToStorage = [product];
    //   setBasket(dataToStorage);
    //   localStorage.setItem("basket", JSON.stringify(dataToStorage));
    // } else {
    //   const dataToStorage = [...basket, product];
    //   setBasket(dataToStorage);
    //   localStorage.setItem("basket", JSON.stringify(dataToStorage));
    // }
 

  const deleteElementFromBasket = (id) => {
    const productIndex = basket.findIndex((bas) => bas.id === id);
    const newBasket = basket.splice(productIndex, 1);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  return (
    <UserContext.Provider value={{ user, storeUser, basket, storeBasket }}>
      {props.children}
    </UserContext.Provider>
  );
};

