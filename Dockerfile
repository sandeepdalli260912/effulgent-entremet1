# Multi-Stage / Lightweight Production Image for Delhi Bhu-Praman Portal
FROM python:3.12-alpine

WORKDIR /app

# Copy application source
COPY frontend/ /app/frontend/
COPY backend/ /app/backend/
COPY run.py /app/run.py

# Expose default HTTP Port
EXPOSE 8080

# Environment settings
ENV PORT=8080
ENV HOST=0.0.0.0

# Start server
CMD ["python", "run.py"]
