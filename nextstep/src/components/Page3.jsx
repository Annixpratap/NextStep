import { useState } from "react";
import { Link } from "react-router-dom";
import healthcare from "../assets/job.svg";
import gov from "../assets/gov.svg";
import edu from "../assets/edu.svg";
import jobs from "../assets/job.svg";
import { motion } from "framer-motion";

export default function Page3() {
  const [hoverIndex, setHoverIndex] = useState(null); // Track hovered card index

  const cardData = [
    {
      title: "Healthcare",
      image: healthcare,

      description:
        "We provide information on healthcare facilities to ensure better medical accessibility for all.",
    },
    {
      title: "Government",
      image: gov,
      description:
        "Stay informed about government policies and schemes that can benefit your career and well-being.",
    },
    {
      title: "Education",
      image: edu,
      description:
        "Explore educational opportunities and resources for students and professionals seeking growth.",
    },
    {
      title: "Jobs",
      image: jobs,
      description:
        "Find job opportunities and career guidance to help you settle in a new city with ease.",
    },
  ];
  return (
    <div>
      <section className="bg-[#f5f0e3] py-16 px-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What we do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoverIndex(index)} // Track hovered card
                onMouseLeave={() => setHoverIndex(null)}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <motion.div
                  animate={{
                    scale: hoverIndex === index ? 1.2 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-40 flex justify-center"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full object-contain"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mt-4 mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
