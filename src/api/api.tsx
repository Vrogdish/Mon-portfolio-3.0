import { app } from "@/config/firebase";
import { Project } from "@/types/project";
import {
  collection,
  getDocs,
  getFirestore,

} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

export const getAllProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const result = querySnapshot.docs.map((doc) => doc.data());

  const projects: Project[] = [];
  result.map((elem) => {
    const project = {
      cover: elem.cover,
      description: elem.description,
      github: elem.github,
      id: elem.id,
      image: elem.image,
      tags: elem.tags,
      title: elem.title,
      url: elem.url,
      rank: elem.rank,
    };
    projects.push(project);
  });

  projects.sort((a, b) => b.rank - a.rank);

  return projects.slice(0, 4);
};

export const getCvUrl = async () => {
  const cvRef = ref(storage, "cv/CV_Gache_Cédric_Développeur_2024-11.pdf");
  const url = await getDownloadURL(cvRef);
  return url;
};

