import { motion } from "framer-motion"; 

const LoginSign = () => {
  return (
    <motion.div
      className="absolute bottom-24 left-12 flex gap-x-4 w-3/4 justify-center"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }} 
    >
      <button className="grow bg-white px-8 py-4 font-semibold rounded-full text-sm">
        Login
      </button>
      <button className="grow bg-blue-800 px-8 py-4 font-bold rounded-full text-sm text-white">
        SignUp
      </button>
    </motion.div>
  );
};

export default LoginSign;
