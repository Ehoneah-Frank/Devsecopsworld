
import { CalendarDays, Code, Database, GitBranch, Server } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: "webinar" | "workshop" | "conference";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "ci" | "cd" | "automation" | "culture" | "tools";
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const events: Event[] = [
  {
    id: "1",
    title: "Kubernetes Best Practices Workshop",
    date: "April 15, 2024",
    time: "1:00 PM - 4:00 PM EST",
    location: "Virtual",
    description: "Learn essential Kubernetes patterns and practices from industry experts in this hands-on workshop. Topics include resource management, security, and scaling.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "workshop"
  },
  {
    id: "2",
    title: "DevOps Transformation Summit",
    date: "May 10-12, 2024",
    time: "9:00 AM - 5:00 PM PST",
    location: "San Francisco, CA",
    description: "A three-day conference featuring keynote speakers, panel discussions, and networking opportunities focused on organizational DevOps transformation.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    category: "conference"
  },
  {
    id: "3",
    title: "CI/CD Pipeline Optimization Webinar",
    date: "April 28, 2024",
    time: "11:00 AM - 12:30 PM EST",
    location: "Virtual",
    description: "Discover strategies to improve your continuous integration and delivery pipelines, reduce build times, and enhance reliability.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    category: "webinar"
  },
  {
    id: "4",
    title: "Infrastructure as Code Masterclass",
    date: "June 5, 2024",
    time: "10:00 AM - 3:00 PM CET",
    location: "Virtual",
    description: "Master the art of infrastructure as code using Terraform, CloudFormation, and Pulumi in this comprehensive workshop.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    category: "workshop"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of GitOps: Trends and Predictions",
    excerpt: "Explore emerging patterns in GitOps adoption and what the future holds for this increasingly popular approach to infrastructure management.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    category: "automation",
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    date: "March 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "2",
    title: "Implementing Zero-Trust Security in DevOps Pipelines",
    excerpt: "Learn how to incorporate zero-trust principles into your CI/CD workflows to enhance security without sacrificing developer velocity.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    category: "ci",
    author: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    date: "March 22, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Scaling DevOps Practices Across Large Enterprises",
    excerpt: "Discover strategies to effectively scale DevOps adoption across multiple teams, departments, and geographic locations.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    category: "culture",
    author: {
      name: "Elena Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    date: "March 15, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Kubernetes Operators: Automating Application Lifecycle Management",
    excerpt: "Explore how Kubernetes Operators can automate complex application deployment, scaling, and management tasks.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Maecenas euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    category: "automation",
    author: {
      name: "David Smith",
      avatar: "https://i.pravatar.cc/150?img=53"
    },
    date: "March 10, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    role: "Community Lead",
    bio: "Emily has over 15 years of experience in platform engineering and has helped numerous organizations successfully implement DevOps transformations.",
    image: "https://images.unsplash.com/photo-1563132337-f159f484226c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBsYWR5fGVufDB8fDB8fHwy",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "2",
    name: "James Wilson",
    role: "Technical Director",
    bio: "James specializes in cloud-native architectures and has contributed to several open-source projects in the Kubernetes ecosystem.",
    image: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJsYWNrJTIwbWFufGVufDB8fDB8fHwy",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "3",
    name: "Sophia Patel",
    role: "Events Coordinator",
    bio: "Sophia brings 8 years of experience organizing technology conferences and building inclusive communities in the tech industry.",
    image: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBsYWR5fGVufDB8fDB8fHwy",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Content Strategist",
    bio: "Marcus is a technical writer and educator who specializes in creating clear, engaging content about complex DevOps concepts.",
    image: "https://images.unsplash.com/photo-1638802126216-dbab1180cb6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwbWFuJTIwd2l0aCUyMGElMjBjb21wdXRlcnxlbnwwfHwwfHx8Mg%3D%3D",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

export const features = [
  {
    title: "Continuous Integration",
    description: "Automatically build and test code changes, ensuring that changes integrate smoothly with the existing codebase.",
    icon: Code
  },
  {
    title: "Infrastructure as Code",
    description: "Define and manage infrastructure using code, enabling consistent and reproducible environments.",
    icon: Server
  },
  {
    title: "Version Control",
    description: "Track and manage changes to code, ensuring that all team members work from the same source of truth.",
    icon: GitBranch
  },
  {
    title: "Database Automation",
    description: "Automate database schema changes, data migrations, and backup processes as part of your deployment pipeline.",
    icon: Database
  },
  {
    title: "Event-Driven Automation",
    description: "Trigger workflows and processes based on events in your systems, enabling responsive and efficient operations.",
    icon: CalendarDays
  }
];
