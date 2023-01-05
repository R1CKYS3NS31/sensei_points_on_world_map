import { csv } from "d3";
import { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv";
// "https://gist.githubusercontent.com/DERRICKSONNDAMBUKI/f71166cd23e0febe4e254dc15d9f8be5/raw/2539e6f40ce1ef50ca830f578a9e53032868a2eb/senseiworldcities.csv" // too large

export const useCities = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((cities) => setData(cities));
  }, []);

  return data;
};
