import {initializeApp} from "firebase/app";
import {getFirestore,collection,getDocs} from "firebase/firestore/lite";
const firebaseConfig = {
    apiKey: "AIzaSyAilrVoEnpu_7MoExlzyfn-gJt9icUnoCg",
    authDomain: "codigo13-5a08d.firebaseapp.com",
    projectId: "codigo13-5a08d",
    storageBucket: "codigo13-5a08d.appspot.com",
    messagingSenderId: "583351653875",
    appId: "1:583351653875:web:d70d29accaef91d32c6e86",
    measurementId: "G-484QCP6D2L"
  };

  const app =initializeApp(firebaseConfig);

  //Iniciar firestore app es la variable que tiene credenciales, y parametrso que unen 
  //nuestro proyecto local react con el proyecto firebase.
  //db=data base, o base de datos.
  const db = getFirestore(app);

  //ahora haremos la petición para traer productos
  export const getProductClothes= async ()=>{
    //paso 1, traer colleccion de datos product_clothes

    const collectionClothes=collection(db,"product_clothes");

    //Ahora traemos los documentos que son 04
    const documentClothes=await getDocs(collectionClothes);
    //Crear variable que guarde doc que stamos obreniendo .docs, tiene el array
    //documentClothes.docs, es la lista de los 04 documentos que estoy obteniendo
    //en la variable clothes obtendre la data donde esta el contenido que necesito
    //es decir la info con name, photo, prices.
    const clothes =documentClothes.docs.map((doc)=>doc.data());
    return clothes
  }