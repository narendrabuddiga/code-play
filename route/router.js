import { Router } from "express";
import * as cp from 'child_process';
import * as fs from 'fs';

const route = Router();

route.get('/variables/types', (_, res) => res.render('pages/variables/types'));
route.get('/variables/assignment', (_, res) => res.render('pages/variables/assignment'));
route.get('/variables/destructuring', (_, res) => res.render('pages/variables/destructuring'));
route.get('/variables/copy', (_, res) => res.render('pages/variables/copy'));

route.get('/functions/basics', (_, res) => res.render('pages/functions/function_basics'));
route.get('/functions/arrow', (_, res) => res.render('pages/functions/arrow_functions'));

route.get('/promises', (_, res) => res.render('pages/promises/promises'));
route.get('/strict', (_, res) => res.render('pages/strict/strict'));
route.get('/this', (_, res) => res.render('pages/this/this'));
route.get('/oop', (_, res) => res.render('pages/oop/oop'));
route.get('/array', (_, res) => res.render('pages/array/array'));
route.get('/object', (_, res) => res.render('pages/object/object'));
route.get('/codeplay', (_, res) => res.render('pages/codeplay/codeplay'));

// Execute code
route.post('/play', async (req, res) => {
  const { code } = req.body;
  fs.writeFileSync('.code.js', code);
  cp.exec('node .code.js', (error, stdout, stderr) => {
    const response = {};
    if (error) response.error = error.message;
    if (stderr) response.stderr = stderr;
    response.stdout = stdout;
    return res.json(response);
  });
});

export { route };