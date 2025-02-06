from flask import Flask, render_template, request
import pickle
import logging
#model = pickle.load(open('model.pkl','rb'))

logging.basicConfig(filename='status.log',level=logging.INFO,format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)

# Define a route for the home page
@app.route('/')
def index():
    logging.info('Successfully rendered page')
    return render_template('index.html')

@app.route('/process_input',methods=['GET','POST'])
def process_input():
    pass


if __name__ == '__main__':
    app.run(debug=True)