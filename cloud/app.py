import subprocess
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('./landing.html')

@app.route("/cloud")
def render_cloud():
    return render_template('./index.html')

@app.route("/on", methods=["GET"])
def turn_on():
    kasaIP = '192.168.0.1'
    timeOn = request.args.get('time')
    try:
        stdout = subprocess.run(['./on.sh', kasaIP, timeOn], check=True)
        return '<h1>Turning On {}: {}</h1>'.format(kasaIP, stdout)
    except subprocess.CalledProcessError:
        return '<h1>Failed to turn on {}</h1>'.format(kasaIP)

@app.route("/off", methods=["GET"])
def turn_off():
    kasaIP = '192.168.0.1'
    try:
        subprocess.run(['./off.sh', kasaIP], check=True)
        return render_template('./off.html')
    except subprocess.CalledProcessError:
        return '<h1>Failed to turn off {}</h1>'.format(kasaIP)

@app.route("/about", methods=["GET"])
def render_about():
    return render_template('./about.html')

if __name__ == "__main__":
  app.run(host='0.0.0.0')
