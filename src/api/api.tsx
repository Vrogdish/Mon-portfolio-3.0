import { app } from "@/config/firebase";
import { Project } from "@/types/project";
// import { FormData } from "@/hooks/form/Form";
import { addDoc, collection,    getDocs, getFirestore, query,  setDoc,  where } from "firebase/firestore";

const db = getFirestore(app);

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const result = querySnapshot.docs.map((doc)=>doc.data())

  const projects : Project[] = []
  result.map((elem)=>{
    const project = {
        cover : elem.cover,
        description : elem.description,
        github : elem.github,
        id : elem.id,
        image : elem.image,
        tags : elem.tags,
        title : elem.title,
        url : elem.url
    }
    projects.push(project)
  })

  
  return projects
}


export const getProject = async (projectTitle : string) =>{
  const dataRef = collection(db, "projects");
  const datas = query(dataRef, where("title", "==", projectTitle));
  const querySnapshot = await getDocs(datas);

  const result = querySnapshot.docs.map((doc) => doc.data());

  const projects : Project[] = []
  result.map((elem)=>{
    const project = {
        cover : elem.cover,
        description : elem.description,
        github : elem.github,
        id : elem.id,
        image : elem.image,
        tags : elem.tags,
        title : elem.title,
        url : elem.url
    }
    projects.push(project)
  })

  return projects
  };


//   export const PostMessage = async (data : FormData) => { 
//     const docRef = await addDoc(collection(db, "comments"), {
//       firstname : data.firstName,
//       lastname: data.lastName,
//       email: data.email,
//       message:data.message
//     });

//     await setDoc(docRef,data)
    
//   }