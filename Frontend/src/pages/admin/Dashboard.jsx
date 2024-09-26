import React from 'react';

const UserDashboard = () => {
    return (
        <div className="p-6 flex flex-col items-center">
            {/* Inline Styles for Custom Animations and Colorful Text */}
            <style jsx>{`
                @keyframes zoomIn {
                    0% {
                        transform: scale(0);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                .animate-zoom-in {
                    animation: zoomIn 1s ease-in-out;
                }
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-30px);
                    }
                    60% {
                        transform: translateY(-15px);
                    }
                }
                .text-gradient {
                    background: linear-gradient(90deg, #ff7e5f, #feb47b);
                    -webkit-background-clip: text;
                    color: transparent;
                }
                .footer-text {
                    color: #feb47b;
                    font-weight: bold;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                }
            `}</style>

            {/* Colorful and Animated Dashboard Heading */}
            <h1 className="text-4xl font-bold mb-6 animate-bounce text-gradient">
                Student Inquiry Chatbot Dashboard
            </h1>

            {/* Section for Full-width Chatbot Image */}
            <div className="w-full mb-8">
               
                <div className="relative shadow-lg w-full">
                    <img
                        src="/chatbot-image.jpg" // Make sure to adjust the image path
                        alt="Chatbot illustration"
                        className="w-full h-auto rounded-lg border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            </div>

            {/* Section for User Flow Diagram */}
            <div className="w-full max-w-3xl mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Chatbot User Flow Diagram</h2>
                <div className="w-full flex justify-center">
                    <img
                        src="https://www.researchgate.net/profile/Ashok-K/publication/347423315/figure/fig1/AS:988157378064384@1612606486187/College-Chatbot-system-architecture.png"
                        alt="User Flow Diagram"
                        className="w-full max-w-2xl rounded-lg border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            </div>

            {/* Footer Section with Colorful Text */}
            <div className="w-full max-w-4xl text-center">
                <p className="text-lg footer-text">
                    The chatbot helps students resolve their university-related queries by connecting them with resources
                    and faculty members. It's a smart AI-driven solution to make the inquiry process more efficient.
                </p>
            </div>
        </div>
    );

};

export default UserDashboard;