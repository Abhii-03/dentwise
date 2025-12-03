import { ZapIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { SignUpButton, } from "@clerk/nextjs";
import { Button } from "../ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: "/audio.png",
      title: "Ask Questions",
      description:
        "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.",
      features: ["24/7 Available", "Instant Response"],
    },
    {
      number: 2,
      icon: "/brain.png",
      title: "Get Expert Advice",
      description:
        "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.",
      features: ["AI-Powered", "Personalized"],
    },
    {
      number: 3,
      icon: "/calendar.png",
      title: "Book & Get Care",
      description:
        "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.",
      features: ["Verified Doctors", "Follow-up Care"],
    },
  ];

  return (
    <section className="relative py-32 px-6 outline-hidden z-10 max-w-7xl mx-auto">
      {/* header */}
      <div className="text-center mb-20">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r
               from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6"
        >
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Simple Process
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our streamlined process makes dental care accessible, convenient, and
          stress-free for everyone
        </p>
      </div>

      {/* steps */}
      <div className="relative">
        {/* CONNECTION LINE */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden lg:block"></div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="w-14"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-center leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {step.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg">
            <ArrowRightIcon className="mr-2 size-5" />
            Get started now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
};

export default HowItWorks;
