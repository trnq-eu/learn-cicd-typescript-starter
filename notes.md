docker build -t joaomastino/notely:latest .

docker run -e PORT=8080 -p 8080:8080 joaomastino/notely:latest


gcloud builds submit --tag REGION-docker.pkg.dev/PROJECT_ID/REPOSITORY/IMAGE:TAG .

gcloud builds submit --tag us-central1-docker.pkg.dev/notely-468704/notely-ar-repo/notely:latest .