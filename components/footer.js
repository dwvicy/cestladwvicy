import React from 'react';

export default function Foot() {
    return (
        <footer className="flex flex-row w-full text-center border-t border-grey p-4 justify-center">
            <div className=" h-6 w-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="green">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                </svg>
            </div>
            <h1 className="px-1">with</h1>
            <div className="h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                    <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <h1 className="px-1">by</h1>
            <a target="blank" href="https://linkedin.com/in/dwvicy">
                dwvicy
            </a>
        </footer>
    );
}
