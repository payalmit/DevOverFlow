import Link from "next/link";
import React from "react";

const Lists = () => {
  return (
    <div>
      <h1>Project Lists</h1>
      <ul>
        <li>
          <Link href="/projects/{jobit}">Jobit</Link>
        </li>
        <li>
          <Link href="/projects/redhat">Redhat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Lists;
