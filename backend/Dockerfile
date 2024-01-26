FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --include=dev
RUN npm run build

EXPOSE 3000

# Command to run the NestJS application
CMD ["npm", "run", "start"]





