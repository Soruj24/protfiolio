import { motion } from "framer-motion";

const AITransmissionStatus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6 p-4 rounded-xl bg-slate-700/30 border border-purple-400/20"
    >
      <div className="flex items-start space-x-3">
        <motion.div
          className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
        </motion.div>
        <div>
          <h4 className="font-semibold text-purple-400 mb-2">
            AI Transmission Active
          </h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
              LangChain integration ready
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
              MCP protocol enabled
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
              AI response time: 2-4 hours
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AITransmissionStatus;