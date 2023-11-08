import { app } from "@/config/firebase";
import { Project } from "@/types/project";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore(app);

export const getData = async () => {
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

export const getProject = async (projectTitle: string) => {
  const dataRef = collection(db, "projects");
  const datas = query(dataRef, where("title", "==", projectTitle));
  const querySnapshot = await getDocs(datas);

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

export const projectSubscribe = () => {
  const q = query(collection(db, "projects"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      const project: Project = {
        cover: doc.data().cover,
        description: doc.data().description,
        github: doc.data().github,
        id: doc.data().id,
        image: doc.data().image,
        tags: doc.data().tags,
        title: doc.data().title,
        url: doc.data().url,
      };
      projects.push(project);
    });
    console.log(projects);
  });
  return unsubscribe
};
