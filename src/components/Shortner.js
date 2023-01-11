import { useState, useEffect } from "react";

export default function Shortner() {
  const [items, setItems] = useState({ ok: true });
  const [url, seturl] = useState("");
  const [count, setCount] = useState(0);
  const [shrturls, setshrturls] = useState({});

  const Showlist = () => {
    return Object.keys(shrturls)
      .reverse()
      .map((key, i) => (
        <p key={1 / i}>
          Short url for {key} is {shrturls[key]}
        </p>
      ));
  };

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
      let temp = shrturls;
      temp[items.result.original_link] = items.result.full_short_link;
      setshrturls((temp) => temp);
      return (
        <h1>
          your shortened url for{" "}
          <span style={{ color: "red" }}>{items.result.original_link}</span> is{" "}
          <span style={{ color: "blue" }}>{items.result.full_short_link}</span>
        </h1>
      );
    }
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>
          Enter URL:
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

      <div>
        <Showlist />
      </div>
    </div>
  );
}
