import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface CardProps {
  heading: string;
  description: string;
  imgSrc: string;
}

const ColorChangeCards = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          heading="Design"
          description="Creating beautiful and intuitive user interfaces that engage and delight users."
          imgSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Develop"
          description="Building robust and scalable applications using modern web technologies."
          imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Connect"
          description="Creating seamless integrations and connections between different systems."
          imgSrc="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <Card
          heading="Support"
          description="Providing ongoing maintenance and support to ensure your success."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
      </div>
    </div>
  );
};

const Card = ({ heading, description, imgSrc }: CardProps) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden group relative"
    >
      <div
        className="aspect-[4/3] saturate-0 group-hover:saturate-100 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-white text-2xl font-semibold overflow-hidden">
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <FiArrowRight className="text-white text-2xl opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-500" />
        </div>
        <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) =>  {
  return (
    <div className="inline-block overflow-hidden h-[32px]">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;