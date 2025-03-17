
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import FAQSection from "@/components/contact/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-block animate-fade-in">
            <span className="chip bg-primary/10 text-primary px-3 py-1">
              Get in Touch
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-3 mb-6 animate-slide-in">
            Contact Us
          </h1>
          <p className="font-body text-black/60 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Have questions about DevOps in Ghana? Want to join our vibrant tech community? 
            We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      {/* <MapSection /> */}
      
      {/* FAQ Section */}
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Contact;
