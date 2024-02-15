const admin = require('firebase-admin');
// const serviceAccount = require('../helpers/serviceAccountKey.json');


const serviceAccount = {
    "type": "service_account",
    "project_id": "app-devlopment-f7805",
    "private_key_id": "9fc4ea4d1b6356e057ef8206d4b3545e6b050df6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDGJQ+PPUYM7Ju/\n/SQNbJ1quDl2xY+wrNSs+8Blku8+t7CdwTnozWZK6mwtAFpN/3hy7EoMdK0CSX7K\nrFXgVRJ2DExy4cz/0wS1TwJGXXBwCqGhCcAAIerZehdH02CNfF2WCMJYO89Sjhmg\nVmeiXrhAKyGAMIGtiIqQq2KcbBFWCM8aMQRgwtE4AVAwAJXhidbDKOfXaec9lB8F\nOxbd8xrNpSo4nb+l6Jm+Tx/pi/NltuZAb7sjZuMbqv1zNPD2+/E0JlNGxh9XvIJt\njBLbDy55yziAszOllct7XW3Jz7EpqZF2llI//bdq2Sq0VdyxCZlvax4oJ7iIjZXc\nRp0GmdAdAgMBAAECggEAR8MRZQ/MiI7DA+ATCBef1ZBeI4F+vn6B0hqlfkQeiOjv\nOttJ9WI6m4RWZF/91MTjI0Anu2YgaLUkihOrUIGPG5jtsSfNXpPW3zF7we9Ccxmu\nmwvUcVfXXidlOhq4m9WAcX+/n0QeHKihaFwS0ZAbjAXy7qHivW43vRiNMNjE2JLa\nBznnzDk4o1MY4AayzyokcHtk1tmm9VD6x4/0tYduK5aOWLS62E9+DD4Wz8MbRCAW\ncz9JY0nMuMjUMg8Av2LWqcu7nQ1iP1pYwmQDs7uBTBNkOJloVGdNboWlrjYkFyEy\nmhaWxePUOD+1ckrapgJ/WO6scJQCG107c/Azhl8p4wKBgQDhaIQFjYK+4e+ri2Pj\ni2MPxe4nMwSIuufPM1/ZqTaorzT62tP2HtQipO3pr4bp0q8mQePlY9c8DSF3d3L5\nclyzep6KFSSu4HBaJXcsPCkHYGVj5B64uWnxU5a2eigTCkUAVdgWpkDVHa/3h2pN\nHJKHWQg1R3SM3tKFB+EyksgycwKBgQDhCVB3UHsblDOrWaxlkQvghyl+AEnuz3d9\nFg/C/svRgucr9fBccp8dYe66a8573xuLxyeSOYLZm5AY7T5dKB52GWjWeoOOBW2f\npz1MDPJtJR09nUIS9nx5zgHk4w6h5mjmcvxx/J+2nSAqN9OUchhvPisnvm9PtwwV\nTykrEgj/LwKBgATcIQSRoYEGFAnJzpSIW9FqPhFAS1e7V+YiwG1L9a67YFQMRcen\nsIEytyJzs1/1N+uGPiii93AHBHKz85mnOpJwEVz+ybSviByZdDFS9rt++5CkyXjI\nHp2iZLx4c8a9UPGJ6EfMu9ccdb/LfqI8/HfIlqG3ca7b2wQdQGC7w287AoGAZU/t\nMxo/omXxcSZZEAziHP6c9oYowuQSdnU1OWO+3R8i9k6uHODZs7/AW5tnhasnWqGZ\ntiJAP7nigOZmWkhSlnbQFSdpDMpy1RrU5OU7S1oXNQMUmTbxSWEuxx5WGxuBhKal\n8qd6PBu3PGqPzdgkGgkSIr2AnZHaVcmizio7dK8CgYAvNrXI4eXnwv0b97NWwrDB\n1RgNfhioQgQNG0jyxCDq/z5Uhk9BV818Qlp6VNsOSeahwvmwCDbaX6L0fGlExFho\n+2P1STtibJRnVbxTYn7FL0e0SUvxAiKvXamzJShhFXp8fyKcW4YLQC/GPPH5HLSG\nUdRfodiVrM6Lpwo6NaZzPw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-g5t5t@app-devlopment-f7805.iam.gserviceaccount.com",
    "client_id": "103214732167897571824",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-g5t5t%40app-devlopment-f7805.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };
  
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

const token = 'AAAAFgcUj1k:APA91bF8nVFdeYEmeJe2WogBWxNdldwWaM1bI7nq06da0v7d8XyFL5dZHo9YCCTJI7NHIZ2ozR8aaisOIkOMMeXtNPOvNRxwD6lNempVekgGVZ0o0_zCTTLvs1XQ5y2SvVQ1N_FaZshw'; // Replace with the recipient's device token
const title = 'Notification Title';
const body = 'Notification Body';
const data = {
  key1: 'value1',
  key2: 'value2',
  // Add any additional data fields you want to include
};

sendPushNotification( title, body, data);

 function sendPushNotification( title, body, data) {
    const message = {
      token: token,
      notification: {
        title: title,
        body: body,
      },
      data: data,
    };
  
    messaging
      .send(message)
      .then((response) => {
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  }