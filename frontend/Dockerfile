FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy the entire application code to the container
COPY . .

# Install dependencies
RUN npm ci

ARG BACKEND
ENV REACT_APP_BACKEND_URL=${BACKEND}
RUN echo "Oh dang look at that $REACT_APP_BACKEND_URL"

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]