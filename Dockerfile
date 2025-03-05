# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Crea un directorio de trabajo
WORKDIR /app

# Copia archivos de configuración antes de instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]
