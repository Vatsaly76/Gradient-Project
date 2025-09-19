# Use the official Nginx image as base
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static assets
RUN rm -rf ./*

# Copy your project files to the container
COPY index.html .
COPY style.css .
COPY script.js .
COPY Gradient.png .

# Expose port 80 (default for HTTP)
EXPOSE 80

# The default command runs Nginx
# (This is already defined in the base nginx:alpine image)

# In terminal command to build and run the Docker container:

# docker build -t gradient-app .
#docker run -d -p 8080:80 --name my-gradient-app gradient-generator