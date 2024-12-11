from flask import Flask, render_template, request


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


@app.route('/formSection', methods=['GET'])
def formSection():
    return render_template("form.html", titulo='Formularies')


@app.route('/formSection', methods=['POST'])
def contacting():
    first_name = request.form.get("clientName")
    last_name = request.form.get("clientLName")
    nacionality = request.form.get("nacionality")
    email = request.form.get("clientEmail")
    telephone = request.form.get("clientNumber")
    date = request.form.get("date")
    tours = request.form.get("selectTours")
    host = request.form.get("selectHost")
    check_box = request.form.get("inputCheck")
    
    if first_name == "" or last_name == "" or nacionality == "" or email == "" or telephone == "" or date == "" or tours == "" or host == "" or check_box == "":
        validation = "your information wasn't correct"
    else:
        validation = "thank you"
    return render_template("thanks.html", titulo='Thank you') 

@app.route('/intento')
def intento():
    return render_template("intento.html", titulo='intento')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="8080")