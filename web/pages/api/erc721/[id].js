const metadata = {
  1: {
    attributes: [
      {
        trait_type: "Shape",
        value: "Square",
      },
      {
        trait_type: "Mood",
        value: "peek",
      },
    ],
    description: "A ragdool cat",
    image: "https://i.imgur.com/HCACObP.jpeg",
    name: "Ragdoll Cat",
  },
};

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}