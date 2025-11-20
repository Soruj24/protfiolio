"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function SimpleContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        if (!value) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";

      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return "";

      case "message":
        if (!value) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return "";

      default:
        return "";
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const newTouched: Record<string, boolean> = {};

    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) (newErrors as Record<string, string>)[key] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setStatusMessage("Please fix the errors in the form before submitting.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setStatusMessage("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const MotionCard = motion(Card);
  const MotionButton = motion(Button);

  return (
    <div className="max-w-2xl mx-auto">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border shadow-sm"
      >
        <CardContent className="p-6">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Name Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="name" className="text-sm font-medium">
                Name *
                <AnimatePresence>
                  {errors.name && touched.name && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-red-500 text-xs ml-2"
                    >
                      ({errors.name})
                    </motion.span>
                  )}
                </AnimatePresence>
              </Label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Your name"
                  className={
                    errors.name && touched.name
                      ? "border-red-500 focus:ring-red-500"
                      : ""
                  }
                  disabled={isLoading}
                />
              </motion.div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
                <AnimatePresence>
                  {errors.email && touched.email && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-red-500 text-xs ml-2"
                    >
                      ({errors.email})
                    </motion.span>
                  )}
                </AnimatePresence>
              </Label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="your.email@example.com"
                  className={
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-500"
                      : ""
                  }
                  disabled={isLoading}
                />
              </motion.div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
                <AnimatePresence>
                  {errors.message && touched.message && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-red-500 text-xs ml-2"
                    >
                      ({errors.message})
                    </motion.span>
                  )}
                </AnimatePresence>
              </Label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className={
                    errors.message && touched.message
                      ? "border-red-500 focus:ring-red-500"
                      : ""
                  }
                  disabled={isLoading}
                />
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MotionButton
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
                whileHover={{ 
                  scale: isLoading ? 1 : 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  animate={{ 
                    opacity: isLoading ? 0.7 : 1 
                  }}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.span>
              </MotionButton>
            </motion.div>

            {/* Status Message */}
            <AnimatePresence>
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`p-3 rounded-md text-sm ${
                    status === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {statusMessage}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </CardContent>
      </MotionCard>
    </div>
  );
}