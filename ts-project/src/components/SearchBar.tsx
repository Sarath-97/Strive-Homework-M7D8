import { useEffect, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

interface FuntionalCompontentProps {
  title: string;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
}
const SearchBar = ({ title }: FuntionalCompontentProps) => {
  const [song, setSong] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
      );
      let songs = await response.json();
      setSong(songs);
      console.log(songs);
    };
    fetchData();
  }, []);

  return (
    <Form className="d-flex justify-content-center mt-5" inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;
