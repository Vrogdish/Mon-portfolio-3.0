"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Navigation, Pagination } from "swiper/modules";
import ProjectDescription from "../project-description/ProjectDescription";
import { Project } from "@/types/project";
import "./style.scss";

interface Props {
  className?: string;
  projects: Project[];
}

export default function Slider({ className, projects }: Props) {
  const [index, setIndex] = useState(0);

  const handleChange = (e: any) => {
    setIndex(e.activeIndex);
  };

  const { ref, inView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <div className={`project-preview ${inView && "project-visible"}`}>
      <div className={` slider ${className}`}>
        <div className="navigation">
          <div className={`prev ${index === 0 && "inactive"}`}>
            <Image
              src={"/images/left.png"}
              alt="précedent"
              width={50}
              height={50}
            />
          </div>
          <div
            className={`next ${index === projects.length - 1 && "inactive"}`}
          >
            <Image
              src={"/images/right.png"}
              alt="suivant"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div ref={ref}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onActiveIndexChange={(e) => {
              handleChange(e);
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="capture">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    width={400}
                    height={800}
                    className="capture-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ProjectDescription project={projects[index]} />
    </div>
  );
}
