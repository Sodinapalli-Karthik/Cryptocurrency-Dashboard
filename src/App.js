import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Logo from "./Asessts/download.png";
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';

const App = () => {

  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br to-[#ffffff]">
      <div className="flex-1 flex bg-[#ffff] h-48 p-4">
    <img src={Logo} alt="logo" style={{
            alignItems: 'left',justifyContent:"start",
            width: "130px",
            height: "30px"
          }} />
    </div>
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              {/* <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;