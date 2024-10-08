import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

export default function Home() {
  return (
    <div>
      <Main/>
      <Row  rowID='1' title='UPComing' fetchURL = {requests.requestUpcoming} />
      <Row  rowID='2' title='Popular' fetchURL = {requests.requestPopular} />
      <Row  rowID='3' title='Trending' fetchURL = {requests.requestTrending} />
      <Row  rowID='4' title='Top Related' fetchURL = {requests.requestTopRated} />
      <Row  rowID='5' title='Now Playing' fetchURL = {requests.requestHorror} />
    </div>
  )
}