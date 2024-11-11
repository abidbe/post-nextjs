"use client";

import { NextPage } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Layout from "./components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to Our</span>
                  <span className="block text-indigo-600">Creative Space</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover amazing posts and beautiful photo collections. Express yourself through words and images in our creative community.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/posts" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      View Posts
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/albums" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Browse Album
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Feature Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engaging Posts</h3>
              <p className="text-gray-600">Discover thought-provoking articles and stories from our community.</p>
              <Link href="/posts" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo Collections</h3>
              <p className="text-gray-600">Explore beautiful moments captured through our photo albums.</p>
              <Link href="/albums" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                View albums <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Community</h3>
              <p className="text-gray-600">Be part of our growing creative community.</p>
              <Link href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
