const fs = require('fs');

const aws = require('aws-sdk');
// check the login and set the jwt token
const uploadFile = async (req, res) => {
  // eslint-disable-next-line prefer-template
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.ACCESSKEYID,
      secretAccessKey: process.env.SECRETACCESSKEY,
      region: process.env.REGION,
    });
    const s3 = new aws.S3();
    const params = {
      ACL: 'public-read',
      Bucket: 'glassdoorbucketcmpe273',
      Body: fs.createReadStream(req.file.path),
      Key: `userAvatar/${req.file.originalname}`,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('File Upload Failed'));
      }

      if (data) {
        fs.unlinkSync(req.file.path); // Empty temp folder
        const locationUrl = data.Location;
        res.writeHead(200, { 'content-type': 'text/json' });
        res.end(JSON.stringify(locationUrl));
      }
    });
  } catch (error) {
    res.writeHead(403, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

module.exports = {
  uploadFile,
};
