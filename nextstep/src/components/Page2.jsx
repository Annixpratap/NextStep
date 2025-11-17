import { motion } from "framer-motion"; // Fix import here

export default function Page2() {
  return (
    <>
      <section className="relative bg-[#f5f0e3] py-24 h-screen w-full">
        <div>
          <div className="absolute top-30 left-10 bg-amber-500/25 h-[200px] w-[200px] rounded-full z-0"></div>
          <div className="absolute top-[25%] left-10 px-10">
            <motion.div
              className="max-w-xl z-40 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-fit py-4 mb-4">
                <h1 className="text-5xl font-bold text-black leading-13">
                  Empowering people through tailored support and authentic
                  connection.
                </h1>
              </div>
              <p className="text-gray-700 mt-4 text-lg">
                Empowering people through tailored support and authentic
                connections, helping young migrants navigate jobs, education,
                healthcare, and government policies in a new city with ease.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute right-20 top-25">
          <iframe
            src="https://lottie.host/embed/1ff6dc53-3640-47a8-af53-eef20040e913/VWOwYru1fi.lottie"
            width={600}
            height={400}
            loop={false}
          ></iframe>
        </div>
      </section>
    </>
  );
}
