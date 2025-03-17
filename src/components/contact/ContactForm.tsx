
import React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Clear form
    e.currentTarget.reset();
  };

  return (
    <div className="border border-gray-200 rounded-xl p-8 shadow-sm">
      <h2 className="font-heading text-2xl font-semibold mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium font-body">
              Name
            </label>
            <Input 
              id="name" 
              name="name" 
              required 
              placeholder="Your name"
              className="border-gray-300 focus:border-black focus:ring-black font-body"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium font-body">
              Email
            </label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder="Your email"
              className="border-gray-300 focus:border-black focus:ring-black font-body"
            />
          </div>
        </div>
        
        {/* <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium font-body">
            Subject
          </label>
          <Input 
            id="subject" 
            name="subject" 
            required 
            placeholder="What is this regarding?"
            className="border-gray-300 focus:border-black focus:ring-black font-body"
          />
        </div> */}
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium font-body">
            Message
          </label>
          <Textarea 
            id="message" 
            name="message" 
            required 
            rows={5}
            placeholder="How can we help you?"
            className="border-gray-300 focus:border-black focus:ring-black font-body"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-black hover:bg-black/80 text-white transition-colors group"
        >
          <span className="font-body">Send Message</span>
          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
