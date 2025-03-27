
import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BlogPost } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
  const categoryColors: Record<string, string> = {
    ci: "bg-emerald-100 text-emerald-700",
    cd: "bg-amber-100 text-amber-700",
    automation: "bg-purple-100 text-purple-700",
    culture: "bg-red-100 text-red-700",
    tools: "bg-blue-100 text-blue-700"
  };

  if (featured) {
    return (
      <Card 
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-md card-hover",
          className
        )}
        style={style}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 flex flex-col">
            <div className="mb-2">
              <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", categoryColors[post.category])}>
                {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
                  post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-3">
              {post.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 mt-auto">
              <Clock size={14} className="mr-1" />
              <span className="mr-3">{post.readTime}</span>
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              
              <Link
                to={`/blog/${post.id}`}
                className="text-devscops-teal hover:text-devscops-teal/80 text-sm font-medium flex items-center"
              >
                Read more
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md h-full card-hover",
        className
      )}
      style={style}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", categoryColors[post.category])}>
            {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
              post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
            <Clock size={12} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-xs font-medium">{post.author.name}</span>
        </div>
        
        <Link
          to={`/blog/${post.id}`}
          className="text-devscops-teal hover:text-devscops-teal/80 text-sm font-medium flex items-center"
        >
          Read more
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
