import { Project } from './types';

import myTrain1 from '@/assets/projects/my-train/my-train-1.png';
import myTrain2 from '@/assets/projects/my-train/my-train-2.png';
import myTrain3 from '@/assets/projects/my-train/my-train-3.png';
import myTrain4 from '@/assets/projects/my-train/my-train-4.png';
import myTrain5 from '@/assets/projects/my-train/my-train-5.png';
import myTrain6 from '@/assets/projects/my-train/my-train-6.png';

import collegeAi1 from '@/assets/projects/college-ai/college-ai-assistant-1.png';

import aiWebsite1 from '@/assets/projects/ai-website-generator/ai-website-generator-1.png';
import aiWebsite2 from '@/assets/projects/ai-website-generator/ai-website-generator-2.png';
import aiWebsite3 from '@/assets/projects/ai-website-generator/ai-website-generator-3.png';
import aiWebsite4 from '@/assets/projects/ai-website-generator/ai-website-generator-4.png';
import aiWebsite5 from '@/assets/projects/ai-website-generator/ai-website-generator-5.jpeg';
import aiWebsite6 from '@/assets/projects/ai-website-generator/ai-website-generator-6.jpeg';

import finance1 from '@/assets/projects/finance-dashboard/finance-dashboard-1.png';
import finance2 from '@/assets/projects/finance-dashboard/finance-dashboard-2.png';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'My Train',
    category: ['Web'],
    description:
      'Real-time Indian Railways tracker with live train locations, station progress, weather, and route information.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: '• Live Train Tracking • Interactive Maps • Weather Data',
    color: 'from-amber-500 to-orange-600',
    accent: '#b45309',
    featured: true,
    previewUrl: 'https://my-train.onrender.com',
    gitUrl: 'https://github.com/SiddharthRai22/My-Train',
    challenge:
      'Providing reliable, real-time railway tracking and accurate station arrival updates without latency spikes or excessive load on third-party data providers.',
    solution:
      'Engineered an interactive route map with station timelines and responsive cards, coupled with an intelligent caching layer to minimize request overhead.',
    outcome:
      'Delivered a lightning-fast, dependable transit tracking tool with live status, delay notifications, and local weather forecasts for travelers across India.',
    fullDescription:
      'My Train is a real-time Indian Railways tracker designed to keep travelers informed. Featuring live train tracking, station schedules, delay updates, and interactive maps, it delivers an intuitive and responsive experience.',
    images: [myTrain1, myTrain2, myTrain3, myTrain4, myTrain5, myTrain6],
    galleryImages: [myTrain1, myTrain2, myTrain3, myTrain4, myTrain5, myTrain6],
    overviewData: {
      role: 'Full Stack Developer',
      platform: 'Web',
      technology: 'Next.js, TypeScript, Tailwind CSS',
      status: 'Live',
      features: 'Real-time train tracking, Interactive maps, Station timeline, Weather data, Elevation profile, API caching',
      overview: [
        'My Train is a web application for tracking Indian Railways trains in real time. It shows the current train location, route progress, station information, weather conditions at upcoming halts, and elevation data along the journey.',
        "The main goal of the project was to bring different travel-related data into one interface instead of making users check multiple sources. The application combines train tracking APIs with map, weather, and terrain services to provide a more complete view of a train's journey.",
      ],
    },
  },
  {
    id: '2',
    title: 'Deep Research AI Agent',
    category: ['AI'],
    description:
      'AI-powered research system that uses multiple agents to search the web, extract information, generate research reports, and evaluate their quality.',
    tech: ['Python', 'LangChain', 'Streamlit'],
    metrics: 'Multi-Agent Research • Web Search • Report Generation',
    color: 'from-violet-500 to-indigo-500',
    accent: '#b45309',
    featured: true,
    previewUrl: '',
    gitUrl: 'https://github.com/SiddharthRai22/DeepResearch-AI-agent',
    challenge:
      'Synthesizing deep, fact-checked research from scattered web sources without manual intervention or hallucinations across complex query topics.',
    solution:
      'Built a modular multi-agent workflow using LangChain where independent agents specialize in web exploration, information extraction, synthesis, and quality auditing.',
    outcome:
      'Automated the end-to-end research pipeline, generating comprehensive, well-structured analytical reports with high factual reliability.',
    fullDescription:
      'Deep Research AI Agent is an autonomous multi-agent platform that conducts in-depth web investigations. It coordinates agents across browsing, data filtering, multi-source synthesis, and report evaluation to deliver ready-to-read research briefs.',
    images: [],
    overviewData: {
      role: 'AI Engineer',
      platform: 'Web & CLI',
      technology: 'Python, LangChain, Mistral AI, Tavily, Streamlit, BeautifulSoup4',
      status: 'Live',
      features: 'Multi-Agent Research, Web Search, Web Scraping, Report Generation, AI Evaluation, Markdown Export',
      overview: [
        'I built a multi-agent research system that automates the process of finding and analyzing information from the web. It uses separate agents for searching, reading, writing, and evaluating research content.',
        'The system searches for relevant sources using Tavily, extracts webpage content with BeautifulSoup, and uses Mistral AI to generate a structured research report. A separate Critic Chain reviews the report for accuracy, structure, and depth and provides a quality score with feedback.',
      ],
    },
  },
  {
    id: '3',
    title: 'College AI Assistant',
    category: ['AI'],
    description:
      'AI college assistant that uses agentic RAG to answer academic and fee-related questions from college documents.',
    tech: ['Python', 'LangGraph', 'LangChain', 'FAISS', 'HuggingFace'],
    metrics: 'Agentic RAG • Query Routing • Document Retrieval',
    color: 'from-sky-500 to-blue-600',
    accent: '#D94F10',
    featured: true,
    previewUrl: '',
    gitUrl: 'https://github.com/SiddharthRai22/Collage-AI-chat',
    challenge:
      'Accurately resolving student queries covering disparate domains—such as fees, exam schedules, and department notices—without context bleeding or inaccurate answers.',
    solution:
      'Designed an Agentic RAG architecture with LangGraph and FAISS vector embeddings that categorizes queries and queries domain-specific indexed documents.',
    outcome:
      'Created an instant, context-aware student support system that delivers grounded, personalized answers to complex college administrative questions.',
    fullDescription:
      'College AI Assistant is an institutional AI assistant powered by Agentic RAG. It routes queries to targeted document stores, ensuring students get verified information on courses, fees, and administrative procedures in seconds.',
    images: [collegeAi1],
    galleryImages: [collegeAi1],
    overviewData: {
      role: 'AI Engineer',
      platform: 'Web & CLI',
      technology: 'Python, LangGraph, LangChain, Groq, Llama 3.3 70B, FAISS, HuggingFace Embeddings, Streamlit',
      status: 'Live',
      features: 'Intent Classification, Academic RAG, Fee RAG, Program Personalization',
      overview: [
        'I built a college AI assistant that answers student questions using information from academic and fee-related documents.',
        'The system uses LangGraph to classify each query as academic, fee, or general and routes it to the appropriate workflow. Academic and fee questions use FAISS-based RAG to retrieve relevant information from PDF documents, while general questions are handled directly by the LLM.',
        "The assistant also uses the student's selected program, such as BCA, BBA, or B.Com, to provide more relevant responses.",
      ],
    },
  },
  {
    id: '4',
    title: 'AI Website Generator',
    category: ['Web', 'AI'],
    description:
      'AI-powered website builder that turns natural-language prompts into editable websites. Users can edit the generated code, preview changes live, and deploy their websites online.',
    tech: ['React', 'Node.js', 'MongoDB', 'LLM', 'Stripe', 'Clerk'],
    metrics: 'AI Code Generation • Live Code Editing • Website Deployment',
    color: 'from-teal-500 to-cyan-500',
    accent: '#C9A86A',
    featured: true,
    previewUrl: 'https://websitebuilder-6.onrender.com/',
    gitUrl: 'https://github.com/SiddharthRai22/websiteBuilder',
    challenge:
      'Transforming freeform natural language prompts into responsive, functional web layouts in real-time while handling user sessions and billing safely.',
    solution:
      'Constructed a scalable MERN stack backend integrated with LLMs for dynamic code generation, Clerk for secure user authentication, and Stripe for credit management.',
    outcome:
      'Delivered a full-stack SaaS that generates and displays customized website previews in real-time, allowing users to rapidly ideate and prototype web pages.',
    fullDescription:
      'AI Website Generator is a complete web building platform that leverages modern LLMs to turn ideas into live web layouts. It features credit-based usage tiers, secure account management, and instant in-browser previews.',
    images: [aiWebsite1, aiWebsite2, aiWebsite3, aiWebsite4, aiWebsite5, aiWebsite6],
    galleryImages: [aiWebsite1, aiWebsite2, aiWebsite3, aiWebsite4, aiWebsite5, aiWebsite6],
    overviewData: {
      role: 'Full Stack Developer',
      platform: 'Web',
      technology: 'React, Vite, Node.js, Express, MongoDB, OpenRouter, Stripe, Firebase, Redux Toolkit',
      status: 'Live',
      features: 'AI Website Generation, Live Code Editing, Website Preview, Authentication, Credit System, Online Deployment',
      overview: [
        'I built an AI-powered website builder that allows users to create websites from natural-language prompts. The platform uses an LLM to generate HTML, CSS, and JavaScript, which users can edit and preview in real time.',
        'Users can save their projects, manage credits, and deploy their websites to create a live public link. It also includes Google authentication and Stripe payments for purchasing additional credits.',
      ],
    },
  },
  {
    id: '5',
    title: 'Finance Dashboard UI',
    category: ['Web'],
    description:
      'Responsive finance dashboard for tracking transactions, viewing financial metrics, and analyzing spending patterns.',
    tech: ['React.js', 'Tailwind CSS'],
    metrics: 'Financial Dashboard • Transaction Management • Data Visualization',
    color: 'from-blue-500 to-indigo-500',
    accent: '#BF4B12',
    featured: true,
    previewUrl: 'https://finance-dashboard-ui-project.onrender.com/',
    gitUrl: 'https://github.com/SiddharthRai22/Finance-Dashboard-UI-Project',
    challenge:
      'Designing a dense financial metrics dashboard that stays legible, uncluttered, and highly readable on both mobile viewports and large desktop monitors.',
    solution:
      'Crafted reusable financial widget components, balanced typography, and responsive chart layouts built with React and Tailwind CSS.',
    outcome:
      'Produced a clean, responsive financial interface that helps users review expenditures, monitor account health, and track key metrics effortlessly.',
    fullDescription:
      'Finance Dashboard UI is an elegant user interface created for personal and business wealth monitoring. It emphasizes clear visual hierarchy, intuitive data charts, and seamless navigation across financial insights.',
    images: [finance1, finance2],
    galleryImages: [finance1, finance2],
    overviewData: {
      role: 'Frontend Developer',
      platform: 'Web',
      technology: 'React, Vite, Tailwind CSS, Recharts/Chart.js, Context API/Zustand',
      status: 'Live',
      features: 'Financial Metrics, Transaction Management, Search & Filters, Data Visualization, Role-Based UI, Financial Insights',
      overview: [
        'I built a responsive finance dashboard for tracking financial activity and analyzing transaction data.',
        'The dashboard displays key metrics such as total balance, monthly income, expenses, and savings rate, along with charts for revenue trends and spending categories.',
        'Users can search, filter, and sort transactions, while the interface includes separate Viewer and Admin roles to demonstrate different permissions. The project uses mocked frontend data and focuses on UI/UX.',
      ],
    },
  },
];
