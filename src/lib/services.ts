import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'fullstack',
    number: '01',
    title: 'Full Stack\nWeb Development',
    items: ['MERN Stack & Next.js builds', 'Scalable RESTful APIs', 'Modern responsive UIs', 'End-to-end database design'],
    color: 'bg-violet-500'
  },
  {
    id: 'ai-engineering',
    number: '02',
    title: 'AI & Agentic\nSystems',
    items: ['LLM integration & prompt chains', 'LangChain & LangGraph agents', 'Agentic RAG architectures', 'Vector databases & retrieval'],
    color: 'bg-cyan-500'
  },
  {
    id: 'automation',
    number: '03',
    title: 'Intelligent\nAutomation',
    items: ['Autonomous research agents', 'Model Context Protocol (MCP)', 'Multi-agent orchestration', 'Workflow optimization'],
    color: 'bg-amber-500'
  },
  {
    id: 'frontend',
    number: '04',
    title: 'Interactive\nUI Engineering',
    items: ['Component-driven development', 'Tailwind CSS styling', 'Clean dashboard interfaces', 'High performance & responsiveness'],
    color: 'bg-rose-500'
  }
];
