"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Menu,
  X,
  Star,
  Quote,
  Globe,
  Heart,
  ArrowUp,
  Sun,
  Moon,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiShadcnui } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const texts = [
    "App Developer",
    "Full Stack Developer",
    "React Native Developer",
  ];

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const skills = [
    {
      name: "HTML",
      level: 95,
      color: "#E34F26",
      icon: "https://play-lh.googleusercontent.com/KEFfQFs-hlpj5BgcRFsAUhJyuVUzqtNgDLjKsmpi603a57JQUmP1P6i1aDjIS86X=w480-h960-rw",
    },
    {
      name: "CSS",
      level: 92,
      color: "#1572B6",
      icon: "https://play-lh.googleusercontent.com/8VWbaIQzYRPjCPVjuHbmSvbMNZOtLPENvZMYqHNl1I4Fmh9_OPti6gVjHOg_h7ck-Rk=w480-h960-rw",
    },
    {
      name: "JavaScript",
      level: 90,
      color: "#F7DF1E",
      icon: "https://play-lh.googleusercontent.com/GaSvgYEOzVN-KziLMDQUot6UjF7k8-F3oIGf90U-WrdP8Z2Ak8SqKUvkxIBtV8kIGNvf=w480-h960-rw",
    },
    {
      name: "Tailwind CSS",
      level: 88,
      color: "#06B6D4",
      icon: "https://play-lh.googleusercontent.com/YN4OEsoWsU1QrZFcwWlI8uuGhDKc4RAlP56FFyL03VFegD5tWjZ5cNWHocC_QRE_TvA=w480-h960-rw",
    },
    {
      name: "Bootstrap",
      level: 85,
      color: "#7952B3",
      icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png",
    },
    {
      name: "React.js",
      level: 95,
      color: "#61DAFB",
      icon: "https://play-lh.googleusercontent.com/dXqgrfyOf20RKiqZ24r0fzK2pBflv6YU9jLARcm8T-6eEmeoU-GH6jd5K351hVyrVA=w480-h960-rw",
    },
    { name: "Next.js", level: 90, color: "#ffffff", icon: "next" },
    { name: "Firebase", level: 85, color: "#FFCA28", icon: "🔥" },
    { name: "MongoDB", level: 88, color: "#47A248", icon: "mongo" },
    { name: "Express.js", level: 87, color: "#68A063", icon: "express" },
    { name: "Node.js", level: 89, color: "#339933", icon: "node" },
    { name: "WordPress", level: 82, color: "#21759B", icon: "wordpress" },
    { name: "Shopify", level: 80, color: "#7AB55C", icon: "shopify" },
    {
      name: "GSAP",
      level: 85,
      color: "#88CE02",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInFjxy3drRgcA_K3nW7pTsERWNv9O57P8fA&s",
    },
    { name: "Shadcn/ui", level: 88, color: "#ffffff", icon: "shadcn" },
    { name: "GitHub", level: 92, color: "#ffffff", icon: "github" },
    { name: "VS Code", level: 95, color: "#007ACC", icon: "vscode" },
    {
      name: "Cursor AI",
      level: 85,
      color: "#ffffff",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EMeZ80VYrStAMOsZRReIYVGFaPZj-Gb_UA&s",
    },
    {
      name: "React Native",
      level: 90,
      color: "#61DAFB",
      icon: "https://play-lh.googleusercontent.com/2-2PgHYiuJP9QRZe5cJ4NxEh37Pn-ZMbkBMq2Vdtu9Z9PiYlk2gNcpl0OTZJFtmeiw=w480-h960-rw",
    },
    {
      name: "Expo",
      level: 88,
      color: "#ffffff",
      icon: "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s=w480-h960-rw",
    },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad Ali Mughal.pdf"; // public folder ka path
    link.download = "Muhammad Ali Mughal.pdf"; // downloaded file ka naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_5g7a63m", // Your service ID
        "template_xtitsro", // Your template ID
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
          to_name: "Muhammad Ali",
        },
        "RlaFW5enjRn_Mpuox" // Your public key
      );

      setSubmitStatus("success");
      setContactForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.003,
      color: 0x00ff88,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create multiple rotating objects
    const objects: THREE.Mesh[] = [];

    // Torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 0, 0);
    scene.add(torus);
    objects.push(torus);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0088ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(3, 2, -2);
    scene.add(sphere);
    objects.push(sphere);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(1);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0088,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(0, -2, -1);
    scene.add(octa);
    objects.push(octa);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.001;

      objects.forEach((obj, index) => {
        obj.rotation.x += 0.01 * (index + 1);
        obj.rotation.y += 0.01 * (index + 1);
        obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const projects = [
    {
      title: "Car Zone Full-Stack Site",
      description:
        "Full-stack e-commerce application built with React Native for iOS/Android and Node.js backend.",
      tech: ["Next Js", "Node.js", "MongoDB", "Express"],
      image:
        "https://i.pinimg.com/1200x/86/82/d9/8682d9fbd64e18ded0905e363f7926f3.jpg",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with React.js frontend and Express.js API.",
      tech: ["React.js", "Express.js", "Socket.io", "Chart.js"],
      image:
        "https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg",
    },
    {
      title: "Task Management App",
      description:
        "Cross-platform task management application with real-time synchronization.",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      image:
        "https://i.pinimg.com/736x/2f/c9/1c/2fc91c12600d16d904af419609399b0d.jpg",
    },
    {
      title: "WordPress E-Commerce Site",
      description:
        "Custom WordPress theme with WooCommerce integration and payment gateway.",
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      image:
        "https://files.selar.co/product-images/2023/products/desphixs/advanced-ecommerce-projec-selar.co-65339f053ca47.jpg",
    },
    {
      title: "Shopify Store Customization",
      description:
        "Custom Shopify theme development with advanced product filtering and checkout.",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      image:
        "https://i.pinimg.com/1200x/3f/fa/71/3ffa7147af677359d33225c69e875f1a.jpg",
    },
    {
      title: "Next.js Portfolio Website",
      description:
        "Modern portfolio website with Three.js animations and responsive design.",
      tech: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
      image:
        "https://i.pinimg.com/736x/28/a0/63/28a06388a97a4b1df64e6a5c2b9dac14.jpg",
    },
  ];

  const reviews = [
    {
      name: "Matthew",
      country: "USA",
      flag: "🇺🇸",
      rating: 5,
      review:
        "Muhammad Ali delivered an exceptional React Native app for our startup. His attention to detail and technical expertise exceeded our expectations. The app runs smoothly on both iOS and Android platforms.",
      project: "Mobile App Development",
      company: "TechStart Inc.",
      avatar: "JS",
      bgColor: "bg-blue-500",
    },
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      flag: "🇦🇪",
      rating: 5,
      review:
        "Outstanding work on our e-commerce platform! Muhammad's expertise in MERN stack development helped us launch our online store ahead of schedule. Highly professional and reliable.",
      project: "E-commerce Platform",
      company: "Dubai Digital Solutions",
      avatar: "AR",
      bgColor: "bg-green-500",
    },
    {
      name: "Priya Sharma",
      country: "India",
      flag: "🇮🇳",
      rating: 5,
      review:
        "Excellent developer! Muhammad created a beautiful and functional website for our business using Next.js. The performance and user experience are top-notch. Will definitely work with him again.",
      project: "Business Website",
      company: "Mumbai Tech Solutions",
      avatar: "PS",
      bgColor: "bg-purple-500",
    },
    {
      name: "Hassan Khan",
      country: "Pakistan",
      flag: "🇵🇰",
      rating: 5,
      review:
        "Muhammad is a talented developer who understands client requirements perfectly. He built our mobile app with React Native and the results were amazing. Great communication throughout the project.",
      project: "Mobile Application",
      company: "Karachi Innovations",
      avatar: "HK",
      bgColor: "bg-orange-500",
    },
    {
      name: "Sarah Johnson",
      country: "USA",
      flag: "🇺🇸",
      rating: 5,
      review:
        "Professional, skilled, and delivers on time! Muhammad developed our Shopify store with custom features that boosted our sales by 40%. His expertise in e-commerce development is impressive.",
      project: "Shopify Store",
      company: "American Retail Co.",
      avatar: "SJ",
      bgColor: "bg-pink-500",
    },
    {
      name: "Raj Patel",
      country: "India",
      flag: "🇮🇳",
      rating: 4,
      review:
        "Muhammad's work on our WordPress website was exceptional. He created a custom theme that perfectly matched our brand. The site is fast, responsive, and SEO-optimized.",
      project: "WordPress Development",
      company: "Delhi Web Services",
      avatar: "RP",
      bgColor: "bg-teal-500",
    },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", ref: heroRef },
    { name: "About", ref: aboutRef },
    { name: "Skills", ref: skillsRef },
    { name: "Projects", ref: projectsRef },
    { name: "Reviews", ref: reviewsRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } overflow-x-hidden transition-colors duration-300`}
    >
      {/* Three.js Background */}
      <motion.div ref={mountRef} className="fixed inset-0 z-0" style={{ y }} />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-transparent border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDarkMode ? "bg-black/80" : "bg-white/80"
        } backdrop-blur-md border-b ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
              className="cursor-pointer"
              onClick={() => scrollToSection(heroRef)}
            >
              <div className="relative">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {"<MA />"}
                </motion.div>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg blur-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.ref)}
                  className={`relative ${
                    isDarkMode
                      ? "text-gray-300 hover:text-green-400"
                      : "text-gray-700 hover:text-green-600"
                  } transition-all duration-300 font-medium group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.button>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-200 text-gray-800"
                } transition-all duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-200 text-gray-800"
                } transition-all duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </motion.button>

              <motion.button
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } relative`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>

                {/* Glow effect for mobile button */}
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-full opacity-0"
                  whileHover={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              isDarkMode ? "bg-black/95" : "bg-white/95"
            } backdrop-blur-md border-t ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.ref)}
                  className={`block w-full text-left ${
                    isDarkMode
                      ? "text-gray-300 hover:text-green-400 hover:bg-green-400/10"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-600/10"
                  } transition-all duration-300 font-medium py-3 px-4 rounded-lg relative group`}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scaleY: 1 }}
                    initial={{ scaleY: 0 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Muhammad Ali
              </motion.h1>
              <motion.div
                className="text-xl md:text-2xl mb-8 h-8 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  <span className="font-bold">I'm a </span>
                  <span className="text-green-400 font-semibold">
                    {currentText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="ml-1 text-green-400"
                  >
                    |
                  </motion.span>
                </span>
              </motion.div>
              <motion.p
                className={`text-lg mb-12 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Crafting exceptional mobile and web experiences with
                cutting-edge technologies. Specialized in iOS, Android, and
                full-stack development.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold transform hover:scale-105 transition-all duration-300"
                  onClick={downloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className={`py-20 px-4 ${
            isDarkMode ? "bg-gray-900/50" : "bg-gray-100/50"
          } backdrop-blur-sm`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } max-w-3xl mx-auto leading-relaxed`}
              >
                I’m a passionate full-stack developer with 1.5+ years of
                experience in building real-time applications using the MERN
                stack and React Native. I specialize in creating seamless,
                high-performance user experiences across both iOS and Android,
                with several apps successfully deployed on the Play Store. My
                focus is on delivering scalable, efficient, and impactful
                solutions that bridge innovation with real-world usability. and
                user-friendly applications that make a real impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="h-6 w-6 text-green-500" />
                    <span
                      className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      aaliqaisar2@gmail.com
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="h-6 w-6 text-green-500" />
                    <span
                      className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      +92 3043595013
                    </span>
                  </motion.div>
                  <div className="flex space-x-4 mt-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent"
                        onClick={() =>
                          window.open(
                            "https://github.com/itxAliMughal",
                            "_blank"
                          )
                        }
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/muhammad-ali-b16548379/",
                            "_blank"
                          )
                        }
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className={`${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-300"
                      } hover:border-green-500 transition-all duration-300`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">
                          12+
                        </div>
                        <div
                          className={
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Projects Completed
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className={`${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-300"
                      } hover:border-blue-500 transition-all duration-300`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-blue-500 mb-2">
                          2+
                        </div>
                        <div
                          className={
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Years Experience
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className={`${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-300"
                      } hover:border-purple-500 transition-all duration-300`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-purple-500 mb-2">
                          10+
                        </div>
                        <div
                          className={
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Happy Clients
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className={`${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-300"
                      } hover:border-yellow-500 transition-all duration-300`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">
                          $6K+
                        </div>
                        <div
                          className={
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Total Earnings
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50, rotateY: 180 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 360,
                    boxShadow: `0 0 30px ${skill.color}40`,
                  }}
                  className="group cursor-pointer"
                >
                  <Card
                    className={`${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-white/50 border-gray-300"
                    } hover:border-green-500 transition-all duration-500 h-full`}
                  >
                    <CardContent className="p-4 text-center h-full flex flex-col justify-center">
                      <motion.div
                        className="flex items-center justify-center w-16 h-16 mx-auto mb-3"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon.startsWith("http") ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain rounded-md"
                          />
                        ) : skill.icon.startsWith("next") ? (
                          <RiNextjsFill className="h-10 w-10" color="#fff" />
                        ) : skill.icon.startsWith("mongo") ? (
                          <SiMongodb className="h-10 w-10" color="#00ed64" />
                        ) : skill.icon.startsWith("express") ? (
                          <SiExpress className="h-10 w-10" color="#fff" />
                        ) : skill.icon.startsWith("node") ? (
                          <FaNodeJs className="h-10 w-10" color="#58924a" />
                        ) : skill.icon.startsWith("wordpress") ? (
                          <FaWordpress className="h-10 w-10" color="#3858e9" />
                        ) : skill.icon.startsWith("shopify") ? (
                          <FaShopify className="h-10 w-10" color="#88ce02" />
                        ) : skill.icon.startsWith("shadcn") ? (
                          <SiShadcnui className="h-10 w-10" color="#fff" />
                        ) : skill.icon.startsWith("github") ? (
                          <FaGithub className="h-10 w-10" color="#fff" />
                        ) : skill.icon.startsWith("vscode") ? (
                          <VscVscode className="h-10 w-10" color="#219fdf" />
                        ) : (
                          <span className="text-4xl">{skill.icon}</span>
                        )}
                      </motion.div>

                      <h3
                        className={`text-sm font-semibold mb-2 ${
                          isDarkMode ? "text-white" : "text-black"
                        } group-hover:text-green-400 transition-colors`}
                      >
                        {skill.name}
                      </h3>
                      <div
                        className={`w-full ${
                          isDarkMode ? "bg-gray-700" : "bg-gray-300"
                        } rounded-full h-1.5 mb-2`}
                      >
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.level}%
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          className={`py-20 px-4 ${
            isDarkMode ? "bg-gray-900/50" : "bg-gray-100/50"
          } backdrop-blur-sm`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0, 255, 136, 0.2)",
                  }}
                  className="group"
                >
                  <Card
                    className={`${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-white/50 border-gray-300"
                    } hover:border-green-500 transition-all duration-500 overflow-hidden h-full`}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.2, rotate: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-black transform hover:scale-110 transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <h3
                        className={`text-xl font-semibold mb-3 ${
                          isDarkMode ? "text-white" : "text-black"
                        } group-hover:text-green-400 transition-colors`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        } mb-4 text-sm`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section ref={reviewsRef} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Client Reviews
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } max-w-2xl mx-auto`}
              >
                What my clients from around the world say about working with me
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 50, rotateY: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 255, 136, 0.15)",
                  }}
                  className="group"
                >
                  <Card
                    className={`${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-white/50 border-gray-300"
                    } hover:border-green-500 transition-all duration-500 h-full`}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className={`w-12 h-12 rounded-full ${review.bgColor} flex items-center justify-center text-white font-bold text-sm mr-3`}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {review.avatar}
                        </motion.div>
                        <div className="flex items-center text-[#ffc911] space-x-2">
                          <motion.div
                            className="text-2xl"
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {review.flag}
                          </motion.div>
                        </div>
                        <div className="ml-2">
                          <h3
                            className={`font-semibold text-lg ${
                              isDarkMode ? "text-white" : "text-black"
                            } group-hover:text-green-400 transition-colors`}
                          >
                            {review.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.3 }}
                          >
                            <Star
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-600"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>

                      <Quote className="h-6 w-6 text-green-500 mb-3 opacity-50" />

                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        } text-sm mb-4 flex-grow leading-relaxed`}
                      >
                        {review.review}
                      </p>

                      <div
                        className={`border-t ${
                          isDarkMode ? "border-gray-700" : "border-gray-300"
                        } pt-4`}
                      >
                        <div className="text-sm text-green-400 font-medium">
                          {review.project}
                        </div>
                        <div
                          className={`text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                          }`}
                        >
                          {review.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className={`py-20 px-4 ${
            isDarkMode ? "bg-gray-900/50" : "bg-gray-100/50"
          } backdrop-blur-sm`}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-12 max-w-2xl mx-auto`}
              >
                Ready to bring your ideas to life? Let's discuss your next
                project and create something amazing together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700"
                      : "bg-white/50 border-gray-300"
                  } hover:border-green-500 transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <h3
                      className={`text-2xl font-bold mb-6 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Send Message
                    </h3>

                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Your Name
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border ${
                            isDarkMode
                              ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                              : "bg-white border-gray-300 text-black placeholder-gray-500 focus:border-green-500"
                          } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300`}
                          placeholder="Enter your full name"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium mb-2 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Email Address
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border ${
                            isDarkMode
                              ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                              : "bg-white border-gray-300 text-black placeholder-gray-500 focus:border-green-500"
                          } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300`}
                          placeholder="Enter your email address"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>

                      {/* Message Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="message"
                          className={`block text-sm font-medium mb-2 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Your Message
                        </label>
                        <motion.textarea
                          id="message"
                          name="message"
                          value={contactForm.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border resize-none ${
                            isDarkMode
                              ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                              : "bg-white border-gray-300 text-black placeholder-gray-500 focus:border-green-500"
                          } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300`}
                          placeholder="Tell me about your project..."
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {isSubmitting ? (
                            <motion.div
                              className="flex items-center justify-center"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            >
                              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2" />
                              Sending...
                            </motion.div>
                          ) : (
                            <>
                              <Mail className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>

                      {/* Status Messages */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                        >
                          <div className="text-green-400 font-medium">
                            ✅ Message sent successfully!
                          </div>
                          <div
                            className={`text-sm ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            } mt-1`}
                          >
                            I'll get back to you soon.
                          </div>
                        </motion.div>
                      )}

                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                        >
                          <div className="text-red-400 font-medium">
                            ❌ Failed to send message
                          </div>
                          <div
                            className={`text-sm ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            } mt-1`}
                          >
                            Please try again or contact me directly.
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-8`}
                  >
                    I'm always open to discussing new opportunities and
                    interesting projects. Feel free to reach out through the
                    form or contact me directly.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-green-500 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Email
                      </div>
                      <div
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        aaliqaisar2@gmail.com
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        WhatsApp
                      </div>
                      <div
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        +92 3043595013
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-purple-500 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Location
                      </div>
                      <div
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        Karachi, Pakistan
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-black font-semibold"
                      onClick={() =>
                        (window.location.href = "mailto:aaliqaisar2@gmail.com")
                      }
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Direct Email
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent"
                      onClick={() =>
                        window.open("https://wa.me/03043595013", "_blank")
                      }
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer
          className={`py-12 px-4 border-t ${
            isDarkMode ? "border-gray-800 bg-black" : "border-gray-300 bg-white"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Muhammad Ali
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } text-sm mb-4`}
                >
                  Full-stack developer specializing in App Development and React
                  Mern Stack development.
                </p>
                <div className="flex space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-green-400"
                          : "text-gray-600 hover:text-green-600"
                      }`}
                      onClick={() =>
                        window.open("https://github.com/itxAliMughal", "_blank")
                      }
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/muhammad-ali-b16548379/",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-green-400"
                          : "text-gray-600 hover:text-green-600"
                      }`}
                      onClick={() =>
                        window.open("mailto:aaliqaisar2@gmail.com", "_blank")
                      }
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.ref)}
                        className={`${
                          isDarkMode
                            ? "text-gray-400 hover:text-green-400"
                            : "text-gray-600 hover:text-green-600"
                        } transition-colors text-sm`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Services
                </h4>
                <ul
                  className={`space-y-2 text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <li
                    className={`${
                      isDarkMode
                        ? "hover:text-green-400"
                        : "hover:text-green-600"
                    } transition-colors cursor-pointer`}
                  >
                    Web Development
                  </li>
                  <li
                    className={`${
                      isDarkMode
                        ? "hover:text-green-400"
                        : "hover:text-green-600"
                    } transition-colors cursor-pointer`}
                  >
                    Mobile App Development
                  </li>
                  <li
                    className={`${
                      isDarkMode
                        ? "hover:text-green-400"
                        : "hover:text-green-600"
                    } transition-colors cursor-pointer`}
                  >
                    E-commerce Solutions
                  </li>
                  <li
                    className={`${
                      isDarkMode
                        ? "hover:text-green-400"
                        : "hover:text-green-600"
                    } transition-colors cursor-pointer`}
                  >
                    WordPress Development
                  </li>
                  <li
                    className={`${
                      isDarkMode
                        ? "hover:text-green-400"
                        : "hover:text-green-600"
                    } transition-colors cursor-pointer`}
                  >
                    Shopify Development
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Contact Info
                </h4>
                <div
                  className={`space-y-3 text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-green-500" />
                    <span>aaliqaisar2@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-500" />
                    <span>+92 3043595013</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-green-500" />
                    <span>Available Worldwide</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={`border-t ${
                isDarkMode ? "border-gray-800" : "border-gray-300"
              } pt-8 text-center`}
            >
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mb-2`}
              >
                © 2024 Muhammad Ali. All rights reserved.
              </p>
              <p
                className={`${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } text-xs flex items-center justify-center`}
              >
                Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> by
                Muhammad Ali!
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}
