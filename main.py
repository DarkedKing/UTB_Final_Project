from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html", titulo='Home')


@app.route('/tourSection')
def tourSection():
    return render_template("tour.html", titulo='Tours')


@app.route('/aboutSection')
def aboutSection():
    return render_template("about.html", titulo='About Us')


@app.route('/contactSection')
def contactSection():
    return render_template("contact.html", titulo='Contact Us')


@app.route('/formSection')
def formSection():
    return render_template("form.html", titulo='Formularies')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="8080")