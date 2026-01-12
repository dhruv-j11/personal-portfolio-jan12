export interface Project {
  id: string
  name: string
  description: string
  techStack: string[]
  fullDescription?: string
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'AIDE Services',
    description: 'Peoples Choice Award, 1st Place @ FCI Hackathon',
    techStack: ['Next.js', 'React', 'Flask', 'OpenAI' , 'Airtable', 'SendGrid', 'VAPI'],
    fullDescription: 'Time-optimizing patient logging system for hospitals and clinics made with Flask, React, OpenAI, and ElevenLabs. Implemented automated workflows with Airtable, SendGrid, and VAPI. Awarded 1k CAD by interested VC’s.',
    link: 'https://drive.google.com/drive/folders/1akSTLwzDA90AI1HE6tNmqh4ayOy5gU6p',
    github: 'https://github.com/dhruv-j11/aide-services',
  },
  {
    id: '2',
    name: 'PrepLabs',
    description: 'Hack Western Project',
    techStack: ['React', 'Node.js', 'MediaPipe', 'Gemini', 'ElevenLabs', 'Presage', 'WebSpeech'],
    fullDescription: 'Interview/Resume Suite combining AI and biometrics using engineered computer vision and Presage Technology. Created with React/TypeScript, Node, integrating STT with ElevenLabs and VAPI for mobile on-the-go interviewing.',
    link: 'https://devpost.com/software/preplab?ref_content=user-portfolio&ref_feature=in_progress',
    github: 'https://github.com/dhruv-j11/HackWesternPrepLab',
  
  },
  {
    id: '3',
    name: 'BeaverBreach',
    description: '1st Place @ Hack Canada 2025. $2k CAD Award',
    techStack: ['Flask', 'Tailwind', 'Firebase', 'GCP', 'AppsScript', 'Pandas', 'SerpAPI'],
    fullDescription: 'AI Agent that reroutes supply chains and predicts tariff costs. Awarded 2K CAD for Best Use of Artificial Intelligence.Developed ML pipelines in Flask with data scraping, and classification models with workflows using GCP + Firebase.',
    link: 'https://dorahacks.io/buidl/23103/milestones',
    github: 'https://github.com/HetavP2/BeaverBreach/tree/main',
 
  },
  {
    id: '4',
    name: 'Roster: Workforce Optimization',
    description: 'Data Analysis Platform for Workforce Optimization',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'PapaParse', 'Recharts'],
    fullDescription: 'Workforce optimization engine that parses employee CSV data to provide HR Solutions. Computes efficiency, cost, performance, and staffing suggestions based on data. UI Created with Framer/Three.js.',
    github: 'https://github.com/dhruv-j11/roster',
  
  },
  {
    id: '5',
    name: 'UnitySOS: Create Together',
    description: 'Mobile AI Assistant for Unity projects.',
    techStack: ['React Native', 'Expo', 'SpeechAPI', 'Gemini'],
    fullDescription: 'Mobile Voice-driven AI assistant for Unity developers working inside active projects. Provides real-time debugging, coding guidance, and engine-specific explanations powered by Google Gemini.',
  },
  {
    id: '6',
    name: 'SnapSave',
    description: 'Unloads years of Snap Memories within seconds.',
    techStack: ['Python', 'PyQt6'],
    fullDescription: 'Users upload a snap memories JSON, and the app automatically downloads all media into a user selected directory, automatically sorting by date. Creates a post-process report with summary stats.',
    github: 'https://github.com/dhruv-j11/snapmemories-downloader',
 
  },
]

