docker build -t joaomastino/notely:latest .

docker run -e PORT=8080 -p 8080:8080 joaomastino/notely:latest