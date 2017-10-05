"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template, redirect, url_for

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def hello():
	return redirect(url_for('to_index'))

@app.route('/index')
def to_index():
	return render_template('index.html')

@app.route('/about')
def to_about():
	return render_template('about.html')

@app.route('/contact')
def to_contact():
	return render_template('contact.html')

@app.route('/blog/<article>')
def render_article(article=None):
	return render_template(article + '.html')

@app.route('/f',methods=['POST'])
def post_form():
	data = json.loads(request.data.decode('ascii'))
  #return requests.post("https://api.mailgun.net/v3/sandbox25c7220796e04cb799be50d13993fe7c.mailgun.org/messages",auth=("api", "key-454f4ec088a3ad21f90245f53a3fe7f3"),data={"from": data['name']"to": ['kennethkao32@gmail.com'],"subject": data['subject'],"text": data['message']})

