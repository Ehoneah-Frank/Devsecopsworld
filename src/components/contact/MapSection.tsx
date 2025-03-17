
import React from "react";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9289286491046!2d-0.19699942421364897!3d5.5711126339722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7195130027%3A0xfd41a983326a1446!2s14%20Independence%20Ave%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1720192045927!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ghana DevOps Hub Location"
            className="w-full h-full"
            aria-label="Map showing Ghana DevOps Hub location in Accra"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
