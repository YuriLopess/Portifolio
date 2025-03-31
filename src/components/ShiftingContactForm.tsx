import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, MessageSquare } from 'lucide-react';

const ShiftingContactForm = () => {
  const [activeMethod, setActiveMethod] = useState<'email' | 'message'>('email');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div className="p-8">
          <div className="flex gap-4 mb-8">
            <motion.button
              onClick={() => setActiveMethod('email')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeMethod === 'email'
                  ? 'bg-[#212121] text-white'
                  : 'bg-gray-100 text-[#323232] hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: activeMethod === 'email' ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-5 h-5" />
              </motion.div>
              <span>Email</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveMethod('message')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeMethod === 'message'
                  ? 'bg-[#212121] text-white'
                  : 'bg-gray-100 text-[#323232] hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: activeMethod === 'message' ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <MessageSquare className="w-5 h-5" />
              </motion.div>
              <span>Message</span>
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={activeMethod}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-[#212121] mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#212121] focus:border-transparent transition-all"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-[#212121] mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#212121] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-[#212121] mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#212121] focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-[#212121] mb-2">
                  Message
                </label>
                <motion.textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#212121] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#212121] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#323232] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Send Message
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ShiftingContactForm;