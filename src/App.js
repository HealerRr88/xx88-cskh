import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Router from './routes/router';
import './App.css';
import { useEffect } from "react";

function App() {

  //redirect to another page
  useEffect(() => {
    window.location.href = 'https://secure.livechatinc.com/licence/19230099/v2/open_chat.cgi';
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
