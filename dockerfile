# Step 1: Use the official Nginx image as the base
FROM nginx:stable-alpine

# Step 2: Copy your custom Nginx configuration
# This replaces the volume: ./nginx/default.conf
COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf

# Step 3: Copy the built static files from your local machine to the container
# This replaces the volume: ./client/dist
COPY ./dist /usr/share/nginx/html

# Step 4: Expose port 80
EXPOSE 80

# Nginx starts automatically in the official image, 
# so no CMD is strictly necessary unless you have custom arguments.