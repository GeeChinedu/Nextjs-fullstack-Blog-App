import { addPost, deletePost } from "@/lib/action";

const ServerActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="desc" name="desc"></input>
        <input type="text" placeholder="userId" name="userId"></input>
        <input type="text" placeholder="slug" name="slug"></input>
        <button>GetPosts</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete Post</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
