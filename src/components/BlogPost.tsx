
import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
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
    ci: "bg-blue-50 text-blue-600",
    cd: "bg-green-50 text-green-600",
    automation: "bg-purple-50 text-purple-600",
    culture: "bg-amber-50 text-amber-600",
    tools: "bg-cyan-50 text-cyan-600"
  };

  if (featured) {
    return (
      <div 
        className={cn(
          "group grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg border overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20",
          className
        )}
        style={style}
      >
        <div className="overflow-hidden h-full">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex flex-col">
          <div className="mb-4">
            <span className={cn("chip mb-3", categoryColors[post.category])}>
              {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
                post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock size={14} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" 
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
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "group flex flex-col bg-white rounded-lg border overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20 h-full",
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
        <div className="absolute top-3 left-3">
          <span className={cn("chip", categoryColors[post.category])}>
            {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
              post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center mb-4">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-xs">{post.author.name}</span>
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-2 border-t">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock size={12} className="mr-1" />
            <span>{post.readTime}</span>
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
