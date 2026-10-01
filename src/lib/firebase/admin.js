import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from './db.js';

export async function getAdminRole(uid){
  if(!db || !uid) return null;
  const snap=await getDoc(doc(db,'users',uid));
  if(!snap.exists()) return null;
  const role=snap.data()?.role;
  return ['admin','owner','superadmin'].includes(role) ? role : null;
}
export async function saveAdminDocument(collectionName,id,data){
  if(!db) throw new Error('Firebase is not configured yet.');
  await setDoc(doc(db,collectionName,id),{...data,updatedAt:new Date().toISOString()},{merge:true});
}
export async function listAdminCollection(collectionName,max=100){
  if(!db) return [];
  const snap=await getDocs(collection(db,collectionName));
  return snap.docs.slice(0,max).map(d=>({id:d.id,...d.data()}));
}
