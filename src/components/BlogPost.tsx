
import React from "react";
import { Link } from "react-router-dom";
import { Clock, BookOpen, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BlogPost } from "@/lib/data";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  post, 
  featured = false,
  className,
  style
}) => {
  const categoryColors = {
    ci: "bg-blue-50 text-blue-600 border-blue-200",
    cd: "bg-green-50 text-green-600 border-green-200",
    automation: "bg-purple-50 text-purple-600 border-purple-200",
    culture: "bg-amber-50 text-amber-600 border-amber-200",
    tools: "bg-cyan-50 text-cyan-600 border-cyan-200"
  };

  if (featured) {
    return (
      <div 
        className={cn(
          "group grid grid-cols-1 md:grid-cols-5 gap-6 bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20",
          className
        )}
        style={style}
      >
        <div className="overflow-hidden h-full md:col-span-2">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex flex-col md:col-span-3">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className={cn("text-xs px-3 py-1 rounded-full border", categoryColors[post.category])}>
                {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
                  post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock size={14} className="mr-1" />
                {post.readTime}
              </span>
            </div>
            <h2 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                />
                <div>
                  <span className="text-sm font-medium block">{post.author.name}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                <BookOpen size={16} className="mr-2" />
                Read article
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "group flex flex-col bg-white rounded-xl border overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20 h-full",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <span className={cn("text-xs px-3 py-1 rounded-full border", categoryColors[post.category])}>
            {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
              post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <span className="text-xs text-white flex items-center bg-black/30 px-2 py-1 rounded-full">
            <Clock size={12} className="mr-1" />
            {post.readTime}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-5">
        <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center mb-4 mt-auto pt-2">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-8 h-8 rounded-full mr-2 border border-white shadow-sm"
          />
          <div>
            <span className="text-xs font-medium block">{post.author.name}</span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t">
          <div className="flex items-center text-xs text-muted-foreground">
            <Tag size={12} className="mr-1" />
            <span>Ghana Tech</span>
          </div>
          
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center text-xs font-medium text-primary hover:underline"
          >
            Read more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
