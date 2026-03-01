# ---- Stage 1: Build ----
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency manifests first (layer caching)
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies needed for the build)
# Dependencies installed:
#   react            ^19.2.0   – UI library
#   react-dom        ^19.2.0   – React DOM renderer
#   @vitejs/plugin-react ^5.1.1  – Vite plugin for React (JSX, Fast Refresh)
#   vite             ^7.2.4   – Build tool / dev server
#   @eslint/js       ^9.39.1  – ESLint core JS config
#   @types/react     ^19.2.5  – TypeScript types for React
#   @types/react-dom ^19.2.3  – TypeScript types for ReactDOM
#   eslint           ^9.39.1  – Linter
#   eslint-plugin-react-hooks   ^7.0.1  – Lint rules for React Hooks
#   eslint-plugin-react-refresh ^0.4.24 – Lint rules for React Refresh
#   globals          ^16.5.0  – Global variable definitions for ESLint
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production bundle (output -> /app/dist)
RUN npm run build


# ---- Stage 2: Serve with Nginx ----
FROM nginx:1.27-alpine AS production

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
