const app = require('./app');
const envs = require('./config/enviroments/enviroments');


app.listen(envs.PORT, () => {
  console.log(`Server is running on port ${envs.PORT}`);
})