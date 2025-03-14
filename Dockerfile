# Utilisation d'une image Node.js 18 officielle
FROM node:18

# Création et configuration de l'utilisateur non-root
RUN useradd -ms /bin/sh -u 1001 app

# Définition du dossier de travail
WORKDIR /app

# Copier et installer les dépendances AVEC les permissions correctes
COPY --chown=app:app package.json package-lock.json ./
USER app
RUN npm install

# Copier le reste du code source
COPY --chown=app:app . /app

# Exposer le port de l'application
EXPOSE 8080

# Lancer l'application
ENTRYPOINT [ "npm", "run", "dev" ]
