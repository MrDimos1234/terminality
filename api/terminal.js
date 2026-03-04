export default function handler(req, res) {
  const { input, unlocked } = req.query;

  // STEP 1: Password gate
  if (!unlocked) {
    if (input === "book") {
      return res.status(200).json({
        unlocked: true,
        output: `> access granted
> available commands:
- page4.access.truth
- help`
      });
    }

    return res.status(200).json({
      unlocked: false,
      output: `> access denied`
    });
  }

  // STEP 2: After unlock
  if (input === "help") {
    return res.status(200).json({
      unlocked: true,
      output: `Available commands:
- page4.access.truth
- help`
    });
  }

  if (input === "page4.access.truth") {
    return res.status(200).json({
      unlocked: true,
      output: `> verifying Page 4...
> checksum: valid
> download link: https://your-site.vercel.app/realPage4.png`
    });
  }

  return res.status(200).json({
    unlocked: true,
    output: `> command not recognized`
  });
}
