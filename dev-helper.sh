#!/bin/bash

# React Template Development Helper Script
# Created by DimitriTedom (SnowDev)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Setup function
setup() {
    print_status "Setting up React Template..."
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_success "Node.js $(node --version) detected"
    
    # Install dependencies
    print_status "Installing dependencies..."
    npm install
    
    # Setup environment
    if [ ! -f .env ]; then
        print_status "Creating .env file from template..."
        cp .env.template .env
        print_warning "Please edit .env file with your configuration"
    else
        print_warning ".env file already exists"
    fi
    
    print_success "Setup completed! Run './dev-helper.sh dev' to start development server"
}

# Development server
dev() {
    print_status "Starting development server..."
    npm run dev
}

# Build for production
build() {
    print_status "Building for production..."
    npm run build
    print_success "Build completed! Files are in ./dist"
}

# Lint code
lint() {
    print_status "Running ESLint..."
    npm run lint
    
    if [ $? -eq 0 ]; then
        print_success "No linting errors found!"
    else
        print_warning "Found linting errors. Run './dev-helper.sh lint:fix' to auto-fix"
    fi
}

# Fix linting issues
lint_fix() {
    print_status "Fixing linting issues..."
    npm run lint:fix
    print_success "Linting issues fixed!"
}

# Type check
type_check() {
    print_status "Running TypeScript type checking..."
    npm run type-check
    
    if [ $? -eq 0 ]; then
        print_success "No type errors found!"
    else
        print_error "Type errors found. Please fix them before continuing."
    fi
}

# Docker build
docker_build() {
    print_status "Building Docker image..."
    
    if ! command_exists docker; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    docker build -t my-react-app .
    print_success "Docker image built successfully!"
}

# Docker run
docker_run() {
    print_status "Running Docker container..."
    docker run -p 80:80 my-react-app
}

# Clean function
clean() {
    print_status "Cleaning project..."
    
    # Remove build directories
    rm -rf dist
    rm -rf node_modules/.vite
    
    # Clear npm cache
    npm cache clean --force
    
    print_success "Project cleaned!"
}

# Full check (lint + type-check + build)
check() {
    print_status "Running full project check..."
    
    lint
    type_check
    build
    
    print_success "All checks passed! Project is ready for production."
}

# Update dependencies
update() {
    print_status "Updating dependencies..."
    npm update
    npm audit
    print_success "Dependencies updated!"
}

# Show help
help() {
    echo "React Template Development Helper"
    echo "Created by DimitriTedom (SnowDev)"
    echo ""
    echo "Usage: ./dev-helper.sh [command]"
    echo ""
    echo "Commands:"
    echo "  setup      - Initial project setup"
    echo "  dev        - Start development server"
    echo "  build      - Build for production"
    echo "  lint       - Run ESLint"
    echo "  lint:fix   - Fix linting issues"
    echo "  type-check - Run TypeScript type checking"
    echo "  docker:build - Build Docker image"
    echo "  docker:run - Run Docker container"
    echo "  clean      - Clean build files and cache"
    echo "  check      - Run full project check (lint + type + build)"
    echo "  update     - Update dependencies"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./dev-helper.sh setup"
    echo "  ./dev-helper.sh dev"
    echo "  ./dev-helper.sh check"
}

# Main script logic
case "$1" in
    setup)
        setup
        ;;
    dev)
        dev
        ;;
    build)
        build
        ;;
    lint)
        lint
        ;;
    lint:fix)
        lint_fix
        ;;
    type-check)
        type_check
        ;;
    docker:build)
        docker_build
        ;;
    docker:run)
        docker_run
        ;;
    clean)
        clean
        ;;
    check)
        check
        ;;
    update)
        update
        ;;
    help|--help|-h)
        help
        ;;
    "")
        print_warning "No command specified. Use './dev-helper.sh help' for available commands."
        help
        ;;
    *)
        print_error "Unknown command: $1"
        help
        exit 1
        ;;
esac