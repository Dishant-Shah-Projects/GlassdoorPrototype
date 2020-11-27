const config = {
  secret: 'cmpe273_secret_key',
  mongoDB:
    'mongodb+srv://admin:ipPUEZQgUVOiIoz6@cluster0.dg0n5.mongodb.net/Glassdoor?retryWrites=true&w=majority',
  frontendURL: 'http://localhost:3000',
  kafkaport: 'localhost',
  topic1: 'company2',
  topic2: 'student2',
  topic3: 'general2',
  topic4: 'response_topic3',
  topic5: 'admin2',
};

module.exports = config;
