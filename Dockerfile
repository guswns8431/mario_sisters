# Use the latest nginx image as the base
FROM nginx:latest

# Create the yejinpage directory in the /usr/share/nginx/html path
RUN mkdir -p /usr/share/nginx/html/yejinpage

# Copy the index.html and style.css files to the yejinpage directory
COPY index.html /usr/share/nginx/html/yejinpage/
COPY style.css /usr/share/nginx/html/yejinpage/

# Expose port 80 for the nginx server
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]

