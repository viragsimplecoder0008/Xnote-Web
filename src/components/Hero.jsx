import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center pt-20 text-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

            {/* Floating Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="text-gradient">Xnote</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Xnote is a Not-So-Advanced text editor designed for simplicity, usability, and is beautiful.
                        <br />
                        <span className="text-sm text-gray-400 mt-2 block">Made for the simplest linux users. (Like me)</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.dropbox.com/scl/fi/7jja6s97ulvma8s6zszq1/xnote?rlkey=76dwy8yidbinrs2myct3lcq6d&st=n2jteqfx&dl=1"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50"
                        >
                            <span>Download Now</span>
                            <svg
                                className="w-6 h-6 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                ></path>
                            </svg>
                            <div className="absolute -inset-3 rounded-full bg-indigo-400 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Screenshot Container */}
                {/* Screenshot Container */}
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="w-full max-w-4xl mx-auto perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotateX: 20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    >
                        <div className="relative rounded-xl bg-gray-900 border border-gray-700 shadow-2xl overflow-hidden transform transition-transform duration-500">
                            {/* Screenshot Image - No Terminal Header */}
                            <img
                                src="/screenshot.png"
                                alt="Xnote Screenshot"
                                className="w-full h-auto object-cover opacity-90"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
                        </div>
                        {/* Reflection/Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 -z-10"></div>
                    </motion.div>
                </Tilt>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 text-sm text-gray-500 pb-8"
                >
                    v1.0.0 • Linux • Free
                </motion.p>
            </div>
        </div>
    );
};

export default Hero;
