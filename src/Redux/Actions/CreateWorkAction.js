
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { workTypes } from '../Types/workTypes'
import { useSelector } from 'react-redux'




export const listaProductosAsync = () =>{
    return async (dispatch)=>{
        const collectionListar = await getDocs(collection(db, "productos"))  
        console.log(collectionListar)
        const Citas= []
        collectionListar.forEach(lista =>{
            Citas.push({
                ...lista.data()
            })
        })
        console.log(Citas)
        dispatch(listaProdSync(Citas))
    }
}
export const listaProdSync = (Cita)=>{
        return{
            type: workTypes.read,
            payload: Cita
        }
}