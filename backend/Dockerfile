# Use the official Node.js image.
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port and start the server
EXPOSE 5000
CMD [ "node", "server.js" ]
