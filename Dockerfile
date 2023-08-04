FROM python:3.7-buster
RUN mkdir /app
WORKDIR /app
COPY . .
RUN pip install pip==21.3.1 \
    && pip install -r requirements.txt 
CMD ["python3", "app/app.py"]
EXPOSE 3000
