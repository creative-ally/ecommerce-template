import React from 'react';

const AddBlogs = () => {
    const handleAddBlogs = (event) => {
        event.preventDefault();
        const date = event.target.date.value;
        const title = event.target.title.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
    
        const blogs = {
          date,
          description,
          title,
          image,
        };
        // sending data to the server
        fetch("http://localhost:5000/api/blog", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(blogs),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("success", data);
            alert("Blog added successfully");
            event.target.reset();
          });
      };
    return (
        <div className='my-6'>
            <form onSubmit={handleAddBlogs}>
        <div className="card-body rounded-lg bg-primary w-96 mx-auto">
          {" "}
          <h2 className="text-xl font-bold text-stone-900 text-center ">Please add Blogs</h2>
          <input
            className="p-2 m-2 rounded w-80 mx-auto "
            type="text"
            name="date"
            placeholder="Enter Date"
            required
          />
          <input
            className="p-2 m-2 rounded w-80 mx-auto"
            type="text"
            name="title"
            placeholder="Enter Title"
            required
          />
          <input
            className="p-2 m-2 rounded w-80 mx-auto"
            type="text"
            name="description"
            placeholder="Enter Description"
            required
          />
          <input
            className="p-2 m-2 rounded w-80 mx-auto"
            type="url"
            name="image"
            placeholder="Image url"
            required
          />
          <button className="btn p-2 m-2 text-white " type="submit">
            Add Blogs
          </button>
        </div>
      </form>
        </div>
    );
};
export default AddBlogs;