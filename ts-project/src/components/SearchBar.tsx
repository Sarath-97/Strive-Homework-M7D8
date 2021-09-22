import { useEffect, useState } from "react";

interface FunctionalCompontentProps {
  title: string;
}

interface Song {
  id: number;
  title: string;
  duration: string;
}
const SearchBar = ({ title }: FunctionalCompontentProps) => {
  const [song, setSong] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
      );
      let songs = await response.json();
      setSong(songs.data);
      console.log(songs);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>FUNCTIONAL COMPONENT!</h1>
      <h2>{title}</h2>
      <ul>
        {song.map(song => (
          <>
            <li>{song.title}</li>
            <li>{song.duration}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
