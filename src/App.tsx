import { Button } from "@/components/ui/button"
import { FaReact, FaDocker, FaGithub } from "react-icons/fa"
import { 
  SiTypescript, 
  SiVite, 
  SiTailwindcss
} from "react-icons/si"

export default function Home() {
  const dependencies = [
    {
      name: "React 18",
      icon: <FaReact className="text-blue-500" />,
      description: "A JavaScript library for building user interfaces"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      description: "Typed JavaScript at scale"
    },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-500" />,
      description: "Next generation frontend tooling"
    },
    {
      name: "ShadCN/UI",
      icon: <div className="w-6 h-6 bg-black rounded text-white flex items-center justify-center text-xs font-bold">UI</div>,
      description: "Re-usable components built with Radix UI and Tailwind CSS"
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-500" />,
      description: "A utility-first CSS framework"
    },
    {
      name: "Zustand",
      icon: <div className="w-6 h-6 bg-orange-500 rounded text-white flex items-center justify-center text-xs font-bold">Z</div>,
      description: "A small, fast and scalable state-management solution"
    },
    {
      name: "React Icons",
      icon: <FaGithub className="text-gray-700" />,
      description: "Popular icons in your React projects"
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FaReact className="text-6xl text-blue-500 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to SnowDev's React Template! 🚀
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A modern, production-ready React template with TypeScript, Vite, and all the tools you need to build amazing applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button variant="outline">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {dependencies.map((dep, index) => (
            <div 
              key={dep.name}
              className="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">
                  {dep.icon}
                </div>
                <h3 className="font-semibold text-lg">{dep.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {dep.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">🚀 Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Clone & Install</h3>
              <code className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded block">
                npm install
              </code>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Configure Environment</h3>
              <code className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded block">
                cp .env.template .env
              </code>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Start Development</h3>
              <code className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded block">
                npm run dev
              </code>
            </div>
          </div>
        </div>

        {/* Development Tools Section */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">🛠️ Development Tools & Documentation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-lg">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">dev-helper.sh</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Comprehensive script for all development tasks
              </p>
              <div className="space-y-1">
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded block">./dev-helper.sh setup</code>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded block">./dev-helper.sh dev</code>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded block">./dev-helper.sh check</code>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">📋</span>
              </div>
              <h3 className="font-semibold mb-2">CHANGELOG.md</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Track all changes and version history
              </p>
              <div className="space-y-1">
                <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">✨ Features</span>
                <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">🐛 Fixes</span>
                <span className="text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">📚 Docs</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">CONTRIBUTING.md</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Guidelines for contributing to the project
              </p>
              <div className="space-y-1">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Code Standards</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PR Process</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Style Guide</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">🐳</span>
              </div>
              <h3 className="font-semibold mb-2">Docker Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Multi-stage builds for dev & production
              </p>
              <div className="space-y-1">
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded block">./dev-helper.sh docker:build</code>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded block">./dev-helper.sh docker:run</code>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 dark:text-pink-400 font-bold text-lg">📄</span>
              </div>
              <h3 className="font-semibold mb-2">GitHub Templates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Issue and PR templates for better collaboration
              </p>
              <div className="space-y-1">
                <span className="text-xs bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded">🐛 Bug Reports</span>
                <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">💡 Features</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">⚙️</span>
              </div>
              <h3 className="font-semibold mb-2">Environment Config</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Comprehensive .env.template with 70+ variables
              </p>
              <div className="space-y-1">
                <span className="text-xs bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded">API Keys</span>
                <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Database</span>
                <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">Security</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-center">🎯 Development Workflow</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">1</div>
                <span className="text-sm font-medium">Setup</span>
                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded mt-1">./dev-helper.sh setup</code>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">2</div>
                <span className="text-sm font-medium">Develop</span>
                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded mt-1">./dev-helper.sh dev</code>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">3</div>
                <span className="text-sm font-medium">Test</span>
                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded mt-1">./dev-helper.sh check</code>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">4</div>
                <span className="text-sm font-medium">Deploy</span>
                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded mt-1">./dev-helper.sh build</code>
              </div>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaDocker className="text-blue-500 mr-2" />
              Docker Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Multi-stage Dockerfile with optimized production builds and development environment.
            </p>
            <code className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded block">
              docker build -t my-react-app .
            </code>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-violet-500 rounded mr-2"></div>
              Tailwind Configured
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Pre-configured with custom layers, components, and utilities for rapid development.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">@layer base</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">@layer components</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">@layer utilities</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Created with ❤️ by{" "}
            <a 
              href="https://github.com/DimitriTedom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              @DimitriTedom (SnowDev)
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            For the amazing developers at Worketyamo-Students 🎓
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm">
              ⭐ Star on GitHub
            </Button>
            <Button variant="ghost" size="sm" onClick={() => {
              const commands = `
Development Helper Commands:
./dev-helper.sh setup       - Initial project setup
./dev-helper.sh dev         - Start development server
./dev-helper.sh build       - Build for production
./dev-helper.sh lint        - Run ESLint
./dev-helper.sh lint:fix    - Fix linting issues
./dev-helper.sh type-check  - TypeScript type checking
./dev-helper.sh docker:build - Build Docker image
./dev-helper.sh docker:run  - Run Docker container
./dev-helper.sh clean       - Clean build files
./dev-helper.sh check       - Full project check
./dev-helper.sh update      - Update dependencies
./dev-helper.sh help        - Show all commands
              `;
              alert(commands.trim());
            }}>
              🚀 Dev Commands
            </Button>
            <Button variant="ghost" size="sm">
              📖 Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
