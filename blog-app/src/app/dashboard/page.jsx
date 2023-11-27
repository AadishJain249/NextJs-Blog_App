"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import "./dashboard.css";
function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts`,
    fetcher
  );
  // console.log(data);
  if(data===undefined)
  {
    return <p>Loading...</p>
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  else if (session.status === "loading") {
    return (
      <>
        <h1 style={{ fontWeight: "100", textAlign: "center" }}>Loading</h1>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }
  else if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  } else if (session.status === "authenticated") {
    return (
      <div className="dash_container">
        <div className="dash_posts">
          {isLoading
            ? "loading"
            : data?.post.map((post) => (
                <div className="dash_post" key={post._id}>
                  <div className="dash_imgContainer">
                    <img src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className="dash_postTitle">{post.title}</h2>
                  <span
                    className="dash_delete"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="dash_new" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className="dash_input" />
          <input type="text" placeholder="Desc" className="dash_input" />
          <input type="text" placeholder="Image" className="dash_input" />
          <textarea
            placeholder="Content"
            className="dash_textArea"
            cols="30"
            rows="10"
          ></textarea>
          <button className="dash_button">Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
