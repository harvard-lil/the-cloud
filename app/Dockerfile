FROM python:3.7-buster
ENV STATIC_URL /static
ENV STATIC_PATH /app/static
RUN mkdir /app
WORKDIR /app
COPY . .
COPY requirements.txt /app
RUN pip install pip==21.3.1 \
    && pip install -r requirements.txt 
CMD ["python3", "app.py"]
EXPOSE 5000
