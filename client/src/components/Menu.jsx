import React from 'react'

const Menu = () => {

 const posts = [
   {
     id: 1,
     title: 'Exploring the Mountains',
     desc: 'A thrilling adventure through the Rocky Mountains. Hike the trails, experience the breathtaking views, and immerse yourself in nature.',
     img: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=400',
   },
   {
     id: 2,
     title: 'Gourmet Food Tour',
     desc: 'Join us on a culinary journey through the finest restaurants and hidden gems of the city. Taste exquisite dishes and learn about the art of gourmet cooking.',
     img: 'https://images.pexels.com/photos/5710204/pexels-photo-5710204.jpeg?auto=compress&cs=tinysrgb&w=400',
   },
   {
     id: 3,
     title: 'Urban Design Secrets',
     desc: "Discover the secrets of urban design and architecture. Explore the city's landmarks and learn about the principles that shape our urban spaces.",
     img: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=400',
   },
   {
     id: 4,
     title: 'Desert Safari Adventure',
     desc: 'Experience the thrill of a desert safari. Ride the dunes, witness the stunning sunset, and enjoy a traditional Bedouin dinner under the stars.',
     img: 'https://images.pexels.com/photos/53537/caravan-desert-safari-dune-53537.jpeg?auto=compress&cs=tinysrgb&w=400',
   },
   {
     id: 5,
     title: 'Tropical Paradise Getaway',
     desc: "Escape to a tropical paradise. Relax on pristine beaches, swim in crystal-clear waters, and indulge in the island's vibrant culture and cuisine.",
     img: 'https://images.pexels.com/photos/20845211/pexels-photo-20845211/free-photo-of-mar-oceano-costa-orilla-del-mar.jpeg?auto=compress&cs=tinysrgb&w=400',
   },
   {
     id: 6,
     title: 'Creative Design Workshop',
     desc: 'Unleash your creativity in our design workshop. Learn new techniques, get inspired by expert designers, and create your own unique projects.',
     img: 'https://images.pexels.com/photos/3811074/pexels-photo-3811074.jpeg?auto=compress&cs=tinysrgb&w=400',
   },
 ];





  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
     {posts.map(post=>(
        <div className="post" key={post.id}>
        <img src={post.img} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.desc}</p>
        <button>Read more</button>
        </div>
     ))}
    </div>
  )
}

export default Menu