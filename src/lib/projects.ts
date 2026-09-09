import { Project } from './types';

import myTrain1 from '@/assets/projects/my-train/my-train-1.png';
import myTrain2 from '@/assets/projects/my-train/my-train-2.png';
import myTrain3 from '@/assets/projects/my-train/my-train-3.png';

import deepResearch1 from '@/assets/projects/deep-research/researchmind.jpg';

import collegeAi1 from '@/assets/projects/college-ai/college-ai-assistant.png';
import collegeAi2 from '@/assets/projects/college-ai/college-ai.jpg';

import aiWebsite1 from '@/assets/projects/ai-website-generator/ai-website-generator.png';
import aiWebsite2 from '@/assets/projects/ai-website-generator/ai-web-1.png';
import aiWebsite3 from '@/assets/projects/ai-website-generator/ai-web-2.png';

import finance1 from '@/assets/projects/finance-dashboard/finance-dashboard.png';
import finance2 from '@/assets/projects/finance-dashboard/finance-web-1.png';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'My Train',
    category: ['Web'],
    description:
      'Real-time Indian Railways tracker with live train locations, interactive maps, station timelines, weather, and delay updates. Built with a modern responsive UI and intelligent caching for a smooth tracking experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: 'Live Railway Tracking • Intelligent Caching',
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
    images: [myTrain1, myTrain2, myTrain3],
  },
  {
    id: '2',
    title: 'Deep Research AI Agent',
    category: ['AI'],
    description:
      'Autonomous multi-agent research system that searches the web, extracts relevant content, generates structured reports, and evaluates their quality. Built with specialized AI agents for end-to-end research automation.',
    tech: ['Python', 'LangChain', 'Streamlit'],
    metrics: 'Autonomous Multi-Agent • End-to-End Synthesis',
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
    images: [deepResearch1],
  },
  {
    id: '3',
    title: 'College AI Assistant',
    category: ['AI'],
    description:
      'AI-powered college assistant that intelligently routes student queries across academic, fee, and general knowledge workflows. Uses Agentic RAG to retrieve relevant information from college documents and generate personalized responses.',
    tech: ['Python', 'LangGraph', 'LangChain', 'FAISS', 'HuggingFace'],
    metrics: 'Agentic RAG • Query Routing',
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
    images: [collegeAi1, collegeAi2],
  },
  {
    id: '4',
    title: 'AI Website Generator',
    category: ['Web', 'AI'],
    description:
      'An AI-powered application that generates fully functional websites from simple prompts using MERN stack and LLM integration. Features a credit-based system with Stripe, user authentication, and real-time generation previews.',
    tech: ['React', 'Node.js', 'MongoDB', 'LLM', 'Stripe', 'Clerk'],
    metrics: 'Prompt-to-Site • Real-Time Previews',
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
    images: [aiWebsite1, aiWebsite2, aiWebsite3],
  },
  {
    id: '5',
    title: 'Finance Dashboard UI',
    category: ['Web'],
    description:
      'A modern and responsive finance dashboard UI that provides a clean visualization of financial data. Designed with a focus on user experience, it includes charts, financial summaries, and intuitive layouts for better user interaction.',
    tech: ['React.js', 'Tailwind CSS'],
    metrics: 'Data Visualization • Clean UX',
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
  },
];
