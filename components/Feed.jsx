"use client";

import React, { useState } from "react";

const Feed = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  return (
    <div>
      <input
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Source"
        required
        className="form_input"
      />
      <input
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Source"
        required
        className="form_input"
      />
    </div>
  );
};

export default Feed;
