
from flask import Flask, render_template,json,request,url_for
import sqlite3
app = Flask(__name__)


conn = sqlite3.connect(r'C:\Users\andre\Documents\py4e\try\db\dbUser.db',check_same_thread=False)


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/about")
def about():
    return render_template('about.html', title='About')

@app.route('/testing', methods=['POST'])
def testing():
    cur = conn.cursor()
 # GET request
    # if request.method == 'GET':
    #     message = {'greeting':'Hello from Flask!'}
    #     return jsonify(message)  # serialize and use JSON headers
    # POST request
    if request.method == 'POST':
        pars = list()
        vals = list()
        req = request.get_json()
        res = dict(req)
        for keys , values in res.items():
            pars.append(keys)
            vals.append(values)

        cur.execute('''INSERT INTO Users (Username ,password) VALUES (?,?)''', (vals[0],vals[1],))

        conn.commit()
        cur.close()
       
        return json.dumps('ok')
  
    

if __name__ == '__main__': 
    app.run(debug=True)

