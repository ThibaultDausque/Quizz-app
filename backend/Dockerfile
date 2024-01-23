FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --dev
RUN npm run build

EXPOSE 5000

# Command to run the NestJS application
CMD ["npm", "run", "start"]





