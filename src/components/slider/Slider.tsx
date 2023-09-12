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
  itemList: Project[];
}

export default function Slider({ className, itemList }: Props) {
  const [index, setIndex] = useState(0);

  const handleChange = (e: any) => {
    setIndex(e.activeIndex);
  };

  const {ref, inView}= useInView({
    rootMargin : "-50px",
    triggerOnce : true
  })

  return (
    <div  className={`project-preview ${inView && "project-visible"}`} >
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
            className={`next ${index === itemList.length - 1 && "inactive"}`}
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
              {itemList.map((element, index) => (
                <SwiperSlide key={index}>
                  <div className="capture">
                    <Image src={element.cover} alt={element.title} fill />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
      <ProjectDescription project={itemList[index]} />
    </div>
  );
}
