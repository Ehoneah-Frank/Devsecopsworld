
import React, { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-3">
        Stay updated with the latest DevOps news, events, and resources.
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full py-2 pl-3 pr-10 text-sm bg-background border border-muted rounded-md outline outline-1 outline-black focus:outline-none focus:ring-1 focus:ring-primary transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-1 top-1 p-1 text-foreground/70 hover:text-primary transition-colors disabled:opacity-50"
          aria-label="Subscribe"
        >
          <SendHorizontal
            size={18}
            className={isLoading ? "animate-pulse" : ""}
          />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
