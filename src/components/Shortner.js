import { useState, useEffect } from "react";

export default function Shortner() {
  const [items, setItems] = useState({ ok: true });
  const [url, seturl] = useState("");
  const [count, setCount] = useState(0);

  async function HandleSubmit(event) {
    setCount(2);

    event.preventDefault();
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    console.log(res);
    const resJson = await res.json();
    const data = await resJson;
    setItems(data);

    setCount(1);
  }

  function Showurl() {
    if (count === 1) {
      return <h1>your shortened url is {items.result.full_short_link}</h1>;
    }
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>
          Enter Vote difference:
          <input
            type="text"
            value={url}
            onChange={(e) => seturl(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      {count === 2 ? <h1>loading</h1> : <></>}
      {items.ok ? (
        <Showurl myprops={count} />
      ) : (
        <h1>URL Not allowed or invalid URL</h1>
      )}
    </div>
  );
}
