FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Copy .env for Prisma
COPY .env .env

# Generate Prisma client (for Linux, needed in container)
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 8000

# Start the server
CMD ["node", "dist/src/server.js"]
