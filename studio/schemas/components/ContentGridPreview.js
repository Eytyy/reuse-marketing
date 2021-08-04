/** @jsx jsx */
import { useEffect, useState } from "react";
import client from "part:@sanity/base/client";
import { css, jsx } from "@emotion/core";

function getContentTitles(refs) {
  const query = "*[_id in $refs]{title, _id, __type}";
  const params = { refs: refs };
  return client.fetch(query, params).then((result) => result);
}

const ContentGridPreview = ({ value }) => {
  const [titles, setTitles] = useState([]);

  async function fetchTitles() {
    const refs = value.content.map(({ _ref }) => _ref);
    const titles = await getContentTitles(refs);
    setTitles(titles);
  }

  useEffect(() => {
    fetchTitles();
  }, [value]);

  if (titles.length === 0) return `Grid is empty.`;
  else {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 10px;
          width: 70%;
        `}
      >
        {titles.map(({ title, _id, _type }) => (
          <div
            css={css`
              padding: 10px;
              box-shadow: 0px 2px 5px -2px #aaa;
            `}
            key={_id}
          >
            <div>
              <strong>{_type}</strong>
            </div>
            <div>
              {title.length > 50 ? `${title.substring(0, 30)}...` : title}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ContentGridPreview;
