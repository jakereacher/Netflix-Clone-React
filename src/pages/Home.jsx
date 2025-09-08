import React from "react";
import Footer from "../components/Footer";
import TitleCard from "../components/home/TitleCard";
import MediaList from "../components/home/MediaList";
import { useUser } from "../context/UserContext";
import Landing from "../components/Landing";

const Home = () => {
  const { user } = useUser();
  return (
    <div>
      {user ? (
        <>
          {" "}
          <TitleCard />
          <MediaList />
          <div className="px-14 lg:px-36 ">
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Landing />
        </>
      )}
    </div>
  );
};

export default Home;
