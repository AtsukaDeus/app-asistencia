import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  constructor(private sqlite: SQLite) {  
    this.createTable();
  }

  createTable(){
    this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }
    )
    .then((db: SQLiteObject) => {

      db.executeSql('CREATE TABLE users (username VARCHAR(45), email VARCHAR(45), password VARCHAR(45), name VARCHAR(45), lastname VARCHAR(45))', [])
        .then(() => console.log('Base de datos creada con la tabla "users" '))
        .catch((e) => console.log(e));
    
    })
    .catch(e => console.log(e));
  }



  createUser(username: string, email: string, password: string, name: string, lastname: string){

    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }
    )
    .then((db: SQLiteObject) => {

          return db.executeSql('INSERT INTO users (username, email, password, name, lastname) VALUES (?, ?, ?, ?, ?)', [username, email, password, name, lastname])
          .then(() => {
            console.log('El usuario se ha creado exitosamente!')
            return true;
            
          }).catch(() => {
          console.log('No se ha podido crear el usuario');
          
          })

        })

    .catch(() => {
      console.log('Base de datos no disponible')
    })

  }


  login(username: string, password: string){

      return this.sqlite.create({
          name: 'data.db',
          location: 'default'
        }
      )
      .then((db: SQLiteObject) => {

        return db.executeSql('SELECT * FROM users WHERE username = (?) AND password = (?)', [username, password])
          .then((data) => {
            return data.rows.item(0) > 0;
          })
          .catch((e) => console.log(e));

      })
      .catch(e => {console.log(e)});

  }


  updatePassword(username: string, password: string, newPassword: string) {

    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      
            // Actualizar la contraseña
            return db.executeSql('UPDATE users SET password = (?) WHERE username = (?) AND password = (?)', [newPassword, username, password])
              .then(() => {
                console.log('Contraseña actualizada exitosamente.');
                return true;
              })
              .catch((e) => {
                console.log('No se pudo actualizar la contraseña: ', e);
              });
          }
    )
    .catch((e) => {
      console.log('Base de datos no disponible: ', e);
    });

  }
}
