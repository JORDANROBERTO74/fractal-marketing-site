"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  BarChart3,
  Network,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Brain,
  Workflow,
  Database,
  ChartLine,
  Users,
  Target,
  Rocket,
  Star,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description:
        "Identify and prioritize automation opportunities using artificial intelligence and RICE methodology.",
    },
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description:
        "Create complex automations with our visual drag-and-drop editor, no coding required.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Interactive dashboards with Graphic Walker for real-time exploratory data analysis.",
    },
    {
      icon: Network,
      title: "Seamless Integrations",
      description:
        "Connect with Airbyte, MCP servers, and 100+ systems through pre-built integrations.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Enterprise-grade security with robust authentication, role management, and comprehensive auditing.",
    },
    {
      icon: TrendingUp,
      title: "ROI Tracking",
      description:
        "Measure real impact with annual savings estimates, success metrics, and detailed financial analysis.",
    },
  ];

  const benefits = [
    {
      metric: "85%",
      label: "Reduction in response time",
      description: "Intelligent automation of support tickets",
    },
    {
      metric: "$2.5M",
      label: "Average annual savings",
      description: "Measurable ROI in mid-size and large enterprises",
    },
    {
      metric: "10x",
      label: "Efficiency improvement",
      description: "Optimized processes with AI and workflows",
    },
    {
      metric: "99.9%",
      label: "Guaranteed uptime",
      description: "Scalable and reliable infrastructure",
    },
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description:
        "Automate classification, routing, and resolution of technical support tickets with AI.",
      icon: Users,
      features: [
        "Automatic ticket classification",
        "Real-time sentiment analysis",
        "Intelligent prioritization with RICE",
        "Contextual automated responses",
      ],
    },
    {
      title: "IT Operations Management",
      description:
        "Manage inventory, assets, and IT operations with executive dashboards and predictive analytics.",
      icon: Database,
      features: [
        "Complete inventory management",
        "Real-time asset tracking",
        "Trend and pattern analysis",
        "Proactive alerts and notifications",
      ],
    },
    {
      title: "Business Intelligence",
      description:
        "Transform data into actionable insights with advanced visualizations and exploratory analysis.",
      icon: ChartLine,
      features: [
        "Customizable dashboards",
        "Exploratory analysis with Graphic Walker",
        "Automated executive reports",
        "Real-time metrics",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp Inc.",
      company: "TechCorp",
      content:
        "FractalGrid transformed our support operation. We reduced resolution time by 70% and our customers are more satisfied than ever.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations, DataFlow Systems",
      company: "DataFlow",
      content:
        "The integration with our existing systems was flawless. ROI was evident from the first month of implementation.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "IT Director, Global Services",
      company: "Global Services",
      content:
        "FractalGrid's dashboards and analytics gave us complete visibility into our operations. Decisions are now based on real data.",
      rating: 5,
    },
  ];

export default function MarketingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth pt-16 lg:pt-20">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse text-primary" />
              <span className="text-muted-foreground">
                AI-Powered IT Automation Platform
              </span>
            </div>
            <h1 className="mb-6 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Automate your IT with
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient">
                {" "}
                Artificial Intelligence
              </span>
            </h1>
            <p className="mb-8 animate-fade-in-up text-lg text-muted-foreground sm:text-xl md:text-2xl [animation-delay:0.1s]">
              {`Identify opportunities, prioritize initiatives, and automate
              technical support processes with RICE methodology and predictive
              analytics. Reduce operational costs and improve efficiency up to
              10x.`}
            </p>
            <div className="flex animate-fade-in-up flex-col gap-4 sm:flex-row sm:justify-center [animation-delay:0.2s]">
              <Button
                size="lg"
                className="h-12 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 text-base transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                View Demo
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Set up in minutes</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        id="product"
        className="border-y bg-muted/30 py-24 md:py-32 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Product Suite
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive modules designed to automate and optimize every
              aspect of your IT operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Workflow className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Intelligent workflow automation to streamline your IT
                  processes and reduce manual tasks.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <BarChart3 className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Dashboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time analytics and visualizations to monitor your IT
                  operations and performance metrics.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Network className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with 100+ systems and services through pre-built
                  integrations and APIs.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <ChartLine className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced data analysis and insights to drive informed
                  decision-making and optimization.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                  onClick={() => {
                    const element = document.querySelector("#features");
                    if (element) {
                      const headerOffset = 80;
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to automate your IT
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete platform that combines AI, advanced analytics, and
              enterprise integrations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="border-y bg-muted/30 py-24 md:py-32 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Results that speak for themselves
            </h2>
            <p className="text-lg text-muted-foreground">
              Companies of all sizes trust FractalGrid to transform their
              operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-2 text-4xl font-bold text-primary transition-all duration-300 md:text-5xl group-hover:scale-110">
                  {benefit.metric}
                </div>
                <div className="mb-2 text-lg font-semibold">
                  {benefit.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Enterprise use cases
            </h2>
            <p className="text-lg text-muted-foreground">
              Solutions designed for the most common challenges in IT and
              technical support.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group flex flex-col border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <useCase.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                  </div>
                  <CardTitle className="text-2xl transition-colors duration-300 group-hover:text-primary">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="border-y bg-muted/30 py-24 md:py-32 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What our customers say
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading companies trust FractalGrid to transform their operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    &quot{testimonial.content}&quot
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="mt-1 text-sm font-medium text-primary">
                    {testimonial.company}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="border-y bg-muted/30 py-24 md:py-32 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Resources & Support
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to get started, learn, and succeed with
              FractalGrid.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Database className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive guides, tutorials, and best practices to help
                  you maximize your use of FractalGrid.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  View docs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Network className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  API Reference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete API documentation with examples and integration
                  guides for developers.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Explore API
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Sparkles className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Blog
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Latest insights, case studies, and updates about IT automation
                  and best practices.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Read blog
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Shield className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get help from our expert team. 24/7 support available for all
                  enterprise customers.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Get support
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About FractalGrid
            </h2>
            <p className="text-lg text-muted-foreground">
              {´We're on a mission to transform IT operations through intelligent
              automation and data-driven insights.´}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Users className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  About Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {´Learn about our mission, vision, and the team behind
                  FractalGrid's innovative solutions.´}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Sparkles className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Blog
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay updated with the latest insights, industry trends, and
                  company news from our expert team.
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Read articles
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Target className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Careers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {´Join our team and help shape the future of IT automation.
                  We're always looking for talented individuals.´}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  View openings
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Network className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {´Get in touch with our team. We're here to help you transform
                  your IT operations.´}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-start gap-2"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-background transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Ready to transform your IT?
              </CardTitle>
              <CardDescription className="mx-auto max-w-2xl text-lg">
                Join hundreds of companies already automating their processes
                and reducing operational costs with FractalGrid. Start your free
                trial today.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-12 w-full text-base sm:w-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full text-base sm:w-auto"
              >
                Request Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FractalGrid</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered IT automation platform.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#product" className="hover:text-foreground">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#product" className="hover:text-foreground">
                    Dashboards
                  </a>
                </li>
                <li>
                  <a href="#product" className="hover:text-foreground">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-foreground">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#company" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#resources" className="hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-foreground">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-foreground">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-foreground">
                    System Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} FractalGrid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
