import './Home.css'
import React from 'react'
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import SideBar from '../../SideBar/SideBar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header/>
      <div className='home'> 
      <Posts posts={posts} />
      <SideBar/>
    </div>
    </>
  )
}

export default Home
