# GraphQL React Client

A modern React application that demonstrates GraphQL integration, built with TypeScript, Vite, and Tailwind CSS. This project showcases how to effectively use GraphQL in a React application, including querying data and handling responses.

## Features

- 🚀 Built with React 19 and TypeScript
- ⚡ Powered by Vite for fast development experience
- 🎨 Styled with Tailwind CSS
- 🔄 Real-time data fetching with GraphQL
- 📦 Type-safe GraphQL operations with code generation
- 🔗 Seamless integration with GraphQL backend

## Prerequisites

This client is designed to work with a GraphQL server. Please ensure you have the corresponding server running:

- [GraphQL Server](https://github.com/komangsidhiartha/graphql-server)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/komangsidhiartha/graphql-client.git
cd graphql-client
```

### 2. Install dependencies

```bash
npm install
```

> **Note:** This project uses Tailwind CSS v3.x. Please avoid using Tailwind v4+ with PostCSS until they reach a stable release, as there are known compatibility issues.

### 3. Configure environment variables

Create a `.env` file in the root directory and add your GraphQL server URL:

```env
VITE_API_URL=http://localhost:4000/graphql
```

### 4. Generate TypeScript types

```bash
npm run codegen
```

### 5. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── graphql/        # GraphQL queries and generated types
├── types/          # TypeScript type definitions
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run codegen` - Generate TypeScript types from GraphQL schema
- `npm run lint` - Run ESLint

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS 3.x
- GraphQL
- URQL (GraphQL client)
- GraphQL Code Generator

## Related Project

This client works with the [GraphQL Server](https://github.com/komangsidhiartha/graphql-server) project, which provides the backend API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
