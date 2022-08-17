
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { workTypes } from '../Types/workTypes'
import { useSelector } from 'react-redux'




export const listaProductosAsync = () =>{
    return async (dispatch)=>{
        const ejerciciosCollection = collection(db, "productos")
        const data =await getDocs(ejerciciosCollection)
        console.log(data.docs)
        const ejercicios2=data.docs
    
        const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const ejercicios=info;

       
        const collectionListar = await getDocs(ejerciciosCollection)  
        console.log(collectionListar)
        // const Citas= []
      
        // collectionListar.forEach(lista =>{
        //     Citas.push({
        //         ...lista.data()
           // })
        //})
        console.log(ejercicios)
        dispatch(listaProdSync(ejercicios))
    }
}
export const listaProdSync = (Cita)=>{
        return{
            type: workTypes.read,
            payload: Cita
        }
}