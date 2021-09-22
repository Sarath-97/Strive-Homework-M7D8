import { useEffect, useState } from "react";

interface FuntionalCompontentProps {
  title: string;
}

interface Song {
  id: number;
  album: string;
  artist: string;
}
const SearchBar = ({ title }: FuntionalCompontentProps) => {
  const [data, setSong] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem");
      let songs = await response.json();
      setSong(songs);
      console.log(songs);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>FUNCTIONAL COMPONENT!</h1>
      <h2>{title}</h2>
      <ul>
        {data.map((song) => (
          <>
            <li>{song.album}</li>
            <li>{song.artist}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
