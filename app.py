# Importacion de Librerias
from ensurepip import bootstrap
from flask import Flask
from flask import render_template
from flaskext.mysql import MySQL
from flask_bootstrap5 import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

# Configuracion de Gestor de Base de Datos
mysql = MySQL()
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'LuisA5841@&'
app.config['MYSQL_DATABASE_DB'] = 'ropa'
mysql.init_app(app)


@app.route('/')
def index():
    sql = "SELECT * FROM `producto`ORDER by codigo ASC LIMIT 15"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    best = cursor.fetchall()
    conn.commit()

    return render_template("views/index.html", best = best)

if __name__ == '__main__':
    app.run(debug=True)

'''
sql = ""
conn = mysql.connect()
cursor = conn.cursor()
cursor.excute(sql)
conn.commit()
'''
