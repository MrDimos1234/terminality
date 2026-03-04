export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const body = req.body;
  const cmd = body.command;

  const password = 'book';  // ONLY here, never in front-end

  if (cmd === password) {
    return res.status(200).send(
      `> access granted
> available commands:
- page4.access.truth
- help`
    );
  }

  if (cmd === 'help') {
    return res.status(200).send(
      `Available commands:
- page4.access.truth
- help`
    );
  }

  if (cmd === 'page4.access.truth') {
    return res.status(200).send(
      `> verifying Page 4...
> checksum: valid
> download link: https://yourdomain.com/page4.png`
    );
  }

  return res.status(200).send('> command not recognized');
}
