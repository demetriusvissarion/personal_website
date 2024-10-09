# Use the latest Node.js 18 image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
