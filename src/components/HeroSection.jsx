

import React from 'react';

const HeroSection = () => {
    return (
        <div className="pt-20 pb-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    We Build <span className="text-purple-600">Productive Apps</span>
                </h1>
                <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                
                
                <div className="mt-8 flex justify-center space-x-4">
                    <a href="#" className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 9V8h2v3h-2zM9 13v-2h2v2H9z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        Google Play
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 9V8h2v3h-2zM9 13v-2h2v2H9z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        App Store
                    </a>
                </div>

                
                <div className="mt-12">
                    
                    <div className="mx-auto w-full max-w-md h-96 bg-gray-200 rounded-3xl flex items-center justify-center shadow-2xl">
                        <p className="text-gray-600">Mobile App Image Placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;