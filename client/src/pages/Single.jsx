import React from 'react';
import Edit from '../img/editar.png';
import Delete from '../img/borrar.png';
import {Link} from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/2350074/pexels-photo-2350074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="single" />
        <div className="user">
          <img src="https://images.pexels.com/photos/3376116/pexels-photo-3376116.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          <div className="info">
            <span>Paula</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque voluptates officia ad hic aspernatur rerum quaerat, tempora soluta nam sequi nulla dolor unde placeat incidunt enim tenetur accusantium inventore!.
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, beatae adipisci. Repellat maxime ad doloremque, ab tenetur quas veritatis cumque, officiis eveniet modi, at eum enim eligendi. Quisquam, eum voluptatum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ut aperiam nobis doloribus iure, atque laudantium. Corporis deserunt, atque molestiae voluptatum aliquid odit praesentium sunt fugiat. Suscipit ullam vitae quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rerum eos ratione ea obcaecati quos, magni voluptates architecto unde ut saepe aut enim laudantium labore dolorum nihil ab quam sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Alias, iusto vel ratione repudiandae dolorum perspiciatis pariatur autem, impedit provident dignissimos ea eos tempore ipsum. Officiis ullam eligendi nostrum. Temporibus, voluptas.</p>
      </div>
     <Menu />
    </div>
  );
};

export default Single;
