const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, company, phone, message, dateSent } = req.body;

      const filePath = path.join(process.cwd(),'public', 'databases', 'contact-me.json');
  

      let existingData = [];
      if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath);
        existingData = JSON.parse(rawData);
      }

      existingData.push({ name, email,company, phone, message, dateSent });

      fs.writeFile(filePath, JSON.stringify(existingData,null,2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to save message' });
          return;
        }
        res.status(200).json({ message: 'Message saved successfully' });
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }

    //   fs.writeFile(filePath, data, (err) => {
    //     if (err) {
    //       console.error(err);
    //       res.status(500).json({ error: 'Failed to save message' });
    //       return;
    //     }
    //     res.status(200).json({ message: 'Message saved successfully' });
    //   });
    // } else {
    //   res.status(405).json({ error: 'Method not allowed' });
    }
  