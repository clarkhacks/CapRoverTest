# Stage 1: Build the Node.js application
FROM node:latest as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:latest

# Copy the built artifacts from the previous stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# The default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]