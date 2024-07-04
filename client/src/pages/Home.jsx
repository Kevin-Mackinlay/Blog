import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Exploring the Mountains',
  //     desc: 'A thrilling adventure through the Rocky Mountains. Hike the trails, experience the breathtaking views, and immerse yourself in nature.',
  //     img: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=400',
  //   },
  //   {
  //     id: 2,
  //     title: 'Gourmet Food Tour',
  //     desc: 'Join us on a culinary journey through the finest restaurants and hidden gems of the city. Taste exquisite dishes and learn about the art of gourmet cooking.',
  //     img: 'https://images.pexels.com/photos/5710204/pexels-photo-5710204.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   },
  //   {
  //     id: 3,
  //     title: 'Urban Design Secrets',
  //     desc: "Discover the secrets of urban design and architecture. Explore the city's landmarks and learn about the principles that shape our urban spaces.",
  //     img: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   },
  //   {
  //     id: 4,
  //     title: 'Desert Safari Adventure',
  //     desc: 'Experience the thrill of a desert safari. Ride the dunes, witness the stunning sunset, and enjoy a traditional Bedouin dinner under the stars.',
  //     img: 'https://images.pexels.com/photos/53537/caravan-desert-safari-dune-53537.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   },
  //   {
  //     id: 5,
  //     title: 'Tropical Paradise Getaway',
  //     desc: "Escape to a tropical paradise. Relax on pristine beaches, swim in crystal-clear waters, and indulge in the island's vibrant culture and cuisine.",
  //     img: 'https://images.pexels.com/photos/20845211/pexels-photo-20845211/free-photo-of-mar-oceano-costa-orilla-del-mar.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   },
  //   {
  //     id: 6,
  //     title: 'Creative Design Workshop',
  //     desc: 'Unleash your creativity in our design workshop. Learn new techniques, get inspired by expert designers, and create your own unique projects.',
  //     img: 'https://images.pexels.com/photos/3811074/pexels-photo-3811074.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   },
  // ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
