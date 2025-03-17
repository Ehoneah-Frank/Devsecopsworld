import { CheckCircle2 } from "lucide-react";
import { teamMembers, features } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMember";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-block animate-fade-in">
            <span className="chip bg-primary/10 text-primary px-3 py-1">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6 animate-slide-in">
            Our Mission & Vision
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            We are dedicated to fostering a vibrant DevOps community that
            bridges the gap between development and operations, promoting
            collaboration, continuous learning, and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl opacity-70 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="DevSecOps Collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-semibold">
                Our Mission{" "}
              </h2>
              <p className="text-muted-foreground">
                Our mission is to foster collaboration, knowledge-sharing, and
                professional growth for DevSecOps practitioners across Africa.
              </p>

              <ul className="space-y-3">
                {[
                  "Deliver more consistent and valuable insights",
                  "Create better learning and mentorship opportunities",
                  "Increase our reach and impact across different African regions",
                  "Ensure sustainability as we continue to grow",
                  "Provide leadership development opportunities for our members",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip bg-primary/10 text-primary px-3 py-1">
              Our Values
            </span>
            <h2 className="text-3xl font-semibold mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              Our community is built on these core principles that guide
              everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Collaboration",
                description:
                  "We believe in breaking down silos and fostering collaboration between teams to achieve better results.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We embrace a culture of learning, adaptation, and constant refinement of processes and skills.",
              },
              {
                title: "Automation",
                description:
                  "We advocate for automating repetitive tasks to increase efficiency and reduce errors.",
              },
              {
                title: "Transparency",
                description:
                  "We value open communication and visibility into processes, decisions, and outcomes.",
              },
              {
                title: "Customer Focus",
                description:
                  "We prioritize delivering value to end users and stakeholders through our practices.",
              },
              {
                title: "Inclusivity",
                description:
                  "We welcome diverse perspectives and backgrounds to enrich our community and solutions.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip bg-primary/10 text-primary px-3 py-1">
              Our Team
            </span>
            <h2 className="text-3xl font-semibold mt-3 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground">
              Our team of passionate DevOps professionals is dedicated to fostering learning and collaboration in the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="chip bg-primary/10 text-primary px-3 py-1">
                Our Focus Areas
              </span>
              <h2 className="text-3xl font-semibold">
                Key DevOps Practices We Promote
              </h2>
              <p className="text-muted-foreground">
                We focus on these essential DevOps practices to help
                organizations improve their software delivery capabilities and
                operational efficiency.
              </p>

              <div className="space-y-4 pt-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-white rounded-lg border shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                  >
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl opacity-70 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="chip bg-primary/10 text-primary px-3 py-1">
            Join Us
          </span>
          <h2 className="text-3xl font-semibold mt-3 mb-6">
            Become a Part of Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're just starting out or you're a seasoned professional,
            there's a place for you in our community. Join us to learn, share,
            and grow together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://slack.com/"
              className="inline-flex items-center justify-center bg-primary text-white rounded-md px-6 py-3 font-medium transition-all hover:bg-primary/90"
            >
              Join Our Slack
            </a>
            <a
              href="https://www.linkedin.com/"
              className="inline-flex items-center justify-center bg-secondary text-foreground rounded-md px-6 py-3 font-medium transition-all hover:bg-secondary/80"
            >
              Follow Us on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
