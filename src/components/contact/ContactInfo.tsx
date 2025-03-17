
import React from "react";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-semibold mb-6">Reach Out</h2>
        <p className="font-body text-gray-600 mb-8">
          Whether you have a question about our tech events in Ghana, want to contribute to Ghana's growing DevOps community, 
          or are interested in becoming a partner, we're here to help.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-black/5 p-3 rounded-full animate-pulse">
            <Mail className="h-6 w-6 text-black" />
          </div>
          <div>
            <h3 className="font-heading font-medium text-lg">Email</h3>
            <p className="font-body text-gray-600">Lorem@gmail.com</p>
            <p className="font-body text-gray-600">LoremSupport@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-black/5 p-3 rounded-full group hover:bg-black/10 transition-all duration-300">
            <MapPin className="h-6 w-6 text-black group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h3 className="font-heading font-medium text-lg">Location</h3>
           
            <p className="font-body text-gray-600">Accra, Ghana</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-black/5 p-3 rounded-full relative overflow-hidden">
            <Clock className="h-6 w-6 text-black animate-[spin_10s_linear_infinite]" />
          </div>
          <div>
            <h3 className="font-heading font-medium text-lg">Office Hours</h3>
            <p className="font-body text-gray-600">Monday - Friday: 9AM - 5PM GMT</p>
            <p className="font-body text-gray-600">Saturday & Sunday: Closed</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors duration-300">
            <Phone className="h-6 w-6 text-black" />
          </div>
          <div>
            <h3 className="font-heading font-medium text-lg">Phone</h3>
            <p className="font-body text-gray-600">+233 22 222 2222</p>
          </div>
        </div>
      </div>
      
      <div className="pt-6">
        <h3 className="font-heading font-medium text-lg mb-4">Follow Us</h3>
        <SocialIcons animate={true} />
      </div>
    </div>
  );
};

export default ContactInfo;
