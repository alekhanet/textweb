import renderToString from "next-mdx-remote/render-to-string";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { content } = req.body;

    try {
      const result = await renderToString(content);

      res.status(200).send({ result });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
  } else {
    res.status(404).send({});
  }
}
