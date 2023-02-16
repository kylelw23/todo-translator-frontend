FROM node:14 

WORKDIR /src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Expose the port that nginx listens on
EXPOSE 8080
# Copy the rest of the application code to the container
COPY . .

# run npm install
RUN npm install

# Install serve package globally
RUN npm install -g serve

# Build the Angular app
RUN npm run build --prod


# Run the app using serve
CMD ["serve", "-s", "dist/todo-translator"]

