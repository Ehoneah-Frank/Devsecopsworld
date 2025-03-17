
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/BlogPost";
import { blogPosts } from "@/lib/data";
import { Search, Tags } from "lucide-react";

const Blog = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = filter === "all" || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-block animate-fade-in">
            <span className="chip bg-primary/10 text-primary px-3 py-1">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6 animate-slide-in">
            DevOps Insights & Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Explore our collection of articles, case studies, and tutorials on DevOps practices, tools, and culture.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-12 border rounded-full bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute left-4 top-3.5 text-muted-foreground" size={20} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === "all" 
                    ? "bg-primary text-white" 
                    : "bg-secondary/80 hover:bg-secondary"
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setFilter("ci")}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === "ci" 
                    ? "bg-primary text-white" 
                    : "bg-secondary/80 hover:bg-secondary"
                }`}
              >
                Continuous Integration
              </button>
              <button
                onClick={() => setFilter("cd")}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === "cd" 
                    ? "bg-primary text-white" 
                    : "bg-secondary/80 hover:bg-secondary"
                }`}
              >
                Continuous Deployment
              </button>
              <button
                onClick={() => setFilter("automation")}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === "automation" 
                    ? "bg-primary text-white" 
                    : "bg-secondary/80 hover:bg-secondary"
                }`}
              >
                Automation
              </button>
              <button
                onClick={() => setFilter("culture")}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === "culture" 
                    ? "bg-primary text-white" 
                    : "bg-secondary/80 hover:bg-secondary"
                }`}
              >
                Culture
              </button>
              <button
                onClick={() => setFilter("tools")}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  filter === "tools" 
                    ? "bg-primary text-white" 
                    : "bg-secondary/80 hover:bg-secondary"
                }`}
              >
                Tools
              </button>
            </div>
          </div>
          
          {/* Featured Article */}
          {filter === "all" && !searchQuery && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                <Tags className="mr-2" size={20} />
                Featured Article
              </h2>
              <BlogPostCard post={blogPosts[0]} featured={true} className="animate-fade-in" />
            </div>
          )}
          
          {/* Articles Grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <Tags className="mr-2" size={20} />
              {filter === "all" ? "All Articles" : `${filter.toUpperCase()} Articles`}
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogPostCard 
                    key={post.id} 
                    post={post} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-secondary/30 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filters.
                </p>
              </div>
            )}
          </div>
          
          {/* Load More */}
          {filteredPosts.length > 6 && (
            <div className="flex justify-center mt-12">
              <button className="px-6 py-3 bg-secondary font-medium rounded-md hover:bg-secondary/80 transition-colors">
                Load More Articles
              </button>
            </div>
          )}
          
          {/* Contribute Section */}
          <div className="mt-20 bg-secondary/30 rounded-xl p-8 border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Share Your Knowledge
              </h2>
              <p className="text-muted-foreground mb-6">
                Have insights on DevOps practices, tools, or culture? We invite community members to contribute articles to our blog.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-primary text-white rounded-md px-6 py-3 font-medium transition-all hover:bg-primary/90"
              >
                Submit an Article
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
