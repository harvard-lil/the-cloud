FROM python:3.10-bullseye
ENV STATIC_URL /static
ENV STATIC_PATH /cloud/static
RUN mkdir /cloud
WORKDIR /cloud
COPY . .
RUN pip install pip==21.3.1 \
    && pip install -r requirements.txt 
CMD ["python3", "app.py"]
EXPOSE 5000
