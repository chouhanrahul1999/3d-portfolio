import { crtdTechStack, zapierTechStack, excelidrawTechStack, digitalWalletTechStack, brainlyTechStack, betterUptimeTechStack } from './techStacks.js';

export const projects = [
  {
    id: "crtd-technology",
    title: "CRTD Technology Web Application",
    description: "A comprehensive web application for CRTD Technology built with the MERN stack, featuring automated deployment through CI/CD pipeline.",
    image: "/media/icons/crtd.svg",
    techStack: crtdTechStack,
    features: [
      {
        title: "Responsive Design",
        description: "Mobile-first approach ensuring optimal user experience across all devices",
        icon: "FaMobile"
      },
      {
        title: "RESTful API",
        description: "Well-structured backend API with proper error handling and validation",
        icon: "FaServer"
      },
      {
        title: "Database Integration",
        description: "MongoDB integration with optimized queries and data modeling",
        icon: "FaDatabase"
      },
      {
        title: "CI/CD Pipeline",
        description: "Automated deployment process using modern DevOps practices",
        icon: "FaRocket"
      }
    ],
    implementation: {
      architecture: "MERN Stack with CI/CD Pipeline",
      highlights: [
        "Custom React hooks for state management and API calls",
        "MongoDB aggregation pipelines for complex queries",
        "Docker containerization with automated deployment",
        "JWT authentication with refresh token mechanism"
      ],
      codeSnippet: "// Custom hook for API state management\nconst useApiData = (endpoint) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetchData(endpoint).then(setData);\n  }, [endpoint]);\n  \n  return { data, loading };\n};"
    },
    demonstrations: [
      {
        title: "Homepage & Navigation",
        description: "Clean, responsive homepage with intuitive navigation menu and hero section showcasing company services.",
        image: "/media/screenshots/crtd-homepage.png"
      },
      {
        title: "Service Dashboard",
        description: "Interactive dashboard displaying real-time analytics and service metrics with MongoDB integration.",
        image: "/media/screenshots/crtd-dashboard.png"
      },
      {
        title: "User Authentication",
        description: "Secure login system with JWT tokens and role-based access control for different user types.",
        image: "/media/screenshots/crtd-auth.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Performance Improvement", value: "40% faster load times" },
        { label: "User Engagement", value: "60% increase in session duration" },
        { label: "Deployment Efficiency", value: "90% reduction in deployment time" }
      ],
      outcomes: [
        "Successfully deployed to production serving 1000+ daily users",
        "Automated CI/CD pipeline reduced manual deployment errors by 95%",
        "Responsive design improved mobile user experience significantly"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/crtd-technology",
    liveUrl: "https://crtd.in/"
  },
  {
    id: "excelidraw",
    title: "Excelidraw - Real-Time Collaborative Whiteboard",
    description: "A real-time collaborative whiteboard application with dual-backend architecture, WebSocket synchronization, and comprehensive drawing tools built in a Turborepo monorepo.",
    image: "/media/icons/excelidraw.svg",
    techStack: excelidrawTechStack,
    carouselImages: [
      '/screenshots/ex1.png',
      '/screenshots/ex2.png',
      '/screenshots/ex3.png',
      '/screenshots/ex4.png',
      '/screenshots/ex5.png'
    ],
    features: [
      {
        title: "Multi-Tool Drawing Engine",
        description: "Circles, rectangles, pencil, arrows, lines, text, eraser with collision detection and drag-and-drop support",
        icon: "FaPaintBrush"
      },
      {
        title: "Real-Time Collaboration",
        description: "WebSocket broadcasting to all connected users with instant shape updates, deletions, and user presence tracking",
        icon: "FaBolt"
      },
      {
        title: "Persistent Shape Storage",
        description: "PostgreSQL + Prisma ORM for room history retrieval and shape persistence on draw events",
        icon: "FaDatabase"
      },
      {
        title: "JWT Authentication",
        description: "Secure signup/signin with token validation and bcrypt password hashing",
        icon: "FaShieldAlt"
      },
      {
        title: "Undo/Redo Functionality",
        description: "Local history stack with shape selection and movement capabilities",
        icon: "FaUndo"
      }
    ],
    implementation: {
      architecture: "Dual-Backend Microservices Architecture with Real-Time Synchronization",
      highlights: [
        "Frontend: Next.js 14 + TypeScript with Canvas API for drawing operations and Tailwind CSS styling",
        "Dual Backend System: Stateless HTTP REST API + Real-time WebSocket sync engine for collaborative features",
        "Microservices Pattern: Authentication service, Room management service, Drawing synchronization service",
        "Database Layer: PostgreSQL + Prisma ORM for shape persistence and room history with optimized queries",
        "Real-Time Engine: In-memory WebSocket user registry tracking active connections per room for efficient broadcasting",
        "Security: JWT authentication with bcrypt password hashing and token validation middleware",
        "Monorepo Structure: Turborepo organization enabling shared packages and efficient build processes",
        "Infrastructure: Containerized deployment with Docker for scalable multi-service architecture"
      ],
      codeSnippet: "// In-memory user registry for room-based broadcasting\nconst roomUserRegistry = new Map();\n\n// WebSocket connection management\nio.on('connection', (socket) => {\n  socket.on('join-room', ({ roomId, userId }) => {\n    if (!roomUserRegistry.has(roomId)) {\n      roomUserRegistry.set(roomId, new Set());\n    }\n    roomUserRegistry.get(roomId).add(socket);\n    socket.join(roomId);\n  });\n\n  // Real-time shape broadcasting\n  socket.on('shape-update', async (data) => {\n    const { roomId, shape } = data;\n    \n    // Persist to PostgreSQL\n    await prisma.shape.create({\n      data: { ...shape, roomId }\n    });\n    \n    // Broadcast to all room users\n    socket.to(roomId).emit('shape-sync', shape);\n  });\n});"
    },
    demonstrations: [
      {
        title: "Authentication & Room Access",
        description: "Secure user authentication flow with JWT tokens and room-based collaboration setup: • User registers/signs in with email and password • Backend validates credentials and hashes password using bcrypt with salt rounds • JWT access token generated and sent to client for session management • User creates or joins a collaborative room with unique room ID • WebSocket connection established with JWT token validation • Room user registry updated to track active participants • Canvas initialized with persistent shape history from PostgreSQL database",
        image: "/media/screenshots/excelidraw-collaboration.png",
        dashboardImages: [
          '/screenshots/ex1.png',
          '/screenshots/exd1.png',
        ]
      },
      {
        title: "Room Management & Real-Time Sync",
        description: "Room-based collaboration system with in-memory user registry and WebSocket broadcasting: • User creates new room or joins existing room using unique room ID • WebSocket server maintains in-memory Map of roomId to Set of connected sockets • When user joins room, socket is added to room's user registry and Socket.IO room • Drawing operations trigger shape-update events with roomId and shape data • Server persists shape to PostgreSQL with Prisma ORM for room history • WebSocket broadcasts shape-sync event to all other users in the same room • Real-time synchronization ensures all participants see updates within <50ms latency",
        image: "/media/screenshots/excelidraw-tools.png",
        dashboardImages: [
          '/screenshots/exr1.png',
          '/screenshots/exr2.png',
        ]
      },
      {
        title: "Canvas Drawing Engine & Shape Management",
        description: "Multi-tool drawing system with Canvas API manipulation and collision detection: • Canvas context initialized with drawing tools (circles, rectangles, pencil, arrows, lines, text, eraser) • Mouse/touch events captured for drawing operations with coordinate tracking • Shape objects created with properties (type, coordinates, color, strokeWidth, fillColor) • Collision detection algorithm checks for shape intersections and selection boundaries • Drag-and-drop functionality enables shape movement with real-time coordinate updates • Local history stack maintains undo/redo operations for shape modifications • Canvas re-rendering optimized with requestAnimationFrame for smooth 60fps performance",
        image: "/media/screenshots/excelidraw-rooms.png",
        dashboardImages: [
          '/screenshots/exc1.png',
          '/screenshots/exc2.png',
        ]
      }
    ],
    impact: {
      metrics: [
        { label: "WebSocket Synchronization Speed", value: "<50ms real-time latency" },
        { label: "Collaborative Capacity", value: "Unlimited users per room" },
        { label: "Data Reliability", value: "100% shape persistence" }
      ],
      outcomes: [
        "Demonstrates expertise in real-time collaborative systems and WebSocket architecture",
        "Showcases full-stack development with database design using Prisma ORM",
        "Built scalable multi-user drawing platform with <50ms WebSocket synchronization and persistent PostgreSQL storage",
        "Implemented Canvas API manipulation with collision detection and drag-and-drop support"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/Exceliodraw",
    liveUrl: null
  },
  {
    id: "digital-payment",
    title: "Digital Payment Application",
    description: "A secure digital payment platform with P2P transfers, bank integration, and real-time transaction tracking built with modern web technologies.",
    image: "/media/icons/paytm.svg",
    techStack: digitalWalletTechStack,
    features: [
      {
        title: "Secure Authentication",
        description: "JWT-based authentication with multi-factor security measures",
        icon: "FaLock"
      },
      {
        title: "P2P Transfers",
        description: "Instant peer-to-peer money transfers with transaction verification",
        icon: "FaExchangeAlt"
      },
      {
        title: "Bank Integration",
        description: "Connect and manage multiple bank accounts with secure API integration",
        icon: "FaUniversity"
      },
      {
        title: "Transaction History",
        description: "Real-time transaction tracking with detailed history and analytics",
        icon: "FaChartLine"
      }
    ],
    implementation: {
      architecture: "Secure Financial Platform with Database Transactions",
      highlights: [
        "Prisma ORM with type-safe database operations",
        "Database transactions for atomic money transfers",
        "Input validation with Zod schema validation",
        "Rate limiting and security middleware"
      ],
      codeSnippet: "// Atomic money transfer transaction\nawait prisma.$transaction(async (tx) => {\n  await tx.account.update({\n    where: { id: fromAccountId },\n    data: { balance: { decrement: amount } }\n  });\n  \n  await tx.account.update({\n    where: { id: toAccountId },\n    data: { balance: { increment: amount } }\n  });\n});"
    },
    demonstrations: [
      {
        title: "Secure Dashboard",
        description: "User dashboard showing account balance, recent transactions, and quick transfer options with real-time updates.",
        image: "/media/screenshots/paytm-dashboard.png"
      },
      {
        title: "P2P Transfer Flow",
        description: "Step-by-step money transfer process with recipient verification and transaction confirmation.",
        image: "/media/screenshots/paytm-transfer.png"
      },
      {
        title: "Transaction History",
        description: "Detailed transaction logs with filtering, search functionality, and downloadable statements.",
        image: "/media/screenshots/paytm-history.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Transaction Security", value: "100% secure transfers" },
        { label: "Database Integrity", value: "Zero data inconsistencies" },
        { label: "API Response Time", value: "<200ms average" }
      ],
      outcomes: [
        "Implemented atomic transactions ensuring financial data integrity",
        "Built secure authentication system with JWT and refresh tokens",
        "Created comprehensive transaction tracking and audit system"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/paytm",
    liveUrl: null
  },
  {
    id: "brainly",
    title: "Brainly - Personal Knowledge Hub",
    description: "A knowledge management platform that organizes learning content from various sources into personalized knowledge bases with sharing capabilities.",
    image: "/media/icons/brainly.svg",
    techStack: brainlyTechStack,
    features: [
      {
        title: "Content Organization",
        description: "Organize YouTube videos, Twitter posts, and articles into structured knowledge bases",
        icon: "FaBook"
      },
      {
        title: "Dashboard Analytics",
        description: "Comprehensive dashboard showing learning progress and content statistics",
        icon: "FaChartBar"
      },
      {
        title: "Content Management",
        description: "Add, edit, delete, and categorize learning materials with tags and folders",
        icon: "FaEdit"
      },
      {
        title: "Sharing System",
        description: "Share knowledge bases publicly or with specific users with permission controls",
        icon: "FaShare"
      }
    ],
    implementation: {
      architecture: "Content Management System with Analytics",
      highlights: [
        "Flexible MongoDB schema for multiple content types",
        "Tag-based organization with full-text search",
        "Chart.js integration for analytics visualization",
        "Role-based permissions with middleware protection"
      ],
      codeSnippet: "// Content aggregation with analytics\nconst analytics = await Content.aggregate([\n  { $match: { userId: ObjectId(userId) } },\n  { $group: {\n    _id: '$contentType',\n    count: { $sum: 1 },\n    avgRating: { $avg: '$rating' }\n  }}\n]);"
    },
    demonstrations: [
      {
        title: "Content Organization",
        description: "Drag-and-drop interface for organizing YouTube videos, articles, and tweets into structured knowledge bases.",
        image: "/media/screenshots/brainly-organization.png"
      },
      {
        title: "Analytics Dashboard",
        description: "Interactive charts showing learning progress, content consumption patterns, and knowledge base statistics.",
        image: "/media/screenshots/brainly-analytics.png"
      },
      {
        title: "Sharing System",
        description: "Public and private sharing options with permission controls for collaborative learning experiences.",
        image: "/media/screenshots/brainly-sharing.png"
      }
    ],
    impact: {
      metrics: [
        { label: "Content Organization", value: "500+ items per knowledge base" },
        { label: "Search Performance", value: "<100ms full-text search" },
        { label: "User Productivity", value: "70% faster content discovery" }
      ],
      outcomes: [
        "Created flexible content management system supporting multiple media types",
        "Implemented advanced analytics providing actionable learning insights",
        "Built collaborative sharing system with granular permission controls"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/brainly",
    liveUrl: null
  },
  {
    id: "betteruptime",
    title: "BetterUptime - Web Monitoring App",
    description: "Full-stack microservices architecture with dual event streaming using Redis Streams and Kafka for multi-region website monitoring with real-time notifications.",
    image: "/media/screenshots/betteruptime.svg",
    carouselImages: [
      '/screenshots/bh1.png',
      '/screenshots/bh2.png',
      '/screenshots/bh3.png',
      '/screenshots/bh4.png',
      '/screenshots/bh5.png'
    ],
    techStack: betterUptimeTechStack,
    features: [
      {
        title: "Multi-Region Monitoring",
        description: "Distributed website monitoring across India and USA with 3-minute detection intervals",
        icon: "FaGlobe"
      },
      {
        title: "Dual Event Streaming",
        description: "Redis Streams for work distribution and Kafka for real-time notification delivery",
        icon: "FaStream"
      },
      {
        title: "Multi-Channel Alerts",
        description: "Instant notifications via Email, Slack, Discord, Webhook, and Telegram on downtime",
        icon: "FaBell"
      },
      {
        title: "Scalable Architecture",
        description: "Containerized microservices with horizontal scaling and consumer group coordination",
        icon: "FaLayerGroup"
      }
    ],
    implementation: {
      architecture: "Event-Driven Microservices with Dual Streaming",
      highlights: [
        "Redis Streams consumer groups for distributed task processing",
        "Apache Kafka for fault-tolerant real-time notifications",
        "Docker Compose orchestration with multi-container deployment",
        "PostgreSQL with Prisma ORM for monitoring data persistence",
        "JWT-based authentication with role-based access control",
        "Gmail SMTP integration with retry mechanisms for email delivery",
        "Webhook API endpoints for third-party integrations",
        "Cron-based scheduling system for automated monitoring tasks"
      ],
      codeSnippet: "// Redis Streams consumer for distributed monitoring\nconst consumer = redis.xreadgroup(\n  'GROUP', 'monitor-workers', 'worker-1',\n  'COUNT', 10, 'BLOCK', 1000,\n  'STREAMS', 'monitoring-tasks', '>'\n);\n\n// Process monitoring tasks\nconsumer.forEach(async ([stream, messages]) => {\n  for (const [id, fields] of messages) {\n    await processMonitoringTask(fields);\n    await redis.xack('monitoring-tasks', 'monitor-workers', id);\n  }\n});"
    },
    demonstrations: [
      {
        title: "Secure Authentication & Onboarding",
        userAction: "Complete secure signup and authentication flow",
        description: "Production-grade authentication system: • bcrypt password hashing with salt rounds • JWT token-based authentication with refresh mechanisms • Zod schema validation for input sanitization • Secure session handling • Comprehensive user onboarding flow",
        outcome: "User account securely created with hashed passwords, JWT tokens issued, email verified, and fully configured for website monitoring with tested notification channels.",
        url: "betteruptime.com/auth",
        technologies: ["JWT", "bcrypt", "Zod", "Gmail SMTP"],
        features: ["Password hashing", "JWT authentication", "Schema validation", "Email verification", "Secure sessions"],

        signupImages: [
          '/screenshots/sign1.png',
          '/screenshots/sign2.png',
          '/screenshots/sign3.png'
        ]
      },
      {
        title: "Real-time Dashboard",
        userAction: "User views monitoring dashboard",
        description: "Live dashboard displaying uptime statistics, response times, and historical data with interactive charts and real-time updates: • View the last 5 monitored links with real-time status updates • Beautiful interactive graphs showing website response times • Comprehensive statistics table displaying uptime percentages and total incidents • Multi-region monitoring data with regional performance breakdowns",
        outcome: "Users can monitor all websites at a glance with instant status updates and performance metrics.",
        url: "betteruptime.com/dashboard",
        technologies: ["Next.js", "Node.js", "PostgreSQL"],
        features: ["Real-time charts", "Status indicators", "Historical data", "Performance metrics"],
        highlight: "WebSocket connections provide instant dashboard updates when monitoring events occur",
        dashboardImages: [
          '/screenshots/d1.png',
          '/screenshots/d2.png',
          '/screenshots/d3.png'
        ]
      },
      {
        title: "Distributed Monitoring",
        userAction: "Add website URL for monitoring",
        description: "Complete CRUD monitoring workflow with Redis Streams: • User adds website URL through dashboard interface • PostgreSQL database stores monitoring configuration • Redis Streams tracks and queues new monitoring tasks from database • Distributed workers consume tasks from Redis Streams to check website uptime • Response times and status calculated and saved to database • Backend API provides real-time status updates to frontend • Dashboard displays live monitoring results with response metrics",
        outcome: "Full-stack monitoring system with Redis Streams tracking, real-time CRUD operations, and live status updates.",
        url: "betteruptime.com/monitoring",
        technologies: ["Redis Streams", "Docker", "PostgreSQL"],
        features: ["CRUD Operations", "Redis Streams Tracking", "Real-time Updates", "Response Tracking"],
        highlight: "Redis Streams efficiently tracks and distributes monitoring tasks across worker nodes with consumer group coordination",
        monitoringImages: [
          '/screenshots/m1.png',
          '/screenshots/m2.png',
          '/screenshots/m3.png',
          '/screenshots/m4.png'
        ]
      },
      {
        title: "Multi-Channel Notifications",
        userAction: "Kafka detects website downtime event",
        description: "Event-driven notification system with Kafka streaming: • Kafka process continuously monitors website status changes in real-time • When website goes down, downtime event triggers notification pipeline • Kafka streams process downtime events and route to notification services • System checks user subscription preferences for notification channels • Automated alerts sent via Email, Slack, Discord, Webhook, and Telegram • Users receive instant notifications on their subscribed channels within seconds • Delivery confirmation and retry mechanisms ensure reliable notification delivery",
        outcome: "Real-time event-driven notifications delivered instantly across multiple channels based on user subscriptions.",
        url: "betteruptime.com/alerts",
        technologies: ["Kafka", "Gmail SMTP", "Webhook APIs"],
        features: ["Event Streaming", "Subscription Management", "Multi-channel Delivery", "Retry Mechanisms"],
        highlight: "Kafka streams enable real-time event processing with automatic notification routing based on user preferences",
        notificationImages: [
          '/screenshots/n1.png',
          '/screenshots/n2.png',
          '/screenshots/n3.png'
        ]
      }
    ],
    impact: {
      metrics: [
        { label: "Detection Time", value: "3-minute intervals" },
        { label: "Notification Speed", value: "<5 seconds delivery" },
        { label: "System Uptime", value: "99.9% availability" },
        { label: "Scalability", value: "500+ websites monitored" }
      ],
      outcomes: [
        "Built fault-tolerant distributed system handling multi-region monitoring at scale",
        "Implemented dual event streaming architecture ensuring reliable message processing",
        "Created comprehensive notification system with 5 different delivery channels",
        "Achieved sub-5-second notification delivery with automatic retry mechanisms"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/betteruptime-app",
    liveUrl: null
  },
  {
    id: "zapier-clone",
    title: "Zapier - Full-Stack Workflow Automation Platform",
    description: "A comprehensive workflow automation platform built with microservices architecture, featuring visual workflow builder, event-driven processing, and distributed worker execution.",
    image: "/media/screenshots/betteruptime.svg",
    carouselImages: [
      '/screenshots/zd1.png',
      '/screenshots/zdash.png',
      '/screenshots/zt1.png',
      '/screenshots/zaxtion.png',
      '/screenshots/zp1.png',
      '/screenshots/zz1.png',
    ],
    techStack: zapierTechStack,
    features: [
      {
        title: "Visual Workflow Builder",
        description: "Drag-and-drop interface for creating complex workflows with trigger-action chaining and real-time preview",
        icon: "FaSitemap"
      },
      {
        title: "Event-Driven Architecture",
        description: "Apache Kafka message queues for reliable task distribution and workflow execution",
        icon: "FaCogs"
      },
      {
        title: "Microservices Design",
        description: "Distributed services including API, Hooks, Processor, and Worker for scalable processing",
        icon: "FaCubes"
      },
      {
        title: "Webhook Integration",
        description: "Unique webhook URLs per workflow for external system integrations and triggers",
        icon: "FaPlug"
      }
    ],
    implementation: {
      architecture: "Event-Driven Microservices with Distributed Worker Architecture",
      highlights: [
        "Frontend: React + TypeScript with drag-and-drop React Flow integration",
        "Backend: Node.js microservices (API, Hooks, Processor, Worker) with Express",
        "Database: PostgreSQL with Prisma ORM for type-safe database operations",
        "Message Queue: Apache Kafka for reliable event streaming and task distribution",
        "Authentication: JWT-based auth with bcrypt password hashing and middleware",
        "Containerization: Docker Compose orchestration for multi-service deployment",
        "Webhook System: Dynamic URL generation with Express routing and validation",
        "Worker Pool: Distributed task execution with consumer groups and retry logic"
      ],
      codeSnippet: "// Kafka consumer with retry mechanism\nconst consumer = kafka.consumer({ groupId: 'workflow-workers' });\n\nawait consumer.subscribe({ topic: 'workflow-tasks' });\n\nawait consumer.run({\n  eachMessage: async ({ message }) => {\n    try {\n      const task = JSON.parse(message.value.toString());\n      await executeAction(task);\n    } catch (error) {\n      await retryTask(task, error);\n    }\n  }\n});"
    },
    demonstrations: [
      {
        title: "Authentication & User Onboarding",
        userAction: "Complete authentication flow from landing page to dashboard",
        description: "Comprehensive user authentication journey: • Landing page with clear call-to-action and feature overview • Secure signup form with email validation and password requirements • JWT token generation with bcrypt password hashing • Email verification process with secure token validation • User profile setup with workflow preferences configuration • Automatic redirect to personalized dashboard upon successful authentication • Session management with refresh token mechanism for persistent login",
        outcome: "Seamless user onboarding experience from first visit to authenticated dashboard access with secure session management.",
        url: "zapier-clone.com/auth",
        technologies: ["React", "JWT", "bcrypt", "Email Verification"],
        features: ["Secure signup", "Email verification", "Session management", "Dashboard redirect"],
        signupImages: [
          '/media/screenshots/zd1.png',
          '/media/screenshots/zd2.png',
          '/media/screenshots/zd3.png'
        ]
      },
      {
        title: "Webhook Trigger Creation",
        userAction: "Create webhook trigger and configure event detection",
        description: "Webhook trigger setup workflow: • User creates new workflow in visual builder interface • Selects webhook trigger from available trigger options • System generates unique webhook URL for the workflow • User configures trigger event parameters and validation rules • Webhook endpoint is registered with Express routing system • Event detection logic is set up to monitor incoming webhook calls • Trigger configuration is saved to PostgreSQL database with workflow metadata",
        outcome: "Unique webhook URL created and configured to detect specific events for workflow automation.",
        url: "zapier-clone.com/triggers",
        technologies: ["React", "Express", "PostgreSQL"],
        features: ["Webhook creation", "Event configuration", "URL generation", "Trigger validation"],
        dashboardImages: [
          '/screenshots/zdash.png',
          '/screenshots/zt1.png',
          '/screenshots/zaxtion.png'
        ]
      },
      {
        title: "Action Execution: Solana Transfer + Email",
        userAction: "Webhook trigger sequential actions: Solana transfer followed by email",
        description: "Multi-step action execution workflow: • External event triggers the configured webhook URL • Webhook validates incoming event and publishes to Kafka queue • Processor service retrieves workflow configuration from database • First action: Worker executes Solana blockchain transaction with wallet integration • Solana transfer completion triggers second action in the chain • Second action: Worker sends email notification with transaction details • Each action result is logged to PostgreSQL with execution status and timestamps ",
        outcome: "Automated workflow executes Solana transfer and email notification in sequence with full error handling and logging.",
        url: "zapier-clone.com/execution",
        technologies: ["Solana Web3", "Kafka", "Email API", "PostgreSQL"],
        features: ["Blockchain integration", "Sequential execution", "Email automation", "Error handling"],
        monitoringImages: [
          '/screenshots/zp1.png',
          '/screenshots/zz1.png'
        ]
      }
    ],
    impact: {
      metrics: [
        { label: "Workflow Execution", value: "<2s average processing" },
        { label: "System Reliability", value: "99.5% uptime" },
        { label: "Scalability", value: "1000+ concurrent workflows" },
        { label: "Action Success Rate", value: "98% with retry logic" }
      ],
      outcomes: [
        "Built scalable microservices architecture handling complex workflow automation",
        "Implemented event-driven processing with Kafka for reliable message distribution",
        "Created intuitive visual workflow builder with real-time preview capabilities",
        "Achieved fault-tolerant execution with distributed worker pool and retry mechanisms"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/zapier-app",
    liveUrl: null
  }
];
