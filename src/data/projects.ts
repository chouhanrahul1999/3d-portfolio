import { crtdTechStack, zapierTechStack, excelidrawTechStack, digitalWalletTechStack, brainlyTechStack, betterUptimeTechStack, fastFoodTechStack, movieAppTechStack, realStateTechStack, dentwiseTechStack } from './techStacks.js';

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
    description: "Full-stack microservices architecture with dual event streaming using Redis Streams and Kafka for multi-region website monitoring with real-time notifications. Monitors websites across India and USA at 3-minute intervals, detecting downtime and instantly alerting users via Email, Slack, Discord, Webhook, and Telegram. Built with Next.js, Node.js, PostgreSQL, Docker, and JWT authentication — delivering notifications in under 5 seconds with 99.9% system availability.",
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
  },
  {
    id: "fast-food-app",
    title: "Fast Food App - Mobile Food Ordering",
    description: "A full-stack mobile food ordering app built with React Native and Expo. Users can browse food categories, search menu items, customize orders, manage their cart, and place orders — all with a clean and modern UI.",
    image: "/screenshots/food-cover.png",
    techStack: fastFoodTechStack,

    features: [
      {
        title: "Authentication",
        description: "Sign up and sign in with email and password using Appwrite backend",
        icon: "FaLock"
      },
      {
        title: "Browse & Search",
        description: "Browse offer cards and search menu items by name with category filters (Burgers, Pizzas, Burritos, Wraps, Bowls, Sandwiches)",
        icon: "FaSearch"
      },
      {
        title: "Cart Management",
        description: "Add items to cart, increase/decrease quantity, remove items, and view payment summary with delivery fee and discount",
        icon: "FaShoppingCart"
      },
      {
        title: "Global State",
        description: "Zustand for managing authentication and cart state across the app",
        icon: "FaCogs"
      }
    ],
    implementation: {
      architecture: "React Native Mobile App with Appwrite Backend",
      highlights: [
        "File-based navigation with Expo Router for clean routing structure",
        "Appwrite backend for authentication, database, and storage",
        "Zustand stores for auth and cart global state management",
        "NativeWind (Tailwind CSS) for consistent styling across platforms",
        "Custom useAppwrite hook for data fetching and query management",
        "Relational database schema with menu, categories, and customizations"
      ],
      codeSnippet: "// Zustand cart store\nconst useCartStore = create((set) => ({\n  items: [],\n  addItem: (item) => set((state) => ({\n    items: [...state.items, item]\n  })),\n  removeItem: (id) => set((state) => ({\n    items: state.items.filter((i) => i.$id !== id)\n  })),\n  updateQuantity: (id, qty) => set((state) => ({\n    items: state.items.map((i) =>\n      i.$id === id ? { ...i, quantity: qty } : i\n    )\n  }))\n}));"
    },
    demonstrations: [
      {
        title: "Authentication Flow",

        dashboardImages: [
          '/screenshots/food-app5.jpg',
          '/screenshots/food-app9.png',
          '/screenshots/food-app1.jpg',
        ],
        description: "Secure sign up and sign in with Appwrite: • User registers with email and password • Appwrite creates account and user document in database • JWT session stored and user fetched into Zustand auth store • Root index.tsx checks isAuthenticated and redirects accordingly • Auth layout redirects already authenticated users away from auth screens",
        outcome: "Seamless authentication with persistent session management."
      },
      {
        title: "Home & Search",
        dashboardImages: [
          '/screenshots/food-app6.png',
          '/screenshots/food-app2.jpg',
          '/screenshots/food-app-9.png',
        ],
        description: "Browse and discover food items: • Home screen displays offer cards (Summer Combo, Burger Bash, Pizza Party, Burrito Delight) • Tapping an offer navigates to filtered search results • Search screen supports real-time name search and category filtering • Menu cards display food images, prices, and ratings",
        outcome: "Intuitive food discovery experience with fast filtering."
      },
      {
        title: "Cart & Checkout",
        dashboardImages: [
          '/screenshots/food-app3.jpg',
          '/screenshots/food-app7.png',
          '/screenshots/food-app4.jpg',
        ],
        description: "Full cart management experience: • Add any menu item to cart with one tap • Increase or decrease item quantity directly in cart • Remove items from cart • Payment summary shows subtotal, delivery fee, and discount • Zustand cart store keeps state in sync across all screens",
        outcome: "Smooth cart experience with real-time price calculations."
      }
    ],
    impact: {
      metrics: [
        { label: "Platforms", value: "iOS & Android" },
        { label: "Navigation", value: "File-based Expo Router" },
        { label: "State Management", value: "Zustand global stores" }
      ],
      outcomes: [
        "Built cross-platform mobile app with React Native and Expo",
        "Integrated Appwrite for full backend — auth, database, and storage",
        "Implemented clean cart and order management with Zustand"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/fast-food-app",
    liveUrl: null
  },
  {
    id: "movie-app",
    title: "Movie App - Discover & Explore Movies",
    description: "A React Native mobile app that lets users discover, search, and explore movies. Tracks what movies users search for most and surfaces them as trending — powered by TMDB API and Appwrite real-time backend.",
    image: "/images/Cover.png",
    techStack: movieAppTechStack,
    features: [
      {
        title: "Trending Algorithm",
        description: "Every search updates a count in Appwrite. The most searched movies bubble up to the trending section automatically",
        icon: "FaFire"
      },
      {
        title: "Debounced Search",
        description: "Real-time search that queries the TMDB API as you type with debouncing for performance",
        icon: "FaSearch"
      },
      {
        title: "Movie Details",
        description: "Full details page showing poster, rating, overview, genres, budget, revenue, and production companies",
        icon: "FaFilm"
      },
      {
        title: "Home Screen",
        description: "Displays trending movies ranked by search popularity and a list of the latest popular movies",
        icon: "FaHome"
      }
    ],
    implementation: {
      architecture: "React Native App with TMDB API & Appwrite Backend",
      highlights: [
        "TMDB API integration for popular movies, search, and full movie details",
        "Appwrite database tracks search terms and counts for trending calculation",
        "Debounced search input to minimize API calls while typing",
        "File-based navigation with Expo Router",
        "Generic useFetch hook for reusable data fetching across screens",
        "Gradient ranking numbers on trending cards using masked-view"
      ],
      codeSnippet: "// Trending algorithm — update search count in Appwrite\nexport const updateSearchCount = async (searchTerm, movie) => {\n  const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [\n    Query.equal('searchTerm', searchTerm)\n  ]);\n\n  if (result.documents.length > 0) {\n    const doc = result.documents[0];\n    await databases.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {\n      count: doc.count + 1\n    });\n  } else {\n    await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {\n      searchTerm, movie_id: movie.id,\n      title: movie.title,\n      poster_url: movie.poster_path,\n      count: 1\n    });\n  }\n};"
    },
    demonstrations: [
      {
        title: "Home & Trending",
        dashboardImages: [
          '/screenshots/movie-app1.jpg',
          '/screenshots/movie-app1.jpg',

        ],
        description: "Home screen experience: • Fetches popular movies from TMDB API on load • Fetches top 5 trending movies from Appwrite ordered by count descending • Trending cards display gradient ranking numbers • Latest popular movies shown in a scrollable grid",
        outcome: "Users instantly see what's trending based on real search activity."
      },
      {
        title: "Search & Trending Algorithm",
        dashboardImages: [
          '/screenshots/movie-app2.jpg',
          '/screenshots/movie-app3.png',

        ],
        description: "Real-time search with trending tracking: • Debounced input queries TMDB API as user types • Top result from each search is recorded in Appwrite with searchTerm and movie details • If same search term is used again, count increments • Top 5 most searched movies surface as trending on home screen",
        outcome: "Organic trending powered by actual user search behavior."
      },
      {
        title: "Movie Details",
        dashboardImages: [
          '/screenshots/movie-app4.png',
          '/screenshots/movie-app4.png',

        ],
        description: "Full movie information page: • Tapping any movie card navigates to details screen • Fetches complete movie data from TMDB including poster, rating, overview, genres, budget, revenue, and production companies",
        outcome: "Rich movie detail experience with comprehensive information."
      }
    ],
    impact: {
      metrics: [
        { label: "Movie Database", value: "TMDB — 500k+ movies" },
        { label: "Trending Update", value: "Real-time on every search" },
        { label: "Platforms", value: "iOS & Android" }
      ],
      outcomes: [
        "Built real-time trending algorithm using Appwrite search count tracking",
        "Integrated TMDB API for comprehensive movie data and search",
        "Implemented debounced search for smooth and efficient user experience"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/movie_booking-app",
    liveUrl: null
  },
  {
    id: "restate",
    title: "ReState - React Native Real Estate App",
    description: "A full-stack mobile real estate app built with React Native and Appwrite. Browse property listings, view detailed property info, explore agent profiles, and manage your account — with Google OAuth authentication.",
    image: "/screenshots/real-cover.png",
    techStack: realStateTechStack,
    features: [
      {
        title: "Google OAuth",
        description: "Secure sign-in via Google using Appwrite's OAuth2 provider with persistent session management",
        icon: "FaGoogle"
      },
      {
        title: "Property Listings",
        description: "Browse featured and recommended properties with real-time search and category filters (House, Condo, Villa, etc.)",
        icon: "FaHome"
      },
      {
        title: "Property Details",
        description: "Full property page with image gallery, facilities, agent info, location, reviews, and price",
        icon: "FaBuilding"
      },
      {
        title: "Database Seeding",
        description: "Automated seed script to populate Appwrite with agents, properties, galleries, and reviews",
        icon: "FaDatabase"
      }
    ],
    implementation: {
      architecture: "React Native App with Appwrite Backend & Google OAuth",
      highlights: [
        "Google OAuth2 authentication via Appwrite with GlobalProvider context",
        "Custom useAppwrite hook for data fetching with loading, error, and refetch support",
        "File-based navigation with Expo Router for clean screen structure",
        "Properties filtered by type and searched by name via Appwrite queries",
        "Home screen shows 5 featured + 6 recommended properties in parallel",
        "Property details fetch full document, reviews, gallery, and agent in parallel"
      ],
      codeSnippet: "// Custom useAppwrite hook\nexport function useAppwrite({ fn, params, skip }) {\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(!skip);\n  const [error, setError] = useState(null);\n\n  const fetchData = async () => {\n    setLoading(true);\n    try {\n      const result = await fn(params);\n      setData(result);\n    } catch (err) {\n      setError(err);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  useEffect(() => { if (!skip) fetchData(); }, []);\n  return { data, loading, error, refetch: fetchData };\n}"
    },
    demonstrations: [
      {
        title: "Google OAuth & Home Feed",
        dashboardImages: [
          '/screenshots/real-state1.png',
          '/screenshots/real-state2.png',

        ],
        description: "Authentication and home experience: • User taps sign in and is redirected to Google OAuth via Appwrite • On success, session is stored and GlobalProvider exposes user state • Home feed loads 5 featured properties and 6 recommended in a grid • Real-time search and category filter tabs update listings instantly",
        outcome: "Seamless Google sign-in with a rich property browsing experience."
      },
      {
        title: "Explore & Property Details",
        dashboardImages: [
          '/screenshots/real-state7.jpg',
          '/screenshots/real-state8.jpg',
          '/screenshots/real-state10.jpg',
          '/screenshots/real-state3.png',

          '/screenshots/real-state12.jpg',

        ],
        description: "Search and detailed property view: • Explore page searches and filters all properties by type • Tapping a card navigates to /properties/[id] • Details page fetches full property, gallery images, reviews, and agent info in parallel • Displays facilities, bedrooms, bathrooms, price, area, and location",
        outcome: "Complete property discovery with rich detail pages."
      },
      {
        title: "Agent Profiles & User Account",
         dashboardImages: [

          '/screenshots/real-state11.jpg',
          '/screenshots/real-state9.jpg',

        ],
        description: "Agent and profile management: • Each property links to an agent with name, email, and avatar • Profile screen shows logged-in user info, bookings, payments, and settings • Logout clears Appwrite session and redirects to sign-in screen",
        outcome: "Full account management with agent transparency."
      }
    ],
    impact: {
      metrics: [
        { label: "Auth", value: "Google OAuth2" },
        { label: "Platforms", value: "iOS & Android" },
        { label: "Properties", value: "20+ seeded listings" }
      ],
      outcomes: [
        "Implemented Google OAuth2 authentication with Appwrite OAuth2 provider",
        "Built reusable useAppwrite hook for consistent data fetching across all screens",
        "Created automated seed script populating agents, properties, galleries, and reviews"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/restate",
    liveUrl: null
  },
  {
    id: "dentwise",
    title: "DentWise — AI-Powered Dental Care Platform",
    description: "A full-stack dental appointment booking platform with an integrated AI voice assistant. Book appointments with verified dentists, get real-time dental guidance through AI voice calls powered by Vapi, and manage your dental health — built with Next.js, Clerk, Neon PostgreSQL, and Resend.",
    image: "/images/dentwise1.png",
    techStack: dentwiseTechStack,
    carouselImages: [
      '/images/dent1.png',
      '/images/dent2.png',
      '/images/dent3.png',
      '/images/dent4.png',
      '/images/dent5.png',

    ],
    features: [
      {
        title: "AI Voice Assistant",
        description: "Talk to an AI dental assistant powered by Vapi for real-time dental advice and symptom assessment (Pro plan)",
        icon: "FaMicrophone"
      },
      {
        title: "Appointment Booking",
        description: "Browse verified dentists, pick a date and time, and book in 3 simple steps with real-time slot filtering",
        icon: "FaCalendarAlt"
      },
      {
        title: "Email Confirmations",
        description: "Automated appointment confirmation emails sent via Resend with React Email templates",
        icon: "FaEnvelope"
      },
      {
        title: "Subscription Plans",
        description: "Free, AI Basic ($9/mo), and AI Pro ($19/mo) tiers managed through Clerk's billing system",
        icon: "FaCreditCard"
      }
    ],
    implementation: {
      architecture: "Next.js Full-Stack App with AI Voice & Serverless PostgreSQL",
      highlights: [
        "Clerk authentication with social login and automatic user sync to PostgreSQL via server actions",
        "3-step booking wizard with real-time slot filtering using TanStack Query",
        "Vapi AI voice assistant for real-time dental guidance with live transcript display",
        "Resend + React Email for automated appointment confirmation emails",
        "Neon serverless PostgreSQL with Prisma ORM and @prisma/adapter-neon",
        "Admin panel for managing doctors and toggling appointment statuses",
        "Recharts for dental health dashboard visualizations",
        "React Hook Form + Zod for type-safe form validation"
      ],
      codeSnippet: "// Sync Clerk user to PostgreSQL on sign-up\nexport async function syncUser() {\n  const { userId } = await auth();\n  const clerkUser = await clerkClient.users.getUser(userId);\n\n  await prisma.user.upsert({\n    where: { clerkId: userId },\n    update: {\n      email: clerkUser.emailAddresses[0].emailAddress,\n      name: `${clerkUser.firstName} ${clerkUser.lastName}`,\n    },\n    create: {\n      clerkId: userId,\n      email: clerkUser.emailAddresses[0].emailAddress,\n      name: `${clerkUser.firstName} ${clerkUser.lastName}`,\n    }\n  });\n}"
    },
    demonstrations: [
      {
        title: "Authentication & Dashboard",
        dashboardImages: [

          '/screenshots/dent-1.png',
          '/screenshots/dent-2.png',
          '/screenshots/dent-3.png',

        ],
        description: "Secure onboarding and user dashboard: • User signs up via Clerk with email or social login • syncUser server action automatically creates user record in PostgreSQL • Dashboard shows upcoming appointments, dental health charts via Recharts • Quick action buttons for booking and viewing history",
        outcome: "Seamless authentication with a rich personalized dashboard."
      },
      {
        title: "3-Step Appointment Booking",
        dashboardImages: [

          '/screenshots/dent-4.png',
          '/screenshots/dent-5.png',
          '/screenshots/dent-6.png',
          '/screenshots/dent-7.png',
          '/screenshots/dent-8.png',
          '/screenshots/dent-9.png',

        ],
        description: "Guided booking flow: • Step 1: Browse and select a verified dentist • Step 2: Pick a date and time slot — already booked slots filtered out in real-time • Step 3: Review and confirm booking • On confirmation, appointment saved to database and confirmation email sent via Resend",
        outcome: "Frictionless booking with real-time availability and instant email confirmation."
      },
      {
        title: "AI Voice Assistant",
        dashboardImages: [

          '/screenshots/dent10.png',
          '/screenshots/dent11.png',

        ],
        description: "Pro plan AI dental guidance: • Pro users access the AI voice assistant at /voice • Vapi starts a real-time voice call with an AI dental assistant • Assistant answers dental questions, assesses symptoms, and provides guidance • Live conversation transcript displayed on screen during the call",
        outcome: "Real-time AI dental guidance through natural voice conversation."
      }
    ],
    impact: {
      metrics: [
        { label: "AI Response", value: "Real-time voice" },
        { label: "Email Delivery", value: "Automated via Resend" },
        { label: "Plans", value: "Free / $9 / $19 per month" }
      ],
      outcomes: [
        "Integrated Vapi AI voice assistant for real-time dental guidance",
        "Built 3-step booking wizard with real-time slot filtering using TanStack Query",
        "Automated email confirmations with React Email templates via Resend"
      ]
    },
    githubUrl: "https://github.com/chouhanrahul1999/dentwise-app",
    liveUrl: null
  }
];
