
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
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        Stay updated with the latest DevOps news, events, and resources.
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-devscops-teal dark:focus:ring-devscops-yellow transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-2 p-1 text-gray-500 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors disabled:opacity-50"
          aria-label="Subscribe"
        >
          <SendHorizontal
            size={16}
            className={isLoading ? "animate-pulse" : ""}
          />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
