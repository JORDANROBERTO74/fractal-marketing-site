import {
  Brain,
  Workflow,
  BarChart3,
  Network,
  Shield,
  TrendingUp,
  Users,
  Database,
  ChartLine,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Identify and prioritize automation opportunities using artificial intelligence and RICE methodology.",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Create complex automations with our visual drag-and-drop editor, no coding required.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Interactive dashboards with Graphic Walker for real-time exploratory data analysis.",
  },
  {
    icon: Network,
    title: "Seamless Integrations",
    description: "Connect with Airbyte, MCP servers, and 100+ systems through pre-built integrations.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade security with robust authentication, role management, and comprehensive auditing.",
  },
  {
    icon: TrendingUp,
    title: "ROI Tracking",
    description: "Measure real impact with annual savings estimates, success metrics, and detailed financial analysis.",
  },
];

export const benefits = [
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

export const useCases = [
  {
    title: "Customer Support Automation",
    description: "Automate classification, routing, and resolution of technical support tickets with AI.",
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
    description: "Manage inventory, assets, and IT operations with executive dashboards and predictive analytics.",
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
    description: "Transform data into actionable insights with advanced visualizations and exploratory analysis.",
    icon: ChartLine,
    features: [
      "Customizable dashboards",
      "Exploratory analysis with Graphic Walker",
      "Automated executive reports",
      "Real-time metrics",
    ],
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp Inc.",
    company: "TechCorp",
    content: "FractalGrid transformed our support operation. We reduced resolution time by 70% and our customers are more satisfied than ever.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Operations, DataFlow Systems",
    company: "DataFlow",
    content: "The integration with our existing systems was flawless. ROI was evident from the first month of implementation.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "IT Director, Global Services",
    company: "Global Services",
    content: "FractalGrid's dashboards and analytics gave us complete visibility into our operations. Decisions are now based on real data.",
    rating: 5,
  },
];
