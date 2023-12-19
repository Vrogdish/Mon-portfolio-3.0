import { app } from "@/config/firebase";
import { Project } from "@/types/project";
import {
  collection,
  getDocs,
  getFirestore,

} from "firebase/firestore";

const db = getFirestore(app);

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
    };
    projects.push(project);
  });

  return projects;
};

