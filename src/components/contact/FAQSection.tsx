
import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How can I join the Ghana DevOps community?",
    answer: "Joining our community is simple! You can sign up for our newsletter, join our Slack channel, or attend one of our events in Accra. All options are available through our website."
  },
  {
    question: "Do you offer resources for beginners in Ghana's tech ecosystem?",
    answer: "Yes, we have a dedicated section in our blog for beginners. We also regularly host introductory workshops and webinars in Accra that are perfect for those just starting their DevOps journey in Ghana."
  },
  {
    question: "Can I propose a topic for a future event in Ghana?",
    answer: "Absolutely! We welcome topic suggestions from our community. You can submit your ideas through our contact form or email us directly at events@ghanadevopshub.com."
  },
  {
    question: "How can I become a speaker at one of your events in Accra?",
    answer: "We're always looking for knowledgeable speakers to share their experiences with Ghana's tech community. Please fill out our speaker application form or contact us directly with your proposed topic and a brief bio."
  },
  {
    question: "Is membership free for tech professionals in Ghana?",
    answer: "Yes, basic membership to our community is completely free for all tech professionals in Ghana. We do offer some premium events and resources that may have a cost, but many of our offerings are available at no charge."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl font-semibold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 transition-all hover:border-black/20 hover:shadow-sm"
            >
              <h3 className="font-heading font-medium text-lg mb-2">{faq.question}</h3>
              <p className="font-body text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
