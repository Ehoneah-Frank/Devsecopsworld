
import React from "react";
import { Link } from "react-router-dom";
import { Clock, BookOpen, User, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BlogPost } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    ci: "bg-blue-100 text-blue-700",
    cd: "bg-green-100 text-green-700",
    automation: "bg-purple-100 text-purple-700",
    culture: "bg-amber-100 text-amber-700",
    tools: "bg-cyan-100 text-cyan-700"
  };

  if (featured) {
    return (
      <Card 
        className={cn(
          "group grid grid-cols-1 md:grid-cols-5 gap-6 overflow-hidden hover:shadow-lg transition-all duration-300",
          className
        )}
        style={style}
      >
        <div className="overflow-hidden h-full rounded-l-lg md:col-span-2">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex flex-col md:col-span-3">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <span className={cn("text-xs font-medium px-3 py-1 rounded-full", categoryColors[post.category])}>
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
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-primary",
        className
      )}
      style={style}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={cn("text-xs font-medium px-3 py-1 rounded-full", categoryColors[post.category])}>
            {post.category === "ci" ? "CI" : post.category === "cd" ? "CD" : 
              post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
        </div>
      </div>
      
      <CardHeader className="p-5 pb-0">
        <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
          {post.title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-5 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex items-center justify-between border-t mt-auto">
        <div className="flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-8 h-8 rounded-full mr-2 border border-white shadow-sm"
          />
          <span className="text-xs font-medium">{post.author.name}</span>
        </div>
        
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
        >
          Read more
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
