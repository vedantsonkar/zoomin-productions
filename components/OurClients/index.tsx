"use client";
import { FC } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

import G2 from "@/public/images/clients/G2.webp";
import Bill_Gates_Foundation from "@/public/images/clients/Bill_Gates_Foundation.webp";
import Capacity_Building_Commission from "@/public/images/clients/Capacity_Building_Commission.webp";
import Animal_Husbandry from "@/public/images/clients/Animal_Husbandry.webp";
import Delhi_Police from "@/public/images/clients/Delhi_Police.webp";
import Ministry_of_Education from "@/public/images/clients/Ministry_of_Education.webp";

const OurClientsSection: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsRight: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };
  const variantsLeft: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div className="flex w-full flex-col gap-y-24 py-10" ref={ref}>
      <h3 className="text-center text-[1.8rem] font-bold lg:text-[2.4rem] xl:text-[3rem]">
        People Who Trust Us
      </h3>
      <motion.div
        variants={variantsBottom}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-2 place-items-center gap-14 px-10 md:grid-cols-4 md:px-24"
      >
        <Image src={G2} alt="G2" width={200} height={200} sizes="70vw" />
        <Image
          src={Bill_Gates_Foundation}
          alt="G2"
          width={200}
          height={200}
          sizes="70vw"
        />
        <Image
          src={Capacity_Building_Commission}
          alt="Capacity_Building_Commission"
          width={200}
          height={200}
          sizes="70vw"
        />
        <Image
          src={Animal_Husbandry}
          alt="Animal_Husbandry"
          width={200}
          height={200}
          sizes="70vw"
        />
        <Image
          src={Delhi_Police}
          alt="Delhi_Police"
          width={200}
          height={200}
          sizes="70vw"
        />
        <Image
          src={Ministry_of_Education}
          alt="Ministry_of_Education"
          width={200}
          height={200}
          sizes="70vw"
        />
      </motion.div>
    </div>
  );
};

export default OurClientsSection;
