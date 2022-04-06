import {initializeApp} from "firebase/app";
import {getFirestore,collection,getDocs,doc,setDoc,updateDoc,deleteDoc} from "firebase/firestore/lite";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendEmailVerification,} from "firebase/auth"
import { v4 as uuidv4 } from "uuid";



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


//Vamos a recibir como parametro un objeto que contenga la informacion
//del producto que estamos creando,product.name hace las veces de id
export const storeProductClothe = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};


// actualizar un datos en firebase
export const updateProductClothe = async (id, product) => {
  const productRef = doc(db, "product_clothes", id);

  await updateDoc(productRef, product);
};
// eliminar un registros de la db
export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

// vamos a crear una funcion qu reciba un email y password
// y cree un cuenta en firebase
export const auth = getAuth();
//esta funcion enviara el correo de verificacion
export const sendEmail=async ()=>{
const send = await sendEmailVerification(auth.currentUser);
return send ;
};

export const updateUserProfile = async (profile) => {
  try {
    await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: "success",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};
export const storeUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    console.log(error.message);
    return {
      ok: false,
      data: error.message,
    };
  }
};
export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};