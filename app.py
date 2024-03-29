from flask import Flask, json

import sqlite3
from sqlite3 import Error

companies = [{"id": 1, "name": "Teste"}]

api = Flask(__name__)


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
        
        
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()


@api.route('/', methods=['GET'])
def get_companies():
    return json.dumps(companies)

if __name__=='__main__':
    create_connection(r"local.db")
    api.run()