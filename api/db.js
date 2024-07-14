import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog',
});

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});