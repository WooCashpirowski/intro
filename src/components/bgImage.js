import { useState } from "react";
import { client } from "../client";

const BgImage = () => {
  const [bg, setBg] = useState("");

  client
    .getEntries({
      content_type: "bg",
    })
    .then((res) => {
      const {
        background: {
          fields: {
            file: { url: image },
          },
        },
      } = res.items[0].fields;
      setBg(image);
    })
    .catch(console.error);
  return bg;
};

export default BgImage;
