import axios from 'axios';
import express, {Request, Response} from 'express';
import createInvoice from './pdf/Invoice';
import { config } from './config';
import { createWriteStream } from 'fs';
import path from 'path';

const app = express();
const port = 3000;


app.get('/:id', async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const id = req.params.id;
    const fileName = `result-pdf/export-${id}-${now.getFullYear()}${now.getMonth()}${now.getDate()}:${now.getHours()}${now.getMinutes()}${now.getSeconds()}.pdf`;
    const {data} = await axios.get(`${config.apiURL}bills/sendPdf/${id}`);
    const result = await createInvoice(data.body);

    // Streaming our resulting pdf back to the user
    result.pipe(createWriteStream(fileName))

    res.json({
      status: 200,
      pathFile: path.resolve(fileName),
    });
  } catch (error) {
    console.log('error', error );
    res.status(400).send('error doing request')
  }
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
