import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import TopBar from "./../../components/topbar/TopBar";

export default function Single() {
  return (
    <>
    <TopBar/>
    <div className="single">
      
      <SinglePost/>
      <Sidebar />
    </div>
    </>
  );
}
